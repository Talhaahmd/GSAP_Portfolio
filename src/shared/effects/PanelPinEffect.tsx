import { useEffect, useRef } from "react";

const MEDIA_QUERY = "(min-width: 1199px)";

/** Pair of selectors: pinned element, endTrigger, and optional start/end */
const PIN_CONFIGS: {
    panelSelector: string;
    endTrigger: string;
    start?: string;
    end?: string;
}[] = [
    { panelSelector: ".at-panel-pin", endTrigger: ".at-panel-pin-area" },
    { panelSelector: ".mg-portfolio-pin", endTrigger: ".mg-portfolio-area" },
    {
        panelSelector: ".at-header-pin",
        endTrigger: ".home-2-section-13",
        start: "30% top",
        end: "bottom bottom",
    },
];

type MatchMediaContext = { revert: () => void };

/**
 * GSAP ScrollTrigger pin: on viewport >= 1199px, pin each .at-panel-pin and .mg-portfolio-pin
 * (start: top 5%, end: bottom 90% of the corresponding area), scrub: 1, pinSpacing: false.
 * Init runs after hydration (requestAnimationFrame) to avoid DOM being modified during hydrate.
 */
export default function PanelPinEffect() {
    const matchMediaRef = useRef<MatchMediaContext | null>(null);

    useEffect(() => {
        let mounted = true;
        let rafId: number | null = null;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            const pr = gsap.matchMedia();
            matchMediaRef.current = pr;

            pr.add(MEDIA_QUERY, () => {
                const killFns: Array<() => void> = [];

                PIN_CONFIGS.forEach(({ panelSelector, endTrigger, start, end }) => {
                    const panels = document.querySelectorAll<HTMLElement>(panelSelector);
                    if (panels.length === 0) return;

                    const tl = gsap.timeline();
                    panels.forEach((section) => {
                        if (section) {
                            tl.to(section, {
                                scrollTrigger: {
                                    trigger: section,
                                    pin: section,
                                    scrub: 1,
                                    start: start ?? "top 5%",
                                    end: end ?? "bottom 90%",
                                    endTrigger,
                                    pinSpacing: false,
                                },
                            });
                        }
                    });
                    killFns.push(() => tl.kill());
                });

                return () => {
                    killFns.forEach((fn) => fn());
                };
            });
        };

        // Run after hydration so ScrollTrigger does not modify DOM before React reconciles
        rafId = requestAnimationFrame(() => {
            rafId = null;
            init();
        });

        return () => {
            mounted = false;
            if (rafId !== null) cancelAnimationFrame(rafId);
            matchMediaRef.current?.revert();
            matchMediaRef.current = null;
        };
    }, []);

    return null;
}
