import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import RevealText from "@/shared/effects/RevealText";

export default function Section1() {
    return (
        <section className="sec-1-home-8 p-relative overflow-hidden">

            {/* Decorative vertical column guide lines */}
            <div className="h8-grid-lines" aria-hidden="true"></div>

            {/* ============================================================
                 ROW 1: Badge + Outline Headline (left) | Photo trio (right)
            ============================================================ */}
            <div className="container-fluid h8-container">
                <div className="row g-0 h8-row-1 align-items-start">

                    {/* LEFT: circular badge + outline heading */}
                    <div className="col-xl-6 h8-col-left">
                        <div className="d-flex align-items-start h8-headline-group">

                            {/* Badge "Let's Talk" */}
                            <Link to="/contact-1" className="h8-badge flex-shrink-0 at_fade_anim" data-start="100%" data-delay=".1" aria-label="Let's Talk">
                                <svg className="h8-badge__bg" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M70.5 0C59.2087 0 50.055 9.15372 50.055 20.445V21.1415L49.5629 20.6487C41.5781 12.6646 28.6335 12.6646 20.6487 20.6487C12.6646 28.6329 12.6646 41.5781 20.6487 49.5629L21.1415 50.055H20.445C9.15372 50.055 0 59.2087 0 70.5C0 81.7911 9.15372 90.945 20.445 90.945H21.1415L20.6487 91.437C12.6646 99.4221 12.6646 112.367 20.6487 120.351C28.6329 128.335 41.5781 128.335 49.5629 120.351L50.055 119.858V120.555C50.055 131.846 59.2087 141 70.5 141C81.7911 141 90.945 131.846 90.945 120.555V119.858L91.4378 120.351C99.4221 128.335 112.367 128.335 120.351 120.351C128.335 112.367 128.335 99.4221 120.351 91.4378L119.858 90.945H120.555C131.846 90.945 141 81.7911 141 70.5C141 59.2087 131.846 50.055 120.555 50.055H119.858L120.351 49.5629C128.335 41.5781 128.335 28.6329 120.351 20.6487C112.367 12.6646 99.4221 12.6646 91.4378 20.6487L90.945 21.1415V20.445C90.945 9.15372 81.7911 0 70.5 0Z"
                                        fill="#212121" />
                                </svg>
                                <span className="h8-badge__inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                                        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L9.40717 1.28033L10.4678 0.21967L9.9375 0L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="white" />
                                    </svg>
                                    <span>Let&apos;s Talk</span>
                                </span>
                            </Link>

                            {/* Outline headline */}
                            <h1 className="h8-headline at_fade_anim" data-start="100%" data-delay=".25" data-fade-from="bottom">
                                HUMAN-CENTERED EXPERIENCES, INTERACTIVE DESIGN
                            </h1>
                        </div>
                    </div>

                    {/* RIGHT: 3 staggered photos (top set) */}
                    <div className="col-xl-6 h8-col-right">
                        <div className="h8-photos d-flex align-items-start">
                            <div className="h8-photo-box anim-zoomin-wrap" scroll-parallax-range="228" data-h8-parallax-ease="sine.inOut">
                                <img className="anim-zoomin" src="/assets/imgs/pages/home-8/hero8-img-1.webp" alt="orisa" width={500} height={600} loading="lazy" />
                            </div>
                            <div className="h8-photo-box h8-photo-down anim-zoomin-wrap" scroll-parallax-range="110" data-h8-parallax-ease="power3.in">
                                <img className="anim-zoomin" src="/assets/imgs/pages/home-8/hero8-img-2.webp" alt="orisa" width={500} height={600} loading="lazy" />
                            </div>
                            <div className="h8-photo-box anim-zoomin-wrap" scroll-parallax-range="52" data-h8-parallax-ease="sine.inOut">
                                <img className="anim-zoomin" src="/assets/imgs/pages/home-8/hero8-img-3.webp" alt="orisa" width={500} height={600} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                     ROW 2: Photo trio (left) | Stats (right)
                ============================================================ */}
                <div className="row g-0 h8-row-2 align-items-start">

                    {/* LEFT: 3 staggered photos (bottom set) */}
                    <div className="col-xl-6 h8-col-left-2 d-none d-xl-block">
                        <div className="h8-photos d-flex align-items-start">
                            <div className="h8-photo-box h8-photo-down anim-zoomin-wrap" scroll-parallax-range="92" data-h8-parallax-ease="expo.in">
                                <img className="anim-zoomin" src="/assets/imgs/pages/home-8/hero8-img-4.webp" alt="orisa" width={500} height={600} loading="lazy" />
                            </div>
                            <div className="h8-photo-box anim-zoomin-wrap" scroll-parallax-range="24" data-h8-parallax-ease="none">
                                <img className="anim-zoomin" src="/assets/imgs/pages/home-8/hero8-img-5.webp" alt="orisa" width={500} height={600} loading="lazy" />
                            </div>
                            <div className="h8-photo-box h8-photo-down anim-zoomin-wrap" scroll-parallax-range="125" data-h8-parallax-ease="power2.inOut">
                                <img className="anim-zoomin" src="/assets/imgs/pages/home-8/hero8-img-6.webp" alt="orisa" width={500} height={600} loading="lazy" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: statistics */}
                    <div className="col-xl-6 h8-col-right-2">
                        <div className="h8-stats d-flex">
                            <div className="h8-stat at_fade_anim" data-start="100%" data-delay=".2" data-fade-from="bottom">
                                <p className="h8-stat-num"><OdometerCounter count={35} />%</p>
                                <p className="h8-stat-desc reveal-text"><RevealText>Average increase in conversion rate for our partners.</RevealText></p>
                            </div>
                            <div className="h8-stat at_fade_anim" data-start="100%" data-delay=".35" data-fade-from="bottom">
                                <p className="h8-stat-num"><OdometerCounter count={24} />k+</p>
                                <p className="h8-stat-desc reveal-text"><RevealText>Users interacting with our interfaces daily worldwide.</RevealText></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
                 BOTTOM BAND: Oversized "ORISA® / STUDIO" type with portrait
            ============================================================ */}
            <div className="h8-bottom-band">
                <p className="h8-big-title">
                    <span className="h8-word text-scale-anim">ORISA</span><sup className="h8-registered">&#174;</sup>
                    <span className="h8-portrait-frame">
                        <img src="/assets/imgs/pages/home-8/hero8-img-8.gif" alt="orisa" width={120} height={120} loading="lazy" />
                    </span>
                    <span className="h8-word text-scale-anim">STUDIO</span>
                </p>

                <div className="h8-bottom-meta d-flex align-items-center justify-content-between">
                    <span className="h8-meta-text text-scramble" data-scramble-text="hello@orisa.com">hello@orisa.com</span>
                    <div className="d-flex align-items-center gap-2">
                        {/* Globe icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 27 20" fill="none" aria-hidden="true">
                            <path
                                d="M13.3203 20C5.9637 20 0 15.5228 0 10C0 4.47715 5.9637 0 13.3203 0C20.6769 0 26.6406 4.47715 26.6406 10C26.6406 15.5228 20.6769 20 13.3203 20ZM10.27 17.6674C8.98779 15.6259 8.20174 13.3742 8.02857 11H2.7465C3.27413 14.1765 6.28238 16.7747 10.27 17.6674ZM10.6971 11C10.8975 13.4388 11.8255 15.7297 13.3203 17.752C14.8151 15.7297 15.7431 13.4388 15.9435 11H10.6971ZM23.8941 11H18.6121C18.4389 13.3742 17.6529 15.6259 16.3707 17.6674C20.3582 16.7747 23.3665 14.1765 23.8941 11ZM2.7465 9H8.02857C8.20174 6.62577 8.98779 4.37407 10.27 2.33256C6.28238 3.22533 3.27413 5.8235 2.7465 9ZM10.6971 9H15.9435C15.7431 6.56122 14.8151 4.27025 13.3203 2.24799C11.8255 4.27025 10.8975 6.56122 10.6971 9ZM16.3707 2.33256C17.6529 4.37407 18.4389 6.62577 18.6121 9H23.8941C23.3665 5.8235 20.3582 3.22533 16.3707 2.33256Z"
                                fill="currentColor" />
                        </svg>
                        <span className="h8-meta-text text-scramble" data-scramble-text="27.1127° S, 109.3497° W">27.1127&#176; S, 109.3497&#176; W</span>
                    </div>
                </div>
            </div>

        </section>
    );
}
