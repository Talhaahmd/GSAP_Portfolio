import { useEffect } from "react";

/**
 * Vanilla port of `jquery.carouselTicker.min.js`. Drives every
 * `.carouselTicker` block on the page as an infinite horizontal marquee:
 *
 * - `.carouselTicker-left`  → content scrolls right→left (direction "prev")
 * - `.carouselTicker-right` → content scrolls left→right (direction "next")
 *
 * Items in the inner `<ul>` are cloned once for seamless loop. The list `left`
 * is animated by `setInterval` and reset on each full cycle.
 */
export default function CarouselTickerEffect() {
    useEffect(() => {
        const tickers = document.querySelectorAll<HTMLElement>(".carouselTicker");
        if (!tickers.length) return;

        const SPEED = 1;
        const DELAY = 40;
        const cleanups: Array<() => void> = [];

        tickers.forEach((ticker) => {
            const list = ticker.querySelector<HTMLElement>(":scope > ul");
            if (!list) return;
            const items = Array.from(list.querySelectorAll<HTMLElement>(":scope > li"));
            if (!items.length) return;

            const direction: "prev" | "next" = ticker.classList.contains("carouselTicker-right") ? "next" : "prev";
            const directionSwitcher = direction === "prev" ? -1 : 1;

            // Sum the width of original items (margins included).
            let itemsWidth = 0;
            items.forEach((item) => {
                const cs = window.getComputedStyle(item);
                const ml = parseFloat(cs.marginLeft) || 0;
                const mr = parseFloat(cs.marginRight) || 0;
                itemsWidth += item.getBoundingClientRect().width + ml + mr;
            });

            const parent = ticker.parentElement;
            const containerWidth = parent ? parent.getBoundingClientRect().width : 0;
            if (itemsWidth <= containerWidth || itemsWidth === 0) return;

            // Clone items for seamless loop and append.
            const clones: HTMLElement[] = items.map((item) => {
                const clone = item.cloneNode(true) as HTMLElement;
                clone.classList.add("carouselTicker__clone");
                list.appendChild(clone);
                return clone;
            });

            // Wrap list with overflow-hidden so the absolute-positioned items stay clipped.
            const wrap = document.createElement("div");
            wrap.className = "carouselTicker__wrap";
            wrap.style.position = "relative";
            wrap.style.overflow = "hidden";
            wrap.style.userSelect = "none";
            wrap.style.width = `${containerWidth}px`;
            list.parentNode?.insertBefore(wrap, list);
            wrap.appendChild(list);

            const prevListInline = list.style.cssText;
            list.style.position = "relative";
            list.style.width = `${2 * itemsWidth}px`;
            list.style.left = "0px";

            let leftPos = 0;
            let intervalId: number | null = null;

            const tick = () => {
                leftPos += directionSwitcher * SPEED;
                if (direction === "prev" && Math.abs(leftPos) >= itemsWidth) {
                    leftPos = 0;
                } else if (direction === "next" && leftPos >= 0) {
                    leftPos = -itemsWidth;
                }
                list.style.left = `${leftPos}px`;
            };

            const start = () => {
                if (intervalId !== null) return;
                intervalId = window.setInterval(tick, DELAY);
            };
            const stop = () => {
                if (intervalId !== null) {
                    window.clearInterval(intervalId);
                    intervalId = null;
                }
            };

            ticker.addEventListener("mouseenter", stop);
            ticker.addEventListener("mouseleave", start);

            // Pause when the ticker is offscreen — no point animating hidden elements.
            const io = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) start();
                else stop();
            });
            io.observe(ticker);

            cleanups.push(() => {
                stop();
                io.disconnect();
                ticker.removeEventListener("mouseenter", stop);
                ticker.removeEventListener("mouseleave", start);
                clones.forEach((c) => c.remove());
                if (wrap.parentNode) {
                    wrap.parentNode.insertBefore(list, wrap);
                    wrap.remove();
                }
                list.style.cssText = prevListInline;
            });
        });

        return () => {
            cleanups.forEach((fn) => fn());
        };
    }, []);

    return null;
}
