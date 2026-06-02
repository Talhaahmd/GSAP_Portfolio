import { ReactNode, useMemo } from "react";
import { useOdometerCounter } from "@/shared/hooks/useOdometerCounter";

interface OdometerCounterProps {
  count: number;
  duration?: number;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  renderValue?: (value: number, targetValue: number) => ReactNode;
}

const ensureOdometerClass = (className?: string) => {
  if (!className) return "odometer";
  const segments = className.split(" ").filter(Boolean);
  if (segments.includes("odometer")) return segments.join(" ");
  return ["odometer", ...segments].join(" ");
};

export default function OdometerCounter({ count, duration, className, prefix, suffix, renderValue }: OdometerCounterProps) {
  const resolvedCount = Number.isFinite(count) ? count : Number(count) || 0;

  const { ref, currentValue, targetValue } = useOdometerCounter({
    dataCount: resolvedCount,
    duration,
  });

  const composedClassName = useMemo(() => ensureOdometerClass(className), [className]);
  const displayContent = renderValue ? renderValue(currentValue, targetValue) : currentValue.toString();

  return (
    <span
      ref={ref}
      className={composedClassName}
      data-count={targetValue}
      data-duration={duration}
      role="meter"
      aria-valuemin={0}
      aria-valuemax={targetValue}
      aria-valuenow={currentValue}
    >
      {prefix ?? null}
      {displayContent}
      {suffix ?? null}
    </span>
  );
}

