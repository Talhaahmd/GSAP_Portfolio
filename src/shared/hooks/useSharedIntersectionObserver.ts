import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement | null>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, Set<(entry: IntersectionObserverEntry) => void>>();

const canUseIntersectionObserver = () => typeof window !== "undefined" && "IntersectionObserver" in window;

const createSharedObserver = (options: IntersectionObserverOptions = {}) => {
  if (!canUseIntersectionObserver()) return null;
  if (sharedObserver) return sharedObserver;

  sharedObserver = new window.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const callbacks = observerCallbacks.get(entry.target);
      callbacks?.forEach((cb) => cb(entry));
    });
  }, options);

  return sharedObserver;
};

export function useSharedIntersectionObserver(options: IntersectionObserverOptions = {}): UseIntersectionObserverReturn {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const observer = useMemo(() => createSharedObserver(options), [options]);

  const callback = useCallback((nextEntry: IntersectionObserverEntry) => {
    setIsIntersecting(nextEntry.isIntersecting);
    setEntry(nextEntry);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !observer) return;

    if (!observerCallbacks.has(element)) observerCallbacks.set(element, new Set());
    observerCallbacks.get(element)!.add(callback);
    observer.observe(element);

    return () => {
      const callbacks = observerCallbacks.get(element);
      if (!callbacks) return;
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        observerCallbacks.delete(element);
        observer.unobserve(element);
      }
    };
  }, [observer, callback]);

  return { ref, isIntersecting, entry };
}

