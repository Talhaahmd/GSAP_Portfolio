import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

interface Header16Props {
  onOpenSearch?: () => void;
  onToggleSidebar?: () => void;
  onOpenHamburgerMenu?: () => void;
}

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

function Home16Menu() {
  return (
    <MainMenuRootList>
      <li>
        <NavLink to="/index-16" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Home" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-3" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Page" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio-3" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Portfolio" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/archive-4" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Blogs" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-2" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Contact" />
        </NavLink>
      </li>
    </MainMenuRootList>
  );
}

export default function Header16({ onOpenSearch, onToggleSidebar, onOpenHamburgerMenu }: Header16Props) {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 20;
    const handleScroll = () => {
      const scrollY = window.scrollY ?? window.pageYOffset;
      setStickyVisible(scrollY >= SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="at-header-area at-header-spacing header-transparent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-6">
              <div className="at-header-logo">
                <Link to="/index-16" className="d-inline-flex align-items-center gap-2 text-decoration-none">
                  <img
                    width={40}
                    height={40}
                    src="/assets/imgs/template/logo/ai-folks-logo.png"
                    alt="The AI Folks"
                    style={{ borderRadius: "6px", objectFit: "contain" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-8 mx-auto d-none d-xl-flex justify-content-center">
              <div className="at-main-menu menu-light d-inline-flex justify-content-center">
                <nav className="at-mobile-menu-active">
                  <Home16Menu />
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-6">
              <div className="at-header-right gap-3 d-flex justify-content-end align-items-center">
                {/* Icons removed per request */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
