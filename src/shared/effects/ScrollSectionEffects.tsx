import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };
type ScrollTriggerInstance = { progress?: number; isActive?: () => boolean };

/**
 * GSAP ScrollTrigger effects — mirror of NextJS/components/effects/ScrollSectionEffects.tsx:
 * 24. postbox-scroll-zoom — pin .postbox-item, clip-path reveal 200×100 → full, play btn fade at 0.78
 * 32. section-fix        — pin section, stack .item (scale + yPercent), sync .active on items + .navigation-active-item
 * 33. section-title-pin  — (min-width: 1400px) pin .section-title-pin when not inside .section-fix
 * 51. scroll-section     — card stacking for .scroll-section (vertical/horizontal) when not inside .section-fix
 */
export default function ScrollSectionEffects() {
  const ctxRef = useRef<GsapContext | null>(null);
  const scrollListenersRef = useRef<Array<() => void>>([]);
  const teardownRefreshHooksRef = useRef<Array<() => void>>([]);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (cancelled) return;

      const STAny = ScrollTrigger as unknown as {
        addEventListener: (e: string, fn: () => void) => void;
        removeEventListener: (e: string, fn: () => void) => void;
      };

      const ctx = (gsap as unknown as {
        context: (fn: () => void) => GsapContext;
      }).context(() => {
        // —— 24. postbox-scroll-zoom (clip-path inset reveal 200×100 → full, marquee fade, play btn at 0.78) ——
        document.querySelectorAll<HTMLElement>(".postbox-scroll-zoom").forEach((section) => {
          const itemwrap = section.querySelector<HTMLElement>(".postbox-item");
          const img = section.querySelector<HTMLElement>(".postbox-scroll-zoom-img");
          const playBtn = section.querySelector<HTMLElement>(".postbox-scroll-zoom-play");
          const marquee = section.querySelector<HTMLElement>(".postbox-scroll-zoom-marquee");
          if (!itemwrap || !img || !playBtn) return;

          const REVEAL_W = 200;
          const REVEAL_H = 100;
          const RADIUS_START = 4;
          const RADIUS_END = 42;

          const computeInset = () => {
            const rect = img.getBoundingClientRect();
            const insetX = Math.max((rect.width - REVEAL_W) / 2, 0);
            const insetY = Math.max((rect.height - REVEAL_H) / 2, 0);
            return { insetX, insetY };
          };

          const setInitialClip = () => {
            const { insetX, insetY } = computeInset();
            gsap.set(img, {
              clipPath: `inset(${insetY}px ${insetX}px ${insetY}px ${insetX}px round ${RADIUS_START}px)`,
            });
          };
          setInitialClip();

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: itemwrap,
              start: "top top",
              end: "bottom top",
              pin: true,
              scrub: 1,
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });
          tl.fromTo(
            img,
            {
              clipPath: () => {
                const { insetX, insetY } = computeInset();
                return `inset(${insetY}px ${insetX}px ${insetY}px ${insetX}px round ${RADIUS_START}px)`;
              },
              ease: "none",
            },
            {
              clipPath: `inset(0px 0px 0px 0px round ${RADIUS_END}px)`,
              duration: 1,
              ease: "none",
            },
            0,
          );
          if (marquee) {
            tl.fromTo(marquee, { opacity: 1 }, { opacity: 0, ease: "none", duration: 0.6 }, 0);
          }
          tl.fromTo(playBtn, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, ease: "none" }, 0.78);
          tl.call(() => section.classList.add("postbox-scroll-zoom-ready"), [], 0.78);
        });

        // —— 32. section-fix (pin section-title + stacking cards + active nav) ——
        const sectionFixList = document.querySelectorAll<HTMLElement>(".section-fix");
        sectionFixList.forEach((sectionFix) => {
          const sectionTitlePin = sectionFix.querySelector(".section-title-pin");
          const scrollSectionEl = sectionFix.querySelector<HTMLElement>(".scroll-section.vertical-section");
          if (!scrollSectionEl || !sectionTitlePin) return;
          const wrapper = scrollSectionEl.querySelector<HTMLElement>(".wrapper");
          if (!wrapper) return;
          const items = wrapper.querySelectorAll<HTMLElement>(".item");
          if (!items.length) return;

          // CSS chain `.list { height:100% } > .wrapper { height:auto }` breaks the
          // percentage resolution, so `.item:first-child { min-height:100% }` collapses
          // to content height. Force the first item to at least 100vh via inline style so
          // wrapper/list/section-fix get the correct size for the pin scrub window.
          gsap.set(items[0], { minHeight: "100vh", height: "auto" });
          items.forEach((item, index) => {
            if (index !== 0) gsap.set(item, { yPercent: 100 });
          });

          const scrollDistance = items.length * 50;
          const navList = sectionFix.querySelector(".navigation-active-item");
          const navItems = navList ? Array.from(navList.querySelectorAll<HTMLElement>("li .item")) : [];

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionFix,
              pin: true,
              start: "top top",
              end: () => `+=${scrollDistance}%`,
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate(self: { progress: number }) {
                const progress = Math.min(Math.max(self.progress, 0), 0.9999);
                const index = Math.min(Math.floor(progress * items.length), items.length - 1);
                items.forEach((el, i) => el.classList.toggle("active", i === index));
                navItems.forEach((el, i) => el.classList.toggle("active", i === index));
              },
            },
            defaults: { ease: "none", duration: 1 },
          });

          items.forEach((item, index) => {
            tl.to(item, { scale: 0.9 });
            if (items[index + 1]) {
              tl.to(items[index + 1], { yPercent: 0 }, "<");
            }
          });

          const tlWithST = tl as { scrollTrigger?: ScrollTriggerInstance };
          function updateActiveByProgress() {
            if (tlWithST.scrollTrigger?.isActive?.()) {
              const progress = Math.min(Math.max(tlWithST.scrollTrigger.progress ?? 0, 0), 0.9999);
              const index = Math.min(Math.floor(progress * items.length), items.length - 1);
              items.forEach((el, i) => el.classList.toggle("active", i === index));
              navItems.forEach((el, i) => el.classList.toggle("active", i === index));
            }
          }

          STAny.addEventListener("scroll", updateActiveByProgress);
          scrollListenersRef.current.push(() => {
            STAny.removeEventListener("scroll", updateActiveByProgress);
          });
        });

        // —— 33. section-title-pin (min-width: 1400px, skip if inside .section-fix) ——
        gsap.matchMedia().add("(min-width: 1400px)", () => {
          const panels = document.querySelectorAll<HTMLElement>(".section-title-pin");
          panels.forEach((section) => {
            if (!section || section.closest(".section-fix")) return;
            gsap.to(section, {
              scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: "top bottom+=200",
                endTrigger: section.closest("section") ?? document.body,
                end: "bottom top",
                pinSpacing: false,
              },
            });
          });
        });

        // —— 51. scroll-section card stacking (skip if inside .section-fix) ——
        const initScroll = (
          section: HTMLElement,
          items: NodeListOf<HTMLElement>,
          direction: "horizontal" | "vertical",
        ) => {
          const itemArr = Array.from(items);
          itemArr.forEach((item, index) => {
            gsap.set(item, { zIndex: index });
            if (index !== 0) {
              gsap.set(item, direction === "horizontal" ? { xPercent: 100 } : { yPercent: 100 });
            }
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              pin: true,
              start: "top top",
              end: () => `+=${itemArr.length * 50}%`,
              scrub: 1,
              invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
          });

          itemArr.forEach((item, index) => {
            timeline.to(item, { scale: 0.9 });
            if (itemArr[index + 1]) {
              timeline.to(
                itemArr[index + 1],
                direction === "horizontal" ? { xPercent: 0 } : { yPercent: 0 },
                "<",
              );
            }
          });
        };

        document.querySelectorAll<HTMLElement>(".scroll-section").forEach((section) => {
          if (section.closest(".section-fix")) return;
          const wrapper = section.querySelector<HTMLElement>(".wrapper");
          const items = wrapper?.querySelectorAll<HTMLElement>(".item");
          if (!items?.length) return;
          const direction = section.classList.contains("horizontal-section") ? "horizontal" : "vertical";
          initScroll(section, items, direction);
        });
      });

      if (cancelled) {
        ctx.revert();
        return;
      }
      ctxRef.current = ctx;

      // Track active scrolling so refreshes never fire mid-scroll (would cause jank /
      // ScrollSmoother snap-to-top with `effects: true`).
      let lastScrollAt = 0;
      const onScrollMark = () => {
        lastScrollAt = performance.now();
      };
      window.addEventListener("scroll", onScrollMark, { passive: true });
      teardownRefreshHooksRef.current.push(() => window.removeEventListener("scroll", onScrollMark));

      // Debounced refresh: coalesce all layout-shift signals (lazy-load image, font swap,
      // hydration, pin-spacer recompute) into a single refresh per quiet window. Defers
      // again if the user is mid-scroll when the timer fires.
      let refreshTimer: number | null = null;
      const QUIET_MS = 200;
      const SCROLL_GUARD_MS = 150;
      const scheduleRefresh = () => {
        if (refreshTimer !== null) window.clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(() => {
          if (performance.now() - lastScrollAt < SCROLL_GUARD_MS) {
            scheduleRefresh();
            return;
          }
          refreshTimer = null;
          ScrollTrigger.refresh();
        }, QUIET_MS);
      };
      teardownRefreshHooksRef.current.push(() => {
        if (refreshTimer !== null) {
          window.clearTimeout(refreshTimer);
          refreshTimer = null;
        }
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      // ResizeObserver on body catches every layout shift in one place, replacing
      // per-image listeners and timed-fallback refreshes. Pin-spacer changes also fire
      // here, but the debounce + scroll guard keep recursion bounded.
      const ro = new ResizeObserver(scheduleRefresh);
      ro.observe(document.body);
      teardownRefreshHooksRef.current.push(() => ro.disconnect());
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }

    const onLoad = () => {
      import("gsap/ScrollTrigger").then((mod) => {
        const ScrollTrigger = mod.default;
        if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
      });
    };
    window.addEventListener("load", onLoad);

    return () => {
      cancelled = true;
      document.removeEventListener("DOMContentLoaded", init);
      window.removeEventListener("load", onLoad);
      scrollListenersRef.current.forEach((remove) => remove());
      scrollListenersRef.current = [];
      teardownRefreshHooksRef.current.forEach((remove) => remove());
      teardownRefreshHooksRef.current = [];
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  return null;
}
