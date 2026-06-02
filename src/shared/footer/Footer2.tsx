import { forwardRef } from "react";
import { Link } from "react-router-dom";

const ARROW_SVG = (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
  </svg>
);

const SOCIAL_ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none" aria-hidden="true">
    <path
      d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
      fill="currentColor"
    />
  </svg>
);

const FOOTER_SERVICES = ["Web Development", "Motion Graphics", "Brand Strategy", "Product Design"];

function FooterServiceTag({ label }: { label: string }) {
  return (
    <div className="at-btn at-btn-border-white border-0 ps-2 pe-2 py-0 common-white opacity-50 bg-transparent rounded-0">
      <span>
        <span className="text-1">{label}</span>
        <span className="text-2">{label}</span>
      </span>
      <i>
        {ARROW_SVG}
        {ARROW_SVG}
      </i>
    </div>
  );
}

const Footer2 = forwardRef<HTMLElement, Record<string, never>>(function Footer2(_, ref) {
  return (
    <footer ref={ref} className="footer-fixed-bottom bg-neutral-950 changeless">
      <div className="at-footer-area mp-footer-style mp-footer-style-2 pt-120 pb-0">
        <div className="container">
          <div className="row g-5 pb-md-5 pb-2">
            <div className="col-lg-4">
              <div className="d-flex flex-wrap align-items-start gap-5">
                <div className="at-header-logo">
                  <Link to="/" className="text-decoration-none d-inline-flex align-items-center">
                    <img
                      src="/assets/imgs/template/logo/logo-footer-dark.png"
                      alt="The AI Folks"
                      height={40}
                      style={{ width: "auto", height: "40px" }}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="d-flex flex-column gap-3">
                  <h6 className="text-white mb-2 fw-medium">+1 (212) 555-7398</h6>
                  <h6 className="text-white mb-2">
                    <a href="mailto:info@klarus.io" className="text-white text-decoration-none">
                      info@klarus.io
                    </a>
                  </h6>
                  <h6 className="text-white mb-0">
                    Toronto, Ontario,
                    <br />
                    Canada
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="at-footer-widget alt-footer-link-item-wrap row">
                <div className="alt-footer-link-item col-6">
                  <ul>
                    <li className="mb-15">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="mb-15">
                      <Link to="/about-1">About</Link>
                    </li>
                    <li className="mb-15">
                      <Link to="/portfolio-1">Works</Link>
                    </li>
                    <li className="mb-15">
                      <Link to="/archive-1">Blog</Link>
                    </li>
                    <li className="mb-15">
                      <Link to="/contact-1">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="alt-footer-link-item col-6">
                  <ul>
                    <li className="mb-15">
                      <Link to="/product-archive">Shop</Link>
                    </li>
                    <li className="mb-15">
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className="mb-15">
                      <Link to="/product-cart">Cart</Link>
                    </li>
                    <li className="mb-15">
                      <Link to="/product-checkout">Checkout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 flex-column justify-content-lg-end d-none d-md-flex">
              <p className="footer-2-follow-label text-white opacity-50 text-uppercase small mb-3">Follow Us</p>
              <div className="at-footer-widget at-footer-link">
                <div className="at-hero-social">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Twitter {SOCIAL_ARROW}
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Facebook {SOCIAL_ARROW}
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Instagram {SOCIAL_ARROW}
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Linkedin {SOCIAL_ARROW}
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Behance {SOCIAL_ARROW}
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Dribbble {SOCIAL_ARROW}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-2-border pt-40 pb-40">
            <div className="row align-items-end g-4">
              <div className="col-lg-10 col-md-8">
                <span className="at-footer-copyright">The AI Folks © 2026</span>
                <div className="at-title-anim overflow-hidden">
                  <h2 className="footer-2-connect-title text-white mb-0 at-title-text text-scale-anim">Let&apos;s Connect</h2>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 text-end">
                <div className="d-flex flex-wrap align-items-end gap-4 gap-md-5 mb-3">
                  <div className="footer-2-hours text-white">
                    <span className="d-block fz-font-md opacity-50">Mo - Sa</span>
                    <h5 className="fw-400 common-white">9am - 5pm</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-none d-md-block">
              <div className="col-12">
                <ul className="d-flex flex-wrap gap-lg-4 gap-2 ps-3 pt-4 pb-2">
                  {FOOTER_SERVICES.map((label) => (
                    <li key={label}>
                      <FooterServiceTag label={label} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer2;

