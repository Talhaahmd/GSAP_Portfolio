import { Link } from "react-router-dom";
// Footer 11 (Home 11) - Motion & Video Creative Studio, decorative lines bg, multi-location, socials with home-8 icons

const NAV_LINKS_1 = [
    { label: "Home", href: "/index-11" },
    { label: "About", href: "/about-1" },
    { label: "Works", href: "/portfolio-1" },
    { label: "Services", href: "/services-details-1" },
    { label: "Blog", href: "/archive-1" },
];

const NAV_LINKS_2 = [
    { label: "Contact", href: "/contact-1" },
    { label: "Jobs", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
];

const LOCATIONS = [
    { city: "Seoul", address: "12F, Gangnam-gu, Seoul 06012, KR" },
    { city: "London", address: "Studio 4, Shoreditch, London EC2A 3NW, UK" },
    { city: "New York", address: "245 Fifth Avenue, Suite 1800 New York, NY 10016, USA" },
];

const SOCIAL_LINKS = [
    {
        label: "Twitter",
        href: "#",
        delay: "0.1",
        active: false,
        icon: "footer-8-x.svg",
        arrow: "footer-8-social-arrow.svg",
    },
    {
        label: "Facebook",
        href: "#",
        delay: "0.2",
        active: true,
        icon: "footer-8-fb.svg",
        arrow: "footer-8-social-arrow-2.svg",
    },
    {
        label: "Linkedin",
        href: "#",
        delay: "0.3",
        active: false,
        icon: "footer-8-in.svg",
        arrow: "footer-8-social-arrow.svg",
    },
    {
        label: "Instagram",
        href: "#",
        delay: "0.4",
        active: false,
        icon: "footer-8-ig.svg",
        arrow: "footer-8-social-arrow.svg",
    },
    {
        label: "Youtube",
        href: "#",
        delay: "0.5",
        active: false,
        noBorder: true,
        icon: "footer-8-yt.svg",
        arrow: "footer-8-social-arrow.svg",
    },
];

const NAV_ARROW_IMAGE = {
    src: "/assets/imgs/pages/home-8/footer-8-nav-arrow.svg",
    alt: "orisa",
    width: 14,
    height: 13,
};

const SUBSCRIBE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path
            d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

export default function Footer11() {
    return (
        <footer className="footer-11 changeless overflow-hidden">
            <div className="footer-11__bg" aria-hidden="true">
                <div className="footer-11__bg-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <div className="container-2200 px-lg-5 px-3 position-relative">
                {/* Mid section: Nav + Contact + Newsletter + Social */}
                <div className="footer-11__mid">
                    <div className="row g-5 align-items-start">
                        {/* Column 1: Navigation */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="row g-4 footer-11__nav-grid">
                                <div className="col-6">
                                    <nav className="footer-11__nav-list" aria-label="Footer primary">
                                        {NAV_LINKS_1.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-11__nav-link"
                                                to={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <img
                                                    className="footer-11__nav-arrow"
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
                                    <nav className="footer-11__nav-list" aria-label="Footer secondary">
                                        {NAV_LINKS_2.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-11__nav-link"
                                                to={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <img
                                                    className="footer-11__nav-arrow"
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

                        {/* Column 2: Contact + Locations */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-11__contact-hours d-flex flex-column gap-4">
                                <div className="footer-11__contact">
                                    <p className="footer-11__contact-line mb-1">
                                        <Link to="tel:+12125557398">+212 - 555-7398</Link>
                                    </p>
                                    <p className="footer-11__contact-line mb-3">
                                        <Link to="mailto:hello@orisa.com">hello@orisa.com</Link>
                                    </p>
                                </div>
                                <div className="footer-11__locations">
                                    {LOCATIONS.map((loc) => (
                                        <div key={loc.city}>
                                            <p className="footer-11__location-city">{loc.city}</p>
                                            <p className="footer-11__location-addr">
                                                {loc.address.split("<br>").map((line, i) => (
                                                    <span key={i}>
                                                        {i > 0 && <br />}
                                                        {line}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="footer-11__hours">
                                    <p className="footer-11__hours-label mb-1">Mo - Sa</p>
                                    <p className="footer-11__hours-value mb-0">9am - 5pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Newsletter */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-11__newsletter">
                                <p className="footer-11__newsletter-title mb-3 at_fade_anim" data-delay="0.1">
                                    Sign up for<br />our monthly reel
                                </p>
                                <form
                                    className="footer-11__form at_fade_anim"
                                    data-delay="0.2"
                                    action="#"
                                    method="post"
                                >
                                    <label className="visually-hidden" htmlFor="footer11Email">
                                        Email
                                    </label>
                                    <input
                                        id="footer11Email"
                                        className="footer-11__input"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <button className="footer-11__submit" type="submit">
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

                        {/* Column 4: Socials */}
                        <div className="col-xl-3 col-lg-12 col-md-6">
                            <div className="footer-8__socials" aria-label="Social links">
                                {SOCIAL_LINKS.map((social) => {
                                    const socialLinkClasses = [
                                        "footer-8__social-link",
                                        "at_fade_anim",
                                        social.active ? "is-active" : "",
                                        social.noBorder ? "no-border" : "",
                                    ]
                                        .filter(Boolean)
                                        .join(" ");

                                    return (
                                        <Link
                                            key={social.label}
                                            className={socialLinkClasses}
                                            data-delay={social.delay}
                                            to={social.href}
                                            aria-label={social.label}
                                        >
                                            <span className="footer-8__social-left">
                                                <img
                                                    className="footer-8__social-icon"
                                                    src={`/assets/imgs/pages/home-8/${social.icon}`}
                                                    alt="orisa"
                                                    width={18}
                                                    height={18} loading="lazy" />
                                                <span>{social.label}</span>
                                            </span>
                                            <span className="footer-8__social-arrow" aria-hidden="true">
                                                <img
                                                    src={`/assets/imgs/pages/home-8/${social.arrow}`}
                                                    alt="orisa"
                                                    width={24}
                                                    height={10} loading="lazy" />
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-11__bottom">
                    <div className="footer-11__bottom-inner d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <div className="d-flex flex-wrap align-items-center gap-3 gap-xxl-4">
                            <span className="footer-11__copy">Orisa &copy; 2026</span>
                            <span className="footer-11__tagline d-none d-sm-inline">
                                Motion &amp; Video Creative Studio
                            </span>
                        </div>
                        <span className="footer-11__since">[ Since 2019 ]</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
