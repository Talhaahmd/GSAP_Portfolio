import { Link } from "react-router-dom";
import { OffcanvasMenuMount } from "@/shared/mobile-menu/MobileMenuCloneContext";
import MenuClone from "@/shared/mobile-menu/MenuClone";

interface SideBarProps {
  open: boolean;
  hamburgerOpen: boolean;
  onClose: () => void;
}

const AVATARS = ["avatar-10", "avatar-11", "avatar-12", "avatar-13", "avatar-14"] as const;

function CloseIconSvg() {
  return (
    <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M9.19141 9.80762L27.5762 28.1924"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19141 28.1924L27.5762 9.80761"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/klarus.ai/",
    ariaLabel: "Instagram",
    path: "M9.92475 0C10.9376 0.00167406 11.4509 0.00703828 11.8945 0.0202418L12.0692 0.025948C12.2709 0.0331213 12.47 0.0421215 12.7101 0.0533719C13.6678 0.0976265 14.3211 0.249129 14.8949 0.471887C15.4881 0.700648 15.9892 1.00966 16.4894 1.50993C16.9889 2.0102 17.298 2.51271 17.5275 3.10448C17.7494 3.67751 17.901 4.33153 17.946 5.28931C17.9567 5.52933 17.9653 5.72841 17.9725 5.93024L17.9781 6.10492C17.9913 6.5484 17.9973 7.06177 17.9992 8.07471L17.9999 8.74577C18 8.82777 18 8.91237 18 8.99967L17.9999 9.25357L17.9994 9.92472C17.9977 10.9376 17.9923 11.451 17.9791 11.8944L17.9734 12.0691C17.9662 12.271 17.9572 12.4701 17.946 12.7101C17.9017 13.6679 17.7494 14.3211 17.5275 14.8949C17.2987 15.4882 16.9889 15.9892 16.4894 16.4895C15.9892 16.989 15.4859 17.298 14.8949 17.5275C14.3211 17.7495 13.6678 17.901 12.7101 17.946C12.47 17.9567 12.2709 17.9654 12.0692 17.9725L11.8945 17.9781C11.4509 17.9914 10.9376 17.9973 9.92475 17.9993L9.25359 18C9.1716 18 9.087 18 8.99969 18H8.7458L8.07464 17.9994C7.06175 17.9977 6.54839 17.9924 6.1049 17.9791L5.93022 17.9734C5.72839 17.9662 5.5293 17.9572 5.2893 17.946C4.33151 17.9018 3.67899 17.7495 3.10448 17.5275C2.51195 17.2988 2.01018 16.989 1.50992 16.4895C1.00965 15.9892 0.701394 15.4859 0.471886 14.8949C0.249129 14.3211 0.0983735 13.6679 0.053372 12.7101C0.0426796 12.4701 0.0339582 12.271 0.026893 12.0691L0.0212318 11.8944C0.00806435 11.451 0.00206123 10.9376 0.000117163 9.92472L0 8.07471C0.00167406 7.06177 0.00702925 6.5484 0.0202327 6.10492L0.0259479 5.93024C0.0331212 5.72841 0.0421216 5.52933 0.053372 5.28931C0.0976175 4.33078 0.249129 3.67825 0.471886 3.10448C0.700638 2.51196 1.00965 2.0102 1.50992 1.50993C2.01018 1.00966 2.51271 0.701396 3.10448 0.471887C3.67825 0.249129 4.33077 0.0983735 5.2893 0.0533719C5.5293 0.0426885 5.72839 0.0339673 5.93022 0.026902L6.1049 0.0212407C6.54839 0.00806417 7.06175 0.00206102 8.07464 0.000116949L9.92475 0ZM8.99969 4.49953C6.51298 4.49953 4.49952 6.51518 4.49952 8.99967C4.49952 11.4864 6.51517 13.4998 8.99969 13.4998C11.4864 13.4998 13.4998 11.4842 13.4998 8.99967C13.4998 6.513 11.4841 4.49953 8.99969 4.49953ZM8.99969 6.2996C10.491 6.2996 11.6998 7.50805 11.6998 8.99967C11.6998 10.4909 10.4913 11.6998 8.99969 11.6998C7.50843 11.6998 6.29958 10.4914 6.29958 8.99967C6.29958 7.50841 7.50798 6.2996 8.99969 6.2996ZM13.7249 3.14949C13.1045 3.14949 12.5998 3.65342 12.5998 4.27376C12.5998 4.89411 13.1037 5.39882 13.7249 5.39882C14.3452 5.39882 14.8499 4.89489 14.8499 4.27376C14.8499 3.65342 14.3443 3.14871 13.7249 3.14949Z",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~017655f3515038fc66",
    ariaLabel: "Upwork",
    path: "M12.731 7.649c-.849 2.183-2.062 3.838-3.21 3.838-1.227 0-1.956-1.17-1.956-3.108 0-3.063 1.551-5.217 3.757-5.217 1.354 0 2.469.918 3.104 2.426l-1.695 2.061zm1.885-7.649C11.954 0 9.773 1.98 8.74 4.908 8.12 3.254 7.073 2.156 5.67 2.156c-.374 0-.76.066-1.155.197C5.263.93 5.91.344 6.83.163L6.495 0C3.204.386 1.075 3.254 1.075 7.38c0 2.829 1.383 4.647 3.604 4.647 1.66 0 3.026-1.065 3.887-3.02.425 1.93 1.555 3.02 3.109 3.02 1.82 0 3.327-1.386 4.325-3.964V16h2V0h-3.384z",
    viewBox: "0 0 18 16",
    h: 16,
  },
] satisfies { label: string; href: string; ariaLabel: string; path: string; viewBox?: string; h?: number }[];

