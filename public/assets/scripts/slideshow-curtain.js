/* Infinite Parallax Scroll — Diagonal Curtain
   - Vertical wheel (discrete: 1 notch = 1 transition).
   - Slides STACK at the same position; transition = animated diagonal
     clip-path wipe from top-right corner toward bottom-left.
   - 3 rotating slots (prev / current / next) get re-labeled after each
     transition; only the off-screen slot is repopulated to avoid flicker.
   - Minimap = 5 diagonal slits along left edge; click to jump.
   Project data is read from `.project-source-list` in the HTML so any backend
   (WordPress, Next.js, Astro, etc.) can drive the slider just by emitting the
   same markup. Activated only when the wrapper section and source list exist.
*/
(function () {
   "use strict";

   const wrapper = document.querySelector(".slideshow");
   const stage = wrapper ? wrapper.querySelector(".curtain-stage") : null;
   const navEl = wrapper ? wrapper.querySelector(".curtain-nav") : null;
   const sourceList = wrapper ? wrapper.querySelector(".project-source-list") : null;
   if (!wrapper || !stage || !navEl || !sourceList) return;

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
      TRANSITION_DURATION: 700,
      WHEEL_LOCK_MS: 800,
      WHEEL_DEAD_ZONE: 5,
      TOUCH_THRESHOLD: 30,
   };

   let wheelLockUntil = 0;
   let currentIndex = 0;
   let inTransition = false;
   let transitionDir = 0;
   let transitionStart = 0;

   const wrapIndex = (i, len) => ((Math.abs(i) % len) + len) % len;
   const getData = (i) => projectData[wrapIndex(i, projectData.length)];
   const formatNum = (i) =>
      (wrapIndex(i, projectData.length) + 1).toString().padStart(2, "0");
   const totalLabel = projectData.length.toString().padStart(2, "0");

   /* Three rotating slots */
   const slots = [];
   for (let i = 0; i < 3; i++) {
      const slot = document.createElement("a");
      slot.className = "curtain-slot";
      slot.innerHTML = `
         <img class="curtain-img" src="" alt="" />
         <div class="curtain-overlay">
            <span class="curtain-num"></span>
            <h2 class="curtain-title"></h2>
            <div class="curtain-meta">
               <span class="curtain-cat"></span>
               <span class="curtain-year"></span>
            </div>
         </div>
      `;
      stage.appendChild(slot);
      slots.push(slot);
   }
   const slotMap = { prev: slots[0], current: slots[1], next: slots[2] };

   const populate = (slot, index) => {
      const d = getData(index);
      slot.href = d.link;
      slot.setAttribute("aria-label", `View project: ${d.title}`);
      const img = slot.querySelector(".curtain-img");
      img.src = d.image;
      img.alt = d.title;
      slot.querySelector(".curtain-num").textContent = `${formatNum(index)} / ${totalLabel}`;
      slot.querySelector(".curtain-title").textContent = d.title;
      slot.querySelector(".curtain-cat").textContent = d.category;
      slot.querySelector(".curtain-year").textContent = d.year;
   };

   const HIDDEN_CLIP = "polygon(100% 0, 100% 0, 100% 0, 100% 0)";
   const FULL_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

   const diagonalClip = (p) => {
      if (p <= 0) return HIDDEN_CLIP;
      if (p >= 1) return FULL_CLIP;
      const c = 200 * (1 - p);
      if (c >= 100) {
         const c100 = c - 100;
         return `polygon(100% ${c100}%, 100% 100%, ${c100}% 100%)`;
      }
      return `polygon(${c}% 0, 100% 0, 100% 100%, 0 100%, 0 ${c}%)`;
   };

   /* Initial state */
   populate(slotMap.prev, currentIndex - 1);
   populate(slotMap.current, currentIndex);
   populate(slotMap.next, currentIndex + 1);
   slotMap.prev.style.zIndex = 0;
   slotMap.current.style.zIndex = 1;
   slotMap.next.style.zIndex = 0;
   slotMap.prev.style.clipPath = HIDDEN_CLIP;
   slotMap.current.style.clipPath = FULL_CLIP;
   slotMap.next.style.clipPath = HIDDEN_CLIP;

   /* Minimap slits */
   const slits = [];
   for (let i = 0; i < projectData.length; i++) {
      const s = document.createElement("button");
      s.type = "button";
      s.className = "curtain-slit";
      s.dataset.index = String(i);
      s.setAttribute(
         "aria-label",
         `Go to project ${formatNum(i)} ${getData(i).title}`
      );
      navEl.appendChild(s);
      slits.push(s);
   }

   const updateActiveSlit = () => {
      const active = wrapIndex(currentIndex, projectData.length);
      slits.forEach((s, i) => s.classList.toggle("is-active", i === active));
   };
   updateActiveSlit();

   const startTransition = (dir, prePopulated) => {
      if (inTransition) return;
      inTransition = true;
      transitionDir = dir;
      transitionStart = Date.now();
      const incoming = dir > 0 ? slotMap.next : slotMap.prev;
      if (!prePopulated) {
         populate(incoming, currentIndex + dir);
      }
      incoming.style.zIndex = 2;
      incoming.style.clipPath = diagonalClip(0);
      const incomingImg = incoming.querySelector(".curtain-img");
      if (incomingImg) incomingImg.style.transform = "scale(1)";
   };

   const commitTransition = () => {
      currentIndex += transitionDir;
      const dirSign = transitionDir > 0 ? 1 : -1;
      let newPrev, newCurrent, newNext;
      if (dirSign > 0) {
         newPrev = slotMap.current;
         newCurrent = slotMap.next;
         newNext = slotMap.prev;
      } else {
         newNext = slotMap.current;
         newCurrent = slotMap.prev;
         newPrev = slotMap.next;
      }
      slotMap.prev = newPrev;
      slotMap.current = newCurrent;
      slotMap.next = newNext;

      slotMap.prev.style.zIndex = 0;
      slotMap.current.style.zIndex = 1;
      slotMap.next.style.zIndex = 0;
      slotMap.prev.style.clipPath = HIDDEN_CLIP;
      slotMap.current.style.clipPath = FULL_CLIP;
      slotMap.next.style.clipPath = HIDDEN_CLIP;

      populate(slotMap.prev, currentIndex - 1);
      populate(slotMap.next, currentIndex + 1);

      inTransition = false;
      transitionDir = 0;
      updateActiveSlit();
   };

   const animate = () => {
      if (inTransition) {
         const p = Math.min(
            (Date.now() - transitionStart) / config.TRANSITION_DURATION,
            1
         );
         const eased = 1 - Math.pow(1 - p, 3);
         const incoming =
            transitionDir > 0 ? slotMap.next : slotMap.prev;
         incoming.style.clipPath = diagonalClip(eased);
         const incomingImg = incoming.querySelector(".curtain-img");
         if (incomingImg) {
            incomingImg.style.transform = `scale(${1 + eased * 0.1})`;
         }
         if (p >= 1) commitTransition();
      }
      requestAnimationFrame(animate);
   };

   const navigateTo = (targetIdx) => {
      if (inTransition) return;
      const target = wrapIndex(targetIdx, projectData.length);
      const current = wrapIndex(currentIndex, projectData.length);
      if (target === current) return;
      const diff = target - current;
      const altDiff =
         diff > 0 ? diff - projectData.length : diff + projectData.length;
      const useDiff = Math.abs(altDiff) < Math.abs(diff) ? altDiff : diff;
      const dir = useDiff > 0 ? 1 : -1;

      const incoming = dir > 0 ? slotMap.next : slotMap.prev;
      populate(incoming, currentIndex + useDiff);

      transitionDir = useDiff;
      transitionStart = Date.now();
      inTransition = true;
      incoming.style.zIndex = 2;
      incoming.style.clipPath = diagonalClip(0);
      const incomingImg = incoming.querySelector(".curtain-img");
      if (incomingImg) incomingImg.style.transform = "scale(1)";
   };

   /* Wheel */
   window.addEventListener(
      "wheel",
      (e) => {
         e.preventDefault();
         const raw =
            Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
         if (Math.abs(raw) < config.WHEEL_DEAD_ZONE) return;
         const now = Date.now();
         if (now < wheelLockUntil) return;
         if (inTransition) return;
         wheelLockUntil = now + config.WHEEL_LOCK_MS;
         startTransition(raw > 0 ? 1 : -1);
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
      if (inTransition) return;
      startTransition(dy < 0 ? 1 : -1);
   });

   /* Keyboard */
   window.addEventListener("keydown", (e) => {
      if (inTransition) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
         e.preventDefault();
         startTransition(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
         e.preventDefault();
         startTransition(-1);
      }
   });

   /* Slit click */
   navEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".curtain-slit");
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (Number.isNaN(idx)) return;
      navigateTo(idx);
   });

   animate();
})();
