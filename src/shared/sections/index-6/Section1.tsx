import { Link } from "react-router-dom";
// Home 6 Section 1 - Hero

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

const GLOBE_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="20"
    viewBox="0 0 27 20"
    fill="none"
  >
    <path
      d="M13.3203 20C5.9637 20 0 15.5228 0 10C0 4.47715 5.9637 0 13.3203 0C20.6769 0 26.6406 4.47715 26.6406 10C26.6406 15.5228 20.6769 20 13.3203 20ZM10.27 17.6674C8.98779 15.6259 8.20174 13.3742 8.02857 11H2.7465C3.27413 14.1765 6.28238 16.7747 10.27 17.6674ZM10.6971 11C10.8975 13.4388 11.8255 15.7297 13.3203 17.752C14.8151 15.7297 15.7431 13.4388 15.9435 11H10.6971ZM23.8941 11H18.6121C18.4389 13.3742 17.6529 15.6259 16.3707 17.6674C20.3582 16.7747 23.3665 14.1765 23.8941 11ZM2.7465 9H8.02857C8.20174 6.62577 8.98779 4.37407 10.27 2.33256C6.28238 3.22533 3.27413 5.8235 2.7465 9ZM10.6971 9H15.9435C15.7431 6.56122 14.8151 4.27025 13.3203 2.24799C11.8255 4.27025 10.8975 6.56122 10.6971 9ZM16.3707 2.33256C17.6529 4.37407 18.4389 6.62577 18.6121 9H23.8941C23.3665 5.8235 20.3582 3.22533 16.3707 2.33256Z"
      fill="#FEFEFE"
    />
  </svg>
);

const menuItems = [
  "Brand Strategy",
  "Visual Identity",
  "Logo Design",
  "Packaging",
  "Brand Guidelines",
];

export default function Section1() {
  return (
    <div className="at-hero-area-home-6 scene p-relative z-index-1 bg-position fix pt-120 pb-150 bg-neutral-950 changeless">
      <div
        className="at-hero-area-home-6-bg p-absolute top-0 start-0 w-100 h-100 opacity-50"
        data-background="/assets/imgs/pages/home-6/image-1.webp"
      />
      <div className="container p-relative">
        <div className="row align-items-end">
          <div className="col-12">
            <h2 className="fz-240 neutral-0 text-uppercase fw-600 d-flex align-items-center flex-wrap">
              Orisa
              <span className="d-lg-none d-block"> Studio</span>
              <sup className="fz-80 fw-400">&reg;</sup>
            </h2>
          </div>
          <div className="col-xxl-3 col-xl-6 col-md-7 col-12">
            <div className="at-hero-content mb-30">
              <div className="menu-list d-flex flex-column">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="border-bottom-300 py-3 menu-list__item hasdot"
                    target="_blank"
                  >
                    <span className="text neutral-0 fw-600 text-uppercase">
                      {" "}
                      {item}{" "}
                    </span>
                  </a>
                ))}
              </div>
              <div
                className="at-hero-btn d-flex flex-wrap gap-2 pt-20 at_fade_anim"
                data-delay="0.5"
                data-fade-from="bottom"
              >
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
                <Link
                  className="at-btn at-btn-border-white text-white rounded-0"
                  to="/contact-1"
                >
                  <span>
                    <span className="text-1">Get a free quote</span>
                    <span className="text-2">Get a free quote</span>
                  </span>
                  <i>{ARROW_DIAGONAL_SVG}</i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 ms-auto">
            <div className="d-flex align-items-center gap-3 z-1 p-relative">
              {GLOBE_SVG}
              <h6 className="fw-600 neutral-0 m-0">
                27.1127&deg; S, 109.3497&deg; W
              </h6>
            </div>
            <h2 className="fz-240 neutral-0 text-uppercase fw-600 text-end d-none d-lg-block lh-1">
              studio
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
