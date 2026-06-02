import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { EffectFade, Thumbs } from "swiper/modules";

const FAB_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
        <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const QUOTES = [
    "Orisa didn't just build us a website; they engineered a digital experience that mirrors our ambition. The integration of GSAP motion and high-performance code has set a new benchmark in our industry. Truly the modern standard.",
    "Working with Orisa changed how our brand shows up online. Every interaction feels intentional, every page tells our story, and the result is a site that converts as beautifully as it looks.",
    "From discovery to launch, the team treated our brand like their own. The level of craft in motion design, typography, and front-end performance is genuinely unmatched in the industry today.",
    "We arrived with a vague vision and left with a digital platform that outperforms our wildest projections. Orisa is the rare studio that thinks like strategists and builds like senior engineers.",
    "Three months after launch, our traffic is up eighty percent, time on site has tripled, and the press has not stopped reaching out. Hiring Orisa was the highest-leverage decision we made this year.",
];

export default function Section8() {
    const mainRef = useRef<HTMLDivElement | null>(null);
    const thumbsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mainRef.current || !thumbsRef.current) return;
        const thumbs = new Swiper(thumbsRef.current, {
            modules: [Thumbs],
            slidesPerView: 5,
            spaceBetween: 12,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
        });
        const main = new Swiper(mainRef.current, {
            modules: [EffectFade, Thumbs],
            slidesPerView: 1,
            effect: "fade",
            fadeEffect: { crossFade: true },
            loop: true,
            thumbs: { swiper: thumbs },
        });
        return () => {
            main.destroy(true, true);
            thumbs.destroy(true, true);
        };
    }, []);

    return (
        <section className="sec-8-home-15" aria-label="Testimonials">
            <div className="container">
                <div className="sec-8-home-15__eyebrow d-inline-flex align-items-center gap-2 text-uppercase at_fade_anim" data-fade-from="bottom" data-delay=".1">
                    <span className="sec-8-home-15__eyebrow-text">Testimonials</span>
                    {FAB_ARROW}
                </div>

                <div ref={mainRef} className="swiper sec-8-home-15__slider at_fade_anim" data-fade-from="bottom" data-delay=".15">
                    <div className="swiper-wrapper">
                        {QUOTES.map((q, i) => (
                            <div key={i} className="swiper-slide sec-8-home-15__slide">
                                <blockquote className="sec-8-home-15__quote mb-0">&ldquo;{q}&rdquo;</blockquote>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={thumbsRef} className="swiper sec-8-home-15__thumbs at_fade_anim" data-fade-from="bottom" data-delay=".2">
                    <div className="swiper-wrapper">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <button key={n} type="button" className="swiper-slide sec-8-home-15__thumb" aria-label={`Show testimonial from client ${n}`}>
                                <img className="sec-8-home-15__thumb-img" src={`/assets/imgs/pages/home-15/sec-8-avatar-${n}.webp`} alt="Client portrait" loading="lazy" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
