import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };

/**
 * Pin `.sec-4-home-10__title-block` at viewport mid-line while cards continue
 * scrolling underneath, releasing once the section bottom reaches 10% viewport.
 * Desktop only (≥992px). Mirrors `main.js` "Home 10 sec-4 — pin the title-block".
 */
export default function Home10Sec4PinEffect() {
    const ctxRef = useRef<GsapContext | null>(null);

    useEffect(() => {
        const sec4 = document.querySelector<HTMLElement>(".sec-4-home-10");
        if (!sec4) return;

        const titleBlock = sec4.querySelector<HTMLElement>(".sec-4-home-10__title-block");
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
                gsap.matchMedia().add("(min-width: 992px)", () => {
                    gsap.set(titleBlock, { willChange: "transform" });

                    ScrollTrigger.create({
                        trigger: titleBlock,
                        start: "top 50%",
                        endTrigger: sec4,
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
