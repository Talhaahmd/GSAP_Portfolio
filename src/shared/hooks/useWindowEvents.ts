import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const updateScrollInfo = () => {
      setScrollY(window.scrollY);
      setScrollHeight(document.documentElement.scrollHeight);
      setClientHeight(document.documentElement.clientHeight);
    };

    updateScrollInfo();
    window.addEventListener("scroll", updateScrollInfo, { passive: true });
    window.addEventListener("resize", updateScrollInfo);

    return () => {
      window.removeEventListener("scroll", updateScrollInfo);
      window.removeEventListener("resize", updateScrollInfo);
    };
  }, []);

  return { scrollY, scrollHeight, clientHeight };
}

export function useScrollToTop() {
  return () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

