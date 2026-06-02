import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };

/**
 * Pin `.sec-6-home-10__title-block` once it crosses 60% viewport, releasing
 * when the section bottom reaches 10% viewport. Desktop ≥1200px only.
 * Mirrors `main.js` "Home 10 sec-6 — pin the title-block".
 */
export default function Home10Sec6PinEffect() {
    const ctxRef = useRef<GsapContext | null>(null);

    useEffect(() => {
        const sec6 = document.querySelector<HTMLElement>(".sec-6-home-10");
        if (!sec6) return;

        const titleBlock = sec6.querySelector<HTMLElement>(".sec-6-home-10__title-block");
        if (!titleBlock) return;

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
                gsap.matchMedia().add("(min-width: 1200px)", () => {
                    gsap.set(titleBlock, { willChange: "transform" });

                    ScrollTrigger.create({
                        trigger: titleBlock,
                        start: "top 60%",
                        endTrigger: sec6,
                        end: "bottom 10%",
                        pin: titleBlock,
                        pinSpacing: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
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
