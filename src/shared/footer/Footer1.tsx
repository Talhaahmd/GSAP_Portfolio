import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

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

const FOOTER_SERVICES = [
  "AI Automations",
  "MVP Development",
  "CRM Integrations",
  "Launch & Scale",
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/klarus.ai/" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~017655f3515038fc66" },
] as const;



const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-1" },
  { label: "Works", href: "/portfolio-1" },
  { label: "Blog", href: "/archive-1" },
  { label: "Contact", href: "/contact-1" },
] as const;


function FooterServiceTag({ label }: { label: string }) {
  return (
    <div className="at-btn border-0 ps-2 pe-2 py-0 common-white opacity-50 bg-transparent rounded-0">
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

export default function Footer1() {
  return (
    <footer className="container-2200">
      <div className="at-footer-area mp-footer-style pt-60 bg-neutral-950 rounded-5 mx-lg-3 mx-2 changeless">
        <div className="container">
          <div className="row g-5">
            <div className="col-xxl-4 col-lg-6">
              <div className="d-flex flex-wrap align-items-start gap-4">
                <img
                  className="mt-5"
                  src="/assets/imgs/template/logo/logo-footer-dark.png"
                  alt="The AI Folks"
                  height={50}
                  style={{ width: "auto", height: "50px" }}
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white reveal-text">
                    <RevealText>
                      Let&apos;s Build <br />
                      What Scales
                    </RevealText>
                  </h4>
                  <p className="mb-0">
                    AI automation, MVP development, integrations, <br />
                    and scalable product systems for modern teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-5 col-md-8 ms-lg-auto text-lg-end">
              <div className="at-footer-title-wrap">
                <h6 className="text-white">+1 (437) 879-4050</h6>
                <h4 className="text-white text-decoration-underline text-wrap">
                  <a href="mailto:info@klarus.io" className="text-white text-decoration-underline">
                    info@klarus.io
                  </a>
                </h4>
                <div className="at-footer-widget at-footer-link pt-50">
                  <div className="at-hero-social justify-content-lg-end">
                    {SOCIAL_LINKS.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                        {SOCIAL_ARROW}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="at-about pt-100 pb-60 p-relative">
            <div className="row align-items-end g-5">
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="at-footer-widget alt-footer-link-item-wrap row">
                  <span className="d-block fz-font-label neutral-0 opacity-50 text-uppercase mb-3">Navigation</span>
                  <div className="alt-footer-link-item col-6">
                    <ul>
                      {NAV_LINKS.map(({ label, href }) => (
                        <li key={label} className="mb-15">
                          <Link to={href}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="alt-footer-link-item col-6">

                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-lg-8 col-12 text-lg-end">
                <h1 className="fz-160 common-white mb-0 text-scale-anim">
                  Klarus AI<sup className="fz-80 fw-400">®</sup>
                </h1>
              </div>
            </div>
          </div>

          <div className="at-footer-copyright-area at-about-border pt-40 pb-40">
            <div className="row align-items-center g-3">
              <div className="col-lg-2">
                <div className="at-footer-copyright-wrap text">
                  <span className="at-footer-copyright">Klarus © 2026 </span>
                </div>
              </div>
              <div className="col-lg-8">
                <ul className="d-flex flex-wrap gap-lg-4 gap-3 ps-3">
                  {FOOTER_SERVICES.map((label) => (
                    <li key={label}>
                      <FooterServiceTag label={label} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-2">
                <div className="at-footer-copyright-wrap text-lg-end">
                  <span className="at-footer-copyright">[ Since 2012 ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-0 pt-10" />
    </footer>
  );
}

