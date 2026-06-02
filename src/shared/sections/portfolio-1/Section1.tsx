import PortfolioCard1, { type PortfolioCard1Tag } from "@/shared/cards/PortfolioCard1";
import PortfolioFilterSort, { type FilterValue } from "./PortfolioFilterSort";

type PortfolioItem = {
    classList: string;
    category: FilterValue;
    link: string;
    img: string;
    title: string;
    description: string;
    tags: PortfolioCard1Tag[];
};

const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        classList: "col-xxl-6 col-lg-7",
        category: "design",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-11.webp",
        title: "Noirform",
        description: "Brand art direction & visual identity",
        tags: [
            { label: "brand identity", href: "#" },
            { label: "art direction", href: "#" },
            { label: "interaction", href: "#" },
            { label: "experimental", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "photography",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-12.webp",
        title: "Nebula",
        description: "UI/UX & product design for digital platforms",
        tags: [
            { label: "ui design", href: "#" },
            { label: "ux research", href: "#" },
            { label: "product design", href: "#" },
            { label: "interaction", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "marketing",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-13.webp",
        title: "Voidline",
        description: "3D animation & motion branding",
        tags: [
            { label: "3d animation", href: "#" },
            { label: "motion design", href: "#" },
            { label: "visual storytelling", href: "#" },
            { label: "cgi", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "marketing",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-14.webp",
        title: "Lumen",
        description: "Branding system for modern startups",
        tags: [
            { label: "brand strategy", href: "#" },
            { label: "visual identity", href: "#" },
            { label: "startup branding", href: "#" },
            { label: "design system", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "photography",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-170.webp",
        title: "Globale",
        description: "Branding system for modern startups",
        tags: [
            { label: "brand strategy", href: "#" },
            { label: "visual identity", href: "#" },
            { label: "startup branding", href: "#" },
            { label: "design system", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "photography",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-171.webp",
        title: "Finteck",
        description: "Branding system for modern startups",
        tags: [
            { label: "brand strategy", href: "#" },
            { label: "visual identity", href: "#" },
            { label: "startup branding", href: "#" },
            { label: "design system", href: "#" },
        ],
    },
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    return (
        <section className="sec-1-portfolio-1 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container pb-60">
                <div className="row align-items-end">
                    <div className="col-xxl-8 col-lg-7">
                        <h1 className="fz-ds-1 fw-500">Highlighted Projects</h1>
                    </div>
                    <div className="col-xxl-3 col-lg-5 ms-lg-auto">
                        <p className="fz-font-lg neutral-900 text-lg-end">
                            A thoughtful selection of work shaped by simplicity and meaningful outcomes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <PortfolioFilterSort items={PORTFOLIO_DATA}>
                    {(visibleItems, { hasMore, onLoadMore }) => (
                        <div className="row g-4 justify-content-center">
                            {visibleItems.map((item, idx) => (
                                <PortfolioCard1
                                    key={`${item.title}-${idx}`}
                                    classList={item.classList}
                                    link={item.link}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    tags={item.tags}
                                />
                            ))}
                            {hasMore && (
                                <div className="col-12 text-center">
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
                            )}
                        </div>
                    )}
                </PortfolioFilterSort>
            </div>
        </section>
    );
}
