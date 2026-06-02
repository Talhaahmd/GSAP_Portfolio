import { Link } from "react-router-dom";
import PortfolioCard3 from "@/shared/cards/PortfolioCard3";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import RevealText from "@/shared/effects/RevealText";

// Home 4 Section 4 - Case Studies + Award + Trusted by

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const PLAY_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="44" viewBox="0 0 35 44" fill="none">
        <path
            d="M6.40193e-06 5.72002V38.28C6.40193e-06 40.7629 2.76819 42.2714 4.90001 40.92L30.8 24.64C31.2534 24.3566 31.6269 23.9644 31.8858 23.5001C32.1446 23.0358 32.2803 22.5144 32.2803 21.9843C32.2803 21.4543 32.1446 20.9328 31.8858 20.4685C31.6269 20.0042 31.2534 19.612 30.8 19.3286L4.90001 3.08002C4.42009 2.77341 3.86529 2.60044 3.29413 2.57934C2.72298 2.55824 2.15665 2.6898 1.65488 2.96014C1.15312 3.23048 0.734523 3.62957 0.443259 4.11532C0.151995 4.60107 -0.00114111 5.15546 6.40193e-06 5.72002Z"
            fill="#FEFEFE"
        />
    </svg>
);

const DIAMOND_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z"
            fill="currentColor"
        />
    </svg>
);

const FEATURED_TAGS = [
    "AI Application",
    "Data Pipelines",
    "Enterprise Systems",
    "Experimental",
];

const PORTFOLIO_CARDS = [
    {
        classList: "col-lg-6",
        link: "#",
        img: "/assets/imgs/pages/img-87.webp",
        title: "Smart Automation",
        metricPrefix: "+",
        metricValue: "30",
        metricLabel: "Operational Speed",
        tags: ["AI Models", "Deployment", "Scalability", "Engineering"],
    },
    {
        classList: "col-lg-6",
        link: "#",
        img: "/assets/imgs/pages/img-88.webp",
        title: "Data Intelligence",
        metricPrefix: "-",
        metricValue: "20",
        metricLabel: "Planning Risk",
        tags: ["Decision Systems", "Analytics", "Systems", "Engineering"],
    },
];

type Brand = { src: string; width: number; height: number };

const BRANDS: Brand[] = [
    { src: "/assets/imgs/template/logo/1.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/2.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/3.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/4.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/5.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/6.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/7.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/8.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/9.png", width: 120, height: 40 },
    { src: "/assets/imgs/template/logo/10.png", width: 120, height: 40 },
];

export default function Section4() {
    return (
        <div className="container-2200 bg-neutral-50 pt-30">
            <section className="sec-4-home-4 pt-100 pb-100 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0 border-100">
                <div className="container">
                    <div className="row align-items-end g-4">
                        <div className="col-xxl-6 col-lg-6">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">CASE STUDIES</span>
                                    <span className="text-2">CASE STUDIES</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="reveal-text mb-0">
                                <RevealText>Real-world AI solutions with measurable impact</RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 ms-auto d-flex justify-content-lg-end">
                            <div
                                className="at-btn-group at-btn-group-transparent at_fade_anim"
                                data-delay=".5"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/portfolio-3">
                                    {ARROW_CIRCLE}
                                </Link>
                                <Link className="at-btn z-index-1" to="/portfolio-3">
                                    View All Projects
                                </Link>
                                <Link className="at-btn-circle" to="/portfolio-3">
                                    {ARROW_CIRCLE}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-70">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="card_case__studies-list">
                                <div className="card_case__studies-card">
                                    <div className="card_case__studies-left">
                                        <span className="card_case__studies-featured-tag">Featured case</span>
                                        <h4 className="card_case__studies-title">
                                            <Link to="#">
                                                AI-Driven Demand <br /> Forecasting System
                                            </Link>
                                        </h4>
                                        <p className="card_case__studies-desc">
                                            We built an intelligent forecasting platform that helps enterprises
                                            predict demand, optimize inventory, and reduce operational risk using
                                            real-time data and machine learning models.
                                        </p>
                                        <div className="card_case__studies-metrics">
                                            <div className="card_case__studies-metric">
                                                <h4 className="card_case__studies-metric-value mb-0">
                                                    <OdometerCounter count={72} prefix="+" suffix="%" />
                                                </h4>
                                                <span className="card_case__studies-metric-label">
                                                    Planning Efficiency
                                                </span>
                                            </div>
                                            <div className="card_case__studies-metric-divider" />
                                            <div className="card_case__studies-metric">
                                                <h4 className="card_case__studies-metric-value mb-0">
                                                    <OdometerCounter count={18} prefix="-" suffix="%" />
                                                </h4>
                                                <span className="card_case__studies-metric-label">
                                                    Inventory Cost
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mt-auto pt-50">
                                            <div className="card_case__studies-tags">
                                                {FEATURED_TAGS.map((tag) => (
                                                    <Link key={tag} to="#" className="card_case__studies-tag">
                                                        {tag}
                                                    </Link>
                                                ))}
                                            </div>
                                            <Link to="#" className="card_case__studies-link text-white">
                                                <span className="text-white text-nowrap">View case</span>
                                                {PLUS_ICON}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card_case__studies-right">
                                        <div className="card_case__studies-thumb anim-zoomin">
                                            <Link to="#">
                                                <img
                                                    src="/assets/imgs/pages/img-86.webp"
                                                    alt="AI-Driven Demand Forecasting System"
                                                    width={800}
                                                    height={500}
                                                    className="w-100 h-100" loading="lazy" />
                                            </Link>
                                            <div className="card_case__studies-play p-relative postbox-play-btn">
                                                <a
                                                    className="popup-video size-100"
                                                    href="https://www.youtube.com/watch?v=VCPGMjCW0is"
                                                    target="_blank"
                                                >
                                                    <span className="text-white">{PLAY_ICON}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {PORTFOLIO_CARDS.map((card) => (
                            <PortfolioCard3
                                key={card.title}
                                classList={card.classList}
                                link={card.link}
                                img={card.img}
                                title={card.title}
                                metricPrefix={card.metricPrefix}
                                metricValue={card.metricValue}
                                metricLabel={card.metricLabel}
                                tags={card.tags}
                            />
                        ))}
                    </div>
                </div>

                <div className="container pt-120">
                    <div className="row g-5">
                        <div className="col-lg-6 col-12">
                            <div className="award-description d-flex gap-5 pe-lg-5">
                                <div className="icon">{DIAMOND_ICON}</div>
                                <div className="content">
                                    <h5 className="revert-text mb-0 reveal-text">
                                        <RevealText>
                                            Klarus builds automation systems, MVPs, and scalable digital solutions.
                                            We combine strategy, development, and integrations to help businesses
                                            launch faster and scale smarter.
                                        </RevealText>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="neutral-500 fw-600 text-uppercase">trusted by</span>
                            <div className="d-flex align-items-center flex-wrap gap-lg-5 gap-4 mb-40 pt-30">
                                {BRANDS.slice(0, 5).map((brand, i) => (
                                    <div key={i} className="brand">
                                        <img
                                            src={brand.src}
                                            alt={`Client ${i + 1}`}
                                            width={brand.width}
                                            height={brand.height}
                                            style={{ height: 32, width: "auto" }} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-lg-5 gap-4">
                                {BRANDS.slice(5, 10).map((brand, i) => (
                                    <div key={i} className="brand">
                                        <img
                                            src={brand.src}
                                            alt={`Client ${i + 6}`}
                                            width={brand.width}
                                            height={brand.height}
                                            style={{ height: 32, width: "auto" }} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
