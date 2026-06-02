/* Infinite Parallax Scroll — Typographic Stack
   - Vertical scroll, continuous lerp with snap-on-idle.
   - Each slide: HUGE outline number as backdrop + image accent + title overlay.
   - Image accent parallaxes on X (lateral drift); backdrop number drifts on Y
     in the opposite direction for layered depth.
   - Bottom progress bar: 5 dots + fill that grows continuously with scroll.
   Project data is read from `.project-source-list` in the HTML so any backend
   (WordPress, Next.js, Astro, etc.) can drive the slider just by emitting the
   same markup. Activated only when the wrapper section and source list exist.
*/
(function () {
   "use strict";

   const stage = document.querySelector(".slideshow");
   const projectList = stage ? stage.querySelector(".project-list") : null;
   const progress = stage ? stage.querySelector(".stack-progress") : null;
   const progressFill = progress
      ? progress.querySelector(".stack-progress-fill")
      : null;
   const sourceList = stage ? stage.querySelector(".project-source-list") : null;
   if (!stage || !projectList || !progress || !progressFill || !sourceList) return;

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
      SNAP_IDLE_MS: 120,
      WHEEL_LOCK_MS: 400,
      WHEEL_DEAD_ZONE: 5,
   };

   let wheelLockUntil = 0;

   const state = {
      currentY: 0,
      targetY: 0,
      isDragging: false,
      projects: new Map(),
      projectHeight: window.innerHeight,
      isSnapping: false,
      snapStart: { time: 0, y: 0, target: 0 },
      lastScrollTime: Date.now(),
      dragStart: { y: 0, scrollY: 0 },
   };

   const lerp = (s, e, f) => s + (e - s) * f;
   const wrapIndex = (i, len) => ((Math.abs(i) % len) + len) % len;
   const getData = (index) => projectData[wrapIndex(index, projectData.length)];
   const formatNum = (index) =>
      (wrapIndex(index, projectData.length) + 1).toString().padStart(2, "0");

   const createImgParallaxX = (img, span) => {
      let current = 0;
      return {
         update: (scroll, index) => {
            const target = (-scroll - index * span) * 0.18;
            current = lerp(current, target, 0.1);
            if (Math.abs(current - target) > 0.01) {
               img.style.transform = `translateX(${current}px) scale(1.5)`;
            }
         },
      };
   };

   const createNumParallaxY = (el, span) => {
      let current = 0;
      return {
         update: (scroll, index) => {
            const target = (-scroll - index * span) * -0.18;
            current = lerp(current, target, 0.1);
            if (Math.abs(current - target) > 0.01) {
               el.style.transform = `translate(-50%, calc(-50% + ${current}px))`;
            }
         },
      };
   };

   const createMain = (index) => {
      if (state.projects.has(index)) return;
      const data = getData(index);
      const num = formatNum(index);

      const el = document.createElement("a");
      el.className = "stack-project";
      el.href = data.link;
      el.setAttribute("aria-label", `View project: ${data.title}`);
      el.innerHTML = `
         <span class="stack-num-bg" aria-hidden="true">${num}</span>
         <div class="stack-frame">
            <img src="${data.image}" alt="${data.title}" />
         </div>
         <div class="stack-overlay">
            <h2 class="stack-title">${data.title}</h2>
            <div class="stack-info">
               <span class="stack-cat">${data.category}</span>
               <span class="stack-year">${data.year}</span>
            </div>
         </div>
      `;
      projectList.appendChild(el);
      state.projects.set(index, {
         el,
         imgParallax: createImgParallaxX(
            el.querySelector("img"),
            state.projectHeight
         ),
         numParallax: createNumParallaxY(
            el.querySelector(".stack-num-bg"),
            state.projectHeight
         ),
      });
   };

   for (let i = -config.BUFFER_SIZE; i <= config.BUFFER_SIZE; i++) {
      createMain(i);
   }

   /* Progress bar — 5 dots evenly distributed */
   const progressDots = [];
   for (let i = 0; i < projectData.length; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "stack-progress-dot";
      dot.dataset.index = String(i);
      dot.dataset.num = formatNum(i);
      dot.setAttribute("aria-label", `Go to project ${formatNum(i)}`);
      dot.style.left = `${(i / (projectData.length - 1)) * 100}%`;
      progress.appendChild(dot);
      progressDots.push(dot);
   }

   const syncElements = () => {
      const current = Math.round(-state.targetY / state.projectHeight);
      const min = current - config.BUFFER_SIZE;
      const max = current + config.BUFFER_SIZE;

      for (let i = min; i <= max; i++) createMain(i);

      state.projects.forEach((item, index) => {
         if (index < min || index > max) {
            item.el.remove();
            state.projects.delete(index);
         }
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
      state.projects.forEach((item, index) => {
         const y = index * state.projectHeight + state.currentY;
         item.el.style.transform = `translateY(${y}px)`;
         item.imgParallax.update(state.currentY, index);
         item.numParallax.update(state.currentY, index);
      });

      const fractional = -state.currentY / state.projectHeight;
      const wrapped =
         ((fractional % projectData.length) + projectData.length) %
         projectData.length;
      const fillPct = (wrapped / (projectData.length - 1)) * 100;
      progressFill.style.width = `${Math.min(Math.max(fillPct, 0), 100)}%`;

      const activeIndex = wrapIndex(
         Math.round(-state.currentY / state.projectHeight),
         projectData.length
      );
      progressDots.forEach((dot, i) => {
         dot.classList.toggle("is-active", i === activeIndex);
      });
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

   progress.addEventListener("click", (e) => {
      const btn = e.target.closest(".stack-progress-dot");
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

   window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetY / state.projectHeight) + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetY / state.projectHeight) - 1);
      }
   });

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
            item.imgParallax = createImgParallaxX(
               item.el.querySelector("img"),
               state.projectHeight
            );
            item.numParallax = createNumParallaxY(
               item.el.querySelector(".stack-num-bg"),
               state.projectHeight
            );
         });
      }, 200);
   });

   animate();
})();
