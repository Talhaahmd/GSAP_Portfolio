import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };

/**
 * Vanilla port of `main.js` #19 anim-zoomin. Each `.anim-zoomin` element fades
 * + scales in (autoAlpha 0 → 1, scale 1.2 → 1) when its `.anim-zoomin-wrap`
 * parent crosses the viewport bottom. The HTML version wraps elements at runtime
 * via jQuery; in React the wrap is already authored in JSX so we just attach
 * the timeline. Falls back to the element itself when no wrap is present.
 */
export default function AnimZoominEffect() {
    const ctxRef = useRef<GsapContext | null>(null);

    useEffect(() => {
        if (!document.querySelector(".anim-zoomin")) return;

        let cancelled = false;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            const ctx = (gsap as unknown as {
                context: (fn: () => void) => GsapContext;
            }).context(() => {
                document.querySelectorAll<HTMLElement>(".anim-zoomin").forEach((el) => {
                    const wrap =
                        (el.closest(".anim-zoomin-wrap") as HTMLElement | null) ?? el;
                    if (wrap !== el) {
                        wrap.style.overflow = "hidden";
                    }
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: wrap,
                            start: "top 100%",
                        },
                    }).from(el, {
                        duration: 2,
                        autoAlpha: 0,
                        scale: 1.2,
                        ease: "power2.out",
                        clearProps: "all",
                    });
                });
            });

            if (cancelled) {
                ctx.revert();
                return;
            }
            ctxRef.current = ctx;
        };

        init();

        return () => {
            cancelled = true;
            ctxRef.current?.revert();
            ctxRef.current = null;
        };
    }, []);

    return null;
}
