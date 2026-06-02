import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const TAGS = [
    { num: "[01]", name: "Editorial" },
    { num: "[02]", name: "Portrait" },
    { num: "[03]", name: "Wedding" },
    { num: "[04]", name: "Commercial" },
    { num: "[05]", name: "Documentary" },
];

export default function Section1() {
    return (
        <section className="sec-1-home-14" aria-label="Photography hero">
            <div className="sec-1-home-14__inner">
                <div className="sec-1-home-14__top">
                    <p className="sec-1-home-14__tagline mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".1">[ VISUAL STORYTELLING ]</p>
                    <p className="sec-1-home-14__counter mb-0 at_fade_anim text-scramble" data-fade-from="bottom" data-delay=".2">[ SINCE 2014 ]</p>
                </div>

                <h1 className="sec-1-home-14__headline reveal-text at_fade_anim" data-fade-from="top" data-delay=".3">
                    <RevealText>Photography that lingers<br />long after the shutter closes.</RevealText>
                </h1>

                <div className="sec-1-home-14__sub">
                    <p className="sec-1-home-14__copy mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        Selected portraiture, editorial campaigns, and the<br />
                        quiet moments in between &mdash; 240+ shoots, 18 magazines.
                    </p>
                    <div className="sec-1-home-14__cta at_fade_anim" data-fade-from="bottom" data-delay=".3">
                        <Link className="sec-1-home-14__btn-link" to="/contact-1">
                            <span>Book a Session</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <figure className="sec-1-home-14__hero anim-zoomin-wrap">
                    <img className="sec-1-home-14__hero-img anim-zoomin" data-speed=".8" src="/assets/imgs/pages/home-14/sec-1-hero.webp" alt="Orisa" loading="lazy" />
                    <div className="sec-1-home-14__hero-overlay">
                        <div className="sec-1-home-14__hero-top">
                            <p className="sec-1-home-14__hero-caption mb-0 text-white">[ FRAME 01 &mdash; URBAN SOUL ]</p>
                            <p className="sec-1-home-14__hero-credit mb-0 text-white">Photograph by Studio Orisa &middot; &middot; 2025</p>
                        </div>
                        <div className="sec-1-home-14__hero-bottom">
                            <div className="sec-1-home-14__hero-meta">
                                <p className="sec-1-home-14__hero-title mb-0 text-white">Urban Soul</p>
                                <p className="sec-1-home-14__hero-sub mb-0 text-white">Editorial Series &middot; 12 frames &middot; Sony A1</p>
                            </div>
                            <div className="sec-1-home-14__hero-scroll" aria-hidden="true">
                                <span className="sec-1-home-14__hero-scroll-label text-white text-scramble">SCROLL</span>
                                <span className="sec-1-home-14__hero-scroll-arrow text-white">&darr;</span>
                            </div>
                        </div>
                    </div>
                </figure>

                <ul className="sec-1-home-14__tags list-unstyled mb-0">
                    {TAGS.map((t, i) => (
                        <li key={t.num} className="sec-1-home-14__tag at_fade_anim" data-fade-from="bottom" data-delay={`.${i + 1}`}>
                            <span className="sec-1-home-14__tag-num">{t.num}</span>
                            <span className="sec-1-home-14__tag-name">{t.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
