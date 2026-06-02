import { useEffect, useRef } from "react";

type GsapTween = { kill?: () => void; scrollTrigger?: { kill?: () => void } };

export default function FadeAnimEffect() {
  const tweensRef = useRef<GsapTween[]>([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const elements = document.querySelectorAll<HTMLElement>(".at_fade_anim");
      const tweens: GsapTween[] = [];

      elements.forEach((el) => {
        if (el.hasAttribute("data-at-fade-done")) return;
        el.setAttribute("data-at-fade-done", "true");

        const fadeOffset = parseFloat(el.getAttribute("data-fade-offset") ?? "40") || 40;
        const duration = parseFloat(el.getAttribute("data-duration") ?? "0.75") || 0.75;
        const fadeFrom = (el.getAttribute("data-fade-from") ?? "bottom").toLowerCase();
        const onScroll = el.getAttribute("data-on-scroll") ?? "1";
        const delay = parseFloat(el.getAttribute("data-delay") ?? "0.15") || 0.15;
        const ease = el.getAttribute("data-ease") ?? "power2.out";

        const x = fadeFrom === "left" ? -fadeOffset : fadeFrom === "right" ? fadeOffset : 0;
        const y = fadeFrom === "top" ? -fadeOffset : fadeFrom === "bottom" ? fadeOffset : 0;

        const vars: Record<string, unknown> = {
          opacity: 0,
          ease,
          duration,
          delay,
          x,
          y,
        };

        if (onScroll === "1") {
          vars.scrollTrigger = { trigger: el, start: "top 85%" };
        }

        const tween = gsap.from(el, vars);
        if (tween) tweens.push(tween);
      });

      tweensRef.current = tweens;
    };

    init();

    return () => {
      mounted = false;
      tweensRef.current.forEach((t) => {
        t?.scrollTrigger?.kill?.();
        t?.kill?.();
      });
      tweensRef.current = [];
      document.querySelectorAll<HTMLElement>(".at_fade_anim").forEach((el) => el.removeAttribute("data-at-fade-done"));
    };
  }, []);

  return null;
}

