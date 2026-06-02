import { useEffect, useRef } from "react";

type Killable = { kill?: () => void };

const LOGO_HEIGHT_MOBILE = 60;
const LOGO_HEIGHT_DESKTOP = 70;

/**
 * Auto-scroll brand logos inside `.at-brand-scroll .at-brand-item .brand`:
 * wrap slides in viewport/track, shuffle order, clone first slide, and run an
 * infinite GSAP timeline (pause → scroll to next → reset).
 *
 * Direct port of `3.Orisa-Nextjs/components/effects/AtBrandScrollEffect.tsx`.
 */
export default function AtBrandScrollEffect() {
  const timelinesRef = useRef<Killable[]>([]);

  useEffect(() => {
    let mounted = true;
    let rafId: number | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;

      if (!mounted) return;

      const brandElements = document.querySelectorAll<HTMLElement>(".at-brand-scroll .at-brand-item .brand");
      const isMobile = window.matchMedia("(max-width: 991px)").matches;
      const LOGO_HEIGHT = isMobile ? LOGO_HEIGHT_MOBILE : LOGO_HEIGHT_DESKTOP;
      const timelines: Killable[] = [];

      brandElements.forEach((brandEl) => {
        if (brandEl.dataset.brandScrollInit) return;

        const slides = Array.from(brandEl.querySelectorAll<HTMLElement>(".brand-logo-slide"));
        if (!slides.length) return;

        const viewport = document.createElement("div");
        viewport.className = "brand-logo-viewport";
        const track = document.createElement("div");
        track.className = "brand-logo-track";

        brandEl.insertBefore(viewport, slides[0]);
        viewport.appendChild(track);

        const shuffled = slides.slice().sort(() => Math.random() - 0.5);
        shuffled.forEach((s) => track.appendChild(s));
        const clone = shuffled[0].cloneNode(true) as HTMLElement;
        track.appendChild(clone);

        gsap.set(track, { y: 0 });

        const initialDelay = Math.random() * 1.5;
        const scrollDuration = 1;
        const pauseDuration = 1 + Math.random() * 0.8;
        const tl = gsap.timeline({ repeat: -1 });

        tl.to({}, { duration: initialDelay });
        for (let i = 0; i < shuffled.length; i++) {
          tl.to({}, { duration: pauseDuration });
          const yNext = -(i + 1) * LOGO_HEIGHT;
          tl.to(track, { y: yNext, duration: scrollDuration, ease: "power2.inOut" });
        }
        tl.add(() => {
          gsap.set(track, { y: 0 });
        });

        timelines.push(tl);
        brandEl.dataset.brandScrollInit = "true";
      });

      timelinesRef.current = timelines;
    };

    rafId = requestAnimationFrame(() => {
      rafId = null;
      void init();
    });

    return () => {
      mounted = false;
      if (rafId !== null) cancelAnimationFrame(rafId);
      timelinesRef.current.forEach((tl) => tl.kill?.());
      timelinesRef.current = [];
    };
  }, []);

  return null;
}
