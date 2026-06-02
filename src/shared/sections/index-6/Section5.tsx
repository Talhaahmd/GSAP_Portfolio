import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

// Home 6 Section 5 - Specialized Services

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

const serviceItems = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "We define a clear purpose and unique positioning for your brand. By blending market insights with strategic storytelling, we build a foundation that ensures long-term growth and meaningful connection.",
    img: "/assets/imgs/pages/home-6/image-11.webp",
    link: "/services-details",
    menuList: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Packaging",
      "Brand Guidelines",
    ],
  },
  {
    id: 2,
    title: "Visual Identity",
    description:
      "We translate your brand strategy into a distinctive visual language. From logo design to comprehensive style guides, we create cohesive systems that ensure your brand is instantly recognizable and impactful across every touchpoint.",
    img: "/assets/imgs/pages/home-6/image-12.webp",
    link: "/services-details",
    menuList: [
      "Logo Suites & Iconography",
      "Typography & Color Systems",
      "Brand Guidelines",
      "Print & Digital Collateral",
    ],
  },
  {
    id: 3,
    title: "Packaging",
    description:
      "We transform products into tactile brand experiences through innovative structural and graphic design. By balancing shelf impact with functional storytelling, we create packaging that captivates consumers and reinforces brand value from first sight to unboxing.",
    img: "/assets/imgs/pages/home-6/image-13.webp",
    link: "/services-details",
    menuList: [
      "Structural Design & Form",
      "Labeling & Graphic Systems",
      "Sustainable Material Sourcing",
      "Unboxing Experience Design",
      "Print Production Management",
    ],
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "We craft intuitive digital experiences that balance aesthetic elegance with functional precision. By focusing on user behavior and seamless navigation, we build interfaces that reduce friction, enhance engagement, and drive measurable business growth.",
    img: "/assets/imgs/pages/home-6/image-14.webp",
    link: "/services-details",
    menuList: [
      "User Research & Personas",
      "Information Architecture",
      "Wireframing & Prototyping",
      "High-Fidelity Interface Design",
      "Usability Testing & Optimization",
    ],
  },
];

export default function Section5() {
  return (
    <>
      <div className="sec-5-home-6 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between pb-3 border-bottom-950 mb-40">
                <span className="neutral-900 text-uppercase fw-500">
                  What we offer
                </span>
                <Link
                  className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0"
                  to="/services-1"
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
                  <RevealText>Specialized Services</RevealText>
                  <span>{ARROW_LONG_SVG}</span>
                </h6>
              </div>
            </div>
            <div className="col-lg-2 ms-auto mt-50 d-lg-inline-block d-none">
              <div className="scroll-rotate d-inline-block">{CROSS_SVG}</div>
            </div>
            <div className="col-lg-3 col-md-4 ms-auto align-self-end">
              <div className="text-end">
                <h4 className="h2 fw-600 mb-0">
                  <OdometerCounter count={12} />+
                </h4>
                <p className="fw-500 h6 fz-font-md mb-0 text-end">
                  Years of Creative <br />
                  Practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="scroll-section vertical-section position-relative pt-50">
          <div className="wrapper">
            {serviceItems.map((service) => (
              <div key={service.id} className="item">
                <div className="contianer bg-neutral-50 pb-40">
                  <div className="row">
                    <div className="col-lg-5 d-none d-xxl-block">
                      <div className="image-block hover-effect-8 rounded-0">
                        <Link to={service.link}>
                          <img src={service.img} alt="image" loading="lazy" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xxl-6 ms-auto">
                      <h1 className="text-uppercase">
                        <Link to={service.link}>{service.title}</Link>
                      </h1>
                      <p className="neutral-900 text-uppercase fz-font-lg reveal-text indent">
                        <RevealText>{service.description}</RevealText>
                      </p>
                      <div className="row g-4 pt-xxl-5 pt-3">
                        <div className="col-md-6">
                          <div className="menu-list style-2 d-flex flex-column">
                            {service.menuList.map((item, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="border-bottom-300 py-3 menu-list__item hasdot"
                                target="_blank"
                              >
                                <span className="text neutral-900 fw-600 text-uppercase">
                                  {" "}
                                  {item}{" "}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-6 d-xxl-none">
                          <div className="image-block hover-effect-8 rounded-0">
                            <Link to={service.link}>
                              <img src={service.img} alt="image" loading="lazy" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
