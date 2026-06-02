import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };
type GsapMatchMedia = { revert: () => void };

/**
 * Stack-on-scroll for Home 12 "Selected Projects": pins the container,
 * slides each subsequent card up to land on top of the previous one with
 * a small peek + scale step. Active only on >=992px. Mirrors main.js #39c.
 */
export default function Home12Sec2StackEffect() {
    const mmRef = useRef<GsapMatchMedia | null>(null);

    useEffect(() => {
        const stackContainer = document.querySelector<HTMLElement>(".sec-2-home-12__cards");
        if (!stackContainer) return;

        let cancelled = false;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            const stackCards = gsap.utils.toArray<HTMLElement>(
                stackContainer.querySelectorAll(".card-home-12-project")
            );
            if (stackCards.length <= 1) return;

            const mm = gsap.matchMedia();
            mm.add("(min-width: 992px)", () => {
                const stackTopOffset = 96;
                const stackStep = 14;
                const stepScale = 0.025;
                const initialPeek = 50;

                let tallest = 0;
                stackCards.forEach((c) => {
                    tallest = Math.max(tallest, c.offsetHeight);
                });

                stackCards.forEach((card, i) => {
                    gsap.set(card, {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        margin: 0,
                        zIndex: i + 1,
                    });
                });
                gsap.set(stackContainer, {
                    position: "relative",
                    height: tallest + initialPeek * (stackCards.length - 1),
                });

                const stepDuration = () => window.innerHeight * 0.7;

                const tl = gsap.timeline({
                    defaults: { ease: "none" },
                    scrollTrigger: {
                        trigger: stackContainer,
                        start: () => "top " + stackTopOffset + "px",
                        end: () => "+=" + stepDuration() * (stackCards.length - 1),
                        pin: true,
                        pinSpacing: true,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                for (let i = 1; i < stackCards.length; i++) {
                    const incoming = stackCards[i];
                    gsap.set(incoming, { yPercent: 100 });

                    tl.to(incoming, { yPercent: 0, duration: 1 }, i - 1);

                    for (let j = 0; j < i; j++) {
                        const offsetFromTop = (i - j) * stackStep;
                        const scaleAtThisStep = 1 - (i - j) * stepScale;
                        tl.to(
                            stackCards[j],
                            { y: offsetFromTop, scale: scaleAtThisStep, duration: 1 },
                            i - 1
                        );
                    }
                }

                const refreshOnLoad = () => ScrollTrigger.refresh();
                const imgs = stackContainer.querySelectorAll("img");
                imgs.forEach((img) => {
                    if (!img.complete) img.addEventListener("load", refreshOnLoad, { once: true });
                });

                return () => {
                    imgs.forEach((img) => img.removeEventListener("load", refreshOnLoad));
                };
            });

            if (cancelled) {
                (mm as unknown as GsapContext).revert();
                return;
            }
            mmRef.current = mm;
        };

        init();

        return () => {
            cancelled = true;
            mmRef.current?.revert();
            mmRef.current = null;
        };
    }, []);

    return null;
}
