import React from "react";
import MarqueeLib from "react-fast-marquee";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
};

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className,
}) => {
  return (
    <MarqueeLib direction={direction} speed={speed} pauseOnHover={pauseOnHover} className={className}>
      {children}
    </MarqueeLib>
  );
};

export default Marquee;
