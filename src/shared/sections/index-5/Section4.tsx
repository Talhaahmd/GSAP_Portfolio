import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import PortfolioCard4 from "@/shared/cards/PortfolioCard4";

// Home 5 Section 4 - Deployed systems / Selected work

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

const CARDS = [
    {
        img: "/assets/imgs/pages/img-107.webp",
        alt: "Smart Automation",
        metricPrefix: "+",
        metricValue: 30,
        metricLabel: "Operational Speed",
        tags: ["AI Models", "Deployment", "Scalability", "Engineering"],
        title: "Smart Automation",
        linkText: "VIEW ARCHITECTURE",
        href: "/portfolio-details-1",
    },
    {
        img: "/assets/imgs/pages/img-108.webp",
        alt: "Data Intelligence",
        metricPrefix: "-",
        metricValue: 20,
        metricLabel: "Planning Risk",
        tags: ["Decision Systems", "Analytics", "Systems", "Engineering"],
        title: "Data Intelligence",
        linkText: "VIEW SYSTEM DESIGN",
        href: "/portfolio-details-1",
    },
    {
        img: "/assets/imgs/pages/img-109.webp",
        alt: "Smart Automation",
        metricPrefix: "+",
        metricValue: 30,
        metricLabel: "Operational Speed",
        tags: ["AI Models", "Deployment", "Scalability", "Engineering"],
        title: "Smart Automation",
        linkText: "VIEW CASE STUDY",
        href: "/portfolio-details-1",
    },
    {
        img: "/assets/imgs/pages/img-110.webp",
        alt: "Distributed ML Pipeline",
        metricPrefix: "-",
        metricValue: 20,
        metricLabel: "Planning Risk",
        tags: ["SCALABLE ARCHITECTURE", "CLOUD-NATIVE", "KUBERNETES", "AUTO-SCALING"],
        title: "Distributed ML Pipeline",
        linkText: "VIEW INFRASTRUCTURE",
        href: "/portfolio-details-1",
    },
];

const FOOTER_TAGS = [
    "[ Conversion-focused ]",
    "[ Data-driven ]",
    "[ Built for scale ]",
    "[ User-centric ]",
    "[Future-proof]",
];

export default function Section4() {
    return (
        <div className="bg-neutral-50">
            <div className="container-2200">
                <section className="sec-4-home-5 pt-100 pb-100 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0">
                    <div className="container">
                        <div className="row g-4 align-items-end">
                            <div className="col-lg-7">
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">DEPLOYED SYSTEMS</span>
                                        <span className="text-2">DEPLOYED SYSTEMS</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <h2 className="reveal-text mb-0">
                                    <RevealText>Selected work</RevealText>
                                </h2>
                            </div>
                            <div className="col-lg-3 ms-auto d-flex justify-content-lg-end">
                                <div
                                    className="at-btn-group at_fade_anim"
                                    data-delay=".4"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <Link className="at-btn-circle" to="/portfolio-5">
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                    <Link className="at-btn z-index-1" to="/portfolio-5">
                                        Explore Github Repos
                                    </Link>
                                    <Link className="at-btn-circle" to="/portfolio-5">
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container pt-70">
                        <div className="row g-4">
                            {CARDS.map((card, i) => (
                                <div key={i} className="col-lg-6">
                                    <PortfolioCard4 {...card} />
                                </div>
                            ))}
                        </div>

                        <div className="row pt-100">
                            <div className="col-12 order-5">
                                <div
                                    className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center pb-30 gap-md-4 gap-2 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-duration="2"
                                >
                                    {FOOTER_TAGS.map((tag, i) => (
                                        <p key={i} className="neutral-900 mb-0">
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
