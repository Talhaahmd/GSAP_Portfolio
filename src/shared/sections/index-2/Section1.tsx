import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path
            d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
            fill="currentColor"
        />
    </svg>
);

const LOGO_SVG = (
    <svg className="common-black" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 20H20V30L20 40H10L0 30L10 20H0V0H10L20 10V1.90735e-06L30 0L40 10L30 20ZM20 10V20H10L20 10Z"
            fill="currentColor"
        />
        <path d="M30 20H40V40H30L20 30L30 20Z" fill="currentColor" />
    </svg>
);

const SOCIAL_LINKS = [
    { label: "Twitter", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
];

export default function Section1({ classList }: { classList?: string }) {
    return (
        <section className={`sec-1-home-2 pt-85 container-2200 ${classList || ""}`}>
            <div className="overflow-hidden p-relative pt-90 pb-90 mx-lg-3 mx-2">
                <div
                    className="p-absolute top-0 left-0 w-100 h-100 rounded-5 opacity-10 z-0"
                    data-background="/assets/imgs/pages/noise.gif"
                />
                <div className="container p-relative z-1">
                    <div className="row g-4 align-items-end">
                        <div className="col-xxl-2 col-md-4">
                            <div className="ripple-image ripples rounded-3 overflow-hidden">
                                <img
                                    className="img-cover"
                                    src="/assets/imgs/pages/img-27.webp"
                                    alt="orisa"
                                    width={400}
                                    height={500} loading="lazy" />
                            </div>
                        </div>
                        <div className="col-xxl-2 col-lg-5 col-md-6 col-12">
                            <div className="alt-hero-service at-hero-service mt-40">
                                <ul>
                                    <li>{LOGO_SVG}</li>
                                    <li>
                                        <span className="fz-font-md fw-500 common-black">
                                            We collaborate with the world&apos;s leading platforms and partners to deliver
                                            results that redefine industry standards.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-12 ps-xxl-5">
                            <div className="at-title-anim overflow-hidden">
                                <h1 className="fz-160 fw-600 mb-0 at-title-text">
                                    Orisa Studio<sup className="fz-80 fw-400">®</sup>
                                </h1>
                            </div>
                            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                                <div className="at-hero-social style-2">
                                    {SOCIAL_LINKS.map(({ label, href }) => (
                                        <Link key={label} to={href}>
                                            {label}
                                            {ARROW_SVG}
                                        </Link>
                                    ))}
                                </div>
                                <p className="fz-font-lg fw-500 mb-0">[ (+01) 555-7398 ]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
