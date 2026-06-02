import { useEffect } from "react";

export default function CursorTrailEffect() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/scripts/cursor-trail.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
