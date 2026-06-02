import { Link } from "react-router-dom";
export default function Footer13() {
    return (
        <footer className="footer-13" aria-label="Site footer">
            <div className="footer-13__meta">
                <div className="footer-13__meta-item footer-13__meta-item--lead at_fade_anim" data-fade-from="bottom" data-delay=".1">
                    <span className="footer-13__meta-dot" aria-hidden="true"></span>
                    <span className="footer-13__meta-key">STUDIO</span>
                    <span className="footer-13__meta-val">Open &middot; 9:00 &mdash; 18:00</span>
                </div>
                <div className="footer-13__meta-item at_fade_anim" data-fade-from="bottom" data-delay=".2">
                    <span className="footer-13__meta-key">LOCAL</span>
                    <span className="footer-13__meta-val">14:32 GMT+0</span>
                </div>
                <div className="footer-13__meta-item at_fade_anim" data-fade-from="bottom" data-delay=".3">
                    <span className="footer-13__meta-key">WEATHER</span>
                    <span className="footer-13__meta-val">8&deg;C &middot; Overcast</span>
                </div>
                <div className="footer-13__meta-item at_fade_anim" data-fade-from="bottom" data-delay=".4">
                    <span className="footer-13__meta-key">VERSION</span>
                    <span className="footer-13__meta-val">v.2026.03</span>
                </div>
            </div>

            <div className="footer-13__body">
                <div className="footer-13__top">
                    <div className="footer-13__brand at_fade_anim" data-fade-from="bottom" data-delay=".1">
                        <Link className="footer-13__logo" to="/">
                            <img src="/assets/imgs/template/logo/favicon.svg" alt="Orisa" loading="lazy" />
                            <span className="footer-13__logo-text">Orisa</span>
                        </Link>
                        <p className="footer-13__intro mb-0">
                            We design buildings that age with grace, host human moments, and earn their place on the skyline. Studios in Oslo, New York, and Kyoto.
                        </p>
                        <form className="footer-13__form" action="#" method="post" noValidate>
                            <p className="footer-13__form-label mb-0">FIELDNOTES &mdash; MONTHLY DISPATCH</p>
                            <div className="footer-13__form-row">
                                <label className="visually-hidden" htmlFor="footer-13-email">Email address</label>
                                <input className="footer-13__form-input" id="footer-13-email" type="email" name="email" placeholder="your.email@example.com" autoComplete="email" required />
                                <button className="footer-13__form-btn" type="submit">
                                    <span>SUBSCRIBE</span>
                                    <span className="footer-13__form-arrow" aria-hidden="true">&rarr;</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <nav className="footer-13__cols" aria-label="Footer navigation">
                        <div className="footer-13__col at_fade_anim" data-fade-from="bottom" data-delay=".2">
                            <p className="footer-13__col-title mb-0">PRACTICE</p>
                            <ul className="footer-13__col-list list-unstyled mb-0">
                                <li><Link to="/about-1">About</Link></li>
                                <li><Link to="/services-1">Process</Link></li>
                                <li><Link to="/about-1">Awards</Link></li>
                                <li><Link to="/archive-1">Press</Link></li>
                                <li><Link to="/team">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="footer-13__col at_fade_anim" data-fade-from="bottom" data-delay=".3">
                            <p className="footer-13__col-title mb-0">WORKS</p>
                            <ul className="footer-13__col-list list-unstyled mb-0">
                                <li><Link to="/portfolio-1">Selected</Link></li>
                                <li><Link to="/portfolio-1">Residential</Link></li>
                                <li><Link to="/portfolio-1">Cultural</Link></li>
                                <li><Link to="/portfolio-1">Commercial</Link></li>
                                <li><Link to="/portfolio-1">Master Plans</Link></li>
                            </ul>
                        </div>
                        <div className="footer-13__col at_fade_anim" data-fade-from="bottom" data-delay=".4">
                            <p className="footer-13__col-title mb-0">CONTACT</p>
                            <ul className="footer-13__col-list list-unstyled mb-0">
                                <li><a href="mailto:studio@orisa.architecture">studio@orisa.architecture</a></li>
                                <li><a href="tel:+12125550142">+1 (212) 555-0142</a></li>
                                <li><Link to="/contact-1">Press inquiries</Link></li>
                                <li><Link to="/contact-1">Schedule a visit</Link></li>
                                <li><Link to="/contact-1">Job applications</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <ul className="footer-13__studios list-unstyled mb-0">
                    <li className="footer-13__studio at_fade_anim" data-fade-from="bottom" data-delay=".1">
                        <div className="footer-13__studio-head">
                            <span className="footer-13__studio-dot footer-13__studio-dot--active" aria-hidden="true"></span>
                            <h3 className="footer-13__studio-name mb-0">New York</h3>
                        </div>
                        <address className="footer-13__studio-addr mb-0">
                            Studio 4F &middot; 217 Lafayette St<br />
                            Manhattan, NY 10012
                        </address>
                        <p className="footer-13__studio-status footer-13__studio-status--open mb-0">OPEN NOW &middot; 14:32 LOCAL</p>
                    </li>
                    <li className="footer-13__studio at_fade_anim" data-fade-from="bottom" data-delay=".3">
                        <div className="footer-13__studio-head">
                            <span className="footer-13__studio-dot footer-13__studio-dot--active" aria-hidden="true"></span>
                            <h3 className="footer-13__studio-name mb-0">Oslo</h3>
                        </div>
                        <address className="footer-13__studio-addr mb-0">
                            Bygd&oslash;y All&eacute; 12<br />
                            0262 Oslo, Norway
                        </address>
                        <p className="footer-13__studio-status footer-13__studio-status--open mb-0">OPEN NOW &middot; 14:32 LOCAL</p>
                    </li>
                    <li className="footer-13__studio at_fade_anim" data-fade-from="bottom" data-delay=".5">
                        <div className="footer-13__studio-head">
                            <span className="footer-13__studio-dot" aria-hidden="true"></span>
                            <h3 className="footer-13__studio-name mb-0">Kyoto</h3>
                        </div>
                        <address className="footer-13__studio-addr mb-0">
                            Higashiyama-ku, Sannenzaka<br />
                            605-0826 Kyoto, Japan
                        </address>
                        <p className="footer-13__studio-status mb-0">AFTER HOURS &middot; CLOSED</p>
                    </li>
                </ul>

                <div className="footer-13__bigbrand">
                    <p className="footer-13__bigbrand-text mb-0 text-scale-anim">Orisa<sup>&reg;</sup> Architecture</p>
                </div>
            </div>

            <div className="footer-13__legal">
                <p className="footer-13__copy mb-0">&copy; 2026 Orisa Architecture, Ltd. RIBA #18472. All rights reserved.</p>
                <ul className="footer-13__social list-unstyled mb-0">
                    <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
                    <li><a href="https://behance.net" target="_blank" rel="noopener">Behance</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
                    <li><a href="https://pinterest.com" target="_blank" rel="noopener">Pinterest</a></li>
                    <li><a href="https://vimeo.com" target="_blank" rel="noopener">Vimeo</a></li>
                </ul>
                <ul className="footer-13__legal-links list-unstyled mb-0">
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Imprint</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </footer>
    );
}
