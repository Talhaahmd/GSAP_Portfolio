import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const PHASES = [
    { num: "01", name: "Discovery", desc: "A long conversation. Mood, brief, references, expectations.", time: "1 WEEK", delay: ".1" },
    { num: "02", name: "Mood Board", desc: "A visual contract — references, palette, casting direction.", time: "3—5 DAYS", delay: ".2" },
    { num: "03", name: "Pre-production", desc: "Scout, casting, schedule, crew. The boring miracle of logistics.", time: "1—2 WEEKS", delay: ".3" },
    { num: "04", name: "Shoot Day", desc: "On set. Quiet, intentional, generous. We aim for honest frames.", time: "1—3 DAYS", delay: ".4" },
    { num: "05", name: "Post & Deliver", desc: "Edit, retouch, master files, prints. Hand-finished.", time: "2—3 WEEKS", delay: ".5" },
];

export default function Section6() {
    return (
        <section className="sec-6-home-14" aria-label="Our process">
            <div className="sec-6-home-14__inner">
                <div className="sec-6-home-14__head">
                    <div className="sec-6-home-14__head-left">
                        <div className="sec-6-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-6-home-14__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-6-home-14__eyebrow-key">OUR PROCESS</span>
                            <span className="sec-6-home-14__eyebrow-meta">&mdash; 5 PHASES &middot; 4&mdash;8 WEEKS PER PROJECT</span>
                        </div>
                        <h2 className="sec-6-home-14__title reveal-text mb-0"><RevealText>From idea to<br />final frame.</RevealText></h2>
                    </div>
                    <div className="sec-6-home-14__head-right at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        <p className="sec-6-home-14__head-copy mb-0">
                            We move at the pace a story deserves. Most<br />
                            projects close in four to eight weeks; some take<br />
                            longer because they should.
                        </p>
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                            <Link className="at-btn z-index-1" to="/portfolio-1">Start a project</Link>
                            <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                        </div>
                    </div>
                </div>

                <ol className="sec-6-home-14__phases list-unstyled mb-0">
                    {PHASES.map((p) => (
                        <li key={p.num} className="sec-6-home-14__phase at_fade_anim" data-fade-from="left" data-delay={p.delay}>
                            <span className="sec-6-home-14__phase-dot" aria-hidden="true"></span>
                            <p className="sec-6-home-14__phase-num mb-0">{p.num}</p>
                            <p className="sec-6-home-14__phase-name mb-0">{p.name}</p>
                            <p className="sec-6-home-14__phase-desc mb-0">{p.desc}</p>
                            <p className="sec-6-home-14__phase-time mb-0">{p.time}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
