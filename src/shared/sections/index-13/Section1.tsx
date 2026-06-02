import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

const SLIDES = [
    { img: "sec-1-hero-1.webp", tag: "[ ARCHITECTING / TIMELESS / SPACES ]", headline: "Architecting Distinctive Environments Through Cutting-Edge Design Solutions" },
    { img: "sec-1-hero-2.webp", tag: "[ INTERIOR / ATMOSPHERE / DETAIL ]", headline: "Crafting Interior Atmospheres That Balance Form, Function and Feeling" },
    { img: "sec-1-hero-3.webp", tag: "[ URBAN / MASTERPLAN / FUTURE ]", headline: "Shaping Urban Fabrics Through Strategic Planning and Civic Vision" },
    { img: "sec-1-hero-4.webp", tag: "[ 3D / VISUAL / IMMERSION ]", headline: "Bringing Concepts to Life with Photoreal 3D Visualization and Storytelling" },
    { img: "sec-1-hero-5.webp", tag: "[ SUSTAINABLE / GREEN / FUTURE ]", headline: "Designing Responsibly with Sustainable Strategy and Long-Term Consulting" },
];

const SERVICES = [
    { icon: "sec-1-icon-1.webp", num: "[ 01 ]", name: "Architectural Design" },
    { icon: "sec-1-icon-2.webp", num: "[ 02 ]", name: "Interior Architecture" },
    { icon: "sec-1-icon-3.webp", num: "[ 03 ]", name: "Urban Planning" },
    { icon: "sec-1-icon-4.webp", num: "[ 04 ]", name: "3D Visualization" },
    { icon: "sec-1-icon-5.webp", num: "[ 05 ]", name: "Sustainable Consulting" },
];

export default function Section1() {
    const mainRef = useRef<HTMLDivElement | null>(null);
    const thumbsRef = useRef<HTMLDivElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const mainEl = mainRef.current;
        const thumbsEl = thumbsRef.current;
        if (!mainEl || !thumbsEl) return;

        const thumbs = new Swiper(thumbsEl, {
            modules: [Thumbs],
            slidesPerView: 5,
            spaceBetween: 16,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            breakpoints: {
                1400: { slidesPerView: 5, spaceBetween: 16 },
                1200: { slidesPerView: 5, spaceBetween: 12 },
                992: { slidesPerView: 4, spaceBetween: 12 },
                768: { slidesPerView: 3, spaceBetween: 12 },
                576: { slidesPerView: 2, spaceBetween: 10 },
                0: { slidesPerView: 1.4, spaceBetween: 10 },
            },
        });

        const main: SwiperInstance = new Swiper(mainEl, {
            modules: [Autoplay, EffectFade, Thumbs],
            slidesPerView: 1,
            loop: true,
            effect: "fade",
            fadeEffect: { crossFade: true },
            autoplay: { delay: 5000, disableOnInteraction: false },
            thumbs: { swiper: thumbs },
        });

        const onPrev = () => main.slidePrev();
        const onNext = () => main.slideNext();
        prevRef.current?.addEventListener("click", onPrev);
        nextRef.current?.addEventListener("click", onNext);

        return () => {
            prevRef.current?.removeEventListener("click", onPrev);
            nextRef.current?.removeEventListener("click", onNext);
            main.destroy(true, true);
            thumbs.destroy(true, true);
        };
    }, []);

    return (
        <section className="sec-1-home-13 pt-160" aria-label="Orisa Architecture Hero">
            <div className="sec-1-home-13__inner">
                <div className="sec-1-home-13__top">
                    <h1 className="sec-1-home-13__brand mb-0 text-scale-anim">Orisa<sup>&reg;</sup> Architecture</h1>
                    <Link className="sec-1-home-13__since text-scramble" to="/about-1">&copy; Since 2012</Link>
                </div>

                <div className="sec-1-home-13__card">
                    <div ref={mainRef} className="swiper sec-1-home-13__main">
                        <div className="swiper-wrapper">
                            {SLIDES.map((s, i) => (
                                <div key={i} className="swiper-slide sec-1-home-13__slide">
                                    <div className="sec-1-home-13__bg" data-background={`/assets/imgs/pages/home-13/${s.img}`} aria-hidden="true"></div>
                                    <div className="sec-1-home-13__overlay" aria-hidden="true"></div>
                                    <div className="sec-1-home-13__content">
                                        <div className="sec-1-home-13__tagline">
                                            <span className="text-white">{s.tag}</span>
                                        </div>
                                        <h2 className="sec-1-home-13__headline mb-0">
                                            <span className="text-white">{s.headline}</span>
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sec-1-home-13__nav swiper-button-wrapper">
                        <button ref={prevRef} type="button" className="swiper-btn-prev" aria-label="Previous slide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M11.3481 7.47314L5.25879 13.2856L11.3481 19.0981" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.3124 13.2856H5.53564" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button ref={nextRef} type="button" className="swiper-btn-next" aria-label="Next slide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M15.2234 7.47314L21.3126 13.2856L15.2234 19.0981" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.259 13.2856H21.0358" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div ref={thumbsRef} className="swiper sec-1-home-13__thumbs">
                        <div className="swiper-wrapper">
                            {SERVICES.map((srv, i) => (
                                <button key={i} type="button" className="swiper-slide sec-1-home-13__service" aria-label={`View ${srv.name}`}>
                                    <span className="sec-1-home-13__service-img">
                                        <img src={`/assets/imgs/pages/home-13/${srv.icon}`} alt="Orisa" loading="lazy" />
                                    </span>
                                    <span className="sec-1-home-13__service-meta">
                                        <span className="sec-1-home-13__service-num">{srv.num}</span>
                                        <span className="sec-1-home-13__service-name">{srv.name}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
