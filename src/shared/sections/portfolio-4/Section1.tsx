import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import PortfolioFilterSort, { type FilterValue } from "@/shared/sections/portfolio-1/PortfolioFilterSort";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const DETAIL_LINK = "/portfolio-details-1";

type CaseStudyCardItem = {
    category: FilterValue;
    img: string;
    alt: string;
    metricPrefix: string;
    metricValue: number;
    metricSuffix: string;
    metricLabel: string;
    tags: string[];
    title: string;
    linkText: string;
};

const CARDS: CaseStudyCardItem[] = [
    {
        category: "all",
        img: "/assets/imgs/pages/img-108.webp",
        alt: "Smart Automation",
        metricPrefix: "-",
        metricValue: 35,
        metricSuffix: "%",
        metricLabel: "Forecasting Error",
        tags: ["DECISION ENGINES", "PREDICTIVE ANALYTICS", "MLOPS", "BIG DATA"],
        title: "Predictive Logic Engine",
        linkText: "VIEW SYSTEM DESIGN",
    },
    {
        category: "all",
        img: "/assets/imgs/pages/img-174.webp",
        alt: "Smart Automation",
        metricPrefix: "",
        metricValue: 10,
        metricSuffix: "x",
        metricLabel: "Data Sync Speed",
        tags: ["LLM FINE-TUNING", "NLP", "RAG PIPELINES", "GENERATIVE AI"],
        title: "Semantic Search Core",
        linkText: "VIEW CASE STUDY",
    },
    {
        category: "all",
        img: "/assets/imgs/pages/img-110.webp",
        alt: "Smart Automation",
        metricPrefix: "",
        metricValue: 99,
        metricSuffix: ".9%",
        metricLabel: "System Reliability",
        tags: ["SCALABLE ARCHITECTURE", "CLOUD-NATIVE", "KUBERNETES", "AUTO-SCALING"],
        title: "Distributed ML Pipeline",
        linkText: "VIEW INFRASTRUCTURE",
    },
    {
        category: "all",
        img: "/assets/imgs/pages/img-107.webp",
        alt: "Smart Automation",
        metricPrefix: "+",
        metricValue: 45,
        metricSuffix: "%",
        metricLabel: "Processing Velocity",
        tags: ["COMPUTER VISION", "REAL-TIME ML", "EDGE DEPLOYMENT", "PYTORCH"],
        title: "Autonomous Detection",
        linkText: "VIEW ARCHITECTURE",
    },
    {
        category: "all",
        img: "/assets/imgs/pages/img-175.webp",
        alt: "Smart Automation",
        metricPrefix: "",
        metricValue: 99,
        metricSuffix: ".9%",
        metricLabel: "System Reliability",
        tags: ["SCALABLE ARCHITECTURE", "CLOUD-NATIVE", "KUBERNETES", "AUTO-SCALING"],
        title: "Distributed ML Pipeline",
        linkText: "VIEW INFRASTRUCTURE",
    },
    {
        category: "all",
        img: "/assets/imgs/pages/img-109.webp",
        alt: "Smart Automation",
        metricPrefix: "",
        metricValue: 10,
        metricSuffix: "x",
        metricLabel: "Data Sync Speed",
        tags: ["LLM FINE-TUNING", "NLP", "RAG PIPELINES", "GENERATIVE AI"],
        title: "Semantic Search Core",
        linkText: "VIEW CASE STUDY",
    },
];

function CaseStudyCard({ img, alt, metricPrefix, metricValue, metricSuffix, metricLabel, tags, title, linkText }: CaseStudyCardItem) {
    return (
        <div className="card_case__studies-list card_case__studies-list--row mt-30">
            <div className="card_case__studies-card card_case__studies-card--overlay bg-neutral-100">
                <div className="card_case__studies-visual anim-zoomin">
                    <Link to={DETAIL_LINK}>
                        <img
                            src={img}
                            alt={alt}
                            width={600}
                            height={400}
                            className="w-100 img-cover" loading="lazy" />
                    </Link>
                    <div className="card_case__studies-metric-overlay">
                        <h4 className="card_case__studies-metric-value mb-0">
                            <OdometerCounter
                                count={metricValue}
                                prefix={metricPrefix}
                                suffix={metricSuffix}
                            />
                        </h4>
                        <span className="card_case__studies-metric-label">{metricLabel}</span>
                    </div>
                    <div className="card_case__studies-tags-overlay">
                        {tags.map((tag) => (
                            <Link key={tag} to="#" className="card_case__studies-tag">
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="card_case__studies-footer mt-10 bg-neutral-0">
                    <h5 className="card_case__studies-footer-title neutral-900">
                        <Link to={DETAIL_LINK}>{title}</Link>
                    </h5>
                    <Link to={DETAIL_LINK} className="card_case__studies-link neutral-900">
                        <span className="neutral-900"> {linkText}</span>
                        {PLUS_ICON}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Section1() {
    return (
        <section className="sec-1-portfolio-4 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container">
                <PortfolioFilterSort items={CARDS} showFilterSortBar={false}>
                    {(visibleItems, { hasMore, onLoadMore }) => (
                        <>
                            <div className="row gallery">
                                <div className="col-12 items">
                                    <div className="sec-head">
                                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                            <span className="text-uppercase">
                                                <span className="text-1">CASE STUDIES</span>
                                                <span className="text-2">CASE STUDIES</span>
                                            </span>
                                            <i>
                                                {ARROW_SVG}
                                                {ARROW_SVG}
                                            </i>
                                        </span>
                                        <h1 className="fz-ds-1 fw-500 lh-1">
                                            Project
                                            <br />
                                            Showcase
                                        </h1>
                                    </div>
                                </div>
                                {visibleItems.map((card, idx) => (
                                    <div key={`${card.title}-${idx}`} className="col-lg-6 items">
                                        <CaseStudyCard {...card} />
                                    </div>
                                ))}
                            </div>
                            {hasMore && (
                                <div className="row mt-40">
                                    <div className="col-12 text-center pt-40">
                                        <button type="button" className="at-btn" onClick={onLoadMore}>
                                            <span>
                                                <span className="text-1">LOAD MORE PROJECTS</span>
                                                <span className="text-2">LOAD MORE PROJECTS</span>
                                            </span>
                                            <i>
                                                {ARROW_SVG}
                                                {ARROW_SVG}
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </PortfolioFilterSort>
            </div>
        </section>
    );
}
