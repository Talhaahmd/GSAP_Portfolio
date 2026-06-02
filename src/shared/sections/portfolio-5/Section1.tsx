import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
        <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
    </svg>
);

const DECO_SVG_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
        <path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" />
    </svg>
);
const DECO_SVG_2 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none">
        <path
            opacity="0.3"
            d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z"
            fill="#515151"
        />
    </svg>
);
const DECO_SVG_3 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
        <path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" />
    </svg>
);

function PortfolioThumb({
    href,
    src,
    alt,
    tag,
    title,
    description,
    overlayClass,
    thumbBelowContent,
    width,
    height,
}: {
    href: string;
    src: string;
    alt: string;
    tag: string;
    title: string;
    description: string;
    overlayClass?: string;
    thumbBelowContent?: boolean;
    width: number;
    height: number;
}) {
    return (
        <Link
            to={href}
            className={`alt-portfolio-thumb p-relative fix d-block ${thumbBelowContent ? "" : "mb-15"}`.trim()}
        >
            <span className="w-100 d-block scale-img-from-to" data-value-1="1.5" data-value-2="1">
                <img
                    className="w-100 img-cover"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height} loading="lazy" />
            </span>
            <div className={`alt-portfolio-btn ${overlayClass ?? ""}`.trim()}>
                <div className="content">
                    <span className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-label">
                        {tag}
                    </span>
                    <h2 className="fw-400 fz-font-3xl text-white mb-0 mt-20">{title}</h2>
                    <p className="text-white fz-font-md mb-0 mt-10 text-truncate-2 des">{description}</p>
                </div>
            </div>
        </Link>
    );
}

function PortfolioItemContent({ href, title }: { href: string; title: string }) {
    return (
        <div className="alt-portfolio-content d-flex justify-content-between align-items-center">
            <h5 className="alt-portfolio-title mb-0">
                <Link to={href} className="common-underline">
                    {title}
                </Link>
            </h5>
            <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
        </div>
    );
}

const DETAIL_LINK = "/portfolio-details-1";

export default function Section1() {
    return (
        <section className="sec-1-portfolio-5 overflow-hidden pt-150">
            <div className="container pb-100">
                <div className="row">
                    <div className="col-12">
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
                            <h1 className="fz-ds-1 fw-500 lh-1 d-flex flex-wrap align-items-end">
                                Case Studies /
                                <span className="fz-font-lg fw-500 mb-3">
                                    A thoughtful selection of work shaped by <br className="d-md-block d-none" />{" "}
                                    simplicity and meaningful outcomes.
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-2200">
                <div className="alt-portfolio-area portfolio-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-120">
                    <div className="container">
                        {/* Row 1: Noirform, Nebula */}
                        <div className="row justify-content-xl-start justify-content-center">
                            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 offset-xxl-4 offset-xl-4">
                                <div className="alt-portfolio-item at-hover-item mb-30">
                                    <div className="alt-portfolio-content d-flex justify-content-between align-items-center mb-15">
                                        <h5 className="alt-portfolio-title mb-0">
                                            <Link to={DETAIL_LINK} className="common-underline">
                                                Noirform
                                            </Link>
                                        </h5>
                                        <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
                                    </div>
                                    <PortfolioThumb
                                        href={DETAIL_LINK}
                                        src="/assets/imgs/pages/img-34.webp"
                                        alt="Noirform"
                                        tag="Creative"
                                        title="Brand art direction & visual identity"
                                        description="We always provide people a complete solution upon focused of any business"
                                        thumbBelowContent
                                        width={400}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 offset-xl-8 offset-xl-7 col-lg-4 col-md-6">
                                <div className="alt-portfolio-item mb-30 alt-portfolio-item-2 at-hover-item">
                                    <PortfolioThumb
                                        href={DETAIL_LINK}
                                        src="/assets/imgs/pages/img-35.webp"
                                        alt="Nebula"
                                        tag="ui design"
                                        title="UI/UX & product design for digital platforms"
                                        description="We always provide people a complete solution upon focused of any business"
                                        width={550}
                                        height={540}
                                    />
                                    <PortfolioItemContent href={DETAIL_LINK} title="Nebula" />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Nexora, deco + Veltrix */}
                        <div className="row justify-content-xl-start justify-content-center">
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="alt-portfolio-item alt-portfolio-item-3 mb-30 at-hover-item">
                                    <div className="alt-portfolio-content d-flex justify-content-between align-items-center mb-15">
                                        <h5 className="alt-portfolio-title mb-0">
                                            <Link to={DETAIL_LINK} className="common-underline">
                                                Nexora
                                            </Link>
                                        </h5>
                                        <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
                                    </div>
                                    <PortfolioThumb
                                        href={DETAIL_LINK}
                                        src="/assets/imgs/pages/img-36.webp"
                                        alt="Nexora"
                                        tag="e-commerce"
                                        title="Campaigns & focused content"
                                        description="We always provide people a complete solution upon focused of any business"
                                        thumbBelowContent
                                        width={400}
                                        height={550}
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-3 offset-xl-3 col-lg-4 col-md-6">
                                <div className="at-about-svg-wrap move-up">
                                    {DECO_SVG_1}
                                    {DECO_SVG_2}
                                    {DECO_SVG_3}
                                </div>
                                <div className="alt-portfolio-item alt-portfolio-item-4 mb-30 at-hover-item">
                                    <PortfolioThumb
                                        href={DETAIL_LINK}
                                        src="/assets/imgs/pages/img-37.webp"
                                        alt="Veltrix"
                                        tag="web development"
                                        title="High-performance website development"
                                        description="We always provide people a complete solution upon focused of any business"
                                        overlayClass="end-0 me-3"
                                        width={400}
                                        height={450}
                                    />
                                    <PortfolioItemContent href={DETAIL_LINK} title="Veltrix" />
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Solace, Ardent */}
                        <div className="row justify-content-xl-start justify-content-center">
                            <div className="col-xl-4 offset-xl-2 col-xxl-3 offset-xxl-2 col-lg-5 col-md-6">
                                <div className="alt-portfolio-item alt-portfolio-item-5 mb-30 at-hover-item">
                                    <div className="alt-portfolio-content d-flex justify-content-between align-items-center mb-15">
                                        <h5 className="alt-portfolio-title mb-0">
                                            <Link to={DETAIL_LINK} className="common-underline">
                                                Solace
                                            </Link>
                                        </h5>
                                        <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
                                    </div>
                                    <PortfolioThumb
                                        href={DETAIL_LINK}
                                        src="/assets/imgs/pages/img-38.webp"
                                        alt="Solace"
                                        tag="motion design"
                                        title="Animated brand storytelling"
                                        description="We always provide people a complete solution upon focused of any business"
                                        thumbBelowContent
                                        width={400}
                                        height={550}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 offset-xxl-8 offset-xl-8 col-lg-5 col-md-6">
                                <div className="alt-portfolio-item alt-portfolio-item-6 mb-30 at-hover-item">
                                    <PortfolioThumb
                                        href={DETAIL_LINK}
                                        src="/assets/imgs/pages/img-39.webp"
                                        alt="Ardent"
                                        tag="creative"
                                        title="Visual storytelling & brand experience"
                                        description="We always provide people a complete solution upon focused of any business"
                                        width={550}
                                        height={400}
                                    />
                                    <PortfolioItemContent href={DETAIL_LINK} title="Ardent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
