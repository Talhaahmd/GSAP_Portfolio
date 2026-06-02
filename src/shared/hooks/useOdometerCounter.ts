import { useCallback, useEffect, useRef, useState } from "react";
import { useSharedIntersectionObserver } from "@/shared/hooks/useSharedIntersectionObserver";

interface UseOdometerCounterProps {
  dataCount: number;
  duration?: number;
}

const DEFAULT_DURATION = 1000;

const resolveDuration = (value?: number) => {
  if (typeof value !== "number" || Number.isNaN(value) || value <= 0) return DEFAULT_DURATION;
  return value;
};

export const useOdometerCounter = ({ dataCount, duration }: UseOdometerCounterProps) => {
  const [isCounted, setIsCounted] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const previousCountRef = useRef<number>(dataCount);

  const { ref, isIntersecting } = useSharedIntersectionObserver({ threshold: 0.4 });

  const stopAnimation = useCallback(() => {
    if (animationRef.current !== null) {
      window.cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const animateCounter = useCallback(() => {
    if (isCounted) return;

    const targetValue = Number.isFinite(dataCount) ? dataCount : 0;
    const resolvedDuration = resolveDuration(duration);
    let startTimestamp: number | null = null;

    const element = ref.current;
    element?.classList.add("odometer-animated");

    setIsCounted(true);
    setCurrentValue(0);

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = resolvedDuration === 0 ? 1 : Math.min(elapsed / resolvedDuration, 1);
      const nextValue = progress >= 1 ? targetValue : Math.round(targetValue * progress);
      setCurrentValue(nextValue);
      if (progress < 1) animationRef.current = window.requestAnimationFrame(step);
      else animationRef.current = null;
    };

    stopAnimation();
    animationRef.current = window.requestAnimationFrame(step);
  }, [dataCount, duration, isCounted, ref, stopAnimation]);

  useEffect(() => {
    if (previousCountRef.current !== dataCount) {
      previousCountRef.current = dataCount;
      queueMicrotask(() => {
        setIsCounted(false);
        setCurrentValue(0);
      });
    }
  }, [dataCount]);

  useEffect(() => {
    if (isIntersecting && !isCounted) queueMicrotask(animateCounter);
  }, [isIntersecting, isCounted, animateCounter]);

  useEffect(() => () => stopAnimation(), [stopAnimation]);

  return { ref, currentValue, isCounted, targetValue: Number.isFinite(dataCount) ? dataCount : 0 };
};

