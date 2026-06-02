import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 6 Section 4 - Identity Defines Destiny

const ARROW_DIAGONAL_SVG = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
  </svg>
);

const STAR_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 18.6259 29.37 23.9975 35.9953 24C29.37 24.0025 24 29.3742 24 36C24 29.3726 18.6274 24 12 24C5.37258 24 8.1423e-07 29.3726 5.24536e-07 36L0 48L12 48C18.6274 48 24 42.6274 24 36C24 42.6274 29.3726 48 36 48L48 48L48 36C48 29.3742 42.63 24.0025 36.0047 24C42.63 23.9975 48 18.6259 48 12L48 9.34594e-06L36 9.87048e-06C29.3726 6.34548e-06 24 5.37259 24 12C24 5.37259 18.6274 6.81516e-06 12 7.10486e-06L4.19629e-06 3.8147e-06L2.62268e-06 12C1.7536e-06 18.6274 5.37258 24 12 24Z"
      fill="#FEFEFE"
    />
  </svg>
);

export default function Section4() {
  const gridColumns = 7;
  const isCenterColumn = (i: number) => i === 3;

  return (
    <div className="sec-4-home-6 pt-100 pb-100 fix p-relative bg-neutral-950 changeless">
      {/* Background grid */}
      <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
        {Array.from({ length: gridColumns }, (_, i) => (
          <div
            key={i}
            className={
              isCenterColumn(i)
                ? "position-relative h-100 border-r border-white/01 md:border-none"
                : "position-relative h-100 overflow-hidden d-md-block border-white/01"
            }
          >
            <div className="absolute bottom-0 left-0 right-0 border-white/10" />
            {isCenterColumn(i) && (
              <div
                className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>

      <div className="container p-relative z-index-2">
        <div className="row g-4">
          <div className="col-lg-6 ms-auto col-12 pt-50">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3 justify-content-start">
                <h6 className="text-white fw-600 mt-2">[001]</h6>
                <h1 className="ds-1 fw-600 text-uppercase text-white lh-1">
                  IDENTITY
                </h1>
              </div>
              <div className="d-flex gap-3 justify-content-end">
                <h6 className="text-white fw-600 mt-2">[002]</h6>
                <h1 className="ds-1 fw-600 text-uppercase text-white lh-1">
                  DEFINES
                </h1>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                <h6 className="text-white fw-600 mt-2">[003]</h6>
                <h1 className="ds-1 fw-600 text-uppercase text-white lh-1">
                  DESTINY
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-7 mx-auto p-relative d-none d-md-block">
            <img
              src="/assets/imgs/pages/home-6/image-10.webp"
              alt="image"
              className="w-100" loading="lazy" />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xxl-1" />
          <div className="col-xxl-3 col-lg-4 col-md-10 mx-auto">
            <img
              src="/assets/imgs/pages/home-6/image-9.webp"
              alt="image"
              className="w-100" loading="lazy" />
          </div>
          <div className="col-xxl-5 col-lg-7 col-md-9 mx-auto">
            {STAR_SVG}
            <h6 className="fw-600 reveal-text indent text-white mt-40 mb-50">
              <RevealText>
                WE BELIEVE THAT A GREAT BRAND ISN&apos;T JUST SEEN; IT&apos;S
                REMEMBERED. AT ORISA, WE ARCHITECT VISUAL SYSTEMS THAT BRIDGE THE
                GAP BETWEEN STRATEGIC INTENT AND EMOTIONAL CONNECTION. WHETHER
                IT&apos;S A MINIMALIST IDENTITY SYSTEM, A LUXURY PACKAGING
                CONCEPT, OR A GLOBAL REBRAND, OUR FOCUS IS ON CRAFTING DESIGN
                THAT COMMANDS ATTENTION AND BUILDS LASTING LOYALTY. WE VALUE THE
                PURSUIT OF PIXEL-PERFECTION AND CONCEPTUAL DEPTH, ENSURING YOUR
                BRAND EVOLVES WITH PURPOSE.
              </RevealText>
            </h6>
            <Link
              className="at-btn bg-white rounded-0 text-dark"
              to="/portfolio-1"
            >
              <span>
                <span className="text-1">Explore All Work</span>
                <span className="text-2">Explore All Work</span>
              </span>
              <i>{ARROW_DIAGONAL_SVG}</i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
