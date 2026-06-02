import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };

/**
 * Home 15 sec-6 — scroll-scrubbed 3D flip (rotateX) on each member card.
 * Card enters viewport tilted back (75deg), un-tilts to flat as it scrolls
 * from "top bottom" to "top 30%". Mirrors main.js block above #20.
 */
export default function Home15Sec6FlipEffect() {
    const ctxRef = useRef<GsapContext | null>(null);

    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>(".sec-6-home-15__member");
        if (cards.length === 0) return;

        const reduceMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        let cancelled = false;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            const ctx = (gsap as unknown as {
                context: (fn: () => void) => GsapContext;
            }).context(() => {
                cards.forEach((card) => {
                    gsap.set(card, {
                        transformPerspective: 1200,
                        transformOrigin: "50% 100%",
                        rotationX: 75,
                        force3D: true,
                        willChange: "transform",
                    });

                    gsap.to(card, {
                        rotationX: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom",
                            end: "top 30%",
                            scrub: true,
                            invalidateOnRefresh: true,
                        },
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
