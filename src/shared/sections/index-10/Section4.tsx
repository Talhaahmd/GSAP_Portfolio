import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const SERVICES = [
    {
        id: "pos1",
        href: "/services-details-1",
        img: "/assets/imgs/pages/home-10/sec-4-service-1.webp",
        width: 800,
        height: 520,
        name: "Spatial Brand Identity",
        excerpt: "Defining brand DNA through spatial systems, motion, and tactile narratives.",
        layout: "image-first",
        ariaLabel: "Spatial Brand Identity",
        delay: "0.12",
    },
    {
        id: "pos2",
        href: "/services-details-1",
        img: "/assets/imgs/pages/home-10/sec-4-service-2.webp",
        width: 720,
        height: 460,
        name: "Interactive WebGL",
        excerpt: "Real-time, browser-based 3D experiences engineered for performance.",
        layout: "bar-first",
        extraClass: "me-md-5 me-0",
        ariaLabel: "Interactive WebGL",
        delay: "0.14",
    },
    {
        id: "pos3",
        href: "/services-details-1",
        img: "/assets/imgs/pages/home-10/sec-4-service-3.webp",
        width: 900,
        height: 520,
        name: "VR Environments",
        excerpt: "Building immersive worlds your clients can step into and explore.",
        layout: "bar-first",
        ariaLabel: "VR Environments",
        delay: "0.16",
    },
    {
        id: "pos4",
        href: "/services-details-1",
        img: "/assets/imgs/pages/home-10/sec-4-service-4.webp",
        width: 900,
        height: 520,
        name: "CGI &amp; Motion Stills",
        excerpt: "High-fidelity visuals for campaigns, launches, and hero moments.",
        layout: "image-first",
        ariaLabel: "CGI and Motion Stills",
        delay: "0.18",
    },
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

export default function Section4() {
    return (
        <section className="sec-4-home-10 changeless">
            <div className="sec-4-home-10__container">
                <div className="sec-4-home-10__stage">
                    <header className="sec-4-home-10__title-block">
                        <div className="sec-4-home-10__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay="0.05">
                            <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Our services</span>
                                    <span className="text-2">Our services</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                        </div>
                        <h2 className="sec-4-home-10__title mt-3 mb-0 at_fade_anim reveal-text" data-delay="0.1">
                            <RevealText>From geometric sketches to living ecosystems.</RevealText>
                        </h2>
                    </header>

                    {SERVICES.map((service) => (
                        <article
                            key={service.id}
                            className={`sec-4-home-10__card sec-4-home-10__card--${service.id} sec-4-home-10__card--${service.layout} at_fade_anim${service.extraClass ? " " + service.extraClass : ""}`}
                            data-delay={service.delay}
                        >
                            <div className="sec-4-home-10__card-inner">
                                {service.layout === "image-first" ? (
                                    <>
                                        <div className="sec-4-home-10__visual">
                                            <Link className="sec-4-home-10__visual-link" to={service.href} aria-label={service.ariaLabel}>
                                                <img
                                                    src={service.img}
                                                    alt="orisa"
                                                    width={service.width}
                                                    height={service.height}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </Link>
                                            <div className="sec-4-home-10__overlay">
                                                <p className="sec-4-home-10__excerpt mb-0">{service.excerpt}</p>
                                            </div>
                                        </div>
                                        <div className="sec-4-home-10__bar">
                                            <h3 className="sec-4-home-10__service-name mb-0">{service.name}</h3>
                                            <button type="button" className="sec-4-home-10__expand" aria-label={`Expand ${service.ariaLabel}`}>
                                                <span className="sec-4-home-10__expand-icon" aria-hidden="true"></span>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="sec-4-home-10__bar">
                                            <h3 className="sec-4-home-10__service-name mb-0">{service.name}</h3>
                                            <button type="button" className="sec-4-home-10__expand" aria-label={`Expand ${service.ariaLabel}`}>
                                                <span className="sec-4-home-10__expand-icon" aria-hidden="true"></span>
                                            </button>
                                        </div>
                                        <div className="sec-4-home-10__visual">
                                            <Link className="sec-4-home-10__visual-link" to={service.href} aria-label={service.ariaLabel}>
                                                <img
                                                    src={service.img}
                                                    alt="orisa"
                                                    width={service.width}
                                                    height={service.height}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </Link>
                                            <div className="sec-4-home-10__overlay">
                                                <p className="sec-4-home-10__excerpt mb-0">{service.excerpt}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
