import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };

/**
 * Pin `.sec-8-home-8__stage` while scrubbing `.sec-8-home-8__group` cards upward,
 * so the center title stays visible at 10% viewport while testimonial cards stream
 * past it. Mirrors `main.js` "Home 8 sec-8 — pin stage" block.
 */
export default function Home8Sec8PinEffect() {
    const ctxRef = useRef<GsapContext | null>(null);

    useEffect(() => {
        const sec8 = document.querySelector<HTMLElement>(".sec-8-home-8");
        if (!sec8) return;

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
                gsap.matchMedia().add("(min-width: 992px)", () => {
                    const stage = sec8.querySelector<HTMLElement>(".sec-8-home-8__stage");
                    const center = sec8.querySelector<HTMLElement>(".sec-8-home-8__center");
                    const groups = Array.from(
                        sec8.querySelectorAll<HTMLElement>(".sec-8-home-8__group")
                    );
                    if (!stage || !center || !groups.length) return;

                    const getScrollDistance = () => {
                        let maxBottom = 0;
                        groups.forEach((el) => {
                            const b = el.offsetTop + el.offsetHeight;
                            if (b > maxBottom) maxBottom = b;
                        });
                        const centerTop = center.offsetTop || 0;
                        return Math.max(0, Math.round(maxBottom - centerTop));
                    };

                    gsap.set(center, { willChange: "transform" });
                    gsap.set(groups, { willChange: "transform" });

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: center,
                            start: "top 10%",
                            end: () => `+=${getScrollDistance()}`,
                            pin: stage,
                            pinSpacing: true,
                            scrub: 1,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        },
                    }).to(
                        groups,
                        {
                            y: () => -getScrollDistance(),
                            ease: "none",
                        },
                        0
                    );
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
