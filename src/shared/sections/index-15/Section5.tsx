import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const PHASES = [
    { num: "01", title: "[ Discovery ]", desc: "A long conversation. Mood, brief, references, expectations.", duration: "1 week", img: "sec-5-phase-1.webp", delay: ".1" },
    { num: "02", title: "[ Mood Board ]", desc: "A visual contract — references, palette, casting direction.", duration: "3—5 days", img: "sec-5-phase-2.webp", delay: ".15" },
    { num: "03", title: "[ Pre-production ]", desc: "Scout, casting, schedule, crew. The boring miracle of logistics.", duration: "1—2 weeks", img: "sec-5-phase-3.webp", delay: ".2" },
    { num: "04", title: "[ Shoot Day ]", desc: "On set. Quiet, intentional, generous. We aim for honest frames.", duration: "1—3 days", img: "sec-5-phase-4.webp", delay: ".25" },
    { num: "05", title: "[ Post & Deliver ]", desc: "Edit, retouch, master files, prints.\nHand-finished.", duration: "2—3 weeks", img: "sec-5-phase-5.webp", delay: ".3" },
];

export default function Section5() {
    return (
        <section className="sec-5-home-15" aria-label="Our process">
            <div className="container">
                <div className="row gx-4 gy-4 align-items-end mb-65">
                    <div className="col-xxl-8 col-xl-7 col-lg-7 col-12">
                        <span className="sec-5-home-15__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-5-home-15__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-5-home-15__eyebrow-key">Our process</span>
                            <span className="sec-5-home-15__eyebrow-meta">&mdash; 5 phases &middot; 4&mdash;8 weeks per project</span>
                        </span>
                        <h2 className="sec-5-home-15__heading reveal-text"><RevealText>From idea to<br />final project.</RevealText></h2>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-12">
                        <div className="sec-5-home-15__intro at_fade_anim" data-fade-from="bottom" data-delay=".2">
                            <p className="sec-5-home-15__copy">
                                We move at the pace a story deserves. Most projects close in four to eight weeks; some take longer because they should.
                            </p>
                            <div className="at-btn-group sec-5-home-15__cta at_fade_anim" data-delay=".3" data-fade-from="bottom" data-ease="bounce">
                                <Link className="at-btn-circle" to="/contact-1">{ARROW}</Link>
                                <Link className="at-btn z-index-1" to="/contact-1">Start a project</Link>
                                <Link className="at-btn-circle" to="/contact-1">{ARROW}</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 gx-0 gy-0 sec-5-home-15__phases">
                    {PHASES.map((p) => (
                        <div key={p.num} className="col">
                            <article className="sec-5-home-15__phase at_fade_anim" data-fade-from="bottom" data-delay={p.delay}>
                                <span className="sec-5-home-15__phase-dot" aria-hidden="true"></span>
                                <p className="sec-5-home-15__phase-num">{p.num}</p>
                                <p className="sec-5-home-15__phase-title">{p.title}</p>
                                <p className="sec-5-home-15__phase-desc">{p.desc}</p>
                                <p className="sec-5-home-15__phase-duration">{p.duration}</p>
                                <div className="sec-5-home-15__phase-thumb anim-zoomin-wrap mt-3">
                                    <img className="sec-5-home-15__phase-img anim-zoomin" src={`/assets/imgs/pages/home-15/${p.img}`} alt="Orisa" loading="lazy" />
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
