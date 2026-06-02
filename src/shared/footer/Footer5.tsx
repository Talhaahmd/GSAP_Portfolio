import { Link } from "react-router-dom";
// Footer 5 - Klarus AI Nova (light style with grid background)

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

const TAGS = [
    "[ Conversion-focused ]",
    "[ Data-driven ]",
    "[ Built for scale ]",
    "[ User-centric ]",
    "[Future-proof]",
];

const DECO_SVG_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
        <path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" />
    </svg>
);

const DECO_SVG_2 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none">
        <path
            opacity="0.3"
            d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z"
            fill="#515151"
        />
    </svg>
);

const DECO_SVG_3 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
        <path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" />
    </svg>
);

export default function Footer5() {
    return (
        <footer className="container-2200">
            <div className="at-footer-area mp-footer-style pt-120 pb-20 bg-neutral-0 rounded-5 mx-lg-3 mx-2 p-relative fix">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={
                                i === 3
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        >
                            <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                            {i === 3 && (
                                <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="container p-relative z-index-1">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <h6 className="fw-600">
                                    <Link to="tel:+2125557398" className="text-decoration-none">
                                        +212 - 555-7398
                                    </Link>
                                </h6>
                                <span className="at-footer-copyright neutral-900 opacity-100">Klarus AI © 2026</span>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                            <h4 className="mb-0 fw-medium text-decoration-underline">
                                <a href="mailto:info@klarus.io">info@klarus.io</a>
                            </h4>
                        </div>
                        <div className="col-xxl-3 col-lg-5 col-md-6">
                            <h6 className="fw-600">
                                <Link to="#" className="text-decoration-none fz-font-lg fw-500">
                                    205 North Michigan Avenue, Suite 810, Chicago, 60601, USA
                                </Link>
                            </h6>
                        </div>
                        <div className="col-xxl-3 col-lg-5 col-md-6 d-flex flex-column justify-content-between p-relative z-3">
                            <div className="at-footer-widget alt-footer-link-item-wrap row">
                                <div className="alt-footer-link-item col-6">
                                    <ul>
                                        {QUICK_LINKS_1.map((item) => (
                                            <li key={item.label} className={item.label === "Contact" ? "" : "mb-15"}>
                                                <Link to={item.href} className="neutral-dark-900 invert-1">
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="alt-footer-link-item col-6">
                                    <ul>
                                        {QUICK_LINKS_2.map((item) => (
                                            <li key={item.label} className={item.label === "Checkout" ? "" : "mb-15"}>
                                                <Link to={item.href} className="neutral-dark-900 invert-1">
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 offset-lg-1 align-self-end z-n1">
                            <div className="at-about-svg-wrap">
                                {DECO_SVG_1}
                                {DECO_SVG_2}
                                {DECO_SVG_3}
                            </div>
                        </div>
                    </div>

                    <div className="at-footer-copyright-area pt-40">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="d-flex align-items-end justify-content-center lh-1 fz-200 mb-0 text-nowrap">
                                    I&apos;m{" "}
                                    <img
                                        src="/assets/imgs/pages/img-116.webp"
                                        alt="Klarus AI"
                                        width={205}
                                        height={315}
                                        className="d-none d-md-block"
                                        style={{ width: "auto", height: "auto" }} loading="lazy" />{" "}
                                    Klarus AI <sup className="fz-80 fw-400">®</sup>
                                </h1>
                            </div>
                            <div className="col-12">
                                <div
                                    className="bg-neutral-50 rounded-3 d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center pt-10 pb-10 gap-md-4 gap-2 pl-30 pr-30"
                                    data-fade-from="bottom"
                                    data-duration="2"
                                >
                                    {TAGS.map((tag, i) => (
                                        <p key={i} className="neutral-900 mb-0">
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-50 pt-20" />
        </footer>
    );
}
