import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

{/* Home 7 Section 6 (The Process — Growth Engine) */}

const EYEBROW_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
    </svg>
);

const CHIPS = [
    { text: "Discovery & MVP Strategy", className: "sec-6-home-7__chip--1", delay: "0.1" },
    { text: "Rapid Prototyping", className: "sec-6-home-7__chip--2", delay: "0.2" },
    { text: "Agile Development", className: "sec-6-home-7__chip--3", delay: "0.3" },
    { text: "Launch & Scale", className: "sec-6-home-7__chip--4", delay: "0.4" },
];

const CARDS = [
    {
        num: "[01]",
        title: "Discovery & MVP Strategy",
        desc: "Defining product-market fit by identifying core features that deliver maximum user value with minimum time-to-market.",
        img: "/assets/imgs/pages/home-7/step-1.webp",
        alt: "Discovery & MVP Strategy",
        delay: "0.1",
    },
    {
        num: "[02]",
        title: "Rapid Prototyping",
        desc: "Transforming strategy into interactive prototypes to validate your vision before moving into full-scale engineering.",
        img: "/assets/imgs/pages/home-7/step-2.webp",
        alt: "Rapid Prototyping",
        delay: "0.3",
    },
    {
        num: "[03]",
        title: "Agile Development",
        desc: "Building a scalable, high-performance core using modern tech stacks that founders and investors can lean on.",
        img: "/assets/imgs/pages/home-7/step-3.webp",
        alt: "Agile Development",
        delay: "0.5",
    },
    {
        num: "[04]",
        title: "Launch & Scale",
        desc: "Deploying, refining, and architecting the technical support needed to grow from your first user to your first million.",
        img: "/assets/imgs/pages/home-7/step-4.webp",
        alt: "Launch & Scale",
        delay: "0.7",
    },
];

export default function Section6() {
    return (
        <div className="sec-6-home-7 p-relative bg-neutral-0">
            <div className="container-2200 px-lg-5 px-3">
                {/* Header row: eyebrow + big title + description */}
                <div className="sec-6-home-7__header row g-0 pt-100 pb-50">
                    <div className="col-lg-7 col-12">
                        <Link to="/services-1" className="sec-6-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                            <span className="text-scramble" data-scramble-text="The Growth Engine">The Growth Engine</span>
                            {EYEBROW_ARROW_SVG}
                        </Link>
                        <h2 className="sec-6-home-7__title mb-0 reveal-text"><RevealText>The Process</RevealText></h2>
                    </div>
                    <div className="col-lg-5 col-12 mt-4 mt-lg-0 d-flex align-items-end justify-content-lg-end">
                        <p className="sec-6-home-7__desc text-lg-end mb-0 at_fade_anim">
                            Honest strategies for ambitious founders. How we take your vision from a bold concept to a market-ready digital product.
                        </p>
                    </div>
                </div>

                {/* Waterfall chip labels (staircase pattern) */}
                <div className="sec-6-home-7__chips d-none d-lg-flex flex-column mb-80">
                    {CHIPS.map((chip, i) => (
                        <span
                            key={i}
                            className={`sec-6-home-7__chip ${chip.className} at_fade_anim`}
                            data-fade-offset="100"
                            data-delay={chip.delay}
                        >
                            <span className="sec-6-home-7__chip-text">{chip.text}</span>
                        </span>
                    ))}
                </div>

                {/* 4 process cards */}
                <div className="sec-6-home-7__cards pb-120">
                    {CARDS.map((card, i) => (
                        <div key={i} className="sec-6-home-7__card-wrap at_fade_anim" data-delay={card.delay}>
                            <div className="sec-6-home-7__card">
                                <div className="sec-6-home-7__card-body">
                                    <p className="sec-6-home-7__card-num mb-0">{card.num}</p>
                                    <h3 className="sec-6-home-7__card-title mb-0">{card.title}</h3>
                                    <p className="sec-6-home-7__card-desc mb-0">{card.desc}</p>
                                </div>
                                <div className="sec-6-home-7__card-media">
                                    <img src={card.img} alt={card.alt} width={400} height={280} loading="lazy" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
