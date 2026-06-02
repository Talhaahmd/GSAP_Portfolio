import { useEffect } from "react";

export type SlideshowVariant =
    | "cinema"
    | "curtain"
    | "horizontal"
    | "split"
    | "stack"
    | "vista"
    | "zstack";

export default function useSlideshowScript(variant: SlideshowVariant) {
    useEffect(() => {
        let cancelled = false;

        (async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            (window as Window & { gsap?: unknown; ScrollTrigger?: unknown }).gsap = gsap;
            (window as Window & { gsap?: unknown; ScrollTrigger?: unknown }).ScrollTrigger = ScrollTrigger;
            if (cancelled) return;

            const src = `/assets/scripts/slideshow-${variant}.js`;
            // Always re-execute the slideshow IIFE so it runs against the
            // currently-mounted DOM. Variants that build slides once (e.g.
            // horizontal) cannot recover if a previous run targeted a detached
            // node — dedup-and-skip would leave the new track empty.
            document
                .querySelectorAll<HTMLScriptElement>(`script[data-slideshow-src="${src}"]`)
                .forEach((el) => el.remove());

            const s = document.createElement("script");
            s.src = src;
            s.async = false;
            s.dataset.slideshowSrc = src;
            document.body.appendChild(s);
        })();

        return () => {
            cancelled = true;
        };
    }, [variant]);
}
