import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const features = [
    {
        img: "/assets/imgs/pages/home-9/sec-3-img-1.webp",
        title: "Human-Centric",
        desc: "Every pixel we place and every line of code we write is designed with the user&rsquo;s emotion and intent at the center.",
        delay: ".32",
    },
    {
        img: "/assets/imgs/pages/home-9/sec-3-img-2.webp",
        title: "Performance-Driven",
        desc: "We obsession over speed and stability. Beautiful design is only effective when it&rsquo;s backed by flawless engineering.",
        delay: ".4",
    },
    {
        img: "/assets/imgs/pages/home-9/sec-3-img-3.webp",
        title: "Future-Ready",
        desc: "Our solutions are built to scale. We use modern tech stacks (Next.js, GSAP, AI) to ensure your brand stays ahead of the curve.",
        delay: ".48",
    },
];

export default function Section3() {
    return (
        <>
            {/* Home 9 / section 3 - About + pillars */}
            <section className="sec-3-home-9 bg-neutral-50">
                <div className="sec-3-home-9__container">
                    <div className="row align-items-start g-0 gy-5 gx-xl-5">
                        <div className="col-12 col-lg-5">
                            <div className="sec-3-home-9__visual at_fade_anim" data-delay=".15" data-fade-from="bottom" data-fade-offset="20">
                                <div className="fix anim-zoomin">
                                    <img
                                        data-speed=".8"
                                        src="/assets/imgs/pages/home-9/sec-3-img-0.webp"
                                        alt="orisa"
                                        width={699}
                                        height={415}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="sec-3-home-9__intro">
                                <Link
                                    to="/about-1"
                                    className="sec-3-home-9__eyebrow d-inline-flex align-items-center gap-2 text-uppercase at_fade_anim"
                                    data-delay=".1"
                                    data-fade-from="bottom"
                                    data-fade-offset="16"
                                >
                                    <span className="text-scramble">About Us</span>
                                    <span className="sec-3-home-9__eyebrow-icon" aria-hidden="true">
                                        <img
                                            src="/assets/imgs/pages/home-9/sec-3-eyebrow-arrow.svg"
                                            alt="orisa"
                                            width={14}
                                            height={13}
                                            loading="lazy"
                                        />
                                    </span>
                                </Link>
                                <h2 className="sec-3-home-9__headline text-uppercase mb-0 at_fade_anim reveal-text" data-delay=".2" data-fade-from="bottom" data-fade-offset="20">
                                    <RevealText>We believe the future belongs to those who dare to simplify.</RevealText>
                                </h2>
                                <p className="sec-3-home-9__lede text-uppercase mb-0 at_fade_anim reveal-text" data-delay=".28" data-fade-from="bottom" data-fade-offset="20">
                                    <RevealText>We operate at the intersection of design, technology, and human psychology. In a world cluttered with digital noise, we focus on what truly matters: creating seamless connections between ambitious brands and their global audience.</RevealText>
                                </p>
                            </div>

                            <div className="sec-3-home-9__features">
                                {features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="sec-3-home-9__feature at_fade_anim"
                                        data-delay={feature.delay}
                                        data-fade-from="left"
                                        data-fade-offset="20"
                                    >
                                        <div className="sec-3-home-9__feature-thumb">
                                            <div className="fix anim-zoomin position-relative w-100 h-100">
                                                <img
                                                    src={feature.img}
                                                    alt="orisa"
                                                    style={{ objectFit: "cover" }}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <div className="sec-3-home-9__feature-text">
                                            <h3 className="sec-3-home-9__feature-title at-char-animation">{feature.title}</h3>
                                            <p className="sec-3-home-9__feature-desc mb-0">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
