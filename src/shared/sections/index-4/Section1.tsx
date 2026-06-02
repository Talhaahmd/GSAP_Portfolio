import { Link } from "react-router-dom";
// Home 4 Section 1 - Hero (AI & Technology Agency)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const TAG_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path
            d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
            fill="currentColor"
        />
    </svg>
);

const CARDS_IMGS = [
    "/assets/imgs/pages/img-43-lg.webp",
    "/assets/imgs/pages/img-74.webp",
    "/assets/imgs/pages/img-75.webp",
];

const TAGS = [
    "AI Automations",
    "MVP Development",
    "CRM Integrations",
    "Workflow Systems",
    "Cloud & APIs",
];
const FOOTER_NAV = [
    { label: "Automations & Integrations", href: "/services-2" },
    { label: "MVP Development", href: "/services-2" },
    { label: "Network Integration", href: "/services-2" },
    { label: "Launch & Scale", href: "/services-2" },
];

function AtBtn({
    href,
    children,
    className = "",
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link to={href} className={`at-btn text-white rounded-0 ${className}`.trim()}>
            <span>{children}</span>
            <i>
                {ARROW_SVG}
                {ARROW_SVG}
            </i>
        </Link>
    );
}

function AtBtnBorder({ href, label }: { href: string; label: string }) {
    return (
        <Link
            to={href}
            className="at-btn at-btn-border-white ps-2 pt-20 pb-20 pe-2 text-white bg-transparent rounded-0 border-bottom-0 border-start-0 border-end-0 w-100"
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

export default function Section1() {
    return (
        <div className="bg-neutral-50">
            <div className="container-2200 sec-1-home-4-wrap p-relative z-0 pt-85">
                <div
                    className="sec-1-home-4 bg-linear-opacity p-relative bg-cover mt-20 rounded-5 mx-lg-3 mx-2"
                    data-background="/assets/imgs/pages/bg-img-4.webp"
                >
                    <div className="container p-relative z-index-1">
                        <div className="row align-items-start">
                            <div className="col-12">
                                <span className="sec-1-home-4__tagline d-inline-block mb-30">
                                    [AI Automations and MVP Development]
                                </span>
                            </div>
                            <div className="col-xxl-5 col-lg-5 mb-5 mb-lg-0 pe-xxl-5">
                                <h4 className="sec-1-home-4__headline fw-600 text-white mb-4 mb-md-5 lh-1">
                                    We build AI automations, MVPs, and scalable systems that help businesses operate faster and grow smarter.
                                </h4>
                                <div className="sec-1-home-4__btns d-flex flex-wrap gap-3">
                                    <AtBtn href="/services-2">
                                        <span className="text-1">EXPLORE SERVICES</span>
                                        <span className="text-2">EXPLORE SERVICES</span>
                                    </AtBtn>
                                    <AtBtn href="/portfolio-3">
                                        <span className="text-1">VIEW CASE STUDIES</span>
                                        <span className="text-2">VIEW CASE STUDIES</span>
                                    </AtBtn>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-6 col-md-10 ms-lg-auto mt-lg-0 mt-4">
                                <div className="sec-1-home-4__cards d-flex gap-3 mb-4">
                                    {CARDS_IMGS.map((src, i) => (
                                        <div key={i} className="sec-1-home-4__card rounded-3 overflow-hidden">
                                            <img
                                                src={src}
                                                alt="orisa"
                                                width={280}
                                                height={200}
                                                className="img-cover w-100 h-100" loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                                <div className="sec-1-home-4__tags d-flex flex-wrap gap-3 mt-40">
                                    {TAGS.map((tag, i) => (
                                        <Link key={i} to="#" className="sec-1-home-4__tag">
                                            {tag}
                                            {TAG_ARROW_SVG}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="sec-1-home-4__footer pt-60 pt-lg-8 mt-5 mt-lg-8">
                            <h2 className="sec-1-home-4__brand fz-200 text-white mb-4 text-scale-anim">
                                Klarus AI
                                <span className="sec-1-home-4__brand-suffix">
                                    <sup>®</sup>
                                </span>
                            </h2>
                            <div className="container p-relative z-index-2">
                                <div className="row">
                                    {FOOTER_NAV.map((item, i) => (
                                        <div key={i} className="col-lg-3 col-md-6 col-12 text-center">
                                            <AtBtnBorder href={item.href} label={item.label} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
