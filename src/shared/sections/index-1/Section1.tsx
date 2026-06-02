import { Link } from "react-router-dom";
function ArrowIcon() {
    return (
        <>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
        </>
    );
}

const heroServices = [
    "Web Development",
    "AI Automations",
    "MVP and App Development",
    "CRM Integrations",
];

export default function Section1() {
    return (
        <>
            {/* at-hero-area */}
            <div
                className="at-hero-area scene p-relative z-index-1 bg-position fix at-hero-spacing bg-primary-1 overflow-hidden"
                data-background="/assets/imgs/pages/bg-img.webp"
                data-parallax-scene
                data-scalar-x="18"
                data-scalar-y="18"
                data-friction-x="0.12"
                data-friction-y="0.12"
            >
                <div
                    className="at-hero-bg at_fade_anim overflow-visible"
                    data-speed=".8"
                    data-delay=".4"
                    data-fade-from="bottom"
                    data-ease="bounce"
                    data-parallax
                    data-parallax-speed="0.45"
                    data-parallax-range="100"
                >
                    <img
                        width={1190}
                        height={1043}
                        className="layer"
                        data-depth=".1"
                        src="/assets/imgs/pages/img-1.webp"
                        alt="orisa"
                        style={{ width: "auto", height: "auto", alignSelf: "flex-end" }} loading="lazy" />
                </div>
                <div className="container p-relative">
                    <div className="p-absolute bottom-100 start-0 ms-5 mb-100 d-none d-lg-block">
                        <a
                            href="mailto:hello@orisa.com"
                            className="at-hero-button at-btn bg-transparent p-relative"
                        >
                            <img
                                src="/assets/imgs/icons/badge-1.svg"
                                alt=""
                                width={120}
                                height={120} loading="lazy" />
                            <span className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center">
                                <i className="text-white">
                                    <ArrowIcon />
                                </i>
                                <span className="mt-2">
                                    <span className="fw-700 text-white">Let&apos;s Talk</span>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-5">
                            <div className="at-hero-video mb-30 at_fade_anim">
                                <div className="rounded-3 overflow-hidden">
                                    <video
                                        className="img-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        poster="/assets/imgs/pages/img-2.webp"
                                    >
                                        <source src="/assets/imgs/video/video-1.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <Link
                                    className="at-btn text-white rounded-0 bg-transparent px-0 pt-2 pb-3 border-0"
                                    to="/about-2"
                                >
                                    <span>
                                        <span className="text-1">How we work</span>
                                        <span className="text-2">How we work</span>
                                    </span>
                                    <i>
                                        <ArrowIcon />
                                    </i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-5 col-md-5">
                            <div className="alt-hero-service at-hero-service mb-30">
                                <ul>
                                    <li className="pb-10 at_fade_anim">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M30 20H20V30L20 40H10L0 30L10 20H0V0H10L20 10V1.90735e-06L30 0L40 10L30 20ZM20 10V20H10L20 10Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M30 20H40V40H30L20 30L30 20Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </li>
                                    <li className="at_fade_anim">
                                        <span className="fz-font-md fw-500 text-white ">
                                            We Put AI At The Core Of Everything We Do
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-5 offset-xxl-2 col-xl-6 col-12 ms-auto order-xl-1 order-md-2">
                            <div className="at-hero-content mb-30">
                                <span className="at-hero-subtitle text-white mb-10 d-inline-block at_fade_anim">
                                    Ai Development Agency
                                </span>
                                <h2 className="at-hero-title text-white">
                                    <span
                                        className="at_fade_anim"
                                        data-delay="0.5"
                                        data-fade-from="top"
                                    >
                                        AI Workflows <br /> That Automate <br /> Business Operations.</span>
                                </h2>
                                <div
                                    className="at-hero-btn d-flex flex-wrap gap-2 pt-20 at_fade_anim"
                                    data-delay="0.5"
                                    data-fade-from="bottom"
                                >
                                    <Link
                                        className="at-btn bg-white rounded-0 text-dark"
                                        to="/portfolio-1"
                                    >
                                        <span>
                                            <span className="text-1">Explore All Work</span>
                                            <span className="text-2">Explore All Work</span>
                                        </span>
                                        <i>
                                            <ArrowIcon />
                                        </i>
                                    </Link>
                                    <Link
                                        className="at-btn at-btn-border-white text-white rounded-0"
                                        to="/contact-1"
                                    >
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
                        <div className="col-1 ms-auto text-end align-self-start rotate-90 order-xl-2 order-md-1 d-none d-md-block">
                            <a href="mailto:info@klarus.io" className="text-white fw-600">
                                <span className="at_fade_anim">info@klarus.io</span>
                            </a>
                        </div>
                    </div>
                    <div className="row pt-60 at_fade_anim">
                        <div className="col-xxl-8 col-xl-9 mx-auto">
                            <div className="border-bottom border-white opacity-25 mb-20"></div>
                            <div className="at-hero-service-2">
                                <ul className="d-flex flex-wrap justify-content-lg-between justify-content-around gap-lg-4 gap-2 ps-3">
                                    {heroServices.map((label) => (
                                        <li key={label}>
                                            <div className="at-btn border-0 ps-2 py-0 pe-2 text-white bg-transparent rounded-0">
                                                <span>
                                                    <span className="text-1">{label}</span>
                                                    <span className="text-2">{label}</span>
                                                </span>
                                                <i>
                                                    <ArrowIcon />
                                                </i>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
