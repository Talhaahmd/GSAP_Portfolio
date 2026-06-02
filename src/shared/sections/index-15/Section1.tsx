const TAG_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true" focusable="false">
        <path d="M1.5 7.5 7.5 1.5M2 1.5h5.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TAGS = ["MVP Launch", "Product Design", "Scalable Tech", "Growth Strategy", "UI/UX Excellence"];

export default function Section1() {
    return (
        <section className="sec-1-home-15 pt-100" aria-label="Agency hero">
            <div className="container">
                <div className="sec-1-home-15__card ripple-image ripples">
                    <img className="sec-1-home-15__bg" src="/assets/imgs/pages/home-15/sec-1-hero.webp" alt="Orisa" fetchPriority="high" loading="lazy" />
                    <span className="sec-1-home-15__grid" aria-hidden="true" style={{ backgroundImage: "url('/assets/imgs/pages/home-15/sec-1-lines.svg')" }}></span>

                    <div className="sec-1-home-15__top">
                        <span className="sec-1-home-15__coord at_fade_anim" data-fade-from="top" data-delay=".2">
                            <svg className="sec-1-home-15__coord-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
                                <path d="M10 11.667a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M10 18.333c3.333-3.333 6.667-6.318 6.667-10A6.667 6.667 0 0 0 3.333 8.333c0 3.682 3.334 6.667 6.667 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="sec-1-home-15__coord-label text-scramble text-white">27.1127&deg; S, 109.3497&deg; W</span>
                        </span>
                        <a className="sec-1-home-15__email at_fade_anim text-white" data-fade-from="top" data-delay=".3" href="mailto:hello@orisa.com">hello@orisa.com</a>
                    </div>

                    <span className="sec-1-home-15__scroll" aria-hidden="true">
                        <span className="sec-1-home-15__scroll-line"></span>
                        <span className="sec-1-home-15__scroll-label text-white">Scroll</span>
                    </span>

                    <div className="sec-1-home-15__bottom">
                        <ul className="sec-1-home-15__tags at_fade_anim" data-fade-from="bottom" data-delay=".3">
                            {TAGS.map((tag) => (
                                <li key={tag} className="sec-1-home-15__tag">
                                    <span className="text-white">{tag}</span>
                                    {TAG_ARROW}
                                </li>
                            ))}
                        </ul>

                        <div className="sec-1-home-15__clients at_fade_anim" data-fade-from="bottom" data-delay=".4">
                            <div className="sec-1-home-15__avatars" aria-hidden="true">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <img key={n} className="sec-1-home-15__avatar" src={`/assets/imgs/pages/home-15/sec-1-avatar-${n}.webp`} alt="Orisa" loading="lazy" />
                                ))}
                            </div>
                            <p className="sec-1-home-15__clients-text mb-0 text-white">Trusted by over 16k+<br />customers worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="sec-1-home-15__title-block">
                    <h1 className="sec-1-home-15__title mb-3 at_fade_anim">Orisa Agency Portfolio</h1>
                    <div className="sec-1-home-15__title-meta">
                        <span className="sec-1-home-15__title-side at_fade_anim" data-fade-from="left" data-delay=".4">Based in Kyoto</span>
                        <span className="sec-1-home-15__title-side at_fade_anim" data-fade-from="right" data-delay=".4">Since 2012</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
