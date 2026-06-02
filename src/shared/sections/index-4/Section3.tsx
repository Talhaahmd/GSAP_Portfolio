import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 4 Section 3 - How we work / Process cards

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const PROCESS_CARDS = [
    {
        cardClass: "card-1",
        pillClass: "card__process-pill--1",
        num: "01",
        title: "Discover & Diagnose",
        description:
            "We analyze your market, audience, data, and existing performance to uncover real growth opportunities.",
    },
    {
        cardClass: "card-2",
        pillClass: "card__process-pill--2",
        num: "02",
        title: "Strategy & Plan",
        description:
            "We craft data-driven strategies tailored to your goals, ensuring every decision is backed by insights.",
    },
    {
        cardClass: "card-3",
        pillClass: "card__process-pill--3",
        num: "03",
        title: "Execute & Optimize",
        description: "We implement with precision and continuously optimize to maximize impact and ROI.",
    },
    {
        cardClass: "card-4",
        pillClass: "card__process-pill--4",
        num: "04",
        title: "Scale & Sustain",
        description: "We help you scale what works and build sustainable systems for long-term growth.",
    },
];

const QUOTE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="48" viewBox="0 0 42 48" fill="none">
        <path d="M21 16L14 12V4L21 0L28 4V12L21 16Z" fill="currentColor" />
        <path d="M35 24L28 20V12L35 8L42 12V20L35 24Z" fill="currentColor" />
        <path d="M28 36V28L35 24L42 28V36L35 40L28 36Z" fill="currentColor" />
        <path d="M14 36L21 32L28 36V44L21 48L14 44V36Z" fill="currentColor" />
        <path d="M7 24L14 28V36L7 40L0 36V28L7 24Z" fill="currentColor" />
        <path d="M7 24L14 20V12L7 8L0 12V20L7 24Z" fill="currentColor" />
    </svg>
);

export default function Section3() {
    return (
        <div className="container-2200 bg-neutral-50">
            <section className="sec-3-home-4 pt-130 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={
                                i === 3
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        >
                            <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                            {i === 3 && (
                                <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="container p-relative z-1">
                    <div className="row align-items-end g-4">
                        <div className="col-lg-6 col-md-10">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">HOW WE WORK</span>
                                    <span className="text-2">HOW WE WORK</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="reveal-text mb-0">
                                <RevealText>
                                    A structured process built for real-world impact
                                </RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 ms-auto d-flex justify-content-lg-end">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/contact-2">
                                    {ARROW_CIRCLE}
                                </Link>
                                <Link className="at-btn z-index-1" to="/contact-2">
                                    Get a free quote
                                </Link>
                                <Link className="at-btn-circle" to="/contact-2">
                                    {ARROW_CIRCLE}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 pt-60">
                        {PROCESS_CARDS.map((card) => (
                            <div key={card.num} className="col-lg-3 col-md-6">
                                <div className={`card__process-card at_fade_anim ${card.cardClass}`} data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <div className="card__process-visual">
                                        <div className={`card__process-pill ${card.pillClass}`} />
                                        <span className="card__process-num">{card.num}</span>
                                    </div>
                                    <div className="card__process-content">
                                        <h6 className="card__process-title">{card.title}</h6>
                                        <p className="card__process-desc">{card.description}</p>
                                        <div className="card__process-divider" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
}
