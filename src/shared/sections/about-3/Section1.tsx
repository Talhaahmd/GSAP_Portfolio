import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// About 3 Section 1 - About me + banner + Experience / Journey

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const JOURNEY_ITEMS = [
    {
        date: "2024 — Present",
        title: "AI Automation Studio [ Klarus AI ]",
        desc: "Building end-to-end AI automation systems, CRM integrations, and scalable MVPs for clients across multiple industries.",
    },
    {
        date: "2022 — 2024",
        title: "Workflow Automation Consultant [ Independent ]",
        desc: "Designed and deployed no-code/low-code automation workflows and AI-powered tools that cut operational overhead for growing teams.",
    },
    {
        date: "2020 — 2022",
        title: "Backend & Integration Engineer [ TechScale Solutions ]",
        desc: "Built API integrations, cloud infrastructure pipelines, and internal automation tooling for SaaS and e-commerce platforms.",
    },
    {
        date: "2018 — 2020",
        title: "Full-Stack Developer [ LaunchPad Studio ]",
        desc: "Developed MVP products and custom web applications from concept to deployment, supporting early-stage startup clients.",
    },
    {
        date: "2016 — 2018",
        title: "Software Developer [ Digital Ventures ]",
        desc: "Delivered web and mobile applications with a focus on clean code, performance, and scalable architecture.",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-about pt-150 overflow-hidden">
            <div className="container pb-70">
                <div className="row align-items-end g-4">
                    <div className="col-xxl-6 col-lg-7 h-100">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">hi, we&apos;re Klarus AI</span>
                                <span className="text-2">hi, we&apos;re Klarus AI</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h1 className="section-title fw-600 fz-ds-1 lh-1 reveal-text">
                            <RevealText>About Us</RevealText>
                        </h1>
                        <p className="mb-0 fz-font-lg fw-600 neutral-900">
                            We build AI automations, MVPs, and integrated systems <br /> —
                            helping businesses operate faster, scale smarter, and grow with confidence.
                        </p>
                    </div>
                    <div className="col-lg-5 ms-auto">
                        <div className="d-flex flex-wrap justify-content-lg-end align-items-center gap-4">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/portfolio-3">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/portfolio-3">
                                    See our work
                                </Link>
                                <Link className="at-btn-circle" to="/portfolio-3">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>
                            <Link
                                to="/contact-2"
                                className="at-btn common-black border-bottom-900 text-uppercase bg-transparent rounded-0 p-0 pb-2"
                            >
                                <span className="text-uppercase">
                                    <span className="text-1">Get in Touch</span>
                                    <span className="text-2">Get in Touch</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="at-banner-thumb overflow-hidden scale-up-img">
                <img
                    className="img-cover scale-up"
                    data-speed=".4"
                    src="/assets/imgs/pages/img-137.webp"
                    alt="orisa"
                    width={1400}
                    height={700} loading="lazy" />
            </div>
            <div className="container pt-100 pb-100">
                <div className="row g-5">
                    <div className="col-lg-3">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Our journey</span>
                                <span className="text-2">Our journey</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="mb-0">Experience</h3>
                        <h6 className="fz-font-lg reveal-text">
                            <RevealText>
                                Building AI-powered systems that save time, reduce costs, and help businesses scale with confidence
                            </RevealText>
                        </h6>
                    </div>
                    <div className="col-lg-8 ms-lg-auto block-journey">
                        <div className="journey-list-wrap">
                            <div className="journey-list-line" aria-hidden />
                            <ul className="journey-list" role="list">
                                {JOURNEY_ITEMS.map((item, i) => (
                                    <li key={i} className="journey-list__item border-bottom-100">
                                        <span className="journey-list__date neutral-900">{item.date}</span>
                                        <div className="journey-list__body">
                                            <h6 className="journey-list__title neutral-900">{item.title}</h6>
                                            <p className="journey-list__desc neutral-500">{item.desc}</p>
                                        </div>
                                        <Link to="#" className="journey-list__link neutral-900" aria-label="View details">
                                            {ARROW_SVG}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
