import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ROTATE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z"
            fill="#FEFEFE"
        />
    </svg>
);

const STAR_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path
            d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369575 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
            fill="#FEFEFE"
        />
    </svg>
);

const QUOTE_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="43" viewBox="0 0 61 43" fill="none">
        <path d="M4.3 43H17.2L25.8 25.8V0H0V25.8H12.9L4.3 43ZM38.7 43H51.6L60.2 25.8V0H34.4V25.8H47.3L38.7 43Z" fill="#FEFEFE" />
    </svg>
);

const BG_IMG_6 = "/assets/imgs/pages/bg-img-6.webp";
const BG_IMG_7 = "/assets/imgs/pages/bg-img-7.webp";

export default function Section7() {
    return (
        <section className="home-4-section-7 p-relative">
            <div className="container">
                <div className="row g-2">
                    <div className="col-lg-4">
                        <div
                            className="p-relative rounded-4 overflow-hidden bg-cover bg-linear-opacity p-xxl-5 p-md-5 p-4 h-100"
                            style={{ backgroundImage: `url(${BG_IMG_6})` }}
                        >
                            <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">TESTIMONIALS</span>
                                    <span className="text-2">TESTIMONIALS</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 className="text-white reveal-text mb-60 pb-60 border-bottom-opacity">
                                <RevealText>What our clients are saying</RevealText>
                            </h2>
                            <div className="d-flex align-items-center gap-4">
                                <div className="rotate-infinite">{ROTATE_SVG}</div>
                                <div>
                                    <div className="testimonial-star d-flex align-items-center gap-2">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <span key={i}>{STAR_SVG}</span>
                                        ))}
                                    </div>
                                    <p className="text-white fz-font-sm mb-0 mt-2">
                                        Average 4.9 rating point <br /> reviews from 968 clients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div
                            className="p-relative rounded-4 overflow-hidden bg-cover bg-linear-opacity p-xxl-5 p-lg-4 p-md-3 h-100 d-flex align-items-center justify-content-center"
                            style={{ backgroundImage: `url(${BG_IMG_7})` }}
                        >
                            <div className="d-flex flex-lg-nowrap flex-wrap gap-5 p-md-5 p-4">
                                <div className="icon">{QUOTE_ICON_SVG}</div>
                                <div className="content">
                                    <p className="text-white fz-font-3xl fw-400 mb-50 lh-base">
                                        What impressed us most was their ability to translate a high-level AI strategy into a system that actually worked in production. Within a short time, we saw clear improvements in efficiency, decision-making speed, and overall operational performance.
                                    </p>
                                    <h5 className="text-white fw-500">Michael Turner</h5>
                                    <p className="text-white fz-font-md fw-500 opacity-75 mb-0">CTO, Nexora Systems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
