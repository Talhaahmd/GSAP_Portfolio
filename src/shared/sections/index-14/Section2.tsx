import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const STATS = [
    { count: 12, suffix: "+", label: "Years in practice", note: "SINCE 2014", delay: ".1" },
    { count: 240, suffix: "+", label: "Editorials published", note: "VOGUE · GQ · NATGEO", delay: ".2" },
    { count: 80, suffix: "+", label: "Brands & studios", note: "NY · OSLO · HCMC", delay: ".3" },
    { count: 24, suffix: "", label: "Awards & nominations", note: "SONY · IPA · LENSCULTURE", delay: ".4" },
];

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

export default function Section2() {
    return (
        <section className="sec-2-home-14" aria-label="About the studio">
            <div className="sec-2-home-14__inner">
                <div className="sec-2-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                    <span className="sec-2-home-14__eyebrow-dot" aria-hidden="true"></span>
                    <span className="sec-2-home-14__eyebrow-key">THE STUDIO</span>
                    <span className="sec-2-home-14__eyebrow-meta">&mdash; EST. 2014 &middot; 3 STUDIOS &middot; 4 CONTINENTS</span>
                </div>

                <div className="sec-2-home-14__main">
                    <div className="sec-2-home-14__portrait-col">
                        <figure className="sec-2-home-14__portrait anim-zoomin-wrap mb-0">
                            <img className="sec-2-home-14__portrait-img anim-zoomin" src="/assets/imgs/pages/home-14/sec-2-portrait.webp" alt="Orisa" loading="lazy" />
                            <figcaption className="sec-2-home-14__portrait-overlay">
                                <p className="sec-2-home-14__portrait-tag mb-0">[ PORTRAIT &mdash; STUDIO 04F ]</p>
                                <div className="sec-2-home-14__portrait-caption">
                                    <p className="sec-2-home-14__portrait-name mb-0 text-white">Amelia Courtney &middot; Founding Photographer</p>
                                    <p className="sec-2-home-14__portrait-year mb-0 text-white">2024</p>
                                </div>
                            </figcaption>
                        </figure>
                        <p className="sec-2-home-14__portrait-note mb-0">
                            01 &mdash; In studio, between frames. Documenting the next series.
                        </p>
                    </div>

                    <div className="sec-2-home-14__manifesto-col">
                        <h2 className="sec-2-home-14__title reveal-text">
                            <RevealText>We photograph what<br />cannot be said out loud.</RevealText>
                        </h2>

                        <div className="sec-2-home-14__body at_fade_anim" data-fade-from="bottom" data-delay=".2">
                            <p>Twelve years inside the frame &mdash; editorial, fashion, documentary, and quiet portraits for people who would rather be doing something else. We don&rsquo;t chase trends; we build images that hold their light a long time after the cover comes off the press.</p>
                            <p className="mb-0">Clients trust us to shape the entire arc: from concept and casting through post-production. Most projects begin with a long conversation. Many of them end up on magazine covers.</p>
                        </div>

                        <div className="sec-2-home-14__signature at_fade_anim" data-fade-from="bottom" data-delay=".3">
                            <div className="sec-2-home-14__signature-block">
                                <p className="sec-2-home-14__signature-name mb-0">Amelia Courtney</p>
                                <p className="sec-2-home-14__signature-role mb-0">Founding photographer &middot; Studio Director</p>
                            </div>
                            <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <Link className="at-btn-circle" to="/about-1">{ARROW}</Link>
                                <Link className="at-btn z-index-1" to="/about-1">Read full bio</Link>
                                <Link className="at-btn-circle" to="/about-1">{ARROW}</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="sec-2-home-14__stats list-unstyled mb-0">
                    {STATS.map((s, i) => (
                        <li key={i} className="sec-2-home-14__stat at_fade_anim" data-fade-from="bottom" data-delay={s.delay}>
                            <p className="sec-2-home-14__stat-num mb-0"><OdometerCounter count={s.count} />{s.suffix}</p>
                            <p className="sec-2-home-14__stat-label mb-0">{s.label}</p>
                            <p className="sec-2-home-14__stat-note mb-0">{s.note}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
