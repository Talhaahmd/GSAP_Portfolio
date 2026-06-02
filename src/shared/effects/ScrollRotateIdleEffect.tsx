import { useEffect, useRef } from "react";

export default function ScrollRotateIdleEffect() {
  const ticking = useRef(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".at-scroll-rotate");
    if (elements.length === 0) return;

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          elements.forEach((el) => {
            el.style.transform = `rotate(${scrollY * 0.2}deg)`;
          });
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
