import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Services details Section 4 - Our approach (4 step cards)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SCROLL_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z"
            fill="currentColor"
        />
    </svg>
);

const STEPS = [
    {
        num: "01",
        title: "Explore",
        description: "Understand context constraints, goals and assumptions",
        img: "/assets/imgs/pages/img-161.webp",
        cardClass: "at-service-card hover-up card-1 no-before rounded-2 overflow-hidden p-relative bg-neutral-0 z-index-3",
    },
    {
        num: "02",
        title: "Synthesize",
        description: "Turn data into meaningful insights",
        img: "/assets/imgs/pages/img-162.webp",
        cardClass: "at-service-card hover-up card-2 rounded-2 overflow-hidden p-relative bg-neutral-0",
    },
    {
        num: "03",
        title: "Frame",
        description: "Define problems & opportunities and priorities",
        img: "/assets/imgs/pages/img-163.webp",
        cardClass: "at-service-card hover-up card-3 rounded-2 overflow-hidden p-relative bg-neutral-0",
    },
    {
        num: "04",
        title: "Guide",
        description: "Translate insight into action",
        img: "/assets/imgs/pages/img-164.webp",
        cardClass: "at-service-card hover-up card-2 rounded-2 overflow-hidden p-relative bg-neutral-0",
    },
];

export default function Section4() {
    return (
        <section className="sec-4-services-details pb-120 pt-120 bg-neutral-50">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">OUR APPROACH</span>
                                <span className="text-2">OUR APPROACH</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="reveal-text mb-20">
                            <RevealText>How we approach strategy </RevealText>
                        </h3>
                        <h6 className="fw-500 mb-0">
                            We combine research, analysis, and strategic thinking into a clear, decision-making framework.
                        </h6>
                    </div>
                    <div className="col-lg-4 col-md-8 ms-auto text-end">
                        <div className="scroll-rotate d-md-inline-block d-none">
                            {SCROLL_SVG}
                        </div>
                    </div>
                </div>
                <div className="row g-3 pt-100">
                    {STEPS.map((step, i) => (
                        <div key={i} className="col-xxl-3 col-md-6">
                            <div className={step.cardClass}>
                                <Link to="#" className="p-absolute top-0 left-0 w-100 h-100" />
                                <div className="at-service-card-content m-lg-5 m-4">
                                    <div className="at-service-card-number">
                                        <h6 className="fw-600 neutral-300">[{step.num}]</h6>
                                    </div>
                                    <h4 className="mt-3 fw-600">
                                        <Link to="#">{step.title}</Link>
                                    </h4>
                                    <div className="at-service-card-description">
                                        <p className="mb-0 neutral-900">{step.description}</p>
                                    </div>
                                    <div className="at-service-card-img rounded-2 fix mt-4 hover-effect-1">
                                        <img
                                            className="img-cover rounded-2"
                                            src={step.img}
                                            alt="orisa"
                                            width={400}
                                            height={280} loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
