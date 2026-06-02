import { Link } from "react-router-dom";
// Footer 6 - Dark centered footer with branding title, quick links, contact, newsletter

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

export default function Footer6() {
    return (
        <footer>
            <div className="at-footer-area mp-footer-style pt-80 pb-0 bg-neutral-900 changeless">
                <div className="container">
                    <div className="row g-5 pb-45 align-items-end">
                        <div className="col-12">
                            <h2 className="footer-3-connect-title fw-600 fz-180 text-white mb-0 text-scale-anim text-center">
                                Orisa Branding Studio
                            </h2>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex flex-column justify-content-between">
                            <div className="at-footer-widget alt-footer-link-item-wrap row">
                                <span className="d-block fz-font-label neutral-0 opacity-50 text-uppercase mb-3">
                                    QUICK LINKS
                                </span>
                                <div className="alt-footer-link-item col-6">
                                    <ul>
                                        {QUICK_LINKS_1.map((item) => (
                                            <li key={item.label} className={item.label === "Contact" ? "" : "mb-15"}>
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
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column">
                                <p className="h6 text-white mb-2 fw-medium">
                                    <Link to="tel:+2125557398" className="text-white text-decoration-none">
                                        +212-555-7398
                                    </Link>
                                </p>
                                <p className="h6 text-white mb-2">
                                    <Link to="mailto:hello@orisa.com" className="text-white text-decoration-none">
                                        hello@orisa.com
                                    </Link>
                                </p>
                                <p className="h6 text-white mb-2">
                                    <Link to="#" className="text-white text-decoration-none">
                                        245 Fifth Avenue, Suite 1800 <br />
                                        New York, NY 10016, USA
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-10">
                            <div className="d-flex flex-wrap align-items-end gap-3 gap-md-5">
                                <div className="footer-3-hours text-white">
                                    <span className="d-block fz-font-md opacity-50">Mo - Sa</span>
                                    <p className="h5 fw-400 common-white mb-0">9am - 5pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 ms-auto">
                            <span className="text-white text-uppercase fz-font-body">
                                Sign up for
                                <br />
                                our monthly newsletter
                            </span>
                            <form action="#" className="">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-neutral-950 neutral-0 px-4 border-0 rounded-4 mt-4"
                                />
                                <div className="at-service-btn pt-10">
                                    <button
                                        type="submit"
                                        className="at-btn bg-neutral-950 rounded-4 w-100"
                                    >
                                        <span>
                                            <span className="text-1">Subscribe NOW</span>
                                            <span className="text-2">Subscribe NOW</span>
                                        </span>
                                        <i>
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="footer-3-border pt-40 pb-40">
                        <div className="row align-items-end">
                            <div className="col-12">
                                <div className="at-footer-widget alt-footer-link-item-wrap border-top-opacity pt-4">
                                    <div className="alt-footer-link-item">
                                        <ul className="d-flex flex-wrap align-items-center justify-content-between text-center gap-1">
                                            <li>
                                                <span className="fz-font-md neutral-0 opacity-50">Orisa &copy; 2026 </span>
                                            </li>
                                            <li>
                                                <span className="fz-font-md neutral-0 opacity-50">[ Since 2012 ] </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
