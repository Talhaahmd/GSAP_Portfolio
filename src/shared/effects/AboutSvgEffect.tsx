import { useEffect, useRef } from "react";

const SELECTOR = ".at-about-svg-wrap";

type ScrollTriggerInstance = { kill?: () => void };

/**
 * GSAP ScrollTrigger animation for .at-about-svg-wrap:
 * - 1st SVG: from x -100px, transformOrigin left center
 * - 2nd SVG: from y -100px, transformOrigin center center
 * - 3rd SVG: from x 100px, transformOrigin right center
 */
export default function AboutSvgEffect() {
  const triggersRef = useRef<ScrollTriggerInstance[]>([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const wraps = document.querySelectorAll<HTMLElement>(SELECTOR);
      const triggers: ScrollTriggerInstance[] = [];

      wraps.forEach((svgWrap) => {
        if (svgWrap.hasAttribute("data-about-svg-done")) return;
        const svgLeft = svgWrap.querySelector<SVGSVGElement>("svg:nth-child(1)");
        const svgCenter = svgWrap.querySelector<SVGSVGElement>("svg:nth-child(2)");
        const svgRight = svgWrap.querySelector<SVGSVGElement>("svg:nth-child(3)");

        const stOpts = {
          trigger: svgWrap,
          start: "top 90%",
          end: "bottom center",
          scrub: 1,
        };

        if (svgLeft) {
          const tween = gsap.from(svgLeft, {
            transformOrigin: "left center",
            duration: 1,
            ease: "power2.out",
            x: "-100px",
            scrollTrigger: stOpts,
          });
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        }

        if (svgCenter) {
          const tween = gsap.from(svgCenter, {
            transformOrigin: "center center",
            duration: 1,
            ease: "power2.out",
            y: "-100px",
            scrollTrigger: stOpts,
          });
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        }

        if (svgRight) {
          const tween = gsap.from(svgRight, {
            transformOrigin: "right center",
            duration: 1,
            ease: "power2.out",
            x: "100px",
            scrollTrigger: stOpts,
          });
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        }

        svgWrap.setAttribute("data-about-svg-done", "true");
      });

      triggersRef.current = triggers;
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => init());
    });

    return () => {
      mounted = false;
      triggersRef.current.forEach((t) => t.kill?.());
      triggersRef.current = [];
      document.querySelectorAll(SELECTOR).forEach((el) => el.removeAttribute("data-about-svg-done"));
    };
  }, []);

  return null;
}

