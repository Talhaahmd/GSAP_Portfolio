import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const tags = [
    { label: "MVP Launch", delay: ".1" },
    { label: "Product Design", delay: ".2" },
    { label: "Scalable Tech", delay: ".3" },
    { label: "Growth Strategy", delay: ".4" },
    { label: "UI/UX Excellence", delay: ".5" },
];

export default function Section7() {
    return (
        <>
            {/* home-9 section 7 - Collective / capabilities */}
            <section className="sec-7-home-9 changeless">
                <div className="sec-7-home-9__container">
                    <h2 className="sec-7-home-9__lead reveal-text at_fade_anim" data-delay=".1" data-fade-from="top" data-fade-offset="50">
                        <RevealText>We are a high-performance collective architecturalizing the next digital era. By merging advanced aesthetics with engineering precision, we empower visionary brands to dominate the modern landscape.</RevealText>
                    </h2>

                    <div className="row g-4 g-xxl-5 align-items-start sec-7-home-9__main">
                        <div className="col-lg-6 col-xl-7">
                            <div className="sec-7-home-9__visual">
                                <div className="fix anim-zoomin">
                                    <img
                                        data-speed=".8"
                                        src="/assets/imgs/pages/home-9/sec-7-layer.webp"
                                        alt="orisa"
                                        width={1000}
                                        height={667}
                                        style={{ width: "auto", height: "auto" }} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5">
                            <div className="sec-7-home-9__aside">
                                <div className="sec-7-home-9__deco" aria-hidden="true">
                                    <img
                                        src="/assets/imgs/pages/home-9/sec-7-deco.webp"
                                        alt="orisa"
                                        width={99}
                                        height={99}
                                        loading="lazy"
                                    />
                                </div>
                                <blockquote className="sec-7-home-9__quote at_fade_anim">
                                    &ldquo;We bridge the gap between aesthetic sophistication and technical rigor. Every product is an ecosystem of pixel-perfect precision and high-performance engineering, leveraging fluid motion and next-gen architectures to define the new digital standard.&rdquo;
                                </blockquote>
                                <div className="sec-7-home-9__tags">
                                    {tags.map((tag, i) => (
                                        <Link
                                            key={i}
                                            to="#"
                                            className="sec-7-home-9__tag at_fade_anim"
                                            data-delay={tag.delay}
                                        >
                                            <span>{tag.label}</span>
                                            <img
                                                src="/assets/imgs/pages/home-9/sec-7-tag-arrow.webp"
                                                alt="orisa"
                                                width={9}
                                                height={9}
                                                loading="lazy"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
