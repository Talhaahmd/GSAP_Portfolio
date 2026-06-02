import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import RevealText from "@/shared/effects/RevealText";

type Brand = { src: string; width: number; height: number };

const BRAND_SOURCES: Brand[] = [
    { src: "brand-1.webp", width: 147, height: 40 },
    { src: "brand-2.webp", width: 173, height: 43 },
    { src: "brand-3.webp", width: 162, height: 47 },
    { src: "brand-4.webp", width: 167, height: 35 },
    { src: "brand-5.webp", width: 105, height: 24 },
    { src: "brand-6.webp", width: 170, height: 48 },
];

const BRANDS: Brand[] = [...BRAND_SOURCES, ...BRAND_SOURCES, ...BRAND_SOURCES];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

export default function Section5() {
    return (
        <section className="sec-5-home-10">
            <div className="sec-5-home-10__container">
                <div className="row align-items-end align-items-xl-center justify-content-between sec-5-home-10__intro-row">
                    <div className="col-xl-9 col-lg-10">
                        <Link className="sec-5-home-10__eyebrow d-inline-flex align-items-center gap-2 text-decoration-none at_fade_anim" to="/about-1" data-delay="0.05">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">About Us</span>
                                    <span className="text-2">About Us</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                        </Link>
                        <h2 className="sec-5-home-10__title mt-3 mb-0 at_fade_anim reveal-text" data-delay="0.1">
                            <RevealText>At Klarus, we create n8n automations, scalable MVPs, and high-performing mobile apps that turn ideas into real business systems.</RevealText>
                        </h2>
                    </div>
                    <div className="col-xl-auto col-lg-10">
                        <Link className="sec-5-home-10__cta d-inline-flex align-items-center gap-3 at_fade_anim" to="/contact-1" data-delay="0.15">
                            <span>Get a free quote</span>
                            <svg className="sec-5-home-10__cta-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                                <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <figure className="sec-5-home-10__figure at_fade_anim mx-auto" data-delay="0.12">
                    <img
                        className="sec-5-home-10__figure-img"
                        src="/assets/imgs/pages/home-10/sec-5-wireframe-head.webp"
                        alt="orisa"
                        width={800}
                        height={500} loading="lazy" />
                </figure>

                <div className="sec-5-home-10__stats row g-4 g-lg-5 pb-4">
                    <div className="col-md-4">
                        <div className="sec-5-home-10__stat sec-5-home-10__stat--1 at_fade_anim" data-delay="0.14">
                            <p className="sec-5-home-10__stat-value mb-0">$2M+</p>
                            <p className="sec-5-home-10__stat-label mb-0">Revenue driven through AI Apps</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sec-5-home-10__stat sec-5-home-10__stat--2 at_fade_anim" data-delay="0.16">
                            <p className="sec-5-home-10__stat-value mb-0">20+</p>
                            <p className="sec-5-home-10__stat-label mb-0">Clients Across <span className="d-block">North America and UAE</span></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sec-5-home-10__stat sec-5-home-10__stat--3 at_fade_anim" data-delay="0.18">
                            <p className="sec-5-home-10__stat-value mb-0">190+</p>
                            <p className="sec-5-home-10__stat-label mb-0">Automated <span className="d-block">Solutions Developed</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-10 col-12 mx-auto border-0 mt-4 pt-4">
                    <div className="carouselTicker carouselTicker-left position-relative z-1">
                        <Marquee
                            speed={40}
                            direction="left"
                            pauseOnHover={false}
                            gradient={false}
                            className="carouselTicker__marquee"
                        >
                            <ul className="carouselTicker__list" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, overflow: "visible", gap: "0 2rem" }}>
                                {BRANDS.map((brand, i) => (
                                    <li key={i} className="carouselTicker__item" style={{ margin: "0 1.5rem", float: "none" }}>
                                        <div className="brand-item dark-mode-invert">

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    );
}
