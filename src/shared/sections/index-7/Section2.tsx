import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

{/* Home 7 Section 2 (We Power the World's Fastest Growing Startups) */}

const FEATURE_DATA = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M40 20V0H20H0V20V40H20L40 20ZM40 20H20V40L0 20L20 0L40 20Z" fill="currentColor" />
            </svg>
        ),
        title: "Velocity First",
        desc: "In the startup world, speed is life. We&rsquo;ve optimized our workflow to deliver high-fidelity MVPs in weeks, not months, without sacrificing quality.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M40 12L32 20V8H20L28 0H40V12Z" fill="currentColor" />
                <path d="M8 20L20 8L32 20L20 32L8 20Z" fill="currentColor" />
                <path d="M8 20L0 28V40H12L20 32L28 40H40V28L32 20V32H20H8V20Z" fill="currentColor" />
                <path d="M8 20L0 12V0H12L20 8H8V20Z" fill="currentColor" />
            </svg>
        ),
        title: "Product Thinking",
        desc: "We don&rsquo;t just build features; we build solutions. Our process focuses on user needs, business goals, and product-market fit from day one.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M39.5 0.5L26.5 13.5L13.5 0.5L0.5 13.5V39.5L13.5 26.5L26.5 39.5L39.5 26.5V0.5ZM13.5 26.5V13.5H26.5V26.5H13.5Z" fill="currentColor" />
            </svg>
        ),
        title: "Scalable Core",
        desc: "We architect systems that grow with you. Our tech stack is designed to handle your first 1,000 users and your first 1,000,000 just as smoothly.",
    },
];

const STAT_DATA = [
    { value: 168, suffix: "+", label: "Countries where our partners have expanded globally" },
    { value: 50, suffix: "k+", label: "Projects Carefully Crafted" },
    { value: 98, suffix: "%", label: "Client retention and post-launch growth support." },
];

const IMG_DATA = [
    { src: "/assets/imgs/pages/home-7/sec2-img-1.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/home-7/sec2-img-2.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/home-7/sec2-img-3.webp", alt: "orisa" },
];

const EYEBROW_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
    </svg>
);

export default function Section2() {
    return (
        <div className="sec-2-home-7 p-relative bg-neutral-0">
            <div className="container-2200 px-lg-5 px-3">
                {/* Intro row: eyebrow + split heading + rich description */}
                <div className="sec-2-home-7__intro row g-0 pt-100 pb-60">
                    <div className="col-lg-7 col-12 pe-lg-4">
                        <Link to="/about-1" className="sec-2-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-30 text-uppercase">
                            <span className="text-scramble" data-scramble-text="About Us">About Us</span>
                            {EYEBROW_ARROW_SVG}
                        </Link>
                        <h2 className="sec-2-home-7__headline mb-0">
                            <span className="sec-2-home-7__headline-strong reveal-text"><RevealText>We Power the World&rsquo;s Fastest Growing Startups</RevealText></span>
                        </h2>
                    </div>
                    <div className="col-lg-5 col-12 mt-4 mt-lg-0 ps-lg-4 d-flex align-items-end">
                        <p className="sec-2-home-7__desc mb-0 reveal-text">
                            <RevealText>
                                <strong>Orisa</strong> is more than a design agency; we are a strategic partner for founders who dare to disrupt. We <strong>combine rapid</strong> prototyping with world-class engineering to <strong>turn bold</strong> visions into market-leading digital products.
                            </RevealText>
                        </p>
                    </div>
                </div>

                {/* Staircase grid: 5 virtual columns, 3 rows */}
                <div className="sec-2-home-7__grid">
                    {/* Row 1: image @ col 1, feature @ col 2, stat @ col 4 */}
                    <div className="sec-2-home-7__row">
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-1">
                            <div className="sec-2-home-7__img-wrap">
                                <div className="thumb fix anim-zoomin">
                                    <img data-speed=".8" src={IMG_DATA[0].src} alt={IMG_DATA[0].alt} width={640} height={480} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-2">
                            <div className="ps-4">
                                <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                                    {FEATURE_DATA[0].icon}
                                </div>
                                <h3 className="sec-2-home-7__feature-title at-char-animation">{FEATURE_DATA[0].title}</h3>
                                <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">{FEATURE_DATA[0].desc}</p>
                            </div>
                        </div>
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-4">
                            <h3 className="sec-2-home-7__stat-value mb-3"><OdometerCounter count={STAT_DATA[0].value} />{STAT_DATA[0].suffix}</h3>
                            <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">{STAT_DATA[0].label}</p>
                        </div>
                    </div>

                    {/* Row 2: image @ col 2, feature @ col 3, stat @ col 5 */}
                    <div className="sec-2-home-7__row">
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-2">
                            <div className="sec-2-home-7__img-wrap ms-2">
                                <div className="thumb fix anim-zoomin">
                                    <img data-speed=".8" src={IMG_DATA[1].src} alt={IMG_DATA[1].alt} width={640} height={480} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-3">
                            <div className="ps-4">
                                <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                                    {FEATURE_DATA[1].icon}
                                </div>
                                <h3 className="sec-2-home-7__feature-title at-char-animation">{FEATURE_DATA[1].title}</h3>
                                <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">{FEATURE_DATA[1].desc}</p>
                            </div>
                        </div>
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-5">
                            <h3 className="sec-2-home-7__stat-value mb-3"><OdometerCounter count={STAT_DATA[1].value} />{STAT_DATA[1].suffix}</h3>
                            <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">{STAT_DATA[1].label}</p>
                        </div>
                    </div>

                    {/* Row 3: stat @ col 1, image @ col 3, feature @ col 4 */}
                    <div className="sec-2-home-7__row">
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-1">
                            <h3 className="sec-2-home-7__stat-value mb-3"><OdometerCounter count={STAT_DATA[2].value} />{STAT_DATA[2].suffix}</h3>
                            <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">{STAT_DATA[2].label}</p>
                        </div>
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-3">
                            <div className="sec-2-home-7__img-wrap ms-2">
                                <div className="thumb fix anim-zoomin">
                                    <img data-speed=".8" src={IMG_DATA[2].src} alt={IMG_DATA[2].alt} width={640} height={480} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-4">
                            <div className="ps-4">
                                <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                                    {FEATURE_DATA[2].icon}
                                </div>
                                <h3 className="sec-2-home-7__feature-title at-char-animation">{FEATURE_DATA[2].title}</h3>
                                <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">{FEATURE_DATA[2].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
