import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import RevealText from "@/shared/effects/RevealText";

const TESTIMONIALS = [
    { img: "sec-7-portrait-1.webp", tag: "PORTRAIT · 01", stars: "4 / 5 stars", name: "Henrietta Lowe", role: "Editor-in-Chief · Aperture Mag", quote: "We brought Orisa on for a single cover and stayed for the next four years. They make the kind of pictures that hold their own next to the writing — quietly intelligent, never showy, always exactly the frame the story needed.", project: "Project: The Editors Issue · 2024", sub: "Editorial · 24 frames · Cover + 6-spread feature", link: "/portfolio-details-1", whiteMeta: true },
    { img: "sec-7-portrait-2.webp", tag: "PORTRAIT · 02", stars: "4 / 5 stars", name: "Bjørn Aalvik", role: "Founder · Studio Halden", quote: "Working with Orisa felt less like a commission and more like a conversation with someone who already understood the brief. They returned with images that felt inevitable — like they had always been there, waiting to be found.", project: "Project: Halden — Brand Refresh · 2024", sub: "Commercial · 18 frames · 4-page brand book", link: "/portfolio-details-2", whiteMeta: false },
    { img: "sec-7-portrait-3.webp", tag: "PORTRAIT · 03", stars: "5 / 5 stars", name: "Margot Linden", role: "Curator · Manifest Gallery", quote: "Orisa's frames carry a stillness that is rare in commercial photography. Our visitors stand longer in front of their prints than anywhere else in the gallery — and that, to me, is the highest compliment a photograph can earn.", project: "Project: Quiet Lights — Solo Show · 2024", sub: "Exhibition · 12 prints · Hand-bound catalogue", link: "/portfolio-details-3", whiteMeta: false },
];

export default function Section7() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!sliderRef.current) return;
        const swiper = new Swiper(sliderRef.current, {
            modules: [Navigation],
            slidesPerView: 1,
            loop: true,
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
        <section className="sec-7-home-14" aria-label="Client stories">
            <div className="sec-7-home-14__inner">
                <div className="sec-7-home-14__head">
                    <div className="sec-7-home-14__head-left">
                        <div className="sec-7-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-7-home-14__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-7-home-14__eyebrow-key">CLIENT STORIES</span>
                            <span className="sec-7-home-14__eyebrow-meta">&mdash; FROM PUBLISHERS, BRANDS, &amp; ARTISTS</span>
                        </div>
                        <h2 className="sec-7-home-14__title reveal-text mb-0"><RevealText>What our clients<br />say, unprompted.</RevealText></h2>
                    </div>
                    <div className="sec-7-home-14__head-right at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        <div className="sec-7-home-14__nav">
                            <span className="sec-7-home-14__nav-count"><span className="sec-7-home-14__nav-count-current">01</span> &mdash; 03</span>
                            <button ref={prevRef} type="button" className="sec-7-home-14__nav-btn sec-7-home-14__nav-btn--prev swiper-btn-prev" aria-label="Previous testimonial">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                            <button ref={nextRef} type="button" className="sec-7-home-14__nav-btn sec-7-home-14__nav-btn--next swiper-btn-next" aria-label="Next testimonial">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>
                        <Link className="sec-7-home-14__head-link" to="/contact-1">Read all stories &rarr;</Link>
                    </div>
                </div>

                <div ref={sliderRef} className="sec-7-home-14__slider swiper">
                    <div className="swiper-wrapper">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="swiper-slide">
                                <article className="sec-7-home-14__main">
                                    <figure className="sec-7-home-14__portrait mb-0">
                                        <img className="sec-7-home-14__portrait-img" src={`/assets/imgs/pages/home-14/${t.img}`} alt="Orisa" loading="lazy" />
                                        <figcaption className="sec-7-home-14__portrait-overlay">
                                            <div className="sec-7-home-14__portrait-top">
                                                <span className="sec-7-home-14__portrait-tag text-white">{t.tag}</span>
                                                <span className="sec-7-home-14__portrait-counter text-white">{t.stars}</span>
                                            </div>
                                            <div className="sec-7-home-14__portrait-bot">
                                                <p className="sec-7-home-14__portrait-name mb-0 text-white">{t.name}</p>
                                                <p className="sec-7-home-14__portrait-role mb-0 text-white">{t.role}</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div className="sec-7-home-14__quote">
                                        <span className="sec-7-home-14__quote-mark" aria-hidden="true">&ldquo;</span>
                                        <div className="sec-7-home-14__stars" aria-label="5 out of 5">
                                            {[1, 2, 3, 4, 5].map((n) => <span key={n} className="sec-7-home-14__star" aria-hidden="true"></span>)}
                                        </div>
                                        <blockquote className="sec-7-home-14__quote-text mb-0">{t.quote}</blockquote>
                                        <div className="sec-7-home-14__project">
                                            <div className="sec-7-home-14__project-meta">
                                                <p className={`sec-7-home-14__project-title mb-0${t.whiteMeta ? " text-white" : ""}`}>{t.project}</p>
                                                <p className={`sec-7-home-14__project-sub mb-0${t.whiteMeta ? " text-white" : ""}`}>{t.sub}</p>
                                            </div>
                                            <Link className="sec-7-home-14__project-link" to={t.link}>View project &rarr;</Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
