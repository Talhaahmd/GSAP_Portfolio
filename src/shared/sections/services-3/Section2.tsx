import { Link } from "react-router-dom";
// Services 3 Section 2 - Service cards grid (4 cards)

const ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 11.6412 18.3563 14.9984 22.4971 15C18.3563 15.0016 15 18.3588 15 22.5C15 18.3579 11.6421 15 7.5 15C3.35786 15 5.08894e-07 18.3579 3.27835e-07 22.5L0 30L7.5 30C11.6421 30 15 26.6421 15 22.5C15 26.6421 18.3579 30 22.5 30L30 30L30 22.5C30 18.3588 26.6437 15.0016 22.5029 15C26.6437 14.9984 30 11.6412 30 7.5L30 6.31805e-06L22.5 6.64589e-06C18.3579 6.82695e-06 15 3.35787 15 7.5C15 3.35787 11.6421 5.21315e-06 7.5 5.39421e-06L2.62268e-06 3.8147e-06L1.63918e-06 7.5C1.096e-06 11.6421 3.35786 15 7.5 15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_2 = (
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

const ICON_3 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 0L20 10L10 0L0 10V30L10 20L20 30L30 20V0ZM10 20V10H20V20H10Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_4 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M10 10L20 0H30V10L20 20V10H10Z" fill="currentColor" />
        <path d="M20 20H30V30H20V20Z" fill="currentColor" />
        <path d="M10 10L0 20V30H10L20 20H10V10Z" fill="currentColor" />
        <path d="M10 10H0V0H10V10Z" fill="currentColor" />
    </svg>
);

export default function Section2() {
    return (
        <section className="sec-2-services overflow-hidden pt-120 pb-120">
            <div className="container">
                <div className="row g-3">
                    {/* Card 1 - Strategy & Research (background image) */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="at-service-card card-1 rounded-4 overflow-hidden p-relative bg-cover"
                            style={{ backgroundImage: "url(/assets/imgs/pages/img-76.webp)" }}
                            data-background="/assets/imgs/pages/img-76.webp"
                        >
                            <Link to="#" className="p-absolute top-0 left-0 w-100 h-100" />
                            <div className="at-service-card-content text-white p-absolute bottom-0 start-0 end-0 m-xxl-5 m-4">
                                <div className="at-service-card-icon">{ICON_1}</div>
                                <h6 className="text-white mt-3">
                                    <Link to="#">Strategy &amp; Research</Link>
                                </h6>
                                <div className="at-service-card-description">
                                    <p className="text-white mb-0">
                                        Through research, analysis, and positioning, we build a clear foundation for meaningful digital growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 - Design & Experience */}
                    <div className="col-lg-3 col-md-6">
                        <div className="at-service-card card-2 rounded-4 overflow-hidden p-relative bg-neutral-50">
                            <Link to="#" className="p-absolute bottom-0 start-0 end-0">
                                <img
                                    className="img-cover"
                                    src="/assets/imgs/pages/img-77.webp"
                                    alt="orisa"
                                    width={400}
                                    height={500} loading="lazy" />
                            </Link>
                            <div className="at-service-card-content p-absolute top-0 left-0 m-xxl-5 m-4">
                                <div className="at-service-card-icon">{ICON_2}</div>
                                <h6 className="mt-3">
                                    <Link to="#">Design &amp; Experience</Link>
                                </h6>
                                <div className="at-service-card-description">
                                    <p className="mb-0">
                                        Every interaction is crafted to balance beauty, usability, and brand personality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 - Network Integration */}
                    <div className="col-lg-3 col-md-6">
                        <div className="at-service-card card-3 rounded-4 overflow-hidden p-relative">
                            <Link to="#" className="p-absolute top-0 left-0">
                                <img
                                    className="img-cover"
                                    src="/assets/imgs/pages/img-78.webp"
                                    alt="orisa"
                                    width={400}
                                    height={300} loading="lazy" />
                            </Link>
                            <Link to="#" className="p-absolute bottom-0 start-0 end-0">
                                <img
                                    className="img-cover"
                                    src="/assets/imgs/pages/img-79.webp"
                                    alt="orisa"
                                    width={400}
                                    height={300} loading="lazy" />
                            </Link>
                            <div className="at-service-card-content text-white p-absolute top-50 left-0 mx-xxl-5 mx-4 translate-middle-y">
                                <div className="at-service-card-icon">{ICON_3}</div>
                                <h6 className="text-white mt-3">
                                    <Link to="#">Network Integration</Link>
                                </h6>
                                <div className="at-service-card-description">
                                    <p className="mb-0 text-white">
                                        From on-premise to cloud environments, we ensure seamless communication, scalability, and operational stability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 - Build & Launch */}
                    <div className="col-lg-3 col-md-6">
                        <div className="at-service-card card-2 rounded-4 overflow-hidden p-relative bg-neutral-50">
                            <Link to="#" className="p-absolute bottom-0 start-0 end-0">
                                <img
                                    className="img-cover"
                                    src="/assets/imgs/pages/img-80.webp"
                                    alt="orisa"
                                    width={400}
                                    height={500} loading="lazy" />
                            </Link>
                            <div className="at-service-card-content p-absolute top-50 left-0 mx-xxl-5 mx-4 translate-middle-y">
                                <div className="at-service-card-icon">{ICON_4}</div>
                                <h6 className="mt-3">
                                    <Link to="#">Build &amp; Launch</Link>
                                </h6>
                                <div className="at-service-card-description">
                                    <p className="mb-0">
                                        Bring ideas to life with clean, scalable, and performance-driven builds. From development to launch, we focus on reliability and long-term growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
