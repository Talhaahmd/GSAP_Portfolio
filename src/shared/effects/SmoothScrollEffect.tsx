import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type ScrollSmootherInstance = {
  kill?: () => void;
  effects?: (
    targets: string | Element | Element[],
    config?: { speed?: unknown; lag?: unknown; effectsPadding?: number; refresh?: boolean },
  ) => unknown;
  refresh?: (safe?: boolean) => void;
};
type TimelineInstance = { kill?: () => void };

/**
 * Smooth scroll (ScrollSmoother) + Footer Fixed Bottom reveal.
 *
 * Mirrors NextJS/components/effects/SmoothScrollEffect.tsx but additionally re-runs the
 * `[data-speed]` / `[data-lag]` scan whenever the route changes, because SPA navigation
 * doesn't remount MainLayout and ScrollSmoother only auto-scans at create time.
 */
export default function SmoothScrollEffect() {
  const scrollSmootherRef = useRef<ScrollSmootherInstance | null>(null);
  const footerTimelineRef = useRef<TimelineInstance | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const { pathname } = useLocation();

  // One-time init of ScrollSmoother + footer reveal.
  useEffect(() => {
    let mounted = true;
    let resizeHandler: (() => void) | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const smoothWrapper = document.getElementById("smooth-wrapper");
      const smoothContent = document.getElementById("smooth-content");
      const footerFixedBottom = document.querySelector(".footer-fixed-bottom") as HTMLElement | null;
      const footerPlaceholder = document.querySelector(".footer-placeholder") as HTMLElement | null;
      const footerFixedBottomInner = document.querySelector(".footer-fixed-bottom .at-footer-area") as HTMLElement | null;
      const mainElement = document.querySelector("#smooth-content main") as HTMLElement | null;

      const updatePlaceholderHeight = () => {
        if (!footerPlaceholder || !footerFixedBottom || !mounted) return;
        footerPlaceholder.style.height = `${footerFixedBottom.offsetHeight}px`;
        ScrollTrigger.refresh();
      };

      if (footerFixedBottom && footerPlaceholder) {
        updatePlaceholderHeight();
        resizeHandler = updatePlaceholderHeight;
        window.addEventListener("resize", resizeHandler);
        resizeObserverRef.current = new ResizeObserver(() => {
          updatePlaceholderHeight();
        });
        resizeObserverRef.current.observe(footerFixedBottom);
      }

      if (!mounted) return;

      // ScrollSmoother — let any plugin error surface in console for diagnostics.
      if (smoothWrapper && smoothContent) {
        const ScrollSmootherMod = await import("gsap/ScrollSmoother");
        const ScrollSmoother = ScrollSmootherMod.default as unknown as {
          create: (opts: object) => ScrollSmootherInstance;
        };
        gsap.registerPlugin(ScrollSmoother as never);
        if (!mounted) return;
        scrollSmootherRef.current = ScrollSmoother.create({
          wrapper: smoothWrapper,
          content: smoothContent,
          smooth: 1.35,
          effects: true,
          smoothTouch: 0.15,
          ignoreMobileResize: true,
        });
      }

      if (!mounted) return;
      updatePlaceholderHeight();

      // Footer Fixed Bottom reveal
      if (footerFixedBottom && footerFixedBottomInner && footerPlaceholder && mainElement) {
        gsap.set(footerFixedBottomInner, { scale: 0.95 });
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: footerPlaceholder,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(footerFixedBottomInner, { scale: 1, ease: "none" }, 0);
        footerTimelineRef.current = tl;
      }
    };

    void init();

    return () => {
      mounted = false;
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      footerTimelineRef.current?.kill?.();
      footerTimelineRef.current = null;
      scrollSmootherRef.current?.kill?.();
      scrollSmootherRef.current = null;
    };
  }, []);

  // Re-scan `[data-speed]` / `[data-lag]` only on SUBSEQUENT route changes (not the initial
  // render — `effects: true` at create time already scanned). ScrollSmoother only auto-scans
  // once, so SPA navigation needs us to re-apply manually for the new page's sections.
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let cancelled = false;
    let attempts = 0;

    const apply = () => {
      if (cancelled) return;
      const smoother = scrollSmootherRef.current;
      if (!smoother?.effects) {
        if (attempts++ < 60) requestAnimationFrame(apply);
        return;
      }
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(
          "#smooth-content [data-speed], #smooth-content [data-lag]",
        ),
      );
      if (els.length === 0) return;
      smoother.effects(els, { refresh: false });
      smoother.refresh?.(true);
    };

    requestAnimationFrame(apply);
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
