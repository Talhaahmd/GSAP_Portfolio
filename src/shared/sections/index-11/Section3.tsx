import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import RevealText from "@/shared/effects/RevealText";

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

const PROCESS_STEPS = [
    {
        num: "01",
        title: "Discover",
        desc: "We immerse ourselves in your brand world -- audience, competitors, culture, and ambition.",
        delay: ".3",
    },
    {
        num: "02",
        title: "Conceive",
        desc: "Strategic concepts, mood boards, and a visual language that feels entirely yours.",
        delay: ".37",
    },
    {
        num: "03",
        title: "Craft",
        desc: "Frame-by-frame production -- shot, animated, colour-graded, and refined to perfection.",
        delay: ".44",
    },
    {
        num: "04",
        title: "Deliver",
        desc: "Optimised assets across every platform, ready to launch the moment you are.",
        delay: ".51",
    },
];

const STATS = [
    { count: 14, suffix: "+", label: "Years experience", delay: ".1" },
    { count: 340, suffix: "+", label: "Projects delivered", delay: ".16" },
    { count: 48, suffix: "+", label: "Awards won", delay: ".22" },
    { count: 92, suffix: "%", label: "Client retention", delay: ".28" },
];

export default function Section3() {
    return (
        <section className="sec-3-home-11" aria-label="About our studio">
            <div className="container">
                {/* Header row: eyebrow + title (left) / intro paragraph (right) */}
                <div className="row align-items-end">
                    <div className="col-lg-7">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">About Us</span>
                                <span className="text-2">About Us</span>
                            </span>
                            <i><DoubleArrowIcon /></i>
                        </span>
                        <h2 className="sec-3-home-11__title mt-3 mb-0 reveal-text">
                            <RevealText>
                                Crafted with intention,
                                <br />
                                built to endure.
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-5">
                        <p className="mb-0 at_fade_anim" data-delay=".25" data-fade-from="right">
                            Founded in 2019, Orisa Motion is an independent creative studio specialising in branded film, motion design, and visual effects. We work with challenger brands, cultural institutions, and Fortune 500 companies to craft stories that move people -- literally.
                        </p>
                    </div>
                </div>

                {/* Main grid: three columns */}
                <div className="sec-3-home-11__grid row g-4 g-xl-5 mt-5">
                    {/* Col A: tall portrait image with floating cards */}
                    <div className="col-lg-5">
                        <div className="sec-3-home-11__media-a at_fade_anim" data-delay=".1" data-fade-from="left">
                            <div className="anim-zoomin-wrap sec-3-home-11__img-frame sec-3-home-11__img-frame--tall">
                                <img
                                    className="anim-zoomin sec-3-home-11__img w-100"
                                    src="/assets/imgs/pages/home-11/img-1.webp"
                                    alt="Orisa studio workspace"
                                    width={800}
                                    height={1100}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Floating metric card (bottom-right) */}
                            <div className="sec-3-home-11__metric" aria-label="120 award-winning films">
                                <p className="sec-3-home-11__metric-value mb-0 text-white">120+</p>
                                <p className="sec-3-home-11__metric-label mb-0 text-white">
                                    Award-winning
                                    <br />
                                    films
                                </p>
                            </div>

                            {/* Year badge (top-left) */}
                            <div className="sec-3-home-11__year-badge at_fade_anim" data-delay=".35" data-fade-from="bottom">
                                <span className="sec-3-home-11__year-badge-est">Est.</span>
                                <span className="sec-3-home-11__year-badge-num text-scramble">2019</span>
                            </div>
                        </div>
                    </div>

                    {/* Col B: body copy + process steps + CTA */}
                    <div className="col-lg-4">
                        <div className="sec-3-home-11__content">
                            <p className="sec-3-home-11__body at_fade_anim" data-delay=".2" data-fade-from="bottom">
                                Our process is rooted in deep research, tight collaboration, and an obsessive commitment to frame-by-frame craftsmanship. Every project begins with a single question: <em>what feeling should this leave behind?</em>
                            </p>

                            <div className="sec-3-home-11__divider at_fade_anim" data-delay=".28" aria-hidden="true"></div>

                            {/* Numbered process steps */}
                            <ol className="sec-3-home-11__steps list-unstyled mb-4 pb-4">
                                {PROCESS_STEPS.map((step) => (
                                    <li
                                        key={step.num}
                                        className="sec-3-home-11__step at_fade_anim"
                                        data-delay={step.delay}
                                        data-fade-from="left"
                                    >
                                        <span className="sec-3-home-11__step-num" aria-hidden="true">
                                            {step.num}
                                        </span>
                                        <div className="sec-3-home-11__step-copy">
                                            <strong className="sec-3-home-11__step-title">{step.title}</strong>
                                            <p className="mb-0">{step.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <div className="mt-4 at_fade_anim" data-delay=".57">
                                <Link
                                    className="sec-3-home-11__cta d-inline-flex align-items-center gap-3"
                                    to="/about-1"
                                >
                                    <span>Discover our story</span>
                                    <svg
                                        width="14"
                                        height="13"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M1 12L13 1M13 1H4M13 1V10"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Col C: second image + blockquote */}
                    <div className="col-lg-3">
                        <div className="sec-3-home-11__side at_fade_anim" data-delay=".15" data-fade-from="right">
                            <div className="anim-zoomin-wrap sec-3-home-11__img-frame sec-3-home-11__img-frame--sq">
                                <img
                                    className="anim-zoomin sec-3-home-11__img w-100"
                                    src="/assets/imgs/pages/home-11/img-2.webp"
                                    alt="Orisa team at work"
                                    width={600}
                                    height={700}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <blockquote className="sec-3-home-11__quote at_fade_anim" data-delay=".42" data-fade-from="bottom">
                                <p className="sec-3-home-11__quote-text mb-2">
                                    &ldquo;What feeling should this leave behind?&rdquo;
                                </p>
                                <footer className="sec-3-home-11__quote-attr">
                                    -- Our guiding question
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Stats bar: four numbers spanning full width */}
                <div className="sec-3-home-11__stats-bar row g-0">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="col-6 col-md-3">
                            <div className="sec-3-home-11__stat at_fade_anim" data-delay={stat.delay}>
                                <p className="sec-3-home-11__stat-num mb-0">
                                    <OdometerCounter count={stat.count} />{stat.suffix}
                                </p>
                                <p className="sec-3-home-11__stat-label mb-0">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
