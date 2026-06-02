import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 6 Section 2 - Core Philosophy

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

const scrollItems = [
  {
    id: "01",
    title: "Strategic Insight",
    description:
      "Every line and curve is backed by deep market research and psychological insights to ensure your brand speaks the right language.",
    img: "/assets/imgs/pages/home-6/image-2.webp",
  },
  {
    id: "02",
    title: "Artistic Precision",
    description:
      "We obsess over pixels, typography, and color theory to create a visual identity that is as beautiful as it is functional.",
    img: "/assets/imgs/pages/home-6/image-3.webp",
  },
  {
    id: "03",
    title: "Future-Proof Identity",
    description:
      "We build scalable design systems that grow with your business, ensuring consistency across every digital and physical touchpoint.",
    img: "/assets/imgs/pages/home-6/image-4.webp",
  },
];

export default function Section2() {
  return (
    <div className="container pt-100 pb-100">
      <div className="row section-fix g-3">
        <div className="col-lg-6 pe-lg-5">
          <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
            <span className="text-uppercase">
              <span className="text-1">Core Philosophy</span>
              <span className="text-2">Core Philosophy</span>
            </span>
            <i>{ARROW_DIAGONAL_SVG}</i>
          </span>
          <h1 className="fw-600 text-uppercase">We Build Legacy Brands.</h1>
          <p className="h6 fw-600 mb-0 text-uppercase reveal-text indent">
            <RevealText>
              At Orisa, we believe that a brand is more than just a visual mark.
              It is a living, breathing identity that connects human emotion with
              strategic business goals. We craft sophisticated visual languages
              that resonate with your audience and stand the test of time.
            </RevealText>
          </p>
          <div className="section-title-pin" />
          <div className="row p-relative z-n1 pt-250 d-none d-lg-block">
            <div className="col-lg-2 offset-lg-7">
              <div className="at-about-svg-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="91"
                  viewBox="0 0 57 91"
                  fill="none"
                >
                  <path
                    opacity="0.1"
                    d="M0 0L56.4024 33.572V90.336L0 56.46V0Z"
                    fill="#515151"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="113"
                  height="68"
                  viewBox="0 0 113 68"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z"
                    fill="#515151"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="91"
                  viewBox="0 0 57 91"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z"
                    fill="#515151"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-lg-6 ms-auto p-relative">
          <p className="fw-500 neutral-900 text-end pt-md-5 d-none d-md-block">
            &copy; Since 2012
          </p>
          <div className="scroll-section vertical-section section scroll-active-item">
            <div className="wrapper">
              <div role="list" className="list">
                {scrollItems.map((item) => (
                  <div key={item.id} className="item">
                    <div className="bg-neutral-50">
                      <div className="row align-items-center g-0">
                        <div className="col-md-5 col-12 pe-lg-5 pe-md-4 pb-md-5 pb-20">
                          <span className="h6 fw-600 mb-4 text-uppercase">
                            {item.id}{" "}
                            <span className="line-underline" /> {item.title}
                          </span>
                          <p className="mb-0 neutral-900 mt-15 text-indent">
                            {item.description}
                          </p>
                        </div>
                        <div className="col-md-7 col-12">
                          <img
                            className="w-100"
                            src={item.img}
                            alt={item.title} loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
