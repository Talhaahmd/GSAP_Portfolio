import { useEffect, useRef } from "react";

type Killable = { kill?: () => void };

export default function ScrollMoveUpEffect() {
  const killablesRef = useRef<Killable[]>([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const killables: Killable[] = [];

      const moveUp = Array.from(document.querySelectorAll<HTMLElement>(".move-up"));
      if (moveUp.length > 0 && moveUp[0]) {
        const moveUpTween = gsap.to(moveUp, {
          transformOrigin: "top",
          y: "-500px",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: moveUp[0],
            start: "top center",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        killables.push(moveUpTween);
        if ((moveUpTween as { scrollTrigger?: Killable }).scrollTrigger) {
          killables.push((moveUpTween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
        }
      }

      const moveUpItems = Array.from(document.querySelectorAll<HTMLElement>(".scroll-move-up"));
      moveUpItems.forEach((el) => {
        const tween = gsap.to(el, {
          y: -100,
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
          },
        });
        killables.push(tween);
        if ((tween as { scrollTrigger?: Killable }).scrollTrigger) {
          killables.push((tween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
        }
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const items = Array.from(document.querySelectorAll<HTMLElement>(".scroll-move-up2"));
        items.forEach((el) => {
          const tween = gsap.from(el, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              markers: false,
              invalidateOnRefresh: true,
            },
          });
          killables.push(tween);
          if ((tween as { scrollTrigger?: Killable }).scrollTrigger) {
            killables.push((tween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
          }
        });
        return () => {};
      });

      killables.push(mm);

      killablesRef.current = killables;
    };

    init();

    return () => {
      mounted = false;
      killablesRef.current.forEach((k) => k.kill?.());
      killablesRef.current = [];
    };
  }, []);

  return null;
}

