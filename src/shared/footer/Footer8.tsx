import { Link } from "react-router-dom";
// Footer 8 (Home 8) - Background image, nav with image arrows, contact, image-based socials, newsletter

const NAV_LINKS = [
    { label: "Home", href: "/index-8", delay: "0.1" },
    { label: "About", href: "/about-1", delay: "0.2" },
    { label: "Works", href: "/portfolio-1", delay: "0.3" },
    { label: "Blog", href: "/archive-1", delay: "0.4" },
    { label: "Contact", href: "/contact-1", delay: "0.5" },
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

export default function Footer8() {
    return (
        <footer className="footer-8 overflow-hidden">
            <div className="footer-8__bg" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/home-8/footer-8-bg.webp"
                    alt="orisa"
                    style={{ objectFit: "cover" }}
                    priority={false} loading="lazy" />
            </div>

            <div className="container-fluid footer-8__container">
                {/* Top navigation */}
                <div className="footer-8__top">
                    <nav className="footer-8__nav" aria-label="Footer navigation">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                className="footer-8__nav-link at_fade_anim"
                                data-delay={link.delay}
                                to={link.href}
                            >
                                <span>{link.label}</span>
                                <img
                                    className="footer-8__nav-arrow"
                                    src="/assets/imgs/pages/home-8/footer-8-nav-arrow.svg"
                                    alt="orisa"
                                    width={14}
                                    height={13}
                                    aria-hidden="true"
                                    style={{ width: "auto", height: "auto" }} loading="lazy" />
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="footer-8__mid">
                    <div className="row g-5">
                        {/* Contact */}
                        <div className="col-xxl-3 col-lg-4 col-md-6">
                            <div className="footer-8__contact">
                                <p className="footer-8__contact-line mb-1">
                                    <Link to="tel:+12125557398">+212 - 555-7398</Link>
                                </p>
                                <p className="footer-8__contact-line mb-3">
                                    <Link to="mailto:hello@orisa.com">hello@orisa.com</Link>
                                </p>
                                <p className="footer-8__address mb-0">
                                    245 Fifth Avenue, Suite 1800<br />New York, NY 10016, USA
                                </p>

                                <div className="footer-8__hours mt-30">
                                    <p className="footer-8__hours-label mb-1">Mo - Sa</p>
                                    <p className="footer-8__hours-value mb-0">9am - 5pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="col-xxl-3 col-lg-4 col-md-6">
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

                        {/* Newsletter */}
                        <div className="col-xxl-3 col-lg-4 col-md-6 ms-xxl-auto">
                            <div className="footer-8__newsletter">
                                <p className="footer-8__newsletter-title mb-3">
                                    Sign up for<br />our monthly newsletter
                                </p>
                                <form className="footer-8__form at_fade_anim" action="#" method="post">
                                    <label className="visually-hidden" htmlFor="footer8Email">
                                        Email
                                    </label>
                                    <input
                                        id="footer8Email"
                                        className="footer-8__input"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <button className="footer-7__submit at_fade_anim" type="submit">
                                        <span>
                                            <span className="text-1">Subscribe Now</span>
                                            <span className="text-2">Subscribe Now</span>
                                        </span>
                                        <i aria-hidden="true">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="13"
                                                viewBox="0 0 14 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="13"
                                                viewBox="0 0 14 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-8__bottom">
                    <div className="footer-8__bottom-inner d-flex flex-wrap gap-3 align-items-center justify-content-between">
                        <span className="footer-8__copy">Orisa &copy; 2026</span>
                        <ul className="footer-8__policies list-unstyled d-flex flex-wrap gap-3 mb-0">
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="#">Refund Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
