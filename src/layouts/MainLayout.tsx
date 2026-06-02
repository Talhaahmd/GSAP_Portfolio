import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import PopupSearch from "@/shared/PopupSearch";
import Header1 from "@/shared/header/Header1";
import Header2 from "@/shared/header/Header2";
import Header3 from "@/shared/header/Header3";
import Header4 from "@/shared/header/Header4";
import Header5 from "@/shared/header/Header5";
import Header7 from "@/shared/header/Header7";
import Header8 from "@/shared/header/Header8";
import Header9 from "@/shared/header/Header9";
import Header10 from "@/shared/header/Header10";
import Header12 from "@/shared/header/Header12";
import Header13 from "@/shared/header/Header13";
import Header14 from "@/shared/header/Header14";
import Header15 from "@/shared/header/Header15";
import Header16 from "@/shared/header/Header16";
import Footer1 from "@/shared/footer/Footer1";
import Footer2 from "@/shared/footer/Footer2";
import Footer3 from "@/shared/footer/Footer3";
import Footer4 from "@/shared/footer/Footer4";
import Footer5 from "@/shared/footer/Footer5";
import Footer6 from "@/shared/footer/Footer6";
import Footer7 from "@/shared/footer/Footer7";
import Footer8 from "@/shared/footer/Footer8";
import Footer9 from "@/shared/footer/Footer9";
import Footer10 from "@/shared/footer/Footer10";
import Footer11 from "@/shared/footer/Footer11";
import Footer12 from "@/shared/footer/Footer12";
import Footer13 from "@/shared/footer/Footer13";
import Footer14 from "@/shared/footer/Footer14";
import Footer15 from "@/shared/footer/Footer15";
import SideBar from "@/shared/sidebar/SideBar";
import { MobileMenuCloneProvider } from "@/shared/mobile-menu/MobileMenuCloneContext";
import GlobalEffects from "@/shared/effects/GlobalEffects";
import ThemeRouteSync from "@/shared/effects/ThemeRouteSync";
import BackToTop from "@/shared/elements/BackToTop";
import SmoothScrollEffect from "@/shared/effects/SmoothScrollEffect";

type HeaderHandlers = {
  onOpenSearch?: () => void;
  onToggleSidebar?: () => void;
  onOpenHamburgerMenu?: () => void;
  style?: string;
};

const HEADER_COMPONENTS: Record<number, React.ComponentType<HeaderHandlers>> = {
  1: Header1,
  2: Header2,
  3: Header3,
  4: Header4,
  5: Header5,
  6: Header1, // fallback
  7: Header7,
  8: Header8,
  9: Header9,
  10: Header10,
  11: Header1, // fallback
  12: Header12,
  13: Header13,
  14: Header14,
  15: Header15,
  16: Header16,
};

const FOOTER_COMPONENTS: Record<number, React.ComponentType> = {
  1: Footer1,
  2: Footer2 as unknown as React.ComponentType,
  3: Footer3,
  4: Footer4,
  5: Footer5,
  6: Footer6,
  7: Footer7,
  8: Footer8,
  9: Footer9,
  10: Footer10,
  11: Footer11,
  12: Footer12,
  13: Footer13,
  14: Footer14,
  15: Footer15,
};

export type MainLayoutProps = {
  headerStyle?: number;
  footerStyle?: number;
  noFooter?: boolean;
  mainClass?: string;
  headerProps?: { style?: string };
};

export default function MainLayout({
  headerStyle = 1,
  footerStyle = 1,
  noFooter = false,
  mainClass = "bg-neutral-0",
  headerProps,
}: MainLayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  const handlers = useMemo(
    () => ({
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      toggleSidebar: () => setSidebarOpen((v) => !v),
      openSidebar: () => setSidebarOpen(true),
      closeSidebar: () => setSidebarOpen(false),
      openHamburgerMenu: () => setHamburgerMenuOpen(true),
      closeHamburgerMenu: () => setHamburgerMenuOpen(false),
      closeAllMenus: () => {
        setSidebarOpen(false);
        setHamburgerMenuOpen(false);
      },
    }),
    [],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSidebarOpen(false);
        setHamburgerMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Bridge DOM class triggers (used by Header4-15 ported from Next.js) to MainLayout state.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      if (t.closest(".at-search-click, .search-btn")) {
        e.preventDefault();
        setSearchOpen(true);
        return;
      }
      if (t.closest(".at-header-sidebar-btn, .navbar-toggler, .at-menu-bar")) {
        e.preventDefault();
        setSidebarOpen(true);
        return;
      }
      if (t.closest(".at-header-menu-btn")) {
        e.preventDefault();
        const btn = (t.closest(".at-header-menu-btn") as HTMLElement) ?? null;
        const header = btn?.closest("header");
        if (header) {
          const isOpen = header.classList.contains("is-menu-open");
          header.classList.toggle("is-menu-open", !isOpen);
          btn?.setAttribute("aria-expanded", String(!isOpen));
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Sticky header on scroll (mirrors useHeaderInteractive behaviour for all headers)
  useEffect(() => {
    const el = document.getElementById("header-sticky");
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY ?? window.pageYOffset;
      el.classList.toggle("header-sticky", y >= 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const HeaderComponent = HEADER_COMPONENTS[headerStyle] ?? Header1;
  const FooterComponent = FOOTER_COMPONENTS[footerStyle] ?? Footer1;
  const isFooterFloating = footerStyle === 2;

  return (
    <MobileMenuCloneProvider>
      <div className="px-blur-bottom" />
      <SmoothScrollEffect />
      <GlobalEffects />
      <ThemeRouteSync />
      <HeaderComponent
        {...(headerProps ?? {})}
        onOpenSearch={handlers.openSearch}
        onToggleSidebar={handlers.toggleSidebar}
        onOpenHamburgerMenu={handlers.openHamburgerMenu}
      />
      <SideBar open={sidebarOpen} hamburgerOpen={hamburgerMenuOpen} onClose={handlers.closeAllMenus} />
      <PopupSearch open={searchOpen} onClose={handlers.closeSearch} />

      <div id="smooth-wrapper">
        <div id="smooth-content" className="z-index-3">
          <main className={mainClass}>
            <Outlet />
          </main>
          {!noFooter && isFooterFloating ? <div className="footer-placeholder" aria-hidden="true" /> : null}
          {!noFooter && !isFooterFloating ? <FooterComponent /> : null}
        </div>
        {!noFooter && isFooterFloating ? <Footer2 ref={footerRef} /> : null}
      </div>

      <BackToTop />
    </MobileMenuCloneProvider>
  );
}
