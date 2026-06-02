import { Link } from "react-router-dom";
const SOCIAL_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none" aria-hidden="true" focusable="false">
        <path d="M5.625 10H.563V8.75h3.937V2.393L2.278 4.861 1.483 3.977 5.063 0l3.579 3.977-.795.884L5.625 2.393V10Z" fill="currentColor" />
    </svg>
);

const SERVICE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" focusable="false">
        <path d="M1 12 12.5 1M2 1h10.5v10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SOCIAL_LINKS = [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Dribbble", href: "https://dribbble.com" },
];

const SERVICES = [
    { label: "Web Design", href: "/services-1" },
    { label: "Motion Graphics", href: "/services-2", current: true },
    { label: "Brand Strategy", href: "/services-3" },
    { label: "Product Design", href: "/services-details" },
];

export default function Footer15() {
    return (
        <footer className="footer-15 changeless" aria-label="Site footer">
            <div className="footer-15__grid">
                <section className="footer-15__panel footer-15__panel--nav at_fade_anim" data-fade-from="bottom" data-delay=".1" aria-label="Footer navigation">
                    <nav className="footer-15__nav-wrap" aria-label="Footer primary">
                        <ul className="footer-15__nav list-unstyled mb-0">
                            <li><Link to="/index-15">Home</Link></li>
                            <li><Link className="is-current" to="/about-1">About<span className="footer-15__nav-icon" aria-hidden="true">{SERVICE_ICON}</span></Link></li>
                            <li><Link to="/portfolio-1">Works</Link></li>
                            <li><Link to="/archive-1">Blog</Link></li>
                            <li><Link to="/contact-2">Contact</Link></li>
                        </ul>
                        <ul className="footer-15__nav list-unstyled mb-0">
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </nav>

                    <div className="footer-15__social" aria-label="Follow us">
                        <p className="footer-15__eyebrow mb-0">Follow us</p>
                        <ul className="footer-15__tags list-unstyled mb-0">
                            {SOCIAL_LINKS.map((s) => (
                                <li key={s.label}>
                                    <a href={s.href} target="_blank" rel="noopener">
                                        <span>{s.label}</span>
                                        {SOCIAL_ARROW}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="footer-15__panel footer-15__panel--news at_fade_anim" data-fade-from="bottom" data-delay=".2" aria-label="Newsletter signup">
                    <span className="footer-15__news-bg" aria-hidden="true" style={{ backgroundImage: "url('/assets/imgs/pages/home-15/footer-bg.webp')" }}></span>
                    <div className="footer-15__news-inner">
                        <p className="footer-15__news-label mb-0">Sign up for<br />our monthly newsletter</p>
                        <form className="footer-15__form" action="#" method="post" noValidate>
                            <label className="visually-hidden" htmlFor="footer15Email">Email address</label>
                            <input id="footer15Email" className="footer-15__form-input" type="email" name="email" placeholder="Email" required />
                            <button className="footer-15__form-btn" type="submit">
                                <span>Subscribe now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true" focusable="false">
                                    <path d="M1 12 12.5 1M2 1h10.5v10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </section>

                <section className="footer-15__panel footer-15__panel--brand at_fade_anim" data-fade-from="bottom" data-delay=".3" aria-label="Brand and services">
                    <div className="footer-15__brand-head">
                        <Link className="footer-15__brand-mark" to="/index-15" aria-label="Orisa home">
                            <img className="footer-15__brand-icon" src="/assets/imgs/template/logo/logo-w.svg" alt="Orisa" loading="lazy" />
                        </Link>
                        <h2 className="footer-15__brand-title mb-0">
                            <span className="footer-15__brand-title-strong">Let&rsquo;s Sha</span><span className="footer-15__brand-title-muted">pe Your Next Idea</span>
                        </h2>
                    </div>
                    <ul className="footer-15__services list-unstyled mb-0">
                        {SERVICES.map((srv) => (
                            <li key={srv.label} className={srv.current ? "is-current" : undefined}>
                                <Link to={srv.href}>
                                    <span className="footer-15__service-dot" aria-hidden="true"></span>
                                    <span className="footer-15__service-label">{srv.label}</span>
                                    <span className="footer-15__service-icon" aria-hidden="true">{SERVICE_ICON}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="footer-15__panel footer-15__panel--contact at_fade_anim" data-fade-from="bottom" data-delay=".4" aria-label="Contact and legal">
                    <div className="footer-15__contact-row">
                        <p className="footer-15__intro mb-0">Orisa is a digital agency creating impactful digital experiences. We think like strategists and execute with clarity, creativity, and performance.</p>
                        <address className="footer-15__contact mb-0">
                            <a className="footer-15__contact-line" href="tel:+2125557398">+212 &ndash; 555-7398</a>
                            <a className="footer-15__contact-line" href="mailto:hello@orisa.com">hello@orisa.com</a>
                            <span className="footer-15__contact-line">245 Fifth Avenue, Suite 1800<br />New York, NY 10016, USA</span>
                        </address>
                    </div>
                    <div className="footer-15__legal">
                        <p className="footer-15__copy mb-0">Orisa &copy; 2026</p>
                        <ul className="footer-15__legal-links list-unstyled mb-0">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    );
}
