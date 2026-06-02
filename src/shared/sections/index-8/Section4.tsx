import { Link } from "react-router-dom";
const hoverImages = [
    "/assets/imgs/pages/home-8/hero8-sec4-hover-1.webp",
    "/assets/imgs/pages/home-8/hero8-sec4-hover-2.webp",
    "/assets/imgs/pages/home-8/hero8-sec4-hover-3.webp",
    "/assets/imgs/pages/home-8/hero8-sec4-hover-4.webp",
];

function ArrowIcon() {
    return (
        <>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
        </>
    );
}

export default function Section4() {
    return (
        <div className="at-service-area at-panel-pin-area sec-4-home-8 pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-4-home-8__top d-flex justify-content-between align-items-end flex-wrap gap-3 mb-50">
                            <div className="d-flex align-items-center gap-2">
                                <span className="sec-4-home-8__kicker text-uppercase fw-semibold mb-0 text-scramble">Our services</span>
                                <span className="sec-4-home-8__kicker-icon" aria-hidden="true">
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                            <span className="sec-4-home-8__since fs-font-md fw-500 text-decoration-underline">Since 2012</span>
                        </div>
                    </div>

                    {/* LEFT: stacked preview images (index-synced with .service-item via main.js) */}
                    <div className="col-xxl-4 col-lg-4 mb-40">
                        <div className="at-service-content sec-4-home-8__left">
                            <div className="sec-4-home-8__card p-relative">
                                <div className="at-service-sales-wrap at-panel-pin fix p-relative">
                                    <div className="at-service-img-wrapper image-container sec-4-home-8__img-stack">
                                        {hoverImages.map((img, index) => (
                                            <div className="hover-image" key={`hover-${index}`}>
                                                <img className="thumb" src={img} alt="orisa" width={500} height={400} loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="sec-4-home-8__caption fz-font-lg fw-500 mb-0 pb-4">
                                        We bring static screens to life with smooth, physics-based interactions and GSAP animations that guide users and elevate the experience.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="sec-4-home-8__deco mt-4 pt-4" aria-hidden="true">
                            <div className="at-about-svg-wrap move-up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                    <path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none">
                                    <path opacity="0.3" d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z" fill="#515151" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                    <path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: service rows */}
                    <div className="col-xxl-7 ms-auto col-lg-7 mb-40">
                        <div className="at-service-list-wrap sec-4-home-8__list-wrap">
                            <Link to="/services-details">
                                <div className="at-service-item service-item active">
                                    <div className="count">
                                        <span className="number">[01]</span>
                                    </div>
                                    <div className="content">
                                        <h2 className="title">UX Strategy</h2>
                                        <p className="text">UX Research, Audit, Journey Mapping.</p>
                                    </div>
                                    <div className="thumb anim-zoomin">
                                        <img data-speed=".9" src="/assets/imgs/pages/home-8/hero8-sec4-hover-1.webp" alt="orisa" width={300} height={200} loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/services-details">
                                <div className="at-service-item service-item">
                                    <div className="count">
                                        <span className="number">[02]</span>
                                    </div>
                                    <div className="content">
                                        <h2 className="title">Visual Design</h2>
                                        <p className="text">UI Design, Branding, Visual Identity.</p>
                                    </div>
                                    <div className="thumb anim-zoomin">
                                        <img src="/assets/imgs/pages/home-8/hero8-sec4-hover-2.webp" alt="orisa" width={300} height={200} loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/services-details">
                                <div className="at-service-item service-item">
                                    <div className="count">
                                        <span className="number">[03]</span>
                                    </div>
                                    <div className="content">
                                        <h2 className="title">Design Systems</h2>
                                        <p className="text">UX Research, Audit, Journey Mapping.</p>
                                    </div>
                                    <div className="thumb anim-zoomin">
                                        <img data-speed=".9" src="/assets/imgs/pages/home-8/hero8-sec4-hover-3.webp" alt="orisa" width={300} height={200} loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/services-details">
                                <div className="at-service-item service-item">
                                    <div className="count">
                                        <span className="number">[04]</span>
                                    </div>
                                    <div className="content">
                                        <h2 className="title">Interaction</h2>
                                        <p className="text">UX Research, Audit, Journey Mapping.</p>
                                    </div>
                                    <div className="thumb anim-zoomin">
                                        <img data-speed=".9" src="/assets/imgs/pages/home-8/hero8-sec4-hover-4.webp" alt="orisa" width={300} height={200} loading="lazy" />
                                    </div>
                                </div>
                            </Link>

                            <div className="at-service-btn pt-30">
                                <Link className="at-btn at_fade_anim" to="/contact-1">
                                    <span>
                                        <span className="text-1">Get a free quote</span>
                                        <span className="text-2">Get a free quote</span>
                                    </span>
                                    <i>
                                        <ArrowIcon />
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
