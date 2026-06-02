import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import RevealText from "@/shared/effects/RevealText";

const BRANDS = [1, 2, 3, 4, 5, 6, 7];

export default function Section6() {
    const slides = [...BRANDS, ...BRANDS, ...BRANDS];
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;
        const instance = new Swiper(el, {
            modules: [Autoplay, FreeMode],
            slidesPerView: 6,
            spaceBetween: 64,
            loop: true,
            centeredSlides: false,
            speed: 6000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            allowTouchMove: true,
            grabCursor: true,
            freeMode: { enabled: true, momentum: false },
            breakpoints: {
                1400: { slidesPerView: 6, spaceBetween: 64 },
                1200: { slidesPerView: 5, spaceBetween: 48 },
                992: { slidesPerView: 5, spaceBetween: 40 },
                768: { slidesPerView: 4, spaceBetween: 32 },
                576: { slidesPerView: 3, spaceBetween: 24 },
                0: { slidesPerView: 2.5, spaceBetween: 20 },
            },
        });
        return () => {
            instance.destroy(true, true);
        };
    }, []);

    return (
        <section className="sec-6-home-12 changeless" aria-label="About Orisa">
            <div className="sec-6-home-12__topbar">
                <span className="sec-6-home-12__topline" aria-hidden="true"></span>
                <div className="container-fluid px-3 px-lg-5">
                    <div className="sec-6-home-12__topbar-row">
                        <span className="sec-6-home-12__topbar-label">[ About Us ]</span>
                        <span className="sec-6-home-12__topbar-label">&copy; <span className="text-scramble">2012</span> Orisa</span>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-3 px-lg-5">
                <div className="sec-6-home-12__lede-wrap">
                    <p className="sec-6-home-12__lede reveal-text mb-0"><RevealText>We are a multidisciplinary collective of designers, developers, and strategists driven by a singular obsession: crafting high-performance digital experiences. By merging intentional design with robust engineering, we empower ambitious brands to scale and thrive in an ever-evolving digital landscape.</RevealText></p>
                </div>
            </div>

            <div className="sec-6-home-12__brands-strip">
                <div ref={sliderRef} className="swiper sec-6-home-12-slider">
                    <div className="swiper-wrapper">
                        {slides.map((n, i) => (
                            <div key={i} className="swiper-slide sec-6-home-12__brand-slide">
                                <img className="sec-6-home-12__brand-img" src={`/assets/imgs/pages/home-12/sec-6-brand-${n}.svg`} alt="Orisa" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
