import { Link } from "react-router-dom";
// Footer 10 (Home 10) - Hero CTA with decorations, two-column nav with image arrows, contact, newsletter, bottom bar

const NAV_LINKS_1 = [
    { label: "Home", href: "/index-10" },
    { label: "About", href: "/about-1" },
    { label: "Works", href: "/portfolio-1" },
    { label: "Blog", href: "/archive-1" },
    { label: "Contact", href: "/contact-1" },
];

const NAV_LINKS_2 = [
    { label: "Jobs", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Help", href: "#" },
    { label: "Social", href: "#" },
];

const CTA_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const SUBSCRIBE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path
            d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

const DECO_IMAGE_1 = {
    src: "/assets/imgs/pages/home-10/footer-10-deco-1.webp",
    alt: "orisa",
    width: 420,
    height: 559,
};

const DECO_IMAGE_2 = {
    src: "/assets/imgs/pages/home-10/footer-10-deco-2.webp",
    alt: "orisa",
    width: 420,
    height: 503,
};

const BG_IMAGE = {
    src: "/assets/imgs/pages/home-10/footer-10-bg-lines.webp",
    alt: "orisa",
    width: 2096,
    height: 1180,
};

const NAV_ARROW_IMAGE = {
    src: "/assets/imgs/pages/home-8/footer-8-nav-arrow.svg",
    alt: "orisa",
    width: 14,
    height: 13,
};

export default function Footer10() {
    return (
        <footer className="footer-10 changeless overflow-hidden">
            <div className="footer-10__bg" aria-hidden="true">
                <img
                    className="footer-10__bg-img"
                    src={BG_IMAGE.src}
                    alt={BG_IMAGE.alt}
                    width={BG_IMAGE.width}
                    height={BG_IMAGE.height}
                    loading="lazy"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
            </div>

            <div className="container-2200 px-lg-5 px-3 position-relative">
                <div className="footer-10__hero position-relative">
                    <div className="footer-10__deco footer-10__deco--left d-none d-md-block" aria-hidden="true">
                        <img
                            src={DECO_IMAGE_2.src}
                            alt={DECO_IMAGE_2.alt}
                            width={DECO_IMAGE_2.width}
                            height={DECO_IMAGE_2.height}
                            loading="lazy"
                        />
                    </div>
                    <div className="footer-10__deco footer-10__deco--right d-none d-md-block" aria-hidden="true">
                        <img
                            src={DECO_IMAGE_1.src}
                            alt={DECO_IMAGE_1.alt}
                            width={DECO_IMAGE_1.width}
                            height={DECO_IMAGE_1.height}
                            loading="lazy"
                        />
                    </div>

                    <div className="footer-10__cta-block text-center position-relative z-1 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="footer-10__headline mb-0 at_fade_anim reveal-text" data-delay="0.05">
                            Ready to step beyond the flat screen?
                        </h2>
                        <div className="sec-5-home-9__cta-wrap">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/portfolio-1">
                                    {CTA_ARROW_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/portfolio-1">
                                    INITIATE COLLABORATION
                                </Link>
                                <Link className="at-btn-circle" to="/portfolio-1">
                                    {CTA_ARROW_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-10__mid">
                    <div className="row g-5 align-items-start">
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="row g-4 footer-10__nav-grid">
                                <div className="col-6">
                                    <nav className="footer-10__nav-list" aria-label="Footer primary">
                                        {NAV_LINKS_1.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-10__nav-link"
                                                to={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <img
                                                    className="footer-10__nav-arrow"
                                                    src={NAV_ARROW_IMAGE.src}
                                                    alt={NAV_ARROW_IMAGE.alt}
                                                    width={NAV_ARROW_IMAGE.width}
                                                    height={NAV_ARROW_IMAGE.height}
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    style={{ width: "auto", height: "auto" }}
                                                />
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div className="col-6">
                                    <nav className="footer-10__nav-list" aria-label="Footer secondary">
                                        {NAV_LINKS_2.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-10__nav-link"
                                                to={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <img
                                                    className="footer-10__nav-arrow"
                                                    src={NAV_ARROW_IMAGE.src}
                                                    alt={NAV_ARROW_IMAGE.alt}
                                                    width={NAV_ARROW_IMAGE.width}
                                                    height={NAV_ARROW_IMAGE.height}
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    style={{ width: "auto", height: "auto" }}
                                                />
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-7 col-md-6">
                            <div className="footer-10__contact-hours d-flex flex-wrap gap-4 gap-xxl-5">
                                <div className="footer-10__contact">
                                    <p className="footer-10__contact-line mb-1">
                                        <Link to="tel:+12125557398">+212 - 555-7398</Link>
                                    </p>
                                    <p className="footer-10__contact-line mb-3">
                                        <Link to="mailto:hello@orisa.com">hello@orisa.com</Link>
                                    </p>
                                    <p className="footer-10__address mb-0">
                                        245 Fifth Avenue, Suite 1800<br />New York, NY 10016, USA
                                    </p>
                                </div>
                                <div className="footer-10__hours">
                                    <p className="footer-10__hours-label mb-1">Mo - Sa</p>
                                    <p className="footer-10__hours-value mb-0">9am - 5pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 ms-xl-auto col-lg-6">
                            <div className="footer-10__newsletter">
                                <p className="footer-10__newsletter-title mb-3 at_fade_anim" data-delay="0.1">
                                    Sign up for<br />our monthly newsletter
                                </p>
                                <form
                                    className="footer-10__form at_fade_anim"
                                    data-delay="0.2"
                                    action="#"
                                    method="post"
                                >
                                    <label className="visually-hidden" htmlFor="footer10Email">
                                        Email
                                    </label>
                                    <input
                                        id="footer10Email"
                                        className="footer-10__input"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <button className="footer-10__submit" type="submit">
                                        <span>
                                            <span className="text-1">Subscribe Now</span>
                                            <span className="text-2">Subscribe Now</span>
                                        </span>
                                        <i aria-hidden="true">
                                            {SUBSCRIBE_ARROW_SVG}
                                            {SUBSCRIBE_ARROW_SVG}
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-10__bottom">
                    <div className="footer-10__bottom-inner d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <span className="footer-10__copy">Orisa &copy; 2026</span>
                        <span className="footer-10__since">[ Since 2012 ]</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
