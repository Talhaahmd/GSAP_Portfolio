import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("light");
    const [isMounted, setIsMounted] = useState(false);

    // Persist + apply — only called from user actions (toggle / setThemeMode).
    // Visiting /index-*-dark must NOT auto-write to localStorage; the URL-forced
    // dark theme is applied by theme-init.js / ThemeRouteSync to data-bs-theme only.
    const persistTheme = useCallback((newTheme: Theme) => {
        if (typeof window === "undefined") return;
        try {
            document.documentElement.setAttribute("data-bs-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        } catch (error) {
            console.warn("Error applying theme:", error);
        }
    }, []);

    useEffect(() => {
        // Read the current theme from the DOM (set by theme-init.js / ThemeRouteSync).
        // No write to localStorage here.
        const readCurrent = (): Theme => {
            if (typeof window === "undefined") return "light";
            try {
                const applied = document.documentElement.getAttribute("data-bs-theme") as Theme | null;
                if (applied === "light" || applied === "dark") return applied;
                const stored = localStorage.getItem("theme") as Theme | null;
                if (stored === "light" || stored === "dark") return stored;
                return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            } catch {
                return "light";
            }
        };

        queueMicrotask(() => {
            setIsMounted(true);
            setTheme(readCurrent());
        });

        // Keep React state in sync when another source (e.g. ThemeRouteSync on
        // client-side route changes) mutates the attribute.
        const observer = new MutationObserver(() => {
            const applied = document.documentElement.getAttribute("data-bs-theme") as Theme | null;
            if (applied === "light" || applied === "dark") {
                setTheme((prev) => (prev === applied ? prev : applied));
            }
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme"] });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        persistTheme(newTheme);
    };

    const setThemeMode = (newTheme: Theme) => {
        setTheme(newTheme);
        persistTheme(newTheme);
    };

    return {
        theme,
        isMounted,
        toggleTheme,
        setThemeMode,
        isDark: theme === "dark",
        isLight: theme === "light",
    };
};
