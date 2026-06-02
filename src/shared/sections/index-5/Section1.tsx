import { Link } from "react-router-dom";
// Home 5 Section 1 - Hero (AI Engineer / Klarus AI Nova)

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const DIAMOND_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path
            d="M19.3621 35.41C20.3107 28.6345 20.785 25.2468 23.0159 23.0158C25.2469 20.7848 28.6347 20.3105 35.4102 19.362L37.9991 18.9995L35.4102 18.6371C28.6347 17.6885 25.2469 17.2142 23.0159 14.9832C20.785 12.7522 20.3107 9.36449 19.3621 2.58901L18.9996 -4.5973e-05L18.6372 2.58898C17.6886 9.36447 17.2143 12.7522 14.9833 14.9832C12.7524 17.2142 9.36462 17.6885 2.58913 18.637L0 18.9995L2.58912 19.362C9.36461 20.3106 12.7524 20.7848 14.9833 23.0158C17.2143 25.2468 17.6886 28.6345 18.6372 35.41L18.9996 37.9991L19.3621 35.41Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    const gridColumns = 7;
    const isCenterColumn = (i: number) => i === 3;

    return (
        <div className="bg-neutral-50">
            <div className="container-2200 pt-140 p-relative z-0">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
                    {Array.from({ length: gridColumns }, (_, i) => (
                        <div
                            key={i}
                            className={
                                isCenterColumn(i)
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        >
                            <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                            {isCenterColumn(i) && (
                                <div
                                    className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
                                    aria-hidden
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="sec-1-home-5 bg-cover mt-30 pb-lg-0 pb-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 mx-lg-auto col-md-6 pb-100 z-index-2">
                                <span className="category-tag mb-20">
                                    <span className="dot" />
                                    Available for freelance work
                                </span>
                                <p className="fz-18 neutral-900 fw-600 mb-40">
                                    I develop AI Automations <br /> and build intelligent systems that scale
                                </p>
                                <img
                                    src="/assets/imgs/pages/img-102.webp"
                                    alt="Klarus AI"
                                    width={214}
                                    height={138}
                                    style={{ width: "auto", height: "auto" }} loading="lazy" />
                            </div>

                            <div className="col-lg-4 mx-lg-auto d-none d-lg-block z-index-1">
                                <div
                                    className="p-relative at_fade_anim"
                                    data-delay=".5"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <img
                                        src="/assets/imgs/pages/img-101.webp"
                                        alt="Klarus AI"
                                        width={560}
                                        height={860}
                                        className="d-none d-lg-block" loading="lazy" />
                                    <div className="p-absolute bottom-0 start-50 translate-middle-x z-n1 d-lg-none d-xxl-block">
                                        <h1 className="fz-290 fw-600 text-nowrap lh-1">Klarus AI Nova</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-lg-auto z-index-2">
                                <div className="icon mb-30">{DIAMOND_ICON}</div>
                                <h4>I&apos;m Klarus AI Nova</h4>
                                <p className="fz-lg neutral-900 fw-600">
                                    I design and build AI automations, MVPs, and scalable AI architectures that help businesses turn ideas into real-world products and intelligent workflows.

                                </p>
                                <div
                                    className="at-btn-group at-btn-group-transparent at_fade_anim"
                                    data-delay=".5"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <Link className="at-btn-circle" to="/portfolio-5">
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                    <Link className="at-btn z-index-1" to="/portfolio-5">
                                        View All Projects
                                    </Link>
                                    <Link className="at-btn-circle" to="/portfolio-5">
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
