import { useEffect } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const pickChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

type ScrambleState = HTMLElement & { _scrambling?: boolean };

/**
 * Vanilla port of `main.js` #58 text-scramble. Each `.text-scramble` element
 * scrambles into its final text on first scroll into view (`top 90%`, once)
 * and replays on mouseenter. Whitespace, commas and periods stay fixed so
 * layout doesn't jitter during the animation.
 */
export default function TextScrambleEffect() {
    useEffect(() => {
        const targets = document.querySelectorAll<ScrambleState>(".text-scramble");
        if (!targets.length) return;

        let cancelled = false;
        const cleanups: Array<() => void> = [];

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            const scramble = (el: ScrambleState, finalText: string, duration = 1.2) => {
                if (el._scrambling) return;
                el._scrambling = true;

                const length = finalText.length;
                const queue: Array<{ from: string; to: string; start: number; end: number; char: string }> = [];
                for (let i = 0; i < length; i++) {
                    const start = Math.floor(Math.random() * (duration * 0.4) * 60);
                    const end = start + Math.floor(Math.random() * (duration * 0.6) * 60) + 6;
                    queue.push({ from: finalText[i], to: finalText[i], start, end, char: "" });
                }

                let frame = 0;
                const update = () => {
                    let output = "";
                    let complete = 0;
                    for (let i = 0; i < queue.length; i++) {
                        const q = queue[i];
                        if (frame >= q.end) {
                            complete++;
                            output += q.to;
                        } else if (frame >= q.start) {
                            if (/\s/.test(q.to) || q.to === "," || q.to === ".") {
                                output += q.to;
                            } else {
                                if (!q.char || Math.random() < 0.28) {
                                    q.char = pickChar();
                                }
                                output += q.char;
                            }
                        } else {
                            output += q.from;
                        }
                    }
                    el.textContent = output;
                    if (complete === queue.length) {
                        gsap.ticker.remove(update);
                        el._scrambling = false;
                    } else {
                        frame++;
                    }
                };

                gsap.ticker.add(update);
            };

            targets.forEach((el) => {
                const finalText = el.dataset.scrambleText || el.textContent || "";
                el.dataset.scrambleText = finalText;

                const trigger = ScrollTrigger.create({
                    trigger: el,
                    start: "top 90%",
                    once: true,
                    onEnter: () => scramble(el, finalText, 1.2),
                });
                cleanups.push(() => trigger.kill());

                const onHover = () => scramble(el, finalText, 0.9);
                el.addEventListener("mouseenter", onHover);
                cleanups.push(() => el.removeEventListener("mouseenter", onHover));
            });
        };

        init();

        return () => {
            cancelled = true;
            cleanups.forEach((fn) => fn());
        };
    }, []);

    return null;
}
