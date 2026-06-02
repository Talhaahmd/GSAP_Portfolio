/* Slideshow — Vista (Slideshow-faithful: vertical infinite parallax + central minimap)
   - Vertical scroll, continuous lerp with snap-on-idle (no discrete wheel lock).
   - Three rotating buffer maps:
       projects     → full-screen image slides
       minimap      → small image strip inside the central minimap card
       minimapInfo  → text rows (number/title · category/year) inside the same card
   - Minimap moves proportionally to main scroll via ratio
     `minimapHeight / projectHeight`, keeping both axes in sync.
   - Each main slide is rendered as <a href="..."> for clickable navigation.
   Project data is read from `.project-source-list` in the HTML so any backend
   (WordPress, Next.js, Astro, etc.) can drive the slider just by emitting the
   same markup. Activated only when wrapper + source list both exist.
*/
(function () {
   "use strict";

   const stage = document.querySelector(".slideshow");
   const projectList = stage ? stage.querySelector(".project-list") : null;
   const minimapImgPreview = stage
      ? stage.querySelector(".minimap-img-preview")
      : null;
   const minimapInfoList = stage
      ? stage.querySelector(".minimap-info-list")
      : null;
   const vistaNav = stage ? stage.querySelector(".vista-nav") : null;
   const vistaNextBtn = stage ? stage.querySelector(".vista-next") : null;
   const vistaPrevBtn = stage ? stage.querySelector(".vista-prev") : null;
   const sourceList = stage ? stage.querySelector(".project-source-list") : null;
   if (
      !stage ||
      !projectList ||
      !minimapImgPreview ||
      !minimapInfoList ||
      !vistaNav ||
      !sourceList
   )
      return;

   const readText = (el, selector) => {
      const node = el.querySelector(selector);
      return node ? node.textContent.trim() : "";
   };

   const projectData = Array.from(
      sourceList.querySelectorAll(".project-source")
   ).map((article) => ({
      title: readText(article, ".project-source-title"),
      image: article.dataset.image || "",
      category: readText(article, ".project-source-category"),
      year: readText(article, ".project-source-year"),
      link: article.dataset.link || "#",
   }));
   if (projectData.length === 0) return;

   const config = {
      LERP_FACTOR: 0.05,
      BUFFER_SIZE: 5,
      SNAP_DURATION: 500,
      SNAP_IDLE_MS: 100,
      WHEEL_LOCK_MS: 400,
      WHEEL_DEAD_ZONE: 5,
   };

   let wheelLockUntil = 0;

   const state = {
      currentY: 0,
      targetY: 0,
      isDragging: false,
      projects: new Map(),
      minimap: new Map(),
      minimapInfo: new Map(),
      projectHeight: window.innerHeight,
      minimapHeight: 250,
      isSnapping: false,
      snapStart: { time: 0, y: 0, target: 0 },
      lastScrollTime: Date.now(),
      dragStart: { y: 0, scrollY: 0 },
   };

   const lerp = (s, e, f) => s + (e - s) * f;
   const wrapIndex = (i, len) => ((Math.abs(i) % len) + len) % len;
   const getData = (i) => projectData[wrapIndex(i, projectData.length)];
   const formatNum = (i) =>
      (wrapIndex(i, projectData.length) + 1).toString().padStart(2, "0");

   const createParallax = (img, span) => {
      let current = 0;
      return {
         update: (scroll, index) => {
            const target = (-scroll - index * span) * 0.2;
            current = lerp(current, target, 0.1);
            if (Math.abs(current - target) > 0.01) {
               img.style.transform = `translateY(${current}px) scale(1.5)`;
            }
         },
      };
   };

   const createNode = (index, type) => {
      const maps = {
         main: state.projects,
         minimap: state.minimap,
         info: state.minimapInfo,
      };
      if (maps[type].has(index)) return;
      const data = getData(index);
      const num = formatNum(index);

      if (type === "main") {
         const el = document.createElement("a");
         el.className = "vista-project";
         el.href = data.link;
         el.setAttribute("aria-label", `View project: ${data.title}`);
         el.innerHTML = `<img src="${data.image}" alt="${data.title}" />`;
         projectList.appendChild(el);
         state.projects.set(index, {
            el,
            parallax: createParallax(
               el.querySelector("img"),
               state.projectHeight
            ),
         });
      } else if (type === "minimap") {
         const el = document.createElement("div");
         el.className = "minimap-img-item";
         el.innerHTML = `<img src="${data.image}" alt="" />`;
         minimapImgPreview.appendChild(el);
         state.minimap.set(index, {
            el,
            parallax: createParallax(
               el.querySelector("img"),
               state.minimapHeight
            ),
         });
      } else {
         const el = document.createElement("a");
         el.className = "minimap-item-info";
         el.href = data.link;
         el.setAttribute("aria-label", `View project: ${data.title}`);
         el.innerHTML = `
            <div class="minimap-item-info-row">
               <p>${num}</p>
               <p>${data.title}</p>
            </div>
            <div class="minimap-item-info-row">
               <p>${data.category}</p>
               <p>${data.year}</p>
            </div>
         `;
         minimapInfoList.appendChild(el);
         state.minimapInfo.set(index, { el });
      }
   };

   for (let i = -config.BUFFER_SIZE; i <= config.BUFFER_SIZE; i++) {
      createNode(i, "main");
      createNode(i, "minimap");
      createNode(i, "info");
   }

   /* Bottom-center pagination dots — fixed 5, clickable jump */
   const navDots = [];
   for (let i = 0; i < projectData.length; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "vista-nav-dot";
      dot.dataset.index = String(i);
      dot.setAttribute(
         "aria-label",
         `Go to project ${formatNum(i)} ${getData(i).title}`
      );
      vistaNav.appendChild(dot);
      navDots.push(dot);
   }

   const syncElements = () => {
      const current = Math.round(-state.targetY / state.projectHeight);
      const min = current - config.BUFFER_SIZE;
      const max = current + config.BUFFER_SIZE;

      for (let i = min; i <= max; i++) {
         createNode(i, "main");
         createNode(i, "minimap");
         createNode(i, "info");
      }

      [state.projects, state.minimap, state.minimapInfo].forEach((map) => {
         map.forEach((item, index) => {
            if (index < min || index > max) {
               item.el.remove();
               map.delete(index);
            }
         });
      });
   };

   const snapToProject = () => {
      state.isSnapping = true;
      state.snapStart.time = Date.now();
      state.snapStart.y = state.targetY;
      state.snapStart.target =
         -Math.round(-state.targetY / state.projectHeight) * state.projectHeight;
   };

   const updateSnap = () => {
      const p = Math.min(
         (Date.now() - state.snapStart.time) / config.SNAP_DURATION,
         1
      );
      const eased = 1 - Math.pow(1 - p, 3);
      state.targetY =
         state.snapStart.y + (state.snapStart.target - state.snapStart.y) * eased;
      if (p >= 1) state.isSnapping = false;
   };

   const updatePositions = () => {
      const minimapY =
         (state.currentY * state.minimapHeight) / state.projectHeight;

      state.projects.forEach((item, index) => {
         const y = index * state.projectHeight + state.currentY;
         item.el.style.transform = `translateY(${y}px)`;
         item.parallax.update(state.currentY, index);
      });

      state.minimap.forEach((item, index) => {
         const y = index * state.minimapHeight + minimapY;
         item.el.style.transform = `translateY(${y}px)`;
         item.parallax.update(minimapY, index);
      });

      state.minimapInfo.forEach((item, index) => {
         item.el.style.transform = `translateY(${
            index * state.minimapHeight + minimapY
         }px)`;
      });

      const activeIndex = wrapIndex(
         Math.round(-state.currentY / state.projectHeight),
         projectData.length
      );
      navDots.forEach((dot, i) =>
         dot.classList.toggle("is-active", i === activeIndex)
      );
   };

   const animate = () => {
      const now = Date.now();
      if (
         !state.isSnapping &&
         !state.isDragging &&
         now - state.lastScrollTime > config.SNAP_IDLE_MS
      ) {
         const sp =
            -Math.round(-state.targetY / state.projectHeight) *
            state.projectHeight;
         if (Math.abs(state.targetY - sp) > 1) snapToProject();
      }
      if (state.isSnapping) updateSnap();
      if (!state.isDragging) {
         state.currentY +=
            (state.targetY - state.currentY) * config.LERP_FACTOR;
      }
      syncElements();
      updatePositions();
      requestAnimationFrame(animate);
   };

   const navigateTo = (idx) => {
      state.isSnapping = true;
      state.snapStart.time = Date.now();
      state.snapStart.y = state.targetY;
      state.snapStart.target = -idx * state.projectHeight;
      state.lastScrollTime = Date.now();
   };

   window.addEventListener(
      "wheel",
      (e) => {
         e.preventDefault();
         state.lastScrollTime = Date.now();
         const raw =
            Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
         if (Math.abs(raw) < config.WHEEL_DEAD_ZONE) return;
         const now = Date.now();
         if (now < wheelLockUntil) return;
         wheelLockUntil = now + config.WHEEL_LOCK_MS;
         const dir = raw > 0 ? 1 : -1;
         navigateTo(
            Math.round(-state.targetY / state.projectHeight) + dir
         );
      },
      { passive: false }
   );

   window.addEventListener("touchstart", (e) => {
      state.isDragging = true;
      state.isSnapping = false;
      state.dragStart = { y: e.touches[0].clientY, scrollY: state.targetY };
      state.lastScrollTime = Date.now();
   });
   window.addEventListener("touchmove", (e) => {
      if (!state.isDragging) return;
      state.targetY =
         state.dragStart.scrollY +
         (e.touches[0].clientY - state.dragStart.y) * 1.5;
      state.lastScrollTime = Date.now();
   });
   window.addEventListener("touchend", () => {
      state.isDragging = false;
   });

   window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetY / state.projectHeight) + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetY / state.projectHeight) - 1);
      }
   });

   /* Click pagination dot — shortest-path navigation around the loop */
   vistaNav.addEventListener("click", (e) => {
      const btn = e.target.closest(".vista-nav-dot");
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (Number.isNaN(idx)) return;
      const cr = Math.round(-state.targetY / state.projectHeight);
      const wc = wrapIndex(cr, projectData.length);
      const diff = idx - wc;
      const altDiff =
         diff > 0 ? diff - projectData.length : diff + projectData.length;
      const useDiff = Math.abs(altDiff) < Math.abs(diff) ? altDiff : diff;
      navigateTo(cr + useDiff);
   });

   /* Side buttons — step one project forward / backward */
   if (vistaNextBtn) {
      vistaNextBtn.addEventListener("click", () => {
         navigateTo(Math.round(-state.targetY / state.projectHeight) + 1);
      });
   }
   if (vistaPrevBtn) {
      vistaPrevBtn.addEventListener("click", () => {
         navigateTo(Math.round(-state.targetY / state.projectHeight) - 1);
      });
   }

   let resizeTimer = null;
   window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
         const oldH = state.projectHeight;
         const newH = window.innerHeight;
         if (newH === oldH) return;
         const r = newH / oldH;
         state.currentY *= r;
         state.targetY *= r;
         state.projectHeight = newH;
         state.projects.forEach((item) => {
            item.parallax = createParallax(
               item.el.querySelector("img"),
               state.projectHeight
            );
         });
      }, 200);
   });

   animate();
})();
