/* Infinite Horizontal Parallax Slider (Slideshow-derived)
   - Wheel/touch/mouse drag drives X axis on a single track.
   - Track holds N copies of the project list — silent snap by sequenceWidth
     when currentX leaves the safe band creates the illusion of infinity.
   - LERP smoothing on currentX gives free inertia.
   - Each image translates inversely with its distance from viewport center
     (parallax) and is pre-scaled 2.25× so the dipped frame never shows the edge.
   - Project data is read from `.project-source-list` so any backend can drive
     the slider just by emitting the same markup.
*/
(function () {
   "use strict";

   const stage = document.querySelector(".slideshow.is-horizontal");
   if (!stage) return;

   const track = stage.querySelector(".horizon-track");
   const sourceList = stage.querySelector(".project-source-list");
   if (!track || !sourceList) return;

   const navPrev = stage.querySelector(".horizon-nav-prev");
   const navNext = stage.querySelector(".horizon-nav-next");
   const pagination = stage.querySelector(".horizon-pagination");

   const readText = (el, selector) => {
      const node = el.querySelector(selector);
      return node ? node.textContent.trim() : "";
   };

   const projectData = Array.from(
      sourceList.querySelectorAll(".project-source")
   ).map((article) => ({
      title: readText(article, ".project-source-title"),
      image: article.dataset.image || "",
      link: article.dataset.link || "#",
   }));

   if (projectData.length === 0) return;

   const totalSlideCount = projectData.length;

   const config = {
      SCROLL_SPEED: 1.75,
      LERP_FACTOR: 0.05,
      MAX_VELOCITY: 150,
      COPIES: 6,
   };

   const state = {
      currentX: 0,
      targetX: 0,
      slideWidth: 390,
      slides: [],
      dots: [],
      lastActiveIndex: -1,
      isDragging: false,
      startX: 0,
      lastX: 0,
      lastMouseX: 0,
      lastScrollTime: Date.now(),
      isMoving: false,
      velocity: 0,
      lastCurrentX: 0,
      dragDistance: 0,
      hasActuallyDragged: false,
      isMobile: false,
   };

   const wrapIndex = (i, len) => ((i % len) + len) % len;

   const checkMobile = () => {
      state.isMobile = window.innerWidth < 1000;
   };

   const createSlideElement = (index) => {
      const slide = document.createElement("div");
      slide.className = "horizon-slide";
      if (state.isMobile) slide.classList.add("is-mobile");

      const data = projectData[wrapIndex(index, totalSlideCount)];

      const frame = document.createElement("div");
      frame.className = "horizon-frame";

      const img = document.createElement("img");
      img.src = data.image;
      img.alt = data.title;
      img.draggable = false;

      const overlay = document.createElement("div");
      overlay.className = "horizon-overlay";

      const title = document.createElement("p");
      title.className = "horizon-title";
      title.textContent = data.title;

      const arrow = document.createElement("span");
      arrow.className = "horizon-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.innerHTML =
         '<svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></svg>';

      slide.addEventListener("click", (e) => {
         e.preventDefault();
         if (state.dragDistance < 10 && !state.hasActuallyDragged) {
            window.location.href = data.link;
         }
      });

      overlay.appendChild(title);
      overlay.appendChild(arrow);
      frame.appendChild(img);
      slide.appendChild(frame);
      slide.appendChild(overlay);

      return slide;
   };

   const buildPagination = () => {
      if (!pagination) return;
      pagination.innerHTML = "";
      state.dots = [];
      for (let i = 0; i < totalSlideCount; i++) {
         const dot = document.createElement("button");
         dot.type = "button";
         dot.className = "horizon-pagination-dot";
         dot.dataset.index = String(i);
         dot.setAttribute("role", "tab");
         dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
         pagination.appendChild(dot);
         state.dots.push(dot);
      }
      state.lastActiveIndex = -1;
   };

   const initializeSlides = () => {
      track.innerHTML = "";
      state.slides = [];

      checkMobile();
      state.slideWidth = state.isMobile ? 215 : 390;

      const totalSlides = totalSlideCount * config.COPIES;
      for (let i = 0; i < totalSlides; i++) {
         const slide = createSlideElement(i);
         track.appendChild(slide);
         state.slides.push(slide);
      }

      const startOffset = -(totalSlideCount * state.slideWidth * 2);
      state.currentX = startOffset;
      state.targetX = startOffset;

      buildPagination();
   };

   /* Which source-project index is centered when the track sits at offset x.
      Slide N has its center at x + slideWidth/2 + N * slideWidth because each
      .horizon-slide occupies a stride of `slideWidth` (margins symmetric on
      both sides). Solving for N at viewportCenter, then wrap to [0, totalSlideCount). */
   const computeIndexAtX = (x) => {
      const viewportCenter = window.innerWidth / 2;
      const n = (viewportCenter - state.slideWidth / 2 - x) / state.slideWidth;
      return wrapIndex(Math.round(n), totalSlideCount);
   };

   const updatePaginationActive = () => {
      if (state.dots.length === 0) return;
      const active = computeIndexAtX(state.currentX);
      if (active === state.lastActiveIndex) return;
      state.dots.forEach((dot, i) => {
         const isActive = i === active;
         dot.classList.toggle("is-active", isActive);
         dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      state.lastActiveIndex = active;
   };

   const navigateBy = (slides) => {
      state.targetX -= slides * state.slideWidth;
      state.lastScrollTime = Date.now();
   };

   /* Jump to a specific project index by the SHORTEST direction across the
      infinite ring. Uses targetX (not currentX) so repeated clicks on the same
      dot while still lerping don't accumulate overshoot. */
   const navigateToProject = (projectIndex) => {
      const targetActive = computeIndexAtX(state.targetX);
      let delta = projectIndex - targetActive;
      const half = totalSlideCount / 2;
      if (delta > half) delta -= totalSlideCount;
      else if (delta < -half) delta += totalSlideCount;
      if (delta !== 0) navigateBy(delta);
   };

   const updateSlidePositions = () => {
      const sequenceWidth = state.slideWidth * totalSlideCount;

      if (state.currentX > -sequenceWidth * 1) {
         state.currentX -= sequenceWidth;
         state.targetX -= sequenceWidth;
      } else if (state.currentX < -sequenceWidth * 4) {
         state.currentX += sequenceWidth;
         state.targetX += sequenceWidth;
      }

      track.style.transform = `translate3d(${state.currentX}px, 0, 0)`;
   };

   const updateParallax = () => {
      const viewportCenter = window.innerWidth / 2;

      state.slides.forEach((slide) => {
         const img = slide.querySelector("img");
         if (!img) return;

         const slideRect = slide.getBoundingClientRect();
         if (slideRect.right < -500 || slideRect.left > window.innerWidth + 500) {
            return;
         }

         const slideCenter = slideRect.left + slideRect.width / 2;
         const distanceFromCenter = slideCenter - viewportCenter;
         const parallaxOffset = distanceFromCenter * -0.25;

         img.style.transform = `translateX(${parallaxOffset}px) scale(2.25)`;
      });
   };

   const updateMovingState = () => {
      state.velocity = Math.abs(state.currentX - state.lastCurrentX);
      state.lastCurrentX = state.currentX;

      const isSlowEnough = state.velocity < 0.1;
      const hasBeenStillLongEnough = Date.now() - state.lastScrollTime > 200;
      state.isMoving =
         state.hasActuallyDragged || !isSlowEnough || !hasBeenStillLongEnough;

      document.documentElement.style.setProperty(
         "--slider-moving",
         state.isMoving ? "1" : "0"
      );
   };

   const animate = () => {
      state.currentX += (state.targetX - state.currentX) * config.LERP_FACTOR;
      updateMovingState();
      updateSlidePositions();
      updateParallax();
      updatePaginationActive();
      requestAnimationFrame(animate);
   };

   const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      state.lastScrollTime = Date.now();
      const scrollDelta = e.deltaY * config.SCROLL_SPEED;
      state.targetX -= Math.max(
         Math.min(scrollDelta, config.MAX_VELOCITY),
         -config.MAX_VELOCITY
      );
   };

   const handleTouchStart = (e) => {
      state.isDragging = true;
      state.startX = e.touches[0].clientX;
      state.lastX = state.targetX;
      state.dragDistance = 0;
      state.hasActuallyDragged = false;
      state.lastScrollTime = Date.now();
   };

   const handleTouchMove = (e) => {
      if (!state.isDragging) return;
      const deltaX = (e.touches[0].clientX - state.startX) * 1.5;
      state.targetX = state.lastX + deltaX;
      state.dragDistance = Math.abs(deltaX);
      if (state.dragDistance > 5) state.hasActuallyDragged = true;
      state.lastScrollTime = Date.now();
   };

   const handleTouchEnd = () => {
      state.isDragging = false;
      setTimeout(() => {
         state.hasActuallyDragged = false;
      }, 100);
   };

   const handleMouseDown = (e) => {
      e.preventDefault();
      state.isDragging = true;
      state.startX = e.clientX;
      state.lastMouseX = e.clientX;
      state.lastX = state.targetX;
      state.dragDistance = 0;
      state.hasActuallyDragged = false;
      state.lastScrollTime = Date.now();
   };

   const handleMouseMove = (e) => {
      if (!state.isDragging) return;
      e.preventDefault();
      const deltaX = (e.clientX - state.lastMouseX) * 2;
      state.targetX += deltaX;
      state.lastMouseX = e.clientX;
      state.dragDistance += Math.abs(deltaX);
      if (state.dragDistance > 5) state.hasActuallyDragged = true;
      state.lastScrollTime = Date.now();
   };

   const handleMouseUp = () => {
      state.isDragging = false;
      setTimeout(() => {
         state.hasActuallyDragged = false;
      }, 100);
   };

   let resizeTimer = null;
   const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initializeSlides, 200);
   };

   stage.addEventListener("wheel", handleWheel, { passive: false });
   stage.addEventListener("touchstart", handleTouchStart, { passive: true });
   stage.addEventListener("touchmove", handleTouchMove, { passive: true });
   stage.addEventListener("touchend", handleTouchEnd);
   stage.addEventListener("mousedown", handleMouseDown);
   stage.addEventListener("mouseleave", handleMouseUp);
   stage.addEventListener("dragstart", (e) => e.preventDefault());
   document.addEventListener("mousemove", handleMouseMove);
   document.addEventListener("mouseup", handleMouseUp);
   window.addEventListener("resize", handleResize);

   if (navPrev) navPrev.addEventListener("click", () => navigateBy(-1));
   if (navNext) navNext.addEventListener("click", () => navigateBy(1));
   if (pagination) {
      pagination.addEventListener("click", (e) => {
         const btn = e.target.closest(".horizon-pagination-dot");
         if (!btn) return;
         const idx = parseInt(btn.dataset.index, 10);
         if (!Number.isNaN(idx)) navigateToProject(idx);
      });
   }

   initializeSlides();
   animate();
})();
