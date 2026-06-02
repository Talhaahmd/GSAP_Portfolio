import { useScrollPosition, useScrollToTop } from "@/shared/hooks/useWindowEvents";

export function useBackToTop() {
  const { scrollY } = useScrollPosition();
  const scrollToTop = useScrollToTop();
  const isVisible = scrollY > 100;
  return { isVisible, scrollToTop };
}

