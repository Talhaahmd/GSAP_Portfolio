import { Link } from "react-router-dom";
const PLUS_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
        <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
    </svg>
);

const ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const STAR_SVG_LG = (
    <svg
        className="d-none d-lg-inline-flex"
        xmlns="http://www.w3.org/2000/svg"
        width="122"
        height="122"
        viewBox="0 0 122 122"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M65.3572 0H56.6428V50.4809L20.9475 14.7855L14.7855 20.9475L50.4809 56.6428H0V65.3572H50.4809L14.7855 101.053L20.9475 107.214L56.6428 71.5188V122H65.3572V71.5188L101.053 107.214L107.214 101.053L71.5188 65.3572H122V56.6428H71.5188L107.214 20.9474L101.053 14.7855L65.3572 50.4809V0Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_SVG_104 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
        <path
            d="M8.66516 56.3359L8.66455 47.6697H78.7428L61.6274 30.554L67.7556 24.4258L95.333 52.003L67.7556 79.5803L61.6274 73.4517L78.7432 56.3363L8.66516 56.3359Z"
            fill="currentColor"
        />
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

const LOGO_SVG = (
    <svg
        className="fill-primary mb-10"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
    >
        <path d="M17 18L30 5H43V18L30 31V18H17Z" fill="#F0460E" />
        <path d="M30 31H43V44H30V31Z" fill="#F0460E" />
        <path d="M17 18L4 31V44H17L30 31H17V18Z" fill="#F0460E" />
        <path d="M17 18H4V5H17V18Z" fill="#F0460E" />
    </svg>
);

const PORTFOLIO_DESC =
    "A curated selection of projects where strategy, creativity, and craftsmanship come together to build meaningful and enduring brand experiences.";

function PortfolioThumb({
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
    src: string;
    alt: string;
    tag: string;
    title: string;
    description: string;
    overlayClass?: string;
    /** when true, thumb is above the title row so add mb-15 */
    thumbBelowContent?: boolean;
    width: number;
    height: number;
}) {
    return (
        <Link
            to="/portfolio-details-1"
            className={`alt-portfolio-thumb p-relative fix d-block ${thumbBelowContent ? "" : "mb-15"}`.trim()}
        >
            <span className="w-100 d-block scale-img-from-to" data-value-1="1.5" data-value-2="1">
                <img
                    className="img-cover rounded-4"
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

function PortfolioItemContent({ title }: { title: string }) {
    return (
        <div className="alt-portfolio-content d-flex justify-content-between align-items-center">
            <h5 className="alt-portfolio-title mb-0">
                <Link to="/portfolio-details-1" className="common-underline">
                    {title}
                </Link>
            </h5>
            <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
        </div>
    );
}

export default function Section6() {
    return (
        <div className="container-2200">
            <div className="alt-portfolio-area portfolio-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-md-8">
                            <div className="alt-portfolio-main-title-wrap portfolio-text">
                                <h1 className="alt-portfolio-main-title reveal-text fz-ds-1 fw-500">
                                    Our
                                    {STAR_SVG_LG}
                                    Selected
                                    <br /> Work
                                    {ARROW_SVG_104}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Row 1: Noirform, Nebula */}
                    <div className="row justify-content-xl-start justify-content-center">
                        <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 offset-xxl-4 offset-xl-4">
                            <div className="alt-portfolio-item at-hover-item mb-30">
                                <div className="alt-portfolio-content d-flex justify-content-between align-items-center mb-15">
                                    <h5 className="alt-portfolio-title mb-0">
                                        <Link to="/portfolio-details-1" className="common-underline">
                                            Noirform
                                        </Link>
                                    </h5>
                                    <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
                                </div>
                                <PortfolioThumb
                                    src="/assets/imgs/pages/img-34.webp"
                                    alt="orisa"
                                    tag="Creative"
                                    title="Brand art direction & visual identity"
                                    description="We always provide people a complete solution upon focused of any business"
                                    thumbBelowContent
                                    width={400}
                                    height={500}
                                />
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 offset-xl-7 col-lg-4 col-md-6">
                            <div className="alt-portfolio-item mb-30 alt-portfolio-item-2 at-hover-item">
                                <PortfolioThumb
                                    src="/assets/imgs/pages/img-35.webp"
                                    alt="orisa"
                                    tag="ui design"
                                    title="UI/UX & product design for digital platforms"
                                    description="We always provide people a complete solution upon focused of any business"
                                    width={550}
                                    height={540}
                                />
                                <PortfolioItemContent title="Nebula" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Nexora, move-up + Veltrix */}
                    <div className="row justify-content-xl-start justify-content-center">
                        <div className="col-xxl-3 col-lg-4 col-md-6">
                            <div className="alt-portfolio-item alt-portfolio-item-3 mb-30 at-hover-item">
                                <div className="alt-portfolio-content d-flex justify-content-between align-items-center mb-15">
                                    <h5 className="alt-portfolio-title mb-0">
                                        <Link to="/portfolio-details-1" className="common-underline">
                                            Nexora
                                        </Link>
                                    </h5>
                                    <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
                                </div>
                                <PortfolioThumb
                                    src="/assets/imgs/pages/img-36.webp"
                                    alt="orisa"
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
                                    src="/assets/imgs/pages/img-37.webp"
                                    alt="orisa"
                                    tag="web development"
                                    title="High-performance website development"
                                    description="We always provide people a complete solution upon focused of any business"
                                    overlayClass="end-0 me-3"
                                    width={400}
                                    height={450}
                                />
                                <PortfolioItemContent title="Veltrix" />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Solace, Ardent */}
                    <div className="row justify-content-xl-start justify-content-center">
                        <div className="col-xl-4 offset-xl-2 col-xxl-3 offset-xxl-2 col-lg-5 col-md-6">
                            <div className="alt-portfolio-item alt-portfolio-item-5 mb-30 at-hover-item">
                                <div className="alt-portfolio-content d-flex justify-content-between align-items-center mb-15">
                                    <h5 className="alt-portfolio-title mb-0">
                                        <Link to="/portfolio-details-1" className="common-underline">
                                            Solace
                                        </Link>
                                    </h5>
                                    <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
                                </div>
                                <PortfolioThumb
                                    src="/assets/imgs/pages/img-38.webp"
                                    alt="orisa"
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
                                    src="/assets/imgs/pages/img-39.webp"
                                    alt="orisa"
                                    tag="creative"
                                    title="Visual storytelling & brand experience"
                                    description="We always provide people a complete solution upon focused of any business"
                                    width={550}
                                    height={400}
                                />
                                <PortfolioItemContent title="Ardent" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="row">
                        <div className="col-xxl-4 col-lg-6 col-md-8 offset-xxl-4 offset-lg-3">
                            <div className="mg-portfolio-title-wrap mb-30">
                                {LOGO_SVG}
                                <div className="at_fade_anim" data-delay=".3">
                                    <p className="mg-portfolio-dec mb-30 fz-font-lg">{PORTFOLIO_DESC}</p>
                                </div>
                                <div
                                    className="at-btn-group at_fade_anim"
                                    data-delay=".4"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <Link className="at-btn-circle" to="/portfolio-1">
                                        {ARROW_SVG}
                                    </Link>
                                    <Link className="at-btn z-index-1" to="/portfolio-1">
                                        View latest projects
                                    </Link>
                                    <Link className="at-btn-circle" to="/portfolio-1">
                                        {ARROW_SVG}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
