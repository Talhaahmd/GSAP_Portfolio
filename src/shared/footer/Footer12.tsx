import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const SOCIAL_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none" aria-hidden="true">
        <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
    </svg>
);

export default function Footer12() {
    return (
        <footer className="footer-12 changeless overflow-hidden">
            <div className="footer-12__cta">
                <div className="container-fluid px-3 px-lg-5">
                    <div className="footer-12__cta-inner">
                        <span className="footer-12__cta-pill at_fade_anim" data-fade-from="bottom" data-delay=".05">
                            <span className="footer-12__cta-pill-dot" aria-hidden="true"></span>
                            <span className="footer-12__cta-pill-text">Ready when you are</span>
                        </span>
                        <h2 className="footer-12__cta-title reveal-text mb-0">
                            <span className="d-block"><RevealText>Let&rsquo;s build something</RevealText></span>
                            <span className="d-block"><RevealText>worth keeping.</RevealText></span>
                        </h2>
                        <p className="footer-12__cta-sub mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".15">Drop a line. We&rsquo;ll get back within a day.</p>
                        <form className="footer-12__cta-form at_fade_anim" data-fade-from="bottom" data-delay=".25" action="#" method="post">
                            <label className="visually-hidden" htmlFor="footer12Email">Email</label>
                            <input id="footer12Email" className="footer-12__cta-input" type="email" name="email" placeholder="hello@orisa.studio" required />
                            <button className="footer-12__cta-submit" type="submit">
                                <span>Get started</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-12__main">
                <div className="container-fluid px-3 px-lg-5">
                    <span className="footer-12__divider" aria-hidden="true"></span>

                    <div className="footer-12__columns">
                        <div className="footer-12__col footer-12__col--brand">
                            <Link className="footer-12__brand" to="/index-12" aria-label="Orisa home">
                                <img className="footer-12__brand-logo" src="/assets/imgs/template/logo/logo-w.svg" alt="Orisa" loading="lazy" />
                            </Link>
                            <p className="footer-12__brand-desc">Quiet craft for loud ideas. An independent studio shaping portfolios, identities, and digital products built to last.</p>
                            <div className="at-hero-social footer-12__socials" aria-label="Social links">
                                <a href="#">Twitter{SOCIAL_ARROW}</a>
                                <a href="#">LinkedIn{SOCIAL_ARROW}</a>
                                <a href="#">Behance{SOCIAL_ARROW}</a>
                                <a href="#">Dribbble{SOCIAL_ARROW}</a>
                            </div>
                        </div>

                        <div className="footer-12__col">
                            <p className="footer-12__col-title">STUDIO</p>
                            <ul className="footer-12__col-links">
                                <li><Link to="/about-1">About</Link></li>
                                <li><Link to="/services-details">Process</Link></li>
                                <li><a href="#">Careers</a></li>
                                <li><Link to="/contact-1">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-12__col">
                            <p className="footer-12__col-title">WORK</p>
                            <ul className="footer-12__col-links">
                                <li><Link to="/portfolio-1">Selected projects</Link></li>
                                <li><Link to="/portfolio-details-1">Case studies</Link></li>
                                <li><a href="#">Industries</a></li>
                                <li><a href="#">Testimonials</a></li>
                            </ul>
                        </div>

                        <div className="footer-12__col">
                            <p className="footer-12__col-title">RESOURCES</p>
                            <ul className="footer-12__col-links">
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/faqs">FAQ</Link></li>
                                <li><Link to="/archive-1">Blog</Link></li>
                                <li><a href="#">Templates</a></li>
                            </ul>
                        </div>

                        <div className="footer-12__col footer-12__col--hours">
                            <p className="footer-12__col-title">Mo &ndash; Sa</p>
                            <p className="footer-12__hours-value mb-0">9am &ndash; 5pm</p>
                        </div>
                    </div>

                    <span className="footer-12__divider" aria-hidden="true"></span>

                    <div className="footer-12__bottom">
                        <p className="footer-12__copy mb-0">&copy; 2026 Orisa Studio. All rights reserved.</p>
                        <ul className="footer-12__legal" aria-label="Legal">
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
