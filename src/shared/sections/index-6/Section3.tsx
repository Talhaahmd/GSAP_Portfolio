import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 6 Section 3 - Case Studies / Handpicked Projects

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

const portfolioItems = [
  {
    classList: "col-lg-6 col-12",
    style: "style-2",
    category: "",
    link: "/portfolio-details-1",
    img: "/assets/imgs/pages/home-6/image-5.webp",
    title: "Zenith Architecture",
    description: "Structuring the Void",
    tags: [
      "brand identity",
      "Editorial",
      "Spatial Concept",
    ],
  },
  {
    classList: "col-lg-6 col-12",
    style: "style-2",
    category: "",
    link: "/portfolio-details-1",
    img: "/assets/imgs/pages/home-6/image-6.webp",
    title: "Aurea Visual System",
    description: "Reimagining Identity",
    tags: [
      "brand identity",
      "art direction",
      "interaction",
      "experimental",
    ],
  },
  {
    classList: "col-lg-6 col-12",
    style: "style-2",
    category: "",
    link: "/portfolio-details-1",
    img: "/assets/imgs/pages/home-6/image-7.webp",
    title: "Oasis Premium Goods",
    description: "The Art of Tangibility",
    tags: [
      "Packaging",
      "art direction",
      "Visual Storytelling",
    ],
  },
  {
    classList: "col-lg-6 col-12",
    style: "style-2",
    category: "",
    link: "/portfolio-details-1",
    img: "/assets/imgs/pages/home-6/image-8.webp",
    title: "Novanet Collective",
    description: "Beyond the Screen",
    tags: [
      "brand identity",
      "art direction",
      "Digital Identity",
    ],
  },
];

export default function Section3() {
  return (
    <div className="sec-3-home-6 pb-110">
      <div className="container">
        <div className="row mb-50">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between pb-3 border-bottom-950 mb-40">
              <span className="neutral-900 text-uppercase fw-500">
                CASE STUDIES
              </span>
              <Link
                className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0"
                to="/portfolio-1"
              >
                <span className="text-uppercase">
                  <span className="text-1">Explore all</span>
                  <span className="text-2">Explore all</span>
                </span>
                <i>{ARROW_DIAGONAL_SVG}</i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="fz-ds-1 text-uppercase reveal-text">
                <RevealText>Handpicked Projects</RevealText>
              </h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 align-self-end">
            <div className="text-end">
              <h4 className="h2 fw-600 mb-0">
                <span className="odometer" data-count="2190" />+
              </h4>
              <p className="fw-500 h6 fz-font-md mb-0">
                Projects have been completed.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`mg-portfolio-item anim-zoomin-wrap ${item.classList}`}
              data-category={item.category}
            >
              <div
                className={`mg-portfolio-thumb ${item.style} anim-zoomin not-hide-cursor`}
              >
                <Link className="cursor-hide" to={item.link}>
                  <img
                    data-speed=".8"
                    className="w-100"
                    src={item.img}
                    alt={item.title} loading="lazy" />
                </Link>
              </div>
              <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
                <div className="w-md-75">
                  <h3 className="h5 cs-portfolio-title at-title-anim fix mr-20 at-ff-sequel-semi-bold">
                    <Link to={item.link} className="at-title-text">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="fz-font-lg neutral-500">{item.description}</p>
                </div>
                <div className="cs-portfolio-tag">
                  <ul className="d-flex justify-content-md-end flex-wrap text-nowrap">
                    {item.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>
                        <Link to="#">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row pt-100">
          <div className="col-xxl-6 col-lg-8 col-md-11 ms-auto">
            <div className="award-description d-flex flex-md-row flex-column gap-5 pe-lg-5">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="content">
                <h5 className="h6 text-uppercase indent mb-30 reveal-text">
                  <RevealText>
                    Orisa is a digital agency creating impactful digital
                    experiences. We think like strategists and execute with
                    clarity, creativity, and performance.
                  </RevealText>
                </h5>
                <Link className="at-btn rounded-0" to="/archive-2">
                  <span>
                    <span className="text-1">Get a free quote</span>
                    <span className="text-2">Get a free quote</span>
                  </span>
                  <i>{ARROW_DIAGONAL_SVG}</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
