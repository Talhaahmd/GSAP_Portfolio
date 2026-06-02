import { useEffect } from "react";

/** Applies data-background URLs as inline background-image on the client. */
export function useDataBackground() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-background]");
    elements.forEach((element) => {
      const bgUrl = element.getAttribute("data-background");
      if (bgUrl) element.style.backgroundImage = `url(${bgUrl})`;
    });
  }, []);
}

