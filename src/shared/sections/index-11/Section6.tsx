import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const STEPS = [
    {
        num: "01",
        title: "Discovery &amp; Strategy",
        body: "We open with a deep-dive workshop -- audience mapping, competitive analysis, and defining the single feeling the film must leave behind.",
        tags: ["Brief review", "Audience mapping", "Creative brief"],
        img: "/assets/imgs/pages/home-11/img-11.webp",
        delay: ".1",
    },
    {
        num: "02",
        title: "Concept &amp; Storyboard",
        body: "Three visual concepts, each with a distinct tonal direction, moodboard, shot list, and animatic. You choose the direction; we refine it.",
        tags: ["Moodboard", "Storyboard", "Animatic"],
        img: "/assets/imgs/pages/home-11/img-12.webp",
        delay: ".12",
    },
    {
        num: "03",
        title: "Production &amp; VFX",
        body: "Shoot days, CG renders, motion design, and editorial -- all managed under one roof with daily review links and transparent revision tracking.",
        tags: ["Direction", "VFX", "Editorial"],
        img: "/assets/imgs/pages/home-11/img-13.webp",
        delay: ".14",
    },
    {
        num: "04",
        title: "Delivery &amp; Launch",
        body: "Platform-optimised exports, DCP packages, and a post-launch 30-day support window. We're still on call after the credits roll.",
        tags: ["QC &amp; Mastering", "Multi-platform export", "Support"],
        img: "/assets/imgs/pages/home-11/img-14.webp",
        delay: ".16",
    },
];

export default function Section6() {
    return (
        <section className="sec-6-home-11" id="home-11-sec-6" aria-label="Our process">
            <div className="sec-6-home-11__container">
                {/* Sticky heading column */}
                <div className="sec-6-home-11__layout row g-5 g-xl-6 section-fix">
                    <div className="col-lg-5">
                        <div className="sec-6-home-11__title-block section-title-pin">
                            <div className="sec-6-home-11__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay=".05">
                                <span className="sec-6-home-11__eyebrow-dot" aria-hidden="true"></span>
                                <span className="sec-6-home-11__eyebrow-text text-uppercase">How we work</span>
                            </div>
                            <h2 className="sec-6-home-11__title mt-4 mb-0 reveal-text">
                                <RevealText>
                                    <span className="d-block">A process</span>
                                    <span className="d-block">built for</span>
                                    <span className="d-block">bold work.</span>
                                </RevealText>
                            </h2>
                            <p className="sec-6-home-11__intro mt-4 at_fade_anim" data-delay=".2">
                                From first brief to final frame, our four-stage methodology keeps every project focused, collaborative, and on time.
                            </p>
                            <Link
                                className="sec-6-home-11__cta d-inline-flex align-items-center gap-3 mt-4 at_fade_anim"
                                to="/about-1"
                                data-delay=".25"
                            >
                                <span>Learn about our approach</span>
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

                    {/* Steps column (scroll stacking -- same pattern as home-6 sec-2) */}
                    <div className="col-lg-7">
                        <div className="scroll-section vertical-section section scroll-active-item sec-6-home-11__scroll-stack">
                            <div className="wrapper">
                                <ol className="sec-6-home-11__steps list list-unstyled mb-0" aria-label="Studio process steps">
                                    {STEPS.map((step) => (
                                        <li
                                            key={step.num}
                                            className="sec-6-home-11__step item at_fade_anim"
                                            data-delay={step.delay}
                                        >
                                            <div className="sec-6-home-11__step-inner">
                                                <div className="sec-6-home-11__step-head d-flex align-items-start gap-4">
                                                    <span className="sec-6-home-11__step-num" aria-label={`Step ${step.num}`}>
                                                        {step.num}
                                                    </span>
                                                    <h3
                                                        className="sec-6-home-11__step-title mb-0"
                                                        dangerouslySetInnerHTML={{ __html: step.title }}
                                                    />
                                                </div>
                                                <p className="sec-6-home-11__step-body mt-3 mb-0">{step.body}</p>
                                                <div className="sec-6-home-11__step-tags d-flex flex-wrap gap-2 mt-3" aria-hidden="true">
                                                    {step.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="sec-6-home-11__tag text-uppercase"
                                                            dangerouslySetInnerHTML={{ __html: tag }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="sec-6-home-11__step-media">
                                                <img
                                                    src={step.img}
                                                    alt="orisa"
                                                    width={640}
                                                    height={400}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
