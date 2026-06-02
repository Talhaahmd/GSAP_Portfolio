import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import RevealText from "@/shared/effects/RevealText";

// Home 6 Section 7 - Brand Awards / Recognized Excellence

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

const CROSS_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z"
      fill="currentColor"
    />
  </svg>
);

const ARROW_UP_RIGHT_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
  >
    <path
      d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
      fill="currentColor"
    />
  </svg>
);

const awards = [
  {
    date: "[ 19 Oct 2024 ]",
    img: "/assets/imgs/pages/home-6/image-19.webp",
    title: "Best Web Design Agency",
    org: "Web Excellence Awards",
    url: "csswinner.com",
    link: "https://csswinner.com",
  },
  {
    date: "[ 12 Feb 2026 ]",
    img: "/assets/imgs/pages/home-6/image-20.webp",
    title: "Digital Agency of the Year",
    org: "Global Digital Excellence Awards",
    url: "globaldigitalawards.com",
    link: "https://globaldigitalawards.com",
  },
  {
    date: "[ 08 Aug 2025 ]",
    img: "/assets/imgs/pages/home-6/image-21.webp",
    title: "Innovation in Digital Experience",
    org: "International Digital Awards",
    url: "digital-awards.org",
    link: "https://digital-awards.org",
  },
  {
    date: "[ 19 Oct 2024 ]",
    img: "/assets/imgs/pages/home-6/image-22.webp",
    title: "Best Integrated Digital Campaign",
    org: "Drum Awards",
    url: "thedrum.com",
    link: "https://thedrum.com",
  },
  {
    date: "[ 03 Apr 2026 ]",
    img: "/assets/imgs/pages/home-6/image-23.webp",
    title: "Growth-Driven Digital Agency",
    org: "Clutch Leaders Awards",
    url: "clutch.co",
    link: "https://clutch.co",
  },
];

const brandLogos = [
  "/assets/imgs/icons/brand-1.webp",
  "/assets/imgs/icons/brand-2.webp",
  "/assets/imgs/icons/brand-3.webp",
  "/assets/imgs/icons/brand-4.webp",
  "/assets/imgs/icons/brand-5.webp",
  "/assets/imgs/icons/brand-6.webp",
];

export default function Section7() {
  return (
    <div className="home-6-section-7 p-relative pb-100 bg-neutral-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between pb-3 border-bottom-950 mb-40">
              <span className="neutral-900 text-uppercase fw-500">
                Brand Awards
              </span>
              <Link
                className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0"
                to="/portfolio-2"
              >
                <span className="text-uppercase">
                  <span className="text-1">our portfolio</span>
                  <span className="text-2">our portfolio</span>
                </span>
                <i>{ARROW_DIAGONAL_SVG}</i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="fz-ds-1 text-uppercase reveal-text">
                <RevealText>Recognized Excellence</RevealText>
              </h6>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-md-4 ms-auto align-self-end">
            <div className="text-end">
              <div className="scroll-rotate d-md-inline-block d-none">
                {CROSS_SVG}
              </div>
              <p className="fw-500 h6 fz-font-md mb-0 text-end">
                Collaborating with industry leaders to shape the future of
                design.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-120">
          <div className="col-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="card-award style-2 scroll-move-up"
                data-img-award={award.img}
              >
                <a
                  href={award.link}
                  target="_blank"
                  className="card-award-link"
                >
                  <span className="card-award-date">{award.date}</span>
                  <div className="card-award-content">
                    <div className="card-award-image">
                      <img
                        src={award.img}
                        alt="Award"
                        className="w-100 h-100" loading="lazy" />
                    </div>
                    <h3 className="h6 card-award-title mb-0">{award.title}</h3>
                  </div>
                  <h4 className="h6 card-award-web-excellence mb-0">
                    {award.org}
                  </h4>
                  <div className="card-award-meta">
                    <span className="card-award-url fz-font-lg">
                      {award.url}
                    </span>
                  </div>
                  <div className="card-award-icon ms-auto">
                    {ARROW_UP_RIGHT_SVG}
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="col-lg-10 col-12 mx-auto border-0 pt-60">
            <div className="carouselTicker carouselTicker-left position-relative z-1">
              <Marquee
                speed={40}
                direction="left"
                pauseOnHover={false}
                gradient={false}
                className="carouselTicker__marquee"
              >
                <ul className="carouselTicker__list" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, overflow: "visible", gap: "0 2rem" }}>
                  {brandLogos.map((logo, i) => (
                    <li key={i} className="carouselTicker__item" style={{ margin: "0 1.5rem", float: "none" }}>
                      <div className="brand-item dark-mode-invert">
                        <img src={logo} alt="" width={140} height={35} decoding="async" loading="lazy" />
                      </div>
                    </li>
                  ))}
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
