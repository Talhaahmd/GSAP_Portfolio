import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

const SLIDES = [1, 2, 3, 4, 5];

export default function Section1() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!sliderRef.current) return;
        const swiper = new Swiper(sliderRef.current, {
            modules: [Autoplay, EffectFade, Navigation, Pagination],
            slidesPerView: 1,
            effect: "fade",
            fadeEffect: { crossFade: true },
            loop: true,
            autoplay: { delay: 4000, disableOnInteraction: false },
            pagination: { el: ".sec-1-portfolio-details-5__pagination", type: "bullets" },
        });
        const onPrev = () => swiper.slidePrev();
        const onNext = () => swiper.slideNext();
        prevRef.current?.addEventListener("click", onPrev);
        nextRef.current?.addEventListener("click", onNext);
        return () => {
            prevRef.current?.removeEventListener("click", onPrev);
            nextRef.current?.removeEventListener("click", onNext);
            swiper.destroy(true, true);
        };
    }, []);

    return (
        <section className="sec-1-portfolio-details-5 overflow-hidden">
            <div ref={sliderRef} className="sec-1-portfolio-details-5__slider swiper" aria-label="Project hero slideshow">
                <div className="swiper-wrapper">
                    {SLIDES.map((n) => (
                        <div key={n} className="swiper-slide sec-1-portfolio-details-5__slide">
                            <img src={`/assets/imgs/pages/slideshow/img-${n}.webp`} alt={`Nebula campaign — slide 0${n}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>

            <span className="sec-1-portfolio-details-5__veil sec-1-portfolio-details-5__veil--top" aria-hidden="true"></span>
            <span className="sec-1-portfolio-details-5__veil sec-1-portfolio-details-5__veil--bottom" aria-hidden="true"></span>

            <div className="sec-1-portfolio-details-5__content">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            <span className="sec-1-portfolio-details-5__eyebrow fz-font-label text-uppercase fw-600 d-block mb-30 at_fade_anim" data-fade-from="bottom" data-delay=".05">Project N°05 — Case study</span>
                            <h1 className="sec-1-portfolio-details-5__title fz-ds-1 lh-1 fw-500 mb-30 at_fade_anim" data-fade-from="bottom" data-delay=".15">
                                Nebula<sup className="fz-80 fw-400 top-0">®</sup>
                            </h1>
                            <p className="sec-1-portfolio-details-5__tagline fz-font-2xl fw-400 mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".25">Fashion Brand Identity Design</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec-1-portfolio-details-5__controls">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 col-md-3">
                            <div className="sec-1-portfolio-details-5__counter">
                                <span className="sec-1-portfolio-details-5__counter-num fw-500">01</span>
                                <span className="sec-1-portfolio-details-5__counter-total">/ 05</span>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="sec-1-portfolio-details-5__pagination" aria-hidden="true"></div>
                        </div>
                        <div className="col-8 col-md-3 d-flex justify-content-end gap-3">
                            <button ref={prevRef} type="button" className="sec-1-portfolio-details-5__nav sec-1-portfolio-details-5__nav--prev" aria-label="Previous slide">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button ref={nextRef} type="button" className="sec-1-portfolio-details-5__nav sec-1-portfolio-details-5__nav--next" aria-label="Next slide">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L13 18M19 12L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
