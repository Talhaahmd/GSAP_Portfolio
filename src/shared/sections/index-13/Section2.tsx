import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const STATS = [
    { shape: "sec-2-shape-1.webp", tag: "▲ +18%", prefix: "$", count: 1, suffix: ".2B", cap: "Total value of managed assets.", delay: ".1" },
    { shape: "sec-2-shape-2.webp", tag: "▲ +5%", prefix: "", count: 98, suffix: "%", cap: "Client satisfaction & project retention.", delay: ".25" },
    { shape: "sec-2-shape-3.webp", tag: "▲ +42", prefix: "+", count: 450, suffix: "", cap: "Sustainable structures delivered.", delay: ".4" },
    { shape: "sec-2-shape-4.webp", tag: "▲ +12%", prefix: "", count: 92, suffix: "%", cap: "Space efficiency & occupancy rate.", delay: ".55" },
];

export default function Section2() {
    return (
        <section className="sec-2-home-13" aria-label="About Us">
            <div className="sec-2-home-13__inner">
                <div className="sec-2-home-13__top">
                    <div className="sec-2-home-13__left">
                        <div className="sec-2-home-13__label at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-2-home-13__label-dot" aria-hidden="true"></span>
                            <span className="sec-2-home-13__label-text">ABOUT US</span>
                        </div>

                        <div className="sec-2-home-13__intro">
                            <p className="sec-2-home-13__intro-text mb-0 at_fade_anim">
                                We build <strong>bold</strong>, resilient brands designed to leave a lasting mark on the world.
                            </p>

                            <ul className="sec-2-home-13__team list-unstyled mb-0">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <li key={n} className="sec-2-home-13__team-avatar at_fade_anim" data-fade-from="left" data-delay={`.${n}`}>
                                        <img src={`/assets/imgs/pages/home-13/sec-2-avatar-${n}.webp`} alt="Orisa" loading="lazy" />
                                    </li>
                                ))}
                            </ul>

                            <Link className="sec-2-home-13__cta at_fade_anim" to="/team">
                                <span>Meet Our Team</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                    <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.66667M10.5 3.5V9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="sec-2-home-13__right">
                        <div className="sec-2-home-13__head">
                            <span className="sec-2-home-13__pill at_fade_anim" data-fade-from="bottom" data-delay=".05">
                                <span className="sec-2-home-13__pill-dot" aria-hidden="true"></span>
                                <span>Available for new projects</span>
                            </span>
                            <h2 className="sec-2-home-13__title mb-0 reveal-text">
                                <RevealText>Imagine. Create. Construct. We transform ambitious visions into tangible realities.</RevealText>
                            </h2>
                        </div>

                        <div className="sec-2-home-13__grid">
                            <div className="sec-2-home-13__col me-0 me-lg-4">
                                <figure className="sec-2-home-13__media anim-zoomin-wrap mb-0">
                                    <img className="anim-zoomin" src="/assets/imgs/pages/home-13/sec-2-img-1.webp" alt="Orisa" loading="lazy" />
                                </figure>
                                <div className="sec-2-home-13__caption">
                                    <h3 className="sec-2-home-13__caption-title mb-0 at-char-animation">Creative Expertise</h3>
                                    <p className="sec-2-home-13__caption-text mb-0 at_fade_anim">
                                        With over a decade of design expertise, we create tailored solutions that engage audiences, build meaningful connections, and elevate brands with creativity and intent.
                                    </p>
                                </div>
                            </div>
                            <div className="sec-2-home-13__col sec-2-home-13__col--tall  ms-0 ms-lg-4">
                                <figure className="sec-2-home-13__media sec-2-home-13__media--tall anim-zoomin-wrap mb-0">
                                    <img className="anim-zoomin" src="/assets/imgs/pages/home-13/sec-2-img-2.webp" alt="Orisa" loading="lazy" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec-2-home-13__stats">
                    {STATS.map((s, i) => (
                        <div key={i} className="sec-2-home-13__stat at_fade_anim" data-fade-from="left" data-fade-offset="24" data-delay={s.delay}>
                            <div className="sec-2-home-13__stat-head">
                                <span className="sec-2-home-13__stat-icon">
                                    <img className="dark-mode-invert" src={`/assets/imgs/pages/home-13/${s.shape}`} alt="Orisa" loading="lazy" />
                                </span>
                                <span className="sec-2-home-13__stat-tag">{s.tag}</span>
                            </div>
                            <p className="sec-2-home-13__stat-num mb-0">{s.prefix}<OdometerCounter count={s.count} />{s.suffix}</p>
                            <p className="sec-2-home-13__stat-cap mb-0">{s.cap}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
