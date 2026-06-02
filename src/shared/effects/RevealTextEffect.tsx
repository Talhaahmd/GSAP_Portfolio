import { useEffect, useRef } from "react";

const REVEAL_SELECTOR = ".reveal-text";
const CHAR_SELECTOR = ".split-char";
const TITLE_TEXT_SELECTOR = ".at-title-text";
const TITLE_TEXT_DONE_ATTR = "data-at-title-text-done";
const TEXT_SCALE_ANIM_SELECTOR = ".text-scale-anim";
const TEXT_SCALE_ANIM_2_SELECTOR = ".text-scale-anim-2";
const TEXT_SCALE_DONE_ATTR = "data-text-scale-anim-done";
const TEXT_SCALE_2_DONE_ATTR = "data-text-scale-anim-2-done";

type ScrollTriggerInstance = { kill?: () => void };

type TextScaleParams = {
  center: { scaleY: number; y: string };
  neighbor: { scaleY: number; y: string };
};

function wrapHeadingInWordLetterSpans(heading: HTMLElement): void {
  const textNodes: Node[] = [];
  heading.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent?.split(" ") ?? [];
      words.forEach((word, index, array) => {
        const wordSpan = document.createElement("span");
        wordSpan.classList.add("at-word-span");
        word.split("").forEach((letter) => {
          const letterSpan = document.createElement("span");
          letterSpan.classList.add("at-letter-span");
          letterSpan.textContent = letter;
          wordSpan.appendChild(letterSpan);
        });
        textNodes.push(wordSpan);
        if (index < array.length - 1) textNodes.push(document.createTextNode(" "));
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      textNodes.push(node.cloneNode(true));
    }
  });
  heading.innerHTML = "";
  textNodes.forEach((node) => heading.appendChild(node));
}

function initTextScaleAnim(
  gsap: { to: (target: Element, vars: object) => unknown },
  selector: string,
  doneAttr: string,
  params: TextScaleParams,
): () => void {
  const headings = document.querySelectorAll<HTMLElement>(selector);
  const cleanups: Array<() => void> = [];

  headings.forEach((heading) => {
    if (!heading) return;
    if (heading.hasAttribute(doneAttr) || heading.querySelector(".at-letter-span")) return;

    wrapHeadingInWordLetterSpans(heading);
    heading.setAttribute(doneAttr, "true");

    const letters = heading.querySelectorAll<HTMLElement>(".at-letter-span");
    letters.forEach((letter, index) => {
      const onEnter = () => {
        gsap.to(letter, { scaleY: params.center.scaleY, y: params.center.y, duration: 0.4, ease: "sine" });
        const prev = letters[index - 1];
        if (prev) gsap.to(prev, { scaleY: params.neighbor.scaleY, y: params.neighbor.y, duration: 0.4, ease: "sine" });
        const next = letters[index + 1];
        if (next) gsap.to(next, { scaleY: params.neighbor.scaleY, y: params.neighbor.y, duration: 0.4, ease: "sine" });
      };
      const onLeave = () => {
        gsap.to(letter, { scaleY: 1, y: "0%", duration: 0.4, ease: "sine" });
        [letters[index - 1], letters[index + 1]].forEach((el) => {
          if (el) gsap.to(el, { scaleY: 1, y: "0%", duration: 0.4, ease: "sine" });
        });
      };
      letter.addEventListener("mouseenter", onEnter);
      letter.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        letter.removeEventListener("mouseenter", onEnter);
        letter.removeEventListener("mouseleave", onLeave);
      });
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

function initTitleText() {
  const titleElements = document.querySelectorAll<HTMLElement>(TITLE_TEXT_SELECTOR);
  titleElements.forEach((textEl) => {
    if (textEl.hasAttribute(TITLE_TEXT_DONE_ATTR)) return;
    const text = textEl.textContent?.trim() ?? "";
    textEl.setAttribute("aria-label", text);
    const html = [...text]
      .map((char, i) => {
        const safeChar = char === " " ? "\u00A0" : char;
        return `<span class="char" aria-hidden="true" style="--char:${i + 1}">${safeChar}</span>`;
      })
      .join("");
    textEl.innerHTML = html;
    textEl.setAttribute(TITLE_TEXT_DONE_ATTR, "true");
  });
}

export default function RevealTextEffect() {
  const triggersRef = useRef<ScrollTriggerInstance[]>([]);
  const textScaleCleanupsRef = useRef<Array<() => void>>([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted) return;

      const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
      const triggers: ScrollTriggerInstance[] = [];

      elements.forEach((el) => {
        if (el.hasAttribute("data-reveal-text-done")) return;
        const chars = Array.from(el.querySelectorAll<HTMLElement>(CHAR_SELECTOR));
        if (chars.length === 0) return;

        el.setAttribute("data-reveal-text-done", "true");

        gsap.set(chars, { opacity: 0.3, x: -7 });

        const anim = gsap.to(chars, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.02,
          scrollTrigger: { trigger: el, start: "top 80%", end: "top 20%", scrub: 1 },
        });

        if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
      });

      triggersRef.current = triggers;

      const cleanupTextScale = initTextScaleAnim(gsap, TEXT_SCALE_ANIM_SELECTOR, TEXT_SCALE_DONE_ATTR, {
        center: { scaleY: 1.6, y: "-24%" },
        neighbor: { scaleY: 1.3, y: "-12%" },
      });

      const cleanupTextScale2 = initTextScaleAnim(gsap, TEXT_SCALE_ANIM_2_SELECTOR, TEXT_SCALE_2_DONE_ATTR, {
        center: { scaleY: 1.3, y: "-14%" },
        neighbor: { scaleY: 1.1, y: "-5%" },
      });

      textScaleCleanupsRef.current = [cleanupTextScale, cleanupTextScale2];
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initTitleText();
        init();
      });
    });

    return () => {
      mounted = false;
      triggersRef.current.forEach((t) => t.kill?.());
      triggersRef.current = [];
      textScaleCleanupsRef.current.forEach((fn) => fn());
      textScaleCleanupsRef.current = [];
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => el.removeAttribute("data-reveal-text-done"));
      document.querySelectorAll(TITLE_TEXT_SELECTOR).forEach((el) => el.removeAttribute(TITLE_TEXT_DONE_ATTR));
      document.querySelectorAll(TEXT_SCALE_ANIM_SELECTOR).forEach((el) => el.removeAttribute(TEXT_SCALE_DONE_ATTR));
      document.querySelectorAll(TEXT_SCALE_ANIM_2_SELECTOR).forEach((el) => el.removeAttribute(TEXT_SCALE_2_DONE_ATTR));
    };
  }, []);

  return null;
}

