import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section12() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scaleUpRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let tl: ReturnType<typeof import("gsap").default.timeline> | null = null;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const scaleUpElement = scaleUpRef.current;
            if (!section || !scaleUpElement) return;

            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: 1,
                    markers: false,
                },
            });

            tl.to(scaleUpElement, {
                scale: 1.15,
                duration: 1,
            });
        };

        init();

        return () => {
            if (tl) {
                (tl as { scrollTrigger?: { kill?: () => void } }).scrollTrigger?.kill?.();
                tl.kill();
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="at-banner-thumb fix w-100 scale-up-img p-relative changeless d-none d-lg-block"
        >
            <div ref={scaleUpRef} className="scale-up position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden">
                <img
                    data-speed=".4"
                    className="img-cover"
                    src="/assets/imgs/pages/img-22.webp"
                    alt="orisa" loading="lazy" />
            </div>
            <div className="position-absolute top-0 bottom-0 start-0 end-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between pt-100">
                                <div className="at-header-logo">
                                    <Link to="/">
                                        <img
                                            data-width="30"
                                            src="/assets/imgs/template/logo/favicon-dark.svg"
                                            alt="Orisa"
                                            width={30}
                                            height={30}
                                            style={{ width: "auto", height: "auto" }} loading="lazy" />
                                        <h6 className="fw-700 fz-24 text-white mb-0">Orisa</h6>
                                    </Link>
                                </div>
                                <Link
                                    className="bg-transparent border px-3 py-1 rounded-pill common-white fz-font-lg"
                                    to="#"
                                >
                                    Local time: 12:30
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-250 align-items-end">
                        <div className="col-lg-5 col-md-6">
                            <h2 className="common-white">
                                Let&apos;s Create <br /> Meaning Together
                            </h2>
                            <div className="d-flex gap-4 align-items-center pt-30">
                                <Link
                                    className="at-btn at-btn-border-white common-white rounded-0"
                                    to="/contact"
                                >
                                    <span>
                                        <span className="text-1">Book A Call Now</span>
                                        <span className="text-2">Book A Call Now</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                                <span className="common-white fz-font-sm">[ From 8:00 To 16:30 ]</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ms-auto text-end">
                            <span className="common-white fz-font-lg">
                                [ A creative studio crafting bold, user-focused digital experiences. At Orisa, we blend
                                strategy, design, and innovation to help brands stand out and grow. ]
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
