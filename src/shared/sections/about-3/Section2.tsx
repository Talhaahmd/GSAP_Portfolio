import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// About 3 Section 2 - My Process (step by step) + contact

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z"
            fill="currentColor"
        />
    </svg>
);

const PROCESS_ITEMS = [
    {
        img: "/assets/imgs/pages/img-138.webp",
        alt: "Discover & Diagnose",
        title: "01. Discover & Diagnose",
        metaText: "1-2 Weeks",
        metaLabel: "Understanding your operations",
        desc: "We start by deeply understanding your business — your workflows, tools, pain points, and goals. This discovery phase gives us the clarity needed to build systems that actually solve real problems.",
    },
    {
        img: "/assets/imgs/pages/img-139.webp",
        alt: "Strategy & Plan",
        title: "02. Strategy & Plan",
        metaText: "1-2 Weeks",
        metaLabel: "Designing the solution",
        desc: "We craft a tailored roadmap that outlines the automation architecture, integrations, and development plan. Every decision is backed by data and aligned to your specific growth objectives.",
    },
    {
        img: "/assets/imgs/pages/img-140.webp",
        alt: "Execute & Optimize",
        title: "03. Execute & Optimize",
        metaText: "4-10 Weeks",
        metaLabel: "Building and refining",
        desc: "We build, test, and deploy your AI systems, MVPs, or integrations in focused sprints. We continuously refine based on real-world performance to maximize impact and reliability.",
    },
    {
        img: "/assets/imgs/pages/img-141.webp",
        alt: "Scale & Sustain",
        title: "04. Scale & Sustain",
        metaText: "Ongoing",
        metaLabel: "Growing with your business",
        desc: "Once live, we help you scale what works — adding new automations, expanding integrations, and evolving the system as your business grows and requirements change.",
    },
];

const GRID_COLS = 7;
const CENTER_COL_INDEX = 3;

export default function Section2() {
    return (
        <section className="sec-2-about pt-120 p-relative bg-neutral-50">
            {/* Background grid */}
            <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
                {Array.from({ length: GRID_COLS }, (_, i) => (
                    <div
                        key={i}
                        className={
                            i === CENTER_COL_INDEX
                                ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                        }
                    >
                        <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                        {i === CENTER_COL_INDEX && (
                            <div
                                className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
                                aria-hidden
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="container p-relative z-1">
                <div className="row pb-50 align-items-end">
                    <div className="col-lg-4 col-md-4">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Step by step</span>
                                <span className="text-2">Step by step</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="reveal-text">
                            <RevealText>Our Process</RevealText>
                        </h3>
                    </div>
                    <div className="col-xxl-5 col-lg-8 text-lg-end ms-auto">
                        <h6 className="fw-600 fz-font-lg">
                            We combine deep discovery, strategic planning, and precision execution
                            to deliver AI systems and digital products that drive real business results.
                        </h6>
                    </div>
                </div>
            </div>

            <div className="container p-relative z-1">
                <div className="row">
                    <div className="col-12">
                        <div className="scroll-section process-scroll">
                            <div className="wrapper">
                                {PROCESS_ITEMS.map((item, i) => (
                                    <div key={i} className="item">
                                        <div className="process-card">
                                            <div className="row g-xxl-5 align-items-center">
                                                <div className="col-xxl-4 col-lg-5 order-lg-1 order-2">
                                                    <div className="process-card__img-wrap">
                                                        <img
                                                            src={item.img}
                                                            alt={item.alt}
                                                            width={500}
                                                            height={350}
                                                            className="img-cover" loading="lazy" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-8 col-lg-7 order-lg-2 order-1 mb-lg-0 mb-4">
                                                    <div className="process-card__content">
                                                        <div className="process-card__header flex-xxl-row flex-column align-items-start">
                                                            <h5 className="process-card__title">{item.title}</h5>
                                                            <div className="process-card__meta d-flex align-items-md-center flex-md-row flex-column gap-2">
                                                                <span className="process-card__meta-text">
                                                                    {item.metaText}{" "}
                                                                    <span className="process-card__meta-label">
                                                                        {item.metaLabel}
                                                                    </span>
                                                                </span>
                                                                <span className="process-card__icon rounded-circle">
                                                                    {PLUS_ICON}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p className="process-card__desc text-truncate-3 mb-0">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-120 pt-60">
                    <div className="offset-xxl-4 col-xxl-6 col-12">
                        <div className="d-flex flex-md-row flex-column gap-md-5 gap-3 align-items-md-end justify-content-md-between">
                            <div>
                                <h6 className="fw-600">
                                    <a href="tel:+12125557398" className="text-decoration-none">
                                        +1 (212) 555-7398
                                    </a>
                                </h6>
                                <h4 className="mb-0 fw-medium text-decoration-underline">
                                    <Link to="mailto:info@klarus.io">info@klarus.io</Link>
                                </h4>
                            </div>
                            <h6 className="fw-600">
                                <Link to="#" className="text-decoration-none fz-font-lg fw-500">
                                    Toronto, Ontario, <br />
                                    Canada
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
