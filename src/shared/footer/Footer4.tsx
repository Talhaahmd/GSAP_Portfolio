import { Link } from "react-router-dom";
// Footer 4 - Klarus AI Solutions

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SOCIAL_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path
            d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
            fill="currentColor"
        />
    </svg>
);

const SOCIAL_LINKS = [
    { label: "Twitter", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Linkedin", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
];

const QUICK_LINKS_1 = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-1" },
    { label: "Works", href: "/portfolio-1" },
    { label: "Blog", href: "/archive-1" },
    { label: "Contact", href: "/contact-1" },
];

const QUICK_LINKS_2 = [
    { label: "Shop", href: "/product-archive" },
    { label: "Pricing", href: "/pricing" },
    { label: "Cart", href: "/product-cart" },
    { label: "Checkout", href: "/product-checkout" },
];

const FOOTER_SERVICES = [
    "Web Development",
    "Motion Graphics",
    "Brand Strategy",
    "Product Design",
];

function FooterServiceBtn({ label }: { label: string }) {
    return (
        <Link
            to="#"
            className="at-btn at-btn-border-white border-0 ps-2 pe-2 py-0 common-white opacity-50 bg-transparent rounded-0"
        >
            <span>
                <span className="text-1">{label}</span>
                <span className="text-2">{label}</span>
            </span>
            <i>
                {ARROW_SVG}
                {ARROW_SVG}
            </i>
        </Link>
    );
}

export default function Footer4() {
    return (
        <footer className="container-2200">
            <div className="at-footer-area mp-footer-style pt-50 pb-0 bg-neutral-950 rounded-5 mx-lg-3 mx-2 changeless">
                <div className="container">
                    <div className="row g-md-5 g-4 pb-45 mb-40">
                        <div className="col-12 text-center">
                            <h2 className="footer-4-connect-title fw-900 fz-200 text-white mb-0 text-scale-anim text-center text-nowrap">
                                Klarus AI Solutions
                                <sup className="fz-80 fw-400">®</sup>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-6 d-flex flex-column justify-content-between gap-lg-5 gap-4">
                            <h4 className="text-white mb-5 fw-medium text-decoration-underline">
                                <a href="mailto:info@klarus.io">info@klarus.io</a>
                            </h4>
                            <div className="d-flex flex-wrap gap-lg-5 gap-4">
                                <div className="d-flex flex-column">
                                    <span className="d-block fz-font-label neutral-0 opacity-50 text-uppercase mb-3">
                                        base on
                                    </span>
                                    <h6 className="text-white mb-2">
                                        <Link to="#" className="text-white text-decoration-none">
                                            245 Fifth Avenue, Suite 1800 <br className="d-block" />
                                            New York, NY 10016, USA
                                        </Link>
                                    </h6>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="d-block fz-font-label neutral-0 opacity-50 text-uppercase mb-3">
                                        Tel
                                    </span>
                                    <h6 className="text-white mb-2">
                                        <Link to="tel:+2125557398" className="text-white text-decoration-none">
                                            +212 - 555-7398
                                        </Link>
                                    </h6>
                                    <h6 className="text-white mb-2">
                                        <Link to="tel:+2126667399" className="text-white text-decoration-none">
                                            +212 - 666-7399
                                        </Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-end">
                            <div className="at-footer-widget at-footer-link mb-2">
                                <span className="d-block fz-font-label neutral-0 opacity-50 text-uppercase mb-3">
                                    follow us
                                </span>
                                <div className="at-hero-social">
                                    {SOCIAL_LINKS.map((item) => (
                                        <Link key={item.label} to={item.href}>
                                            {item.label}
                                            {SOCIAL_ARROW}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex flex-column justify-content-between">
                            <div className="at-footer-widget alt-footer-link-item-wrap row">
                                <span className="d-block fz-font-label neutral-0 opacity-50 text-uppercase mb-3">
                                    QUICK LINKS
                                </span>
                                <div className="alt-footer-link-item col-6">
                                    <ul>
                                        {QUICK_LINKS_1.map((item) => (
                                            <li key={item.label} className="mb-15">
                                                <Link to={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="alt-footer-link-item col-6">
                                    <ul>
                                        {QUICK_LINKS_2.map((item) => (
                                            <li key={item.label} className={item.label === "Checkout" ? "" : "mb-15"}>
                                                <Link to={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="at-footer-copyright-area at-about-border pt-40 pb-40">
                        <div className="row align-items-center g-3">
                            <div className="col-xl-2 col-lg-5">
                                <div className="at-footer-copyright-wrap text">
                                    <span className="at-footer-copyright">Klarus AI © 2026</span>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <ul className="d-flex flex-wrap gap-lg-4 gap-3 ps-3">
                                    {FOOTER_SERVICES.map((label) => (
                                        <li key={label}>
                                            <FooterServiceBtn label={label} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-xl-3">
                                <div className="at-footer-copyright-wrap text-lg-end">
                                    <span className="at-footer-copyright">[ Since 2012 ]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-0 pt-10" />
        </footer>
    );
}
