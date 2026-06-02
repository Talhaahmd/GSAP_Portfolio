import { Link } from "react-router-dom";
import PortfolioCard2 from "@/shared/cards/PortfolioCard2";
import RevealText from "@/shared/effects/RevealText";

// Home 3 Section 6 - Case Studies / Portfolio area

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

const CASE_STUDIES = [
    {
        classList: "col-lg-6",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-63.webp",
        category: "ui design",
        headline: "+72% ROAS in 90 days",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "Ecommerce Brand",
        featured: true,
    },
    {
        classList: "col-lg-6",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-64.webp",
        category: "Growth",
        headline: "3× qualified leads in 4 months",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "SaaS Startup",
        featured: false,
    },
    {
        classList: "col-lg-6",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-65.webp",
        category: "Conversion",
        headline: "–38% Cost per acquisition",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "Fintech Platform",
        featured: false,
    },
    {
        classList: "col-lg-6",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-66.webp",
        category: "Brand",
        headline: "+41% conversion rate",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "B2B Service Company",
        featured: false,
    },
    {
        classList: "col-lg-6",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-67.webp",
        category: "Performance",
        headline: "+54% revenue growth YoY",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "DTC Brand",
        featured: false,
    },
    {
        classList: "col-lg-6",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-68.webp",
        category: "Performance",
        headline: "$1.4M revenue in 6 months",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "Global Brand",
        featured: false,
    },
];

const TAGS = [
    "[ Conversion-focused ]",
    "[ Data-driven ]",
    "[ Built for scale ]",
    "[ User-centric ]",
    "[Future-proof]",
];

export default function Section6() {
    return (
        <div className="sec-6-home-3 portfolio-area bg-neutral-50 pt-120">
            <div className="container">
                <div className="row g-4 align-items-end mb-40">
                    <div className="col-lg-8">
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
                            <RevealText>Real Results. Proven Impact.</RevealText>
                        </h3>
                    </div>
                    <div className="col-xxl-3 col-lg-4 ms-auto d-flex justify-content-lg-end">
                        <div
                            className="at-btn-group at_fade_anim"
                            data-delay=".4"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <Link className="at-btn-circle" to="/portfolio-2">
                                {ARROW_CIRCLE}
                            </Link>
                            <Link className="at-btn z-index-1" to="/portfolio-2">
                                Explore all case studies
                            </Link>
                            <Link className="at-btn-circle" to="/portfolio-2">
                                {ARROW_CIRCLE}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {CASE_STUDIES.map((item, index) => (
                        <PortfolioCard2
                            key={index}
                            classList={item.classList}
                            category={item.category}
                            link={item.link}
                            img={item.img}
                            title={item.title}
                            headline={item.headline}
                            description={item.description}
                            linkCase={item.linkCase}
                            featuredHtml={
                                item.featured ? (
                                    <span className="alt-portfolio-tag bg-theme-primary px-3 py-2 rounded-pill p-absolute top-0 end-0 m-4 fz-10 fw-600 text-white">
                                        FEATURED CASE
                                    </span>
                                ) : undefined
                            }
                        />
                    ))}
                </div>

                <div className="row">
                    <div className="col-12 order-5">
                        <div
                            className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center pb-60 pt-40 gap-md-4 gap-2 at_fade_anim"
                            data-fade-from="bottom"
                            data-duration="2"
                        >
                            {TAGS.map((tag, i) => (
                                <p key={i} className="neutral-900 mb-0">
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