function SocialGrid() {
  return (
    <ul className="at-offcanvas-social__grid">
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="at-offcanvas-social__link"
            aria-label={item.ariaLabel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height={item.h ?? 18}
              viewBox={item.viewBox ?? "0 0 18 18"}
              fill="none"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d={item.path} fill="currentColor" />
            </svg>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SideBar({ open, hamburgerOpen, onClose }: SideBarProps) {
  const isAnyOpen = open || hamburgerOpen;

  return (
    <OffcanvasMenuMount>
      <MenuClone />
      {/* Overlay */}
      <div
        className={`body-overlay sidebar-overlay ${isAnyOpen ? "apply" : ""}`}
        aria-hidden={!isAnyOpen}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close sidebar"
      />

      {/* at-offcanvas-area */}
      <div className="at-offcanvas-area" aria-hidden={!open}>
        <div className={`at-offcanvas ${open ? "opened" : ""}`}>
          <div className="at-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="at-offcanvas-logo">
              <Link to="/" className="text-decoration-none d-inline-flex align-items-center">
                <img
                  src="/assets/imgs/template/logo/logo-nav-dark.png"
                  alt="The AI Folks"
                  height={36}
                  style={{ width: "auto", height: "36px" }}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="at-offcanvas-close-btn">
              <button type="button" className="close-btn close-sidebar" aria-label="Close" onClick={onClose}>
                <CloseIconSvg />
              </button>
            </div>
          </div>

          <div className="at-offcanvas-content d-none d-xl-block">
            <h3 className="at-offcanvas-title">Hey there!</h3>
            <p className="fz-font-lg">
              We build AI automations, MVPs, and integrated systems — helping businesses operate faster, scale smarter, and grow with confidence.
            </p>
          </div>

          <div className="at-offcanvas-menu d-xl-none pb-50">
            <nav />
          </div>

          <div className="at-offcanvas-gallery d-none d-xl-block">
            <div className="sec-2-home-5__avatars-row d-flex gap-2">
              {AVATARS.map((name) => (
                <div key={name} className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img">
                  <img className="img-cover" src={`/assets/imgs/template/avatar/${name}.webp`} alt="" width={80} height={80} />
                </div>
              ))}
            </div>
          </div>

          <div className="at-offcanvas-contact">
            <h5 className="at-offcanvas-title sm">Get in touch</h5>
            <ul>
              <li>
                <a className="fz-font-lg" href="tel:+12125557398">
                  +1 (212) 555-7398
                </a>
              </li>
              <li>
                <a className="fz-font-lg" href="mailto:info@klarus.io">
                  info@klarus.io
                </a>
              </li>
              <li>
                <a className="fz-font-lg" href="#" onClick={(e) => e.preventDefault()}>
                  Toronto, Ontario, <br />
                  Canada
                </a>
              </li>
            </ul>
          </div>

          <div className="at-offcanvas-social">
            <h3 className="at-offcanvas-title sm">Follow Us</h3>
            <SocialGrid />
          </div>
        </div>
      </div>

      {/* at-offcanvas-2-area */}
      <div className={`at-offcanvas-2-area ${hamburgerOpen ? "menu-open" : ""}`} aria-hidden={!hamburgerOpen}>
        <div className="offcanvas-bg" />
        <div className="at-offcanvas-2-wrapper offcanvas-menu sidebar-left">
          <div className="at-offcanvas-2-left">
            <div className="at-header-logo d-flex justify-content-between align-items-center mb-50">
              <Link to="/" className="text-decoration-none d-inline-flex align-items-center">
                <img
                  src="/assets/imgs/template/logo/logo-nav-dark.png"
                  alt="The AI Folks"
                  height={36}
                  style={{ width: "auto", height: "36px" }}
                  loading="lazy"
                />
              </Link>
              <span className="hamburger-close-btn close-sidebar" role="button" tabIndex={0} aria-label="Close" onClick={onClose}>
                <CloseIconSvg />
              </span>
            </div>

            <div className="at-offcanvas-menu counter-row">
              <nav />
            </div>

            <div className="at-offcanvas-social">
              <SocialGrid />
            </div>

            <span
              className="hamburger-close-btn hamburger-mobile-close-btn close-sidebar d-md-none"
              role="button"
              tabIndex={0}
              aria-label="Close"
              onClick={onClose}
            >
              CLOSE
            </span>
          </div>
        </div>
      </div>
    </OffcanvasMenuMount>
  );
}

