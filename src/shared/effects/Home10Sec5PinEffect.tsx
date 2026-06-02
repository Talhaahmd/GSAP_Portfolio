import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };

/**
 * Pin chain for Home 10 sec-5: keeps the intro row anchored at viewport top
 * while stats scroll past. Each stat (--1, --2) also pins until stat--3 reaches
 * the top, so the three numbers stack visually before the section releases.
 * Mirrors `main.js` "Home 10 sec-5 — pin the intro-row" + step-pin stats.
 */
export default function Home10Sec5PinEffect() {
    const ctxRef = useRef<GsapContext | null>(null);

    useEffect(() => {
        const sec5 = document.querySelector<HTMLElement>(".sec-5-home-10");
        if (!sec5) return;

        const reduceMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        const introRow = sec5.querySelector<HTMLElement>(".sec-5-home-10__intro-row");
        const stats = sec5.querySelector<HTMLElement>(".sec-5-home-10__stats");
        if (!introRow || !stats) return;

        let cancelled = false;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            const ctx = (gsap as unknown as {
                context: (fn: () => void) => GsapContext;
            }).context(() => {
                gsap.set(introRow, { willChange: "transform", zIndex: 3 });

                ScrollTrigger.create({
                    trigger: sec5,
                    start: "top top",
                    endTrigger: stats,
                    end: "top 50%",
                    pin: introRow,
                    pinSpacing: false,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onEnter: () => gsap.set(introRow, { zIndex: 3 }),
                    onEnterBack: () => gsap.set(introRow, { zIndex: 3 }),
                });

                const stat1 = sec5.querySelector<HTMLElement>(".sec-5-home-10__stat--1");
                const stat2 = sec5.querySelector<HTMLElement>(".sec-5-home-10__stat--2");
                const stat3 = sec5.querySelector<HTMLElement>(".sec-5-home-10__stat--3");
                if (!stat1 || !stat2 || !stat3) return;

                gsap.set([stat1, stat2], { willChange: "transform" });

                const pinCommon = {
                    start: "top top",
                    endTrigger: stat3,
                    end: "top top",
                    pinSpacing: false,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                } as const;

                ScrollTrigger.create({ trigger: stat1, pin: stat1, ...pinCommon });
                ScrollTrigger.create({ trigger: stat2, pin: stat2, ...pinCommon });
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
