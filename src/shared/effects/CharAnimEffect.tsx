import { useEffect } from "react";

export default function CharAnimEffect() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      const elements = document.querySelectorAll<HTMLElement>(".at-char-animation");
      if (elements.length === 0) return;

      const ctx = gsap.context(() => {
        elements.forEach((el) => {
          const text = el.textContent || "";
          el.textContent = "";
          el.style.opacity = "1";

          const chars = text.split("").map((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? " " : char;
            span.style.display = "inline-block";
            span.style.opacity = "0";
            span.style.transform = "translateY(20px)";
            el.appendChild(span);
            return span;
          });

          gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          });
        });
      });

      cleanup = () => ctx.revert();
    };

    init();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
