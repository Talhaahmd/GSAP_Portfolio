import { useEffect } from "react";

type WindowWithGlobals = Window & {
    gsap?: unknown;
    jQuery?: ((selector: string) => { tThrowable: () => unknown }) & {
        fn?: Record<string, unknown>;
    };
    Matter?: unknown;
};

const SCRIPTS = [
    "/assets/scripts/jquery-3.7.1.min.js",
    "/assets/scripts/matter.js",
    "/assets/scripts/throwable.js",
];

const loadScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(
            `script[data-throwable-src="${src}"]`
        );
        if (existing) {
            if (existing.dataset.loaded === "true") {
                resolve();
                return;
            }
            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener("error", () => reject(new Error(`Failed: ${src}`)), { once: true });
            return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.dataset.throwableSrc = src;
        s.addEventListener("load", () => {
            s.dataset.loaded = "true";
            resolve();
        });
        s.addEventListener("error", () => reject(new Error(`Failed: ${src}`)));
        document.body.appendChild(s);
    });

export default function ThrowableEffect() {
    useEffect(() => {
        if (!document.querySelector("[data-t-throwable-scene]")) return;

        let cancelled = false;

        (async () => {
            // throwable.js calls gsap.to / gsap.quickSetter / gsap.utils — expose globally
            const gsap = (await import("gsap")).default;
            (window as WindowWithGlobals).gsap = gsap;

            if (cancelled) return;

            try {
                for (const src of SCRIPTS) {
                    await loadScript(src);
                    if (cancelled) return;
                }
            } catch {
                return;
            }

            // throwable.js auto-inits via $(document).ready, but on client-side route
            // changes that callback may not fire — call init manually for idempotency.
            const w = window as WindowWithGlobals;
            const $ = w.jQuery;
            if ($ && $.fn && typeof $.fn.tThrowable === "function") {
                $("[data-t-throwable-scene]").tThrowable();
            }
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    return null;
}
