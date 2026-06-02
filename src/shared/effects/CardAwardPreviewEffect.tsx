import { useEffect } from "react";

const PREVIEW_SELECTOR = ".card-award-preview.card-award-hover-preview";
const CARD_SELECTOR = ".card-award";
const OFFSET_X = 18;
const OFFSET_Y = 18;
const HIDE_DELAY = 120;
const MOBILE_BREAKPOINT = 768;

type GsapQuickTo = (value: number) => void;

function getRotateOptions(card: Element): { isReversed: boolean; rotation: number } {
  const rotateAttr = card.getAttribute("data-rotate");
  if (!rotateAttr) return { isReversed: false, rotation: -15 };
  const match = rotateAttr.match(/positive-(\d+)deg/i) || rotateAttr.match(/(\d+)deg/i);
  const deg = match ? parseInt(match[1], 10) : 15;
  const isPositive = /positive/i.test(rotateAttr);
  return { isReversed: isPositive, rotation: isPositive ? deg : -deg };
}

/**
 * Port of 3.Orisa-Nextjs/components/effects/CardAwardPreviewEffect.tsx / theme main.js §14.
 * Desktop: hover `.card-award` shows fixed `.card-award-preview` with large image from `data-img-award`,
 * follows cursor via gsap.quickTo, rotation default -15deg (override with `data-rotate` on the card).
 */
export default function CardAwardPreviewEffect() {
  useEffect(() => {
    let mounted = true;
    let dispose: (() => void) | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      if (!mounted) return;

      const cards = document.querySelectorAll<HTMLElement>(CARD_SELECTOR);
      if (!cards.length) return;

      let preview = document.querySelector<HTMLDivElement>(PREVIEW_SELECTOR);
      if (!preview) {
        preview = document.createElement("div");
        preview.className = "card-award-preview card-award-hover-preview";
        const previewImg = document.createElement("img");
        previewImg.src = "";
        previewImg.alt = "";
        preview.appendChild(previewImg);
        document.body.appendChild(preview);
      }
      const img = preview.querySelector("img");
      if (!img) return;

      let xTo: GsapQuickTo | null = null;
      let yTo: GsapQuickTo | null = null;
      let curCard: Element | null = null;
      let hideTimeout: ReturnType<typeof setTimeout> | null = null;
      const listeners: Array<{ card: HTMLElement; events: Array<[string, EventListener]> }> = [];

      function updatePosition(e: MouseEvent) {
        if (!xTo || !yTo || !curCard) return;
        const opts = getRotateOptions(curCard);
        const x = opts.isReversed ? e.clientX - OFFSET_X : e.clientX + OFFSET_X;
        xTo(x);
        yTo(e.clientY + OFFSET_Y);
      }

      function scheduleHide() {
        if (hideTimeout) clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          hideTimeout = null;
          const opts = curCard ? getRotateOptions(curCard) : { isReversed: false };
          curCard = null;
          gsap.to(preview, {
            opacity: 0,
            scale: opts.isReversed ? 1.2 : 0,
            duration: 0.28,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(preview, { visibility: "hidden" });
            },
          });
        }, HIDE_DELAY);
      }

      function showPreview(card: Element, e: MouseEvent) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
        const src = card.getAttribute("data-img-award");
        if (!src) return;
        curCard = card;
        img.src = src;
        const titleEl = card.querySelector(".card-award-title");
        img.alt = titleEl?.textContent?.trim() ?? "Award";
        const opts = getRotateOptions(card);

        if (opts.isReversed) {
          gsap.set(preview, {
            visibility: "visible",
            transformOrigin: "right bottom",
            rotation: opts.rotation,
            x: e.clientX - OFFSET_X,
            y: e.clientY + OFFSET_Y,
            xPercent: -100,
            yPercent: -100,
            scale: 0,
            opacity: 0,
          });
          if (!xTo) xTo = gsap.quickTo(preview, "x", { duration: 0.35, ease: "power2.out" });
          if (!yTo) yTo = gsap.quickTo(preview, "y", { duration: 0.35, ease: "power2.out" });
          gsap.to(preview, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.15)",
          });
        } else {
          gsap.set(preview, {
            visibility: "visible",
            transformOrigin: "left bottom",
            rotation: opts.rotation,
            x: e.clientX + OFFSET_X,
            y: e.clientY + OFFSET_Y,
            xPercent: 0,
            yPercent: -100,
            scale: 0,
            opacity: 0,
          });
          if (!xTo) xTo = gsap.quickTo(preview, "x", { duration: 0.35, ease: "power2.out" });
          if (!yTo) yTo = gsap.quickTo(preview, "y", { duration: 0.35, ease: "power2.out" });
          gsap.to(preview, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.15)",
          });
        }
      }

      cards.forEach((card) => {
        const src = card.getAttribute("data-img-award");
        if (!src) return;

        const onEnter = (e: Event) => {
          if (typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT) return;
          showPreview(card, e as MouseEvent);
          card.addEventListener("mousemove", updatePosition);
        };

        const onLeave = (e: Event) => {
          card.removeEventListener("mousemove", updatePosition);
          const related = (e as MouseEvent).relatedTarget;
          const isEnteringCard = related instanceof Element && related.closest(CARD_SELECTOR);
          if (isEnteringCard) return;
          scheduleHide();
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        listeners.push({
          card,
          events: [
            ["mouseenter", onEnter],
            ["mouseleave", onLeave],
          ],
        });
      });

      dispose = () => {
        if (hideTimeout) clearTimeout(hideTimeout);
        listeners.forEach(({ card, events }) => {
          card.removeEventListener("mousemove", updatePosition);
          events.forEach(([ev, fn]) => card.removeEventListener(ev, fn));
        });
        gsap.killTweensOf(preview);
        const el = document.querySelector(PREVIEW_SELECTOR);
        if (el?.parentNode) el.parentNode.removeChild(el);
        dispose = null;
      };
    };

    void init();

    return () => {
      mounted = false;
      dispose?.();
    };
  }, []);

  return null;
}
