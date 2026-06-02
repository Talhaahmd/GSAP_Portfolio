/* Infinite Parallax Scroll — Horizontal Cinema (Slideshow-derived)
   - Wheel/swipe drives X axis; vertical wheel maps to horizontal navigation.
   - Image inside each slide parallaxes on X.
   - Side rail = vertical thumbnail column synced via cross-axis ratio.
   - Click on rail item navigates to that project.
   Project data is read from `.project-source-list` in the HTML so any backend
   (WordPress, Next.js, Astro, etc.) can drive the slider just by emitting the
   same markup. Activated only when the wrapper section and source list exist.
*/
(function () {
   "use strict";

   const stage = document.querySelector(".slideshow");
   const projectList = stage ? stage.querySelector(".project-list") : null;
   const railTrack = stage ? stage.querySelector(".rail-track") : null;
   const sourceList = stage ? stage.querySelector(".project-source-list") : null;
   if (!stage || !projectList || !railTrack || !sourceList) return;

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
      WHEEL_LOCK_MS: 400,
      WHEEL_DEAD_ZONE: 5,
   };

   let wheelLockUntil = 0;

   const state = {
      currentX: 0,
      targetX: 0,
      isDragging: false,
      projects: new Map(),
      rail: new Map(),
      projectWidth: window.innerWidth,
      railItemHeight: 60,
      isSnapping: false,
      snapStart: { time: 0, x: 0, target: 0 },
      lastScrollTime: Date.now(),
      dragStart: { x: 0, scrollX: 0 },
   };

   const lerp = (s, e, f) => s + (e - s) * f;

   const wrapIndex = (i, len) =>
      ((Math.abs(i) % len) + len) % len;

   const getData = (index) => projectData[wrapIndex(index, projectData.length)];

   const formatNum = (index) =>
      (wrapIndex(index, projectData.length) + 1).toString().padStart(2, "0");

   const totalLabel = projectData.length.toString().padStart(2, "0");

   const createParallaxX = (img, span) => {
      let current = 0;
      return {
         update: (scroll, index) => {
            const target = (-scroll - index * span) * 0.2;
            current = lerp(current, target, 0.1);
            if (Math.abs(current - target) > 0.01) {
               img.style.transform = `translateX(${current}px) scale(1.5)`;
            }
         },
      };
   };

   const createMain = (index) => {
      if (state.projects.has(index)) return;
      const data = getData(index);
      const num = formatNum(index);

      const el = document.createElement("a");
      el.className = "project";
      el.href = data.link;
      el.setAttribute("aria-label", `View project: ${data.title}`);
      el.innerHTML = `
         <div class="project-frame">
            <img src="${data.image}" alt="${data.title}" />
         </div>
         <div class="project-meta">
            <div class="project-meta-top">
               <span class="project-num">${num} / ${totalLabel}</span>
            </div>
            <h2 class="project-title">${data.title}</h2>
            <div class="project-meta-bottom">
               <span class="project-cat">${data.category}</span>
               <span class="project-year">${data.year}</span>
            </div>
         </div>
      `;
      projectList.appendChild(el);
      state.projects.set(index, {
         el,
         parallax: createParallaxX(el.querySelector("img"), state.projectWidth),
      });
   };

   const createRail = (index) => {
      if (state.rail.has(index)) return;
      const data = getData(index);
      const num = formatNum(index);

      const el = document.createElement("button");
      el.type = "button";
      el.className = "rail-item";
      el.dataset.index = String(index);
      el.setAttribute("aria-label", `Go to project ${num} ${data.title}`);
      el.innerHTML = `
         <span class="rail-thumb"><img src="${data.image}" alt="" /></span>
         <span class="rail-index">${num}</span>
      `;
      railTrack.appendChild(el);
      state.rail.set(index, { el });
   };

   for (let i = -config.BUFFER_SIZE; i <= config.BUFFER_SIZE; i++) {
      createMain(i);
      createRail(i);
   }

   const syncElements = () => {
      const current = Math.round(-state.targetX / state.projectWidth);
      const min = current - config.BUFFER_SIZE;
      const max = current + config.BUFFER_SIZE;

      for (let i = min; i <= max; i++) {
         createMain(i);
         createRail(i);
      }

      [state.projects, state.rail].forEach((map) => {
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
      state.snapStart.x = state.targetX;
      state.snapStart.target =
         -Math.round(-state.targetX / state.projectWidth) * state.projectWidth;
   };

   const updateSnap = () => {
      const progress = Math.min(
         (Date.now() - state.snapStart.time) / config.SNAP_DURATION,
         1
      );
      const eased = 1 - Math.pow(1 - progress, 3);
      state.targetX =
         state.snapStart.x + (state.snapStart.target - state.snapStart.x) * eased;
      if (progress >= 1) state.isSnapping = false;
   };

   const updatePositions = () => {
      const railY =
         (state.currentX * state.railItemHeight) / state.projectWidth;
      const activeIndex = Math.round(-state.currentX / state.projectWidth);

      state.projects.forEach((item, index) => {
         const x = index * state.projectWidth + state.currentX;
         item.el.style.transform = `translateX(${x}px)`;
         item.parallax.update(state.currentX, index);
      });

      state.rail.forEach((item, index) => {
         const y = index * state.railItemHeight + railY;
         item.el.style.transform = `translateY(${y}px)`;
         item.el.classList.toggle("is-active", index === activeIndex);
      });
   };

   const animate = () => {
      const now = Date.now();

      if (
         !state.isSnapping &&
         !state.isDragging &&
         now - state.lastScrollTime > 100
      ) {
         const snapPoint =
            -Math.round(-state.targetX / state.projectWidth) *
            state.projectWidth;
         if (Math.abs(state.targetX - snapPoint) > 1) snapToProject();
      }

      if (state.isSnapping) updateSnap();
      if (!state.isDragging) {
         state.currentX +=
            (state.targetX - state.currentX) * config.LERP_FACTOR;
      }

      syncElements();
      updatePositions();
      requestAnimationFrame(animate);
   };

   const navigateTo = (index) => {
      state.isSnapping = true;
      state.snapStart.time = Date.now();
      state.snapStart.x = state.targetX;
      state.snapStart.target = -index * state.projectWidth;
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
            Math.round(-state.targetX / state.projectWidth) + dir
         );
      },
      { passive: false }
   );

   window.addEventListener("touchstart", (e) => {
      state.isDragging = true;
      state.isSnapping = false;
      state.dragStart = {
         x: e.touches[0].clientX,
         scrollX: state.targetX,
      };
      state.lastScrollTime = Date.now();
   });

   window.addEventListener("touchmove", (e) => {
      if (!state.isDragging) return;
      state.targetX =
         state.dragStart.scrollX +
         (e.touches[0].clientX - state.dragStart.x) * 1.5;
      state.lastScrollTime = Date.now();
   });

   window.addEventListener("touchend", () => {
      state.isDragging = false;
   });

   railTrack.addEventListener("click", (e) => {
      const btn = e.target.closest(".rail-item");
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (Number.isNaN(idx)) return;
      navigateTo(idx);
   });

   window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetX / state.projectWidth) + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetX / state.projectWidth) - 1);
      }
   });

   let resizeTimer = null;
   window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
         const oldW = state.projectWidth;
         const newW = window.innerWidth;
         if (newW === oldW) return;
         const ratio = newW / oldW;
         state.currentX *= ratio;
         state.targetX *= ratio;
         state.projectWidth = newW;
         state.projects.forEach((item) => {
            item.parallax = createParallaxX(
               item.el.querySelector("img"),
               state.projectWidth
            );
         });
      }, 200);
   });

   animate();
})();
