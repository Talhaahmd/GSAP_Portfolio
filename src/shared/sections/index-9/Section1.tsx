import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

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

const brandLogos = [
    { src: "/assets/imgs/pages/home-9/logo-brand-01.webp", alt: "orisa", delay: ".1" },
    { src: "/assets/imgs/pages/home-9/logo-brand-02.webp", alt: "orisa", delay: ".2" },
    { src: "/assets/imgs/pages/home-9/logo-brand-03.webp", alt: "orisa", delay: ".3" },
    { src: "/assets/imgs/pages/home-9/logo-brand-04.webp", alt: "orisa", delay: ".4" },
    { src: "/assets/imgs/pages/home-9/logo-brand-06.webp", alt: "orisa", delay: ".5" },
    { src: "/assets/imgs/pages/home-9/logo-brand-07.webp", alt: "orisa", delay: ".6" },
];

const services = [
    { label: "Brand Strategy", delay: ".1" },
    { label: "Visual Identity", delay: ".2" },
    { label: "Logo Design", delay: ".3" },
    { label: "Packaging", delay: ".4" },
    { label: "Brand Guidelines", delay: ".5" },
];

const thumbnails = [
    { src: "/assets/imgs/pages/home-9/sec-1-thumb-1.webp", delay: ".1", parallaxRange: "228", parallaxEase: "sine.inOut" },
    { src: "/assets/imgs/pages/home-9/sec-1-thumb-2.webp", delay: ".2", parallaxRange: "110", parallaxEase: "power3.in" },
    { src: "/assets/imgs/pages/home-9/sec-1-thumb-3.webp", delay: ".3", parallaxRange: "52", parallaxEase: "sine.inOut" },
];

export default function Section1() {
    return (
        <>
            {/* Home 9 / section 1 - Modern Agency Hero */}
            <section className="sec-1-home-9 changeless">
                <div className="sec-1-home-9__container">
                    <div className="sec-1-home-9__row sec-1-home-9__row--top">
                        <h1 className="sec-1-home-9__title sec-1-home-9__title--modern text-scale-anim">Modern</h1>
                        <div className="sec-1-home-9__intro at_fade_anim" data-delay=".2" data-fade-from="bottom">
                            <span className="sec-1-home-9__intro-icon" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 27 20" fill="none">
                                    <path
                                        d="M13.3203 20C5.9637 20 0 15.5228 0 10C0 4.47715 5.9637 0 13.3203 0C20.6769 0 26.6406 4.47715 26.6406 10C26.6406 15.5228 20.6769 20 13.3203 20ZM10.27 17.6674C8.98779 15.6259 8.20174 13.3742 8.02857 11H2.7465C3.27413 14.1765 6.28238 16.7747 10.27 17.6674ZM10.6971 11C10.8975 13.4388 11.8255 15.7297 13.3203 17.752C14.8151 15.7297 15.7431 13.4388 15.9435 11H10.6971ZM23.8941 11H18.6121C18.4389 13.3742 17.6529 15.6259 16.3707 17.6674C20.3582 16.7747 23.3665 14.1765 23.8941 11ZM2.7465 9H8.02857C8.20174 6.62577 8.98779 4.37407 10.27 2.33256C6.28238 3.22533 3.27413 5.8235 2.7465 9ZM10.6971 9H15.9435C15.7431 6.56122 14.8151 4.27025 13.3203 2.24799C11.8255 4.27025 10.8975 6.56122 10.6971 9ZM16.3707 2.33256C17.6529 4.37407 18.4389 6.62577 18.6121 9H23.8941C23.3665 5.8235 20.3582 3.22533 16.3707 2.33256Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <p className="sec-1-home-9__intro-text reveal-text text-white">
                                <RevealText>
                                    Based in Canada, <span className="text-theme text-scramble">Orisa</span> is a creative design agency dedicated to providing innovative brand solutions for a global clientele.
                                </RevealText>
                            </p>
                        </div>
                    </div>

                    <div className="sec-1-home-9__row sec-1-home-9__row--middle">
                        <div className="sec-1-home-9__left at_fade_anim" data-delay=".3" data-fade-from="bottom">
                            <p className="sec-1-home-9__kicker">
                                <span className="text-theme text-scramble">Creative</span> solutions <br />
                                for <span className="text-theme text-scramble">modern</span> brands
                            </p>
                            <Link className="at-btn sec-1-home-9__btn" to="/portfolio-1">
                                <span>
                                    <span className="text-1">Explore All Work</span>
                                    <span className="text-2">Explore All Work</span>
                                </span>
                                <i>
                                    <ArrowIcon />
                                </i>
                            </Link>
                        </div>
                        <h2 className="sec-1-home-9__title sec-1-home-9__title--agency text-scale-anim">Agency</h2>
                        <div className="sec-1-home-9__thumbs mt-md-0 mt-4">
                            {thumbnails.map((thumb, i) => (
                                <div
                                    key={i}
                                    className="sec-1-home-9__thumb"
                                    data-delay={thumb.delay}
                                    data-scroll-parallax-range={thumb.parallaxRange}
                                    data-h8-parallax-ease={thumb.parallaxEase}
                                >
                                    <img src={thumb.src} alt="orisa" width={300} height={400} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sec-1-home-9__divider" aria-hidden="true">
                        <span className="sec-1-home-9__divider-line"></span>
                        <span className="sec-1-home-9__divider-line"></span>
                    </div>

                    <div className="sec-1-home-9__row sec-1-home-9__row--bottom">
                        <div className="sec-1-home-9__partners">
                            <p className="sec-1-home-9__brands-title at_fade_anim" data-delay=".1" data-start="100%">Trusted by</p>
                            <div className="sec-1-home-9__brands-list">
                                {brandLogos.map((brand, i) => (
                                    <div key={i} className="sec-1-home-9__brand at_fade_anim" data-delay={brand.delay} data-start="100%">
                                        <img src={brand.src} alt={brand.alt} width={120} height={40} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="sec-1-home-9__services-wrap w-50">
                            <img
                                className="at-scroll-rotate"
                                data-rotate-duration="18"
                                data-rotate-sensitivity="0.18"
                                data-rotate-boost="12"
                                src="/assets/imgs/pages/home-9/star.webp"
                                alt="orisa"
                                width={200}
                                height={200} loading="lazy" />
                            <div className="sec-1-home-9__services">
                                <div className="menu-list d-flex flex-column">
                                    {services.map((service, i) => (
                                        <Link
                                            key={i}
                                            to="#"
                                            className="border-bottom-300 py-3 menu-list__item hasdot at_fade_anim"
                                            data-delay={service.delay}
                                            data-fade-from="left"
                                            data-start="100%"
                                            target="_blank"
                                        >
                                            <span className="text neutral-0 fw-600 text-uppercase"> {service.label} </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
