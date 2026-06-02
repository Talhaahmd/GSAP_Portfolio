import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, Controller } from "swiper/modules";
import RevealText from "@/shared/effects/RevealText";

const TESTIMONIALS = [
    { img: "sec-7-client-1.webp", text: "The team didn't just design a house; they sculpted a sanctuary of light. Their mastery of Minimalist Volumes and natural integration transformed our vision into a structural masterpiece that feels both modern and timeless.", name: "Julian Thorne", project: "The Obsidian Villa" },
    { img: "sec-7-client-2.webp", text: "From the first sketch to the final stone, the studio handled our atrium with extraordinary care. Their balance of cedar warmth, water reflections, and seasonal light turned a wellness retreat into a quiet poem you can walk through.", name: "Mariko Hayashi", project: "Atrium of Quiet Light" },
    { img: "sec-7-client-3.webp", text: "We needed a civic landmark, not just a building. The pavilion they delivered redefined the skyline and gave the city a new public room. Every detail, down to the travertine joints, speaks of patience and conviction.", name: "Elena Conti", project: "Stratum Cultural Pavilion" },
];

const StarSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" aria-hidden="true">
        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.402 8.181L12 18.896l-7.336 3.876 1.402-8.18L.132 9.21l8.2-1.192z" />
    </svg>
);

export default function Section7() {
    const mediaRef = useRef<HTMLDivElement | null>(null);
    const quoteRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mediaRef.current || !quoteRef.current) return;
        const media = new Swiper(mediaRef.current, {
            modules: [Autoplay, Controller],
            slidesPerView: 1,
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
        });
        const quote = new Swiper(quoteRef.current, {
            modules: [Controller],
            slidesPerView: 1,
            loop: true,
        });
        media.controller.control = quote;
        quote.controller.control = media;
        return () => {
            media.destroy(true, true);
            quote.destroy(true, true);
        };
    }, []);

    return (
        <section className="sec-7-home-13" aria-label="Testimonial">
            <div className="sec-7-home-13__inner">
                <figure className="sec-7-home-13__media mb-0">
                    <div ref={mediaRef} className="swiper sec-7-home-13__media-slider">
                        <div className="swiper-wrapper">
                            {TESTIMONIALS.map((t, i) => (
                                <div key={i} className="swiper-slide">
                                    <img src={`/assets/imgs/pages/home-13/${t.img}`} alt="Orisa" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </figure>

                <div className="sec-7-home-13__content">
                    <div className="sec-7-home-13__head">
                        <div className="sec-7-home-13__label at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-7-home-13__label-dot" aria-hidden="true"></span>
                            <span className="sec-7-home-13__label-text">TESTIMONIAL</span>
                        </div>
                        <h2 className="sec-7-home-13__title mb-0 reveal-text">
                            <RevealText>Proven results from the partners we&rsquo;ve empowered</RevealText>
                        </h2>
                        <p className="sec-7-home-13__lede mb-0 at_fade_anim">
                            Discover how we scale brands using strategic insight, daring design, and high-impact campaigns that captivate audiences and deliver enduring success.
                        </p>
                    </div>

                    <div ref={quoteRef} className="swiper sec-7-home-13__quote-slider">
                        <div className="swiper-wrapper">
                            {TESTIMONIALS.map((t, i) => (
                                <div key={i} className="swiper-slide">
                                    <blockquote className="sec-7-home-13__quote">
                                        <span className="sec-7-home-13__quote-mark" aria-hidden="true">&ldquo;</span>
                                        <p className="sec-7-home-13__quote-text mb-0">{t.text}</p>
                                        <footer className="sec-7-home-13__quote-foot">
                                            <div className="sec-7-home-13__author">
                                                <cite className="sec-7-home-13__author-name">{t.name}</cite>
                                                <span className="sec-7-home-13__author-sep" aria-hidden="true"></span>
                                                <span className="sec-7-home-13__author-project">{t.project}</span>
                                            </div>
                                            <ul className="sec-7-home-13__stars list-unstyled mb-0" aria-label="Rated 5 out of 5">
                                                {[1, 2, 3, 4, 5].map((n) => (
                                                    <li key={n}>{StarSvg}</li>
                                                ))}
                                            </ul>
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
