/* Infinite Parallax Scroll — Editorial Split + Orbital
   - Vertical scroll, continuous lerp with snap-on-idle.
   - Each slide: image (left ~35%) + editorial text block (right ~65%).
   - Orbital minimap: 5 fixed dots arranged on a circle, rotating indicator
     points at the current project's angle. Clicking a dot navigates there.
   Project data is read from `.project-source-list` in the HTML so any backend
   (WordPress, Next.js, Astro, etc.) can drive the slider just by emitting the
   same markup. Activated only when the wrapper section and source list exist.
*/
(function () {
   "use strict";

   const stage = document.querySelector(".slideshow");
   const projectList = stage ? stage.querySelector(".project-list") : null;
   const orbital = stage ? stage.querySelector(".orbital") : null;
   const ring = orbital ? orbital.querySelector(".orbital-ring") : null;
   const indicator = orbital ? orbital.querySelector(".orbital-indicator") : null;
   const orbitalCurrent = orbital ? orbital.querySelector(".orbital-current") : null;
   const sourceList = stage ? stage.querySelector(".project-source-list") : null;
   if (!stage || !projectList || !orbital || !ring || !sourceList) return;

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
      description: readText(article, ".project-source-description"),
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
   const totalLabel = projectData.length.toString().padStart(2, "0");

   const createParallaxY = (img, span) => {
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

   const createMain = (index) => {
      if (state.projects.has(index)) return;
      const data = getData(index);
      const num = formatNum(index);

      const el = document.createElement("a");
      el.className = "split-project";
      el.href = data.link;
      el.setAttribute("aria-label", `View project: ${data.title}`);
      el.innerHTML = `
         <div class="split-frame">
            <img src="${data.image}" alt="${data.title}" />
         </div>
         <div class="split-meta">
            <span class="split-num">${num} — ${totalLabel}</span>
            <h2 class="split-title">${data.title}</h2>
            <div class="split-info">
               <span class="split-cat">${data.category}</span>
               <span class="split-year">${data.year}</span>
            </div>
            <p class="split-desc">${data.description}</p>
         </div>
      `;
      projectList.appendChild(el);
      state.projects.set(index, {
         el,
         parallax: createParallaxY(el.querySelector("img"), state.projectHeight),
      });
   };

   for (let i = -config.BUFFER_SIZE; i <= config.BUFFER_SIZE; i++) {
      createMain(i);
   }

   /* Orbital — 5 dots arranged on circle, indicator rotates with scroll */
   const ORBITAL_RADIUS = 50;
   const orbitalDots = [];
   for (let i = 0; i < projectData.length; i++) {
      const angle = (i / projectData.length) * 360 - 90;
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "orbital-dot";
      dot.dataset.index = String(i);
      dot.setAttribute("aria-label", `Go to project ${formatNum(i)}`);
      dot.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(${ORBITAL_RADIUS}px) rotate(${-angle}deg)`;
      ring.appendChild(dot);
      orbitalDots.push(dot);
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
         item.parallax.update(state.currentY, index);
      });

      const fractional = -state.currentY / state.projectHeight;
      const wrapped =
         ((fractional % projectData.length) + projectData.length) %
         projectData.length;
      const angle = (wrapped / projectData.length) * 360 - 90;
      if (indicator) {
         indicator.style.transform = `translateY(-50%) rotate(${angle}deg)`;
      }

      const activeIndex = wrapIndex(
         Math.round(-state.currentY / state.projectHeight),
         projectData.length
      );
      orbitalDots.forEach((dot, i) => {
         dot.classList.toggle("is-active", i === activeIndex);
      });
      if (orbitalCurrent) {
         orbitalCurrent.textContent = formatNum(activeIndex);
      }
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

   const navigateTo = (index) => {
      state.isSnapping = true;
      state.snapStart.time = Date.now();
      state.snapStart.y = state.targetY;
      state.snapStart.target = -index * state.projectHeight;
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

   ring.addEventListener("click", (e) => {
      const btn = e.target.closest(".orbital-dot");
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
            item.parallax = createParallaxY(
               item.el.querySelector("img"),
               state.projectHeight
            );
         });
      }, 200);
   });

   animate();
})();
