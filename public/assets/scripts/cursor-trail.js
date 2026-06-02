/*!
 * Cursor trail (scoped) for Orisa sections
 * Inspired by cursor-image-trail-js demo logic (adapted for non-module builds)
 */
(function () {
  "use strict";

  function clampNumber(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function initCursorTrail(container) {
    if (!container) return;

    var config = {
      imageLifespan: 750,
      removalDelay: 50,
      mouseThreshold: 90,
      inDuration: 650,
      outDuration: 900,
      inEasing: "cubic-bezier(.07,.5,.5,1)",
      outEasing: "cubic-bezier(.87, 0, .13, 1)",
      maxTrailLength: 28,
    };

    var images = [
      "/assets/imgs/pages/cursor-trail/cursor%20trail%201.webp",
      "/assets/imgs/pages/cursor-trail/cursor%20trail%202.webp",
      "/assets/imgs/pages/cursor-trail/cursor%20trail%203.webp",
      "/assets/imgs/pages/cursor-trail/cursor%20trail%204.webp",
      "/assets/imgs/pages/cursor-trail/cursor%20trail%205.webp",
      "/assets/imgs/pages/cursor-trail/cursor%20trail%206.webp",
      "/assets/imgs/pages/cursor-trail/cursor%20trail%207.webp",
      "/assets/imgs/pages/cursor-trail/cursor%20trail%208.webp",
    ];

    var trail = [];

    var mouseX = 0;
    var mouseY = 0;
    var lastMouseX = 0;
    var lastMouseY = 0;

    var isMoving = false;
    var isCursorInContainer = false;

    var lastRemovalTime = 0;

    function getRect() {
      return container.getBoundingClientRect();
    }

    function isInContainer(x, y) {
      var rect = getRect();
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }

    function setInitialMousePos(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      isCursorInContainer = isInContainer(mouseX, mouseY);
      document.removeEventListener("mouseover", setInitialMousePos, false);
    }

    function hasMovedEnough() {
      var dx = mouseX - lastMouseX;
      var dy = mouseY - lastMouseY;
      return Math.sqrt(dx * dx + dy * dy) > config.mouseThreshold;
    }

    function createImage() {
      var img = document.createElement("img");
      img.className = "sec-1-home-10__cursor-trail-img";

      var randomIndex = Math.floor(Math.random() * images.length);
      var rotation = (Math.random() - 0.5) * 50;
      img.src = images[randomIndex];
      img.alt = "";
      img.decoding = "async";
      img.loading = "eager";

      var rect = getRect();
      var relativeX = clampNumber(mouseX - rect.left, 0, rect.width);
      var relativeY = clampNumber(mouseY - rect.top, 0, rect.height);

      img.style.left = relativeX + "px";
      img.style.top = relativeY + "px";
      img.style.transform =
        "translate(-50%, -50%) rotate(" + rotation + "deg) scale(0)";
      img.style.transition =
        "transform " + config.inDuration + "ms " + config.inEasing;

      container.appendChild(img);

      window.setTimeout(function () {
        img.style.transform =
          "translate(-50%, -50%) rotate(" + rotation + "deg) scale(1)";
      }, 10);

      trail.push({
        element: img,
        rotation: rotation,
        removeTime: Date.now() + config.imageLifespan,
      });

      if (trail.length > config.maxTrailLength) {
        trail[0].removeTime = Date.now();
      }
    }

    function createTrailImage() {
      if (!isCursorInContainer) return;
      if (!isMoving || !hasMovedEnough()) return;

      lastMouseX = mouseX;
      lastMouseY = mouseY;
      createImage();
    }

    function removeOldImages() {
      var now = Date.now();
      if (now - lastRemovalTime < config.removalDelay || trail.length === 0) return;

      var oldestImage = trail[0];
      if (now < oldestImage.removeTime) return;

      var imgToRemove = trail.shift();
      imgToRemove.element.style.transition =
        "transform " + config.outDuration + "ms " + config.outEasing;
      imgToRemove.element.style.transform =
        "translate(-50%, -50%) rotate(" +
        imgToRemove.rotation +
        "deg) scale(0)";

      lastRemovalTime = now;

      window.setTimeout(function () {
        if (imgToRemove.element && imgToRemove.element.parentNode) {
          imgToRemove.element.parentNode.removeChild(imgToRemove.element);
        }
      }, config.outDuration);
    }

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isCursorInContainer = isInContainer(mouseX, mouseY);

      if (!isCursorInContainer) return;

      isMoving = true;
      window.clearTimeout(initCursorTrail._moveTimeout);
      initCursorTrail._moveTimeout = window.setTimeout(function () {
        isMoving = false;
      }, 100);
    }

    function animate() {
      createTrailImage();
      removeOldImages();
      window.requestAnimationFrame(animate);
    }

    document.addEventListener("mouseover", setInitialMousePos, false);
    document.addEventListener("mousemove", onMouseMove, { passive: true });

    animate();
  }

  function bootstrap() {
    var layer = document.querySelector(".sec-1-home-10__cursor-trail");
    if (!layer) return;
    initCursorTrail(layer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
