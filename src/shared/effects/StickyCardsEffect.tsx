import { useEffect } from "react";

export default function StickyCardsEffect() {
    useEffect(() => {
        let mounted = true;
        let triggers: Array<{ kill: () => void }> = [];

        (async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (!mounted) return;

            const containers = document.querySelectorAll<HTMLElement>(".sec-4-home-15__cards");
            if (!containers.length) return;

            containers.forEach((container) => {
                const cards = Array.from(container.querySelectorAll<HTMLElement>(".sec-4-home-15__card"));
                const totalCards = cards.length;
                if (totalCards < 2) return;

                const lastIndex = totalCards - 1;
                const segmentSize = 1 / totalCards;
                const cardYOffset = 5;
                const cardScaleStep = 0.075;

                cards.forEach((card, i) => {
                    gsap.set(card, {
                        xPercent: -50,
                        yPercent: -50 + i * cardYOffset,
                        scale: 1 - i * cardScaleStep,
                    });
                });

                const trigger = ScrollTrigger.create({
                    trigger: container,
                    start: "top top",
                    end: () => `+=${window.innerHeight * Math.max(totalCards - 1, 1) * 1.1}px`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const activeIndex = Math.min(Math.floor(progress / segmentSize), lastIndex);
                        const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

                        cards.forEach((card, i) => {
                            if (i < activeIndex) {
                                gsap.set(card, { yPercent: -250, rotationX: 35 });
                            } else if (i === activeIndex) {
                                if (i === lastIndex) {
                                    gsap.set(card, { yPercent: -50, rotationX: 0, scale: 1 });
                                } else {
                                    gsap.set(card, {
                                        yPercent: gsap.utils.interpolate(-50, -200, segProgress),
                                        rotationX: gsap.utils.interpolate(0, 35, segProgress),
                                        scale: 1,
                                    });
                                }
                            } else {
                                const behindIndex = i - activeIndex;
                                const currentYOffset = (behindIndex - segProgress) * cardYOffset;
                                const currentScale = 1 - (behindIndex - segProgress) * cardScaleStep;
                                gsap.set(card, {
                                    yPercent: -50 + currentYOffset,
                                    rotationX: 0,
                                    scale: currentScale,
                                });
                            }
                        });
                    },
                });
                triggers.push(trigger);
            });
        })();

        return () => {
            mounted = false;
            triggers.forEach((t) => t.kill());
            triggers = [];
        };
    }, []);

    return null;
}
