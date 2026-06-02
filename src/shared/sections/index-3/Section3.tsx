import OdometerCounter from "@/shared/elements/OdometerCounter";

const QUOTE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="43" viewBox="0 0 34 43" fill="none">
        <path d="M12.5 26.66L3.00442 26.66C0.68247 26.66 -0.759179 24.4843 0.420807 22.761L14.986 1.48852C16.7967 -1.15609 21.5 -0.0494029 21.5 3.02127L21.5 16.34L30.9956 16.34C33.3175 16.34 34.7592 18.5157 33.5792 20.239L19.014 41.5115C17.2033 44.1561 12.5 43.0494 12.5 39.9787L12.5 26.66Z" fill="currentColor" />
    </svg>
);

const LOGO_BASE = "/assets/imgs/template/logo/logo-brand";
const logoSrc = (num: number) => `${LOGO_BASE}-${String(num).padStart(2, "0")}.webp`;

/** Each item: [logo indices 1-10], delay, optional extra className */
const BRAND_ITEMS: { logos: number[]; delay: string; className?: string }[] = [
    { logos: [1, 2, 3], delay: ".4" },
    { logos: [5, 6, 7], delay: ".4" },
    { logos: [3, 4, 5], delay: ".6" },
    { logos: [4, 5, 6], delay: ".7" },
    { logos: [6, 7, 8], delay: ".5" },
    { logos: [7, 8, 9], delay: ".6" },
    { logos: [8, 9, 10], delay: ".7" },
    { logos: [2, 3, 4], delay: ".5" },
    { logos: [9, 10, 1], delay: ".6" },
    { logos: [10, 1, 2], delay: ".7", className: "d-md-none d-lg-block" },
];

export default function Section3() {
    return (
        <section className="sec-3-home-3 pt-130 pb-130 bg-neutral-50">
            <div className="container">
                <div className="row g-xxl-5 g-4">
                    <div className="col-3xl-6 col-xxl-5 col-lg-3 col-12">
                        <div className="row g-xxl-5 g-4">
                            <div className="col-xxl-5 col-lg-12 col-md-5 col-12 d-lg-none d-xxl-block">
                                <div className="img-left ripple-image ripples">
                                    <img src="/assets/imgs/pages/img-56.webp" alt="orisa" width={325} height={335} className="img-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="col-xxl-7 col-lg-12 col-md-7 col-12">
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex gap-3">
                                        {QUOTE_ICON}
                                        <h4 className="reveal-text">Trusted by fast-growing brands worldwide</h4>
                                    </div>
                                    <div className="img-right">
                                        <img src="/assets/imgs/pages/img-57.webp" alt="orisa" width={470} height={350} loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3xl-6 col-xxl-7 col-lg-9 col-12">
                        <div className="d-inline-flex">
                            <div className="at-brand-scroll">
                                <div className="at-brand-scroll-wrap d-flex flex-wrap justify-content-end gap-2">
                                    {BRAND_ITEMS.slice(0, 8).map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`at-brand-item at_fade_anim ${item.className ?? ""}`.trim()}
                                            data-delay={item.delay}
                                            data-fade-from="bottom"
                                            data-ease="bounce"
                                        >
                                            <div className="brand">
                                                {item.logos.map((num) => (
                                                    <span key={num} className="brand-logo-slide" data-logo={String(num).padStart(2, "0")}>
                                                        <img
                                                            decoding="async"
                                                            className="dark-mode-invert"
                                                            src={logoSrc(num)}
                                                            alt="orisa"
                                                            width={100}
                                                            height={40} loading="lazy" />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex-grow-1 text-center d-flex flex-column justify-content-center align-items-center ms-lg-5">
                                        <h2 className="mb-0">
                                            $<OdometerCounter count={850} suffix="M+" />
                                        </h2>
                                        <p className="fz-font-lg text-start mb-0">
                                            in total revenue generated <br /> for clients
                                        </p>
                                    </div>
                                    {BRAND_ITEMS.slice(8).map((item, idx) => (
                                        <div
                                            key={idx + 8}
                                            className={`at-brand-item at_fade_anim ${item.className ?? ""}`.trim()}
                                            data-delay={item.delay}
                                            data-fade-from="bottom"
                                            data-ease="bounce"
                                        >
                                            <div className="brand">
                                                {item.logos.map((num) => (
                                                    <span key={num} className="brand-logo-slide" data-logo={String(num).padStart(2, "0")}>
                                                        <img
                                                            decoding="async"
                                                            className="dark-mode-invert"
                                                            src={logoSrc(num)}
                                                            alt="orisa"
                                                            width={100}
                                                            height={40} loading="lazy" />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
