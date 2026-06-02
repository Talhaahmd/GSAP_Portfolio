import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const LOGO_DIMS: Record<string, { width: number; height: number }> = {
    "01": { width: 130, height: 33 },
    "02": { width: 130, height: 38 },
    "03": { width: 125, height: 27 },
    "04": { width: 105, height: 24 },
    "05": { width: 120, height: 27 },
    "06": { width: 125, height: 28 },
    "07": { width: 94, height: 42 },
    "08": { width: 109, height: 32 },
    "09": { width: 117, height: 32 },
    "10": { width: 135, height: 48 },
};

const makeLogo = (n: string) => ({
    src: `/assets/imgs/template/logo/logo-brand-${n}.webp`,
    alt: "orisa",
    dataLogo: n,
    ...LOGO_DIMS[n],
});

const BRAND_ROWS = [
    { delay: ".4", logos: ["01", "02", "03"].map(makeLogo) },
    { delay: ".6", logos: ["07", "08", "09"].map(makeLogo) },
    { delay: ".6", logos: ["03", "04", "05"].map(makeLogo) },
    { delay: ".7", logos: ["04", "05", "06"].map(makeLogo) },
    { delay: ".4", logos: ["05", "06", "07"].map(makeLogo) },
    { delay: ".5", logos: ["06", "07", "08"].map(makeLogo) },
    { delay: ".5", logos: ["02", "03", "04"].map(makeLogo) },
    { delay: ".7", logos: ["08", "09", "10"].map(makeLogo) },
    { delay: ".6", logos: ["09", "10", "01"].map(makeLogo) },
    { delay: ".7", logos: ["10", "01", "02"].map(makeLogo) },
];

function StarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path
                d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369575 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
                fill="currentColor"
            />
        </svg>
    );
}

function DoubleArrowIcon() {
    return (
        <>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
                    fill="currentColor"
                />
            </svg>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
                    fill="currentColor"
                />
            </svg>
        </>
    );
}

export default function Section2() {
    return (
        <div className="sec-3-home-5 pt-130 pb-110">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xxl-4 col-lg-8 col-12">
                        <h3 className="h6 fz-font-md text-uppercase neutral-500 fw-600 mb-30">
                            Trusted by 100+ businesses
                        </h3>
                        <h4 className="h5 fw-600 reveal-text pe-xxl-5">
                            <RevealText>Orisa Nova is an AI Engineer architecting scalable, high-impact systems with research-driven precision.</RevealText>
                        </h4>
                    </div>
                    <div className="col-xxl-8 col-12">
                        <div className="d-inline-flex">
                            <div className="at-brand-scroll">
                                <div className="at-brand-scroll-wrap d-flex flex-wrap gap-2">
                                    {BRAND_ROWS.map((row, idx) => (
                                        <div
                                            key={idx}
                                            className="at-brand-item at_fade_anim"
                                            data-delay={row.delay}
                                            data-fade-from="bottom"
                                            data-ease="bounce"
                                        >
                                            <div className="brand">
                                                {row.logos.map((logo, logoIdx) => (
                                                    <span
                                                        key={logoIdx}
                                                        className="brand-logo-slide"
                                                        data-logo={logo.dataLogo}
                                                    >
                                                        <img
                                                            decoding="async"
                                                            className="dark-mode-invert"
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            width={logo.width}
                                                            height={logo.height}
                                                            style={{ height: 30, width: "auto" }} loading="lazy" />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex-grow-1 text-center d-flex flex-column justify-content-center ml-100 py-5">
                                        <div className="d-flex mb-2">
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span className="star"><StarIcon /></span>
                                            <span><StarIcon /></span>
                                            <span><StarIcon /></span>
                                        </div>
                                        <div className="d-flex">
                                            <Link
                                                to="#"
                                                className="at-btn common-black bg-transparent mb-10 rounded-0 p-0"
                                            >
                                                <span className="text-uppercase">
                                                    <span className="text-1">Customer reviews</span>
                                                    <span className="text-2">Customer reviews</span>
                                                </span>
                                                <i><DoubleArrowIcon /></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
