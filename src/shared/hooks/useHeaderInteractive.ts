import { useState, useEffect } from "react";
import useSidebarMenu from "@/shared/hooks/useSidebarMenu";

const SEARCH_TRIGGER_SELECTOR = ".at-search-click, .search-btn";
const HEADER_STICKY_ID = "header-sticky";
const SCROLL_THRESHOLD = 20;

/** Default: both navbar-toggler (e.g. in sidebar) and at-header-sidebar-btn (header button) open the sidebar */
const DEFAULT_SIDEBAR_TOGGLE_SELECTOR = ".navbar-toggler, .at-header-sidebar-btn";

export interface UseHeaderInteractiveOptions {
    /** CSS selector(s) for element(s) that open the sidebar. Default covers all header variants. */
    sidebarToggleSelector?: string;
}

/**
 * Shared hook for header interactive behavior: search popup, sticky menu on scroll, sidebar open.
 * Used by Header1, Header2, Header3 so logic lives in one place (easier maintenance, single bundle path).
 */
export function useHeaderInteractive(options: UseHeaderInteractiveOptions = {}) {
    const { sidebarToggleSelector = DEFAULT_SIDEBAR_TOGGLE_SELECTOR } = options;
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { toggleSidebar } = useSidebarMenu();

    // Search: open popup when .at-search-click or .search-btn is clicked
    useEffect(() => {
        const handleSearchClick = (e: Event) => {
            e.preventDefault();
            setIsSearchOpen(true);
        };

        const trigger = document.querySelector(SEARCH_TRIGGER_SELECTOR);
        if (trigger) {
            trigger.addEventListener("click", handleSearchClick);
        }
        return () => {
            if (trigger) trigger.removeEventListener("click", handleSearchClick);
        };
    }, []);

    // Sticky: toggle .header-sticky on #header-sticky by scroll position
    useEffect(() => {
        const el = document.getElementById(HEADER_STICKY_ID);
        if (!el) return;

        const handleScroll = () => {
            const scrollY = window.scrollY ?? window.pageYOffset;
            if (scrollY < SCROLL_THRESHOLD) {
                el.classList.remove("header-sticky");
            } else {
                el.classList.add("header-sticky");
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sidebar: open when any sidebar toggle button is clicked (e.g. .navbar-toggler, .at-header-sidebar-btn)
    useEffect(() => {
        const toggles = document.querySelectorAll(sidebarToggleSelector);
        const handleToggle = (e: Event) => {
            e.preventDefault();
            toggleSidebar(true);
        };

        toggles.forEach((el) => el.addEventListener("click", handleToggle));
        return () => {
            toggles.forEach((el) => el.removeEventListener("click", handleToggle));
        };
    }, [sidebarToggleSelector, toggleSidebar]);

    // Inline menu: hamburger button (.at-header-menu-btn) toggles `.is-menu-open` on its
    // closest <header>. SCSS reveals #header7Nav / #header10Nav inline menus when the class
    // is present (mirrors `main.js` 08.x Header 7 inline menu toggle).
    useEffect(() => {
        const buttons = document.querySelectorAll<HTMLButtonElement>(".at-header-menu-btn");
        const handleToggle = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLButtonElement;
            const header = btn.closest("header");
            if (!header) return;
            const isOpen = header.classList.contains("is-menu-open");
            header.classList.toggle("is-menu-open", !isOpen);
            btn.setAttribute("aria-expanded", String(!isOpen));
        };

        buttons.forEach((btn) => btn.addEventListener("click", handleToggle));
        return () => {
            buttons.forEach((btn) => btn.removeEventListener("click", handleToggle));
        };
    }, []);

    return {
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
    };
}
