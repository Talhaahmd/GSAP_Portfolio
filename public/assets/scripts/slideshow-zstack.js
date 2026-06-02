/* Infinite Parallax Scroll — Z-Stack Reveal
   - Vertical wheel (discrete: 1 notch = 1 slide), lerp animates fractional
     index between integers, giving smooth 3D depth transitions.
   - Slides stack on the Z axis inside a CSS perspective container.
     - distance 0  = current (z=0, scale=1, opacity=1)
     - distance >0 = future, recedes behind (negative z, smaller, fading)
     - distance <0 = past, zooms toward camera and fades out
   - Buffer ±4 with virtualization (recycles DOM beyond window).
   - Minimap = vertical project number list on right edge; active scales up.
   Project data is read from `.project-source-list` in the HTML so any backend
   (WordPress, Next.js, Astro, etc.) can drive the slider just by emitting the
   same markup. Activated only when the wrapper section and source list exist.
*/
(function () {
   "use strict";

   const stage = document.querySelector(".slideshow");
   const projectList = stage ? stage.querySelector(".project-list") : null;
   const indexNav = stage ? stage.querySelector(".zstack-index") : null;
   const sourceList = stage ? stage.querySelector(".project-source-list") : null;
   if (!stage || !projectList || !indexNav || !sourceList) return;

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
      LERP_FACTOR: 0.08,
      BUFFER_SIZE: 4,
      WHEEL_LOCK_MS: 500,
      WHEEL_DEAD_ZONE: 5,
      TOUCH_THRESHOLD: 30,
   };

   let wheelLockUntil = 0;

   const state = {
      currentY: 0,
      targetY: 0,
      projects: new Map(),
      projectHeight: window.innerHeight,
   };

   const wrapIndex = (i, len) => ((Math.abs(i) % len) + len) % len;
   const getData = (i) => projectData[wrapIndex(i, projectData.length)];
   const formatNum = (i) =>
      (wrapIndex(i, projectData.length) + 1).toString().padStart(2, "0");

   const createMain = (index) => {
      if (state.projects.has(index)) return;
      const data = getData(index);
      const num = formatNum(index);

      const el = document.createElement("a");
      el.className = "zstack-project";
      el.href = data.link;
      el.setAttribute("aria-label", `View project: ${data.title}`);
      el.innerHTML = `
         <div class="zstack-card">
            <div class="zstack-frame">
               <img src="${data.image}" alt="${data.title}" />
            </div>
            <div class="zstack-caption">
               <div class="zstack-caption-row">
                  <span class="zstack-num">${num}</span>
                  <span class="zstack-meta">${data.category} · ${data.year}</span>
               </div>
               <h2 class="zstack-title">${data.title}</h2>
            </div>
         </div>
      `;
      projectList.appendChild(el);
      state.projects.set(index, { el });
   };

   for (let i = -config.BUFFER_SIZE; i <= config.BUFFER_SIZE; i++) {
      createMain(i);
   }

   /* Right-side index nav (5 fixed numbers) */
   const indexButtons = [];
   for (let i = 0; i < projectData.length; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "zstack-index-btn";
      b.dataset.index = String(i);
      b.textContent = formatNum(i);
      b.setAttribute(
         "aria-label",
         `Go to project ${formatNum(i)} ${getData(i).title}`
      );
      indexNav.appendChild(b);
      indexButtons.push(b);
   }

   const transformForDistance = (d) => {
      if (d < 0) {
         return {
            z: Math.abs(d) * 220,
            scale: 1 + Math.abs(d) * 0.25,
            opacity: Math.max(0, 1 + d * 0.7),
            ty: d * 60,
         };
      }
      return {
         z: -d * 240,
         scale: Math.max(0.5, 1 - d * 0.13),
         opacity: Math.max(0, 1 - d * 0.42),
         ty: d * 24,
      };
   };

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

   const updatePositions = () => {
      const fractionalIndex = -state.currentY / state.projectHeight;

      state.projects.forEach((item, index) => {
         const d = index - fractionalIndex;
         const t = transformForDistance(d);
         item.el.style.transform = `translate3d(0, ${t.ty}px, ${t.z}px) scale(${t.scale})`;
         item.el.style.opacity = t.opacity;
         item.el.style.zIndex = String(1000 - Math.round(Math.abs(d) * 100));
      });

      const activeIndex = wrapIndex(
         Math.round(fractionalIndex),
         projectData.length
      );
      indexButtons.forEach((b, i) =>
         b.classList.toggle("is-active", i === activeIndex)
      );
   };

   const animate = () => {
      state.currentY +=
         (state.targetY - state.currentY) * config.LERP_FACTOR;
      syncElements();
      updatePositions();
      requestAnimationFrame(animate);
   };

   const navigateTo = (idx) => {
      state.targetY = -idx * state.projectHeight;
   };

   /* Wheel discrete */
   window.addEventListener(
      "wheel",
      (e) => {
         e.preventDefault();
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

   /* Touch swipe */
   let touchStartY = null;
   window.addEventListener("touchstart", (e) => {
      touchStartY = e.touches[0].clientY;
   });
   window.addEventListener("touchend", (e) => {
      if (touchStartY == null) return;
      const dy = e.changedTouches[0].clientY - touchStartY;
      touchStartY = null;
      if (Math.abs(dy) < config.TOUCH_THRESHOLD) return;
      const dir = dy < 0 ? 1 : -1;
      navigateTo(
         Math.round(-state.targetY / state.projectHeight) + dir
      );
   });

   /* Keyboard */
   window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetY / state.projectHeight) + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
         e.preventDefault();
         navigateTo(Math.round(-state.targetY / state.projectHeight) - 1);
      }
   });

   /* Index click — shortest-path navigation around the loop */
   indexNav.addEventListener("click", (e) => {
      const btn = e.target.closest(".zstack-index-btn");
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
      }, 200);
   });

   animate();
})();
