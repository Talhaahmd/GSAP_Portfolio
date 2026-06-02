import { ReactNode, useEffect, useRef } from "react";

const SERVICE_ITEM_SELECTOR = ".service-item";
const HOVER_IMAGE_SELECTOR = ".hover-image";

interface ServiceImageHoverEffectProps {
  children: ReactNode;
  className?: string;
}

export default function ServiceImageHoverEffect({ children, className }: ServiceImageHoverEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mounted = true;
    let rafId: number | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      if (!mounted) return;

      const serviceItems = container.querySelectorAll<HTMLElement>(SERVICE_ITEM_SELECTOR);
      const images = container.querySelectorAll<HTMLElement>(HOVER_IMAGE_SELECTOR);
      if (images.length === 0) return;

      gsap.set(images, { opacity: 0, y: 50, scale: 1 });
      if (images[0]) gsap.set(images[0], { opacity: 1, y: 0, zIndex: 2 });

      const handlers: Array<{ el: HTMLElement; fn: () => void }> = [];

      serviceItems.forEach((item, index) => {
        const onEnter = () => {
          serviceItems.forEach((el) => el.classList.remove("active"));
          item.classList.add("active");
          images.forEach((img, i) => {
            if (i === index) {
              gsap.to(img, { opacity: 1, y: 0, scale: 1, duration: 0.8, zIndex: 2 });
            } else {
              gsap.to(img, { opacity: 0, y: 200, duration: 0.8, zIndex: 1, scale: 0.8 });
            }
          });
        };
        item.addEventListener("mouseenter", onEnter);
        handlers.push({ el: item, fn: onEnter });
      });

      cleanupRef.current = () => {
        handlers.forEach(({ el, fn }) => el.removeEventListener("mouseenter", fn));
        gsap.killTweensOf(images);
      };
    };

    rafId = window.requestAnimationFrame(() => {
      rafId = null;
      init();
    });

    return () => {
      mounted = false;
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className={className ?? ""}>
      {children}
    </div>
  );
}

