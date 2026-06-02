import { useEffect, useRef } from "react";

type Killable = { kill?: () => void };

/**
 * Port of 3.Orisa-Nextjs/components/effects/AtItemAnimeEffect.tsx (theme GSAP §35).
 * Horizontal scroll-driven drift: `.at-item-anime.marque` moves x 35% → -200% while scrolling
 * through `.at-item-anime-area` (e.g. Home-2 Section8 about-me slider).
 */
export default function AtItemAnimeEffect() {
  const killablesRef = useRef<Killable[]>([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const killables: Killable[] = [];

      const marqueElements = document.querySelectorAll<HTMLElement>(".at-item-anime.marque");
      const triggerElement = document.querySelector(".at-item-anime-area");
      if (marqueElements.length > 0 && triggerElement) {
        gsap.set(Array.from(marqueElements), { x: "35%" });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "-1000 0%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        tl.to(Array.from(marqueElements), { x: "-200%" });
        killables.push(tl);
        const st = (tl as { scrollTrigger?: Killable }).scrollTrigger;
        if (st) killables.push(st);
      }

      const marqueElements2 = document.querySelectorAll<HTMLElement>(".at-item-anime-2.marque");
      const triggerElement2 = document.querySelector(".at-item-anime-area-2");
      if (marqueElements2.length > 0 && triggerElement2) {
        gsap.set(Array.from(marqueElements2), { x: "35%" });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement2,
            start: "-1000 0%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        tl2.to(Array.from(marqueElements2), { x: "-200%" });
        killables.push(tl2);
        const st2 = (tl2 as { scrollTrigger?: Killable }).scrollTrigger;
        if (st2) killables.push(st2);
      }

      killablesRef.current = killables;

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    void init();

    return () => {
      mounted = false;
      killablesRef.current.forEach((k) => k.kill?.());
      killablesRef.current = [];
    };
  }, []);

  return null;
}
