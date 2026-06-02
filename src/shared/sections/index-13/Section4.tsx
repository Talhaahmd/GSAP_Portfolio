import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

export default function Section4() {
    return (
        <section className="sec-4-home-13" aria-label="Start your project">
            <div className="sec-4-home-13__card">
                <div className="sec-4-home-13__bar">
                    <div className="sec-4-home-13__bar-left">
                        <span className="sec-4-home-13__bar-dot" aria-hidden="true"></span>
                        <span>AVAILABLE Q3 &mdash; Q4 / 2026</span>
                    </div>
                    <div className="sec-4-home-13__bar-center text-scramble">40&deg;43&prime;N &middot; 74&deg;00&prime;W</div>
                    <div className="sec-4-home-13__bar-right">ORS_CTA_v04.dwg</div>
                </div>

                <div className="sec-4-home-13__head">
                    <p className="sec-4-home-13__tag mb-0 at_fade_anim" data-fade-from="left" data-delay=".1">
                        <span className="at-rise-animation"> [ START YOUR PROJECT ]</span>
                    </p>
                    <h2 className="sec-4-home-13__title mb-0 reveal-text text-white">
                        <RevealText>Build </RevealText>
                        <em><RevealText>with</RevealText></em>
                        <RevealText> us.</RevealText>
                    </h2>
                </div>

                <div className="sec-4-home-13__bottom">
                    <div className="sec-4-home-13__copy">
                        <p className="sec-4-home-13__lede mb-0">
                            Tell us about your site, your brief, your aspirations.<br />
                            We respond personally within 24 hours &mdash; no chatbots, no forms in disguise.
                        </p>
                        <ul className="sec-4-home-13__chips list-unstyled mb-0">
                            <li><Link className="sec-4-home-13__chip at_fade_anim text-white" data-fade-from="left" data-delay=".1" to="/contact-1"><span aria-hidden="true">&rarr;</span> New project</Link></li>
                            <li><Link className="sec-4-home-13__chip at_fade_anim text-white" data-fade-from="left" data-delay=".2" to="/contact-1">Talk to a partner</Link></li>
                            <li><Link className="sec-4-home-13__chip at_fade_anim text-white" data-fade-from="left" data-delay=".3" to="/contact-1">Schedule a visit</Link></li>
                        </ul>
                    </div>

                    <div className="sec-4-home-13__contact">
                        <p className="sec-4-home-13__contact-label mb-0">CONTACT</p>
                        <a className="sec-4-home-13__contact-row" href="mailto:studio@orisa.architecture">
                            <span className="sec-4-home-13__contact-mail at-rise-animation text-white">studio@orisa.architecture</span>
                            <span className="sec-4-home-13__contact-arrow" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="sec-4-home-13__glow" aria-hidden="true"></div>
            </div>
        </section>
    );
}
