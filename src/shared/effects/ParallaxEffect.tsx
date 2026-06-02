import { useEffect, useRef } from "react";

type ScrollTriggerInstance = { kill?: () => void };

export default function ParallaxEffect() {
  const triggersRef = useRef<ScrollTriggerInstance[]>([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const elements = document.querySelectorAll<HTMLElement>("[data-parallax]");
      const triggers: ScrollTriggerInstance[] = [];

      elements.forEach((el) => {
        if (el.hasAttribute("data-at-parallax-done")) return;
        el.setAttribute("data-at-parallax-done", "true");

        const speed = parseFloat(el.dataset.parallaxSpeed ?? el.dataset.depth ?? "0.5");
        const range = parseFloat(el.dataset.parallaxRange ?? "120");

        const st = ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const y = (progress - 0.5) * 2 * range * speed;
            gsap.set(el, { y, force3D: true });
          },
        });
        triggers.push(st);
      });

      triggersRef.current = triggers;
    };

    init();

    return () => {
      mounted = false;
      triggersRef.current.forEach((st) => st.kill?.());
      triggersRef.current = [];
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => el.removeAttribute("data-at-parallax-done"));
    };
  }, []);

  return null;
}

