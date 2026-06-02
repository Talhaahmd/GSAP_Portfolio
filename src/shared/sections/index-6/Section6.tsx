import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

// Home 6 Section 6 - The Branding Process / Career Path & Expertise

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

const ARROW_LONG_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="54"
    viewBox="0 0 128 54"
    fill="none"
  >
    <path
      d="M99.2 0L126.72 25.4267L128 26.7141L126.72 27.6797L99.2 53.1064L97.6 51.4971L123.2 27.6797H0V25.4267H123.2L97.6 1.60928L99.2 0Z"
      fill="#0F0F0F"
    />
  </svg>
);

const processSteps = [
  {
    id: 1,
    number: "01.",
    title: "Discovery",
    description:
      "Uncovering your brand's core values and market positioning.",
    img: "/assets/imgs/pages/home-6/image-15.webp",
    cardClass: "card-1 no-before",
  },
  {
    id: 2,
    number: "[02]",
    title: "Synthesize",
    description: "Turn data into meaningful insights",
    img: "/assets/imgs/pages/home-6/image-16.webp",
    cardClass: "card-2",
  },
  {
    id: 3,
    number: "[03]",
    title: "Frame",
    description: "Define problems & opportunities and priorities",
    img: "/assets/imgs/pages/home-6/image-17.webp",
    cardClass: "card-3",
  },
  {
    id: 4,
    number: "[04]",
    title: "Guide",
    description: "Translate insight into action",
    img: "/assets/imgs/pages/home-6/image-18.webp",
    cardClass: "card-2",
  },
];

export default function Section6() {
  return (
    <div className="sec-6-home-6 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between pb-3 border-bottom-950 mb-40">
              <span className="neutral-900 text-uppercase fw-500">
                Our Strategic Path
              </span>
              <Link
                className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0"
                to="/contact-1"
              >
                <span className="text-uppercase">
                  <span className="text-1">Contact us</span>
                  <span className="text-2">Contact us</span>
                </span>
                <i>{ARROW_DIAGONAL_SVG}</i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="fz-ds-1 text-uppercase reveal-text">
                <RevealText>The Branding Process</RevealText>
                <span>{ARROW_LONG_SVG}</span>
              </h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 ms-auto align-self-end">
            <div className="text-end">
              <h4 className="h2 fw-600 mb-0">
                <OdometerCounter count={16} />k+
              </h4>
              <p className="fw-500 h6 fz-font-md mb-0 text-end">
                Brands <br />
                Collaborated With
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 pt-100">
          {processSteps.map((step) => (
            <div key={step.id} className="col-xxl-3 col-md-6">
              <div
                className={`at-service-card style-2 ${step.cardClass} p-relative bg-neutral-0 z-index-3`}
              >
                <div className="at-service-card-content p-relative z-1 m-lg-5 m-4">
                  <div className="at-service-card-number">
                    <h3 className="h3 fw-600">{step.number}</h3>
                  </div>
                  <h4 className="h6 mt-3 fw-600">{step.title}</h4>
                  <div className="at-service-card-description">
                    <p className="mb-0 neutral-900">{step.description}</p>
                  </div>
                  <div className="at-service-card-img mt-4 hover-effect-1">
                    <img
                      className="img-cover"
                      src={step.img}
                      alt="orisa" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
