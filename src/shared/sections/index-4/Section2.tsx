import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 4 Section 2 - What we offer / Services

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const AVATARS = [
    "/assets/imgs/template/avatar/avatar-10.webp",
    "/assets/imgs/template/avatar/avatar-11.webp",
    "/assets/imgs/template/avatar/avatar-12.webp",
    "/assets/imgs/template/avatar/avatar-13.webp",
    "/assets/imgs/template/avatar/avatar-14.webp",
];

const QUOTE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 13.5V0H13.5H0V13.5V27H13.5L27 13.5ZM27 13.5H13.5V27L0 13.5L13.5 0L27 13.5Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_STRATEGY = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 11.6412 18.3563 14.9984 22.4971 15C18.3563 15.0016 15 18.3588 15 22.5C15 18.3579 11.6421 15 7.5 15C3.35786 15 5.08894e-07 18.3579 3.27835e-07 22.5L0 30L7.5 30C11.6421 30 15 26.6421 15 22.5C15 26.6421 18.3579 30 22.5 30L30 30L30 22.5C30 18.3588 26.6437 15.0016 22.5029 15C26.6437 14.9984 30 11.6412 30 7.5L30 6.31805e-06L22.5 6.64589e-06C18.3579 6.82695e-06 15 3.35787 15 7.5C15 3.35787 11.6421 5.21315e-06 7.5 5.39421e-06L2.62268e-06 3.8147e-06L1.63918e-06 7.5C1.096e-06 11.6421 3.35786 15 7.5 15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_DESIGN = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M15 0H30V15L15 0Z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 15V0H7.5L0 7.5V15V30H15H22.5L30 22.5V15H15ZM15 15V30L0 15H15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_NETWORK = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 0L20 10L10 0L0 10V30L10 20L20 30L30 20V0ZM10 20V10H20V20H10Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_BUILD = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M10 10L20 0H30V10L20 20V10H10Z" fill="currentColor" />
        <path d="M20 20H30V30H20V20Z" fill="currentColor" />
        <path d="M10 10L0 20V30H10L20 20H10V10Z" fill="currentColor" />
        <path d="M10 10H0V0H10V10Z" fill="currentColor" />
    </svg>
);

const SERVICES = [
    {
        type: "card-1",
        background: "/assets/imgs/pages/img-76.webp",
        icon: ICON_STRATEGY,
        title: "Automations & Integrations",
        description: "We connect tools, automate workflows, and reduce manual work through smart, scalable automation systems.",
        textWhite: true,
    },
    {
        type: "card-2",
        img: "/assets/imgs/pages/img-77.webp",
        imgPosition: "bottom",
        icon: ICON_DESIGN,
        title: "MVP Development",
        description: "We turn ideas into functional MVPs with clean architecture, fast execution, and product-focused development.",
        textWhite: false,
    },
    {
        type: "card-3",
        imgTop: "/assets/imgs/pages/img-78.webp",
        imgBottom: "/assets/imgs/pages/img-79.webp",
        icon: ICON_NETWORK,
        title: "Network Integration",
        description: "From on-premise to cloud environments, we ensure seamless communication, scalability, and operational stability.",
        textWhite: true,
    },
    {
        type: "card-2",
        img: "/assets/imgs/pages/img-80.webp",
        imgPosition: "bottom",
        contentPosition: "top-50",
        icon: ICON_BUILD,
        title: "Launch & Scale",
        description: "We help launch, optimize, and scale digital products with performance, reliability, and long-term growth in mind.",
        textWhite: false,
    },
];

export default function Section2() {
    return (
        <div className="bg-neutral-50">
            <section className="sec-2-home-4 portfolio-area pt-80 pb-80 fix">
                <div className="container">
                    <div className="row pb-60">
                        <div className="col-lg-2 col-md-3">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">what we offer</span>
                                    <span className="text-2">what we offer</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <div className="pt-40 ps-5 d-none d-md-block">
                                <img
                                    src="/assets/imgs/pages/img-gemstone.webp"
                                    alt="orisa"
                                    width={78}
                                    height={110}
                                    className="portfolio-text"
                                    style={{ width: "auto", height: "auto" }} loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <h3 className="reveal-text lh-1">
                                <RevealText>
                                    Building AI automations, scalable MVPs, and integrated systems.
                                </RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 col-md-6 ms-auto mt-md-0 mt-4">
                            <ul className="list-unstyled navigation-section-10">
                                {AVATARS.map((src, i) => (
                                    <li key={i}>
                                        <div className="icon-shape size-60 rounded-2 fix">
                                            <img
                                                src={src}
                                                alt="orisa"
                                                width={60}
                                                height={60}
                                                className="img-cover w-100 h-100" loading="lazy" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex gap-3 pt-30">
                                <div>{QUOTE_SVG}</div>
                                <span className="neutral-900">
                                    We design intelligent systems that help businesses think, decide, and scale faster.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                {service.type === "card-1" ? (
                                    <div
                                        className="at-service-card card-1 rounded-4 overflow-hidden p-relative bg-cover"
                                        data-background={service.background}
                                        style={{
                                            backgroundImage: `url(${service.background})`,
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <Link to="#" className="p-absolute top-0 left-0 w-100 h-100" aria-hidden />
                                        <div className="at-service-card-content text-white p-absolute bottom-0 start-0 end-0 m-xxl-5 m-4">
                                            <div className="at-service-card-icon">{service.icon}</div>
                                            <h6 className="text-white mt-3">
                                                <Link to="#">{service.title}</Link>
                                            </h6>
                                            <div className="at-service-card-description">
                                                <p className="text-white mb-0">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : service.type === "card-3" ? (
                                    <div className="at-service-card card-3 rounded-4 overflow-hidden p-relative">
                                        <Link to="#" className="p-absolute top-0 left-0">
                                            <img
                                                src={service.imgTop!}
                                                alt="orisa"
                                                width={400}
                                                height={300}
                                                className="img-cover w-100 h-100" loading="lazy" />
                                        </Link>
                                        <Link to="#" className="p-absolute bottom-0 start-0 end-0">
                                            <img
                                                src={service.imgBottom!}
                                                alt="orisa"
                                                width={400}
                                                height={300}
                                                className="img-cover w-100 h-100" loading="lazy" />
                                        </Link>
                                        <div className="at-service-card-content text-white p-absolute top-50 left-0 mx-xxl-5 mx-4 translate-middle-y">
                                            <div className="at-service-card-icon">{service.icon}</div>
                                            <h6 className="text-white mt-3">
                                                <Link to="#">{service.title}</Link>
                                            </h6>
                                            <div className="at-service-card-description">
                                                <p className="mb-0 text-white">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="at-service-card card-2 rounded-4 overflow-hidden p-relative bg-neutral-0">
                                        <Link to="#" className="p-absolute bottom-0 start-0 end-0">
                                            <img
                                                src={service.img!}
                                                alt="orisa"
                                                width={400}
                                                height={300}
                                                className="img-cover w-100 h-100" loading="lazy" />
                                        </Link>
                                        <div
                                            className={
                                                (service as { contentPosition?: string }).contentPosition
                                                    ? "at-service-card-content p-absolute top-50 left-0 mx-xxl-5 mx-4 translate-middle-y"
                                                    : "at-service-card-content p-absolute top-0 left-0 m-xxl-5 m-4"
                                            }
                                        >
                                            <div className="at-service-card-icon">{service.icon}</div>
                                            <h6 className="mt-3">
                                                <Link to="#">{service.title}</Link>
                                            </h6>
                                            <div className="at-service-card-description">
                                                <p className="mb-0">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
