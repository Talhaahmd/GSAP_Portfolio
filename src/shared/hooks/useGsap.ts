/**
 * Use GSAP in Next.js – safe client-side only.
 * - Use in "use client" components.
 * - Run gsap.* and registerPlugin inside useEffect or event handlers (not at top-level).
 *
 * Example:
 *   "use client";
 *   import { useEffect, useRef } from "react";
 *   import gsap from "gsap";
 *
 *   export default function MyComponent() {
 *     const el = useRef<HTMLDivElement>(null);
 *     useEffect(() => {
 *       if (!el.current) return;
 *       gsap.from(el.current, { opacity: 0, y: 20, duration: 0.6 });
 *     }, []);
 *     return <div ref={el}>...</div>;
 *   }
 */

import { useEffect } from "react";

export function useGsapScrollTrigger() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      import("gsap").then(({ gsap }) => {
        gsap.registerPlugin(ScrollTrigger);
      });
    });
  }, []);
}
