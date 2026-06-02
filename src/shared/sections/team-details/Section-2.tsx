import Marquee from "react-fast-marquee";

// Team details Section 2 - Ticker (Creativity, Innovation, etc.) + quote

const TICKER_ITEMS = [
    "Creativity",
    "Innovation",
    "Strategy",
    "Impact",
    "Impact",
    "Originality",
];

export default function Section2() {
    return (
        <section className="sec-2-team-details pb-50 pt-50">
            <div className="mb-40">
                <Marquee
                    speed={80}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee fix"
                >
                    <ul className="d-flex align-items-center justify-content-center gap-4 carouselTicker__list scroll-move-left fix">
                        {TICKER_ITEMS.map((label, i) => (
                            <li key={`${label}-${i}`} className="d-flex align-items-center gap-4">
                                <h1 className="mb-0 fw-600 fz-200 text-nowrap">{label}</h1>
                                <h1 className="mb-0 fw-600 fz-200 text-nowrap">.</h1>
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <p className="fz-font-3xl neutral-900 fw-400">
                            We&apos;re a team of strategists and creatives working together to deliver impactful, results-driven work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
