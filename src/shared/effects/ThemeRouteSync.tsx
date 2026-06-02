import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const isDarkPath = (path: string) => /-dark\/?$/.test(path);

export default function ThemeRouteSync() {
    const pathname = useLocation().pathname;

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkPath(pathname)) {
            html.setAttribute("data-bs-theme", "dark");
            return;
        }
        let theme: string | null = null;
        try {
            theme = localStorage.getItem("theme");
        } catch {
            /* ignore */
        }
        if (theme === "light" || theme === "dark") {
            html.setAttribute("data-bs-theme", theme);
        } else {
            html.setAttribute("data-bs-theme", "light");
        }
    }, [pathname]);

    return null;
}
