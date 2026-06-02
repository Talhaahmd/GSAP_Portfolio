import { useEffect, useRef } from "react";

const SELECTOR = ".scale-img-from-to";
const DEFAULT_VALUE_1 = 1.5;
const DEFAULT_VALUE_2 = 1;
const VIEWPORT_MAX_WIDTH = 1200;
const MIN_SCALE_MOBILE = 0.95;

type GsapTween = { kill?: () => void };

/**
 * GSAP ScrollTrigger effect for .scale-img-from-to:
 * Animates scale from data-value-1 to data-value-2 on scroll (scrub).
 * On viewport &lt; 1200px, start scale is clamped to at least 0.95.
 *
 * Add once in layout (e.g. app/layout or a section that contains scale-img-from-to).
 *
 * Usage in JSX:
 *   <span className="scale-img-from-to" data-value-1="1.5" data-value-2="1">
 *     <img ... loading="lazy" />
 *   </span>
 */
export default function ScaleImageScrollEffect() {
    const tweensRef = useRef<GsapTween[]>([]);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;

        let mounted = true;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            const scaleImage = document.querySelectorAll<HTMLElement>(SELECTOR);
            const tweens: GsapTween[] = [];

            scaleImage.forEach((section) => {
                if (!section) return;

                let value1 = parseFloat(section.getAttribute("data-value-1") ?? "") || DEFAULT_VALUE_1;
                const value2 = parseFloat(section.getAttribute("data-value-2") ?? "") || DEFAULT_VALUE_2;

                if (typeof window !== "undefined" && window.innerWidth < VIEWPORT_MAX_WIDTH) {
                    value1 = Math.max(MIN_SCALE_MOBILE, value1);
                }

                const tween = gsap.fromTo(
                    section,
                    {
                        ease: "sine",
                        scale: value1,
                    },
                    {
                        scale: value2,
                        scrollTrigger: {
                            trigger: section,
                            scrub: true,
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                if (tween) tweens.push(tween);
            });

            tweensRef.current = tweens;
            if (mounted) {
                initialized.current = true;
            }
        };

        init();

        return () => {
            mounted = false;
            tweensRef.current.forEach((t) => t.kill?.());
            tweensRef.current = [];
        };
    }, []);

    return null;
}
