import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const FeatureIcon = (
    <span className="card-home-12-price__feature-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="#F0460E" />
            <path d="M9 5V13M5 9H13" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    </span>
);

const PLANS = [
    {
        delay: "0.05", modifier: "", popular: false, plan: "Starter", price: "$1,200", ctaLabel: "Get Started",
        desc: "A solid digital foundation focused on clarity, usability, and performance essentials.",
        features: ["Digital strategy setup", "Digital audit & Insights", "Positioning & Messaging", "SEO & Technical setup", "Analytics tracking"],
    },
    {
        delay: "0.15", modifier: "is-popular", popular: true, plan: "Growth", price: "$2,800", ctaLabel: "Choose Growth",
        desc: "A performance-driven plan to accelerate acquisition and conversion.",
        features: ["Growth strategy", "Conversion optimization", "SEO & Content performance", "Campaign setup & Reporting", "Advance analytics tracking"],
    },
    {
        delay: "0.25", modifier: "", popular: false, plan: "Scale", price: "$3,600", ctaLabel: "Scale Your Business",
        desc: "A long-term digital partnership for sustainable growth at scale.",
        features: ["Digital roadmap", "Multi-channel strategy", "Advance analytics tracking", "Premium technical support", "Continuous optimization"],
    },
];

export default function Section5() {
    return (
        <section className="sec-5-home-12" aria-label="Pricing">
            <div className="sec-5-home-12__dots" aria-hidden="true"></div>

            <div className="container position-relative">
                <header className="sec-5-home-12__header">
                    <p className="sec-5-home-12__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".05">PRICING</p>
                    <h2 className="sec-5-home-12__title reveal-text mb-0"><RevealText>Honest Pricing. Zero Surprises.</RevealText></h2>
                </header>

                <div className="sec-5-home-12__tables">
                    {PLANS.map((pl) => (
                        <div key={pl.plan} className={`card-home-12-price ${pl.modifier} at_fade_anim`} data-fade-from="bottom" data-delay={pl.delay}>
                            <div className="card-home-12-price__top">
                                {pl.popular && <span className="card-home-12-price__badge">Most Popular</span>}
                                <p className="card-home-12-price__plan">{pl.plan}</p>
                                <div className="card-home-12-price__price">
                                    <span className="card-home-12-price__amount">{pl.price}</span>
                                    <span className="card-home-12-price__period">/monthly</span>
                                </div>
                                <p className="card-home-12-price__desc">{pl.desc}</p>
                                <Link className="card-home-12-price__cta" to="/pricing" aria-label={pl.ctaLabel}>
                                    <span className="card-home-12-price__cta-text">{pl.ctaLabel}</span>
                                    <span className="card-home-12-price__cta-icon" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <ul className="card-home-12-price__features">
                                {pl.features.map((f) => (
                                    <li key={f}>
                                        {FeatureIcon}
                                        <span className="card-home-12-price__feature-text">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="sec-5-home-12__custom at_fade_anim" data-fade-from="bottom" data-delay=".15">
                    <span className="sec-5-home-12__custom-icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" fill="#1D1D1D" stroke="#1D1D1D" />
                            <path d="M9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.05 14.12 10.76 13.55 11.21L12.75 11.83C12.28 12.21 12 12.78 12 13.39V13.5M12 16.25H12.01" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <div className="sec-5-home-12__custom-text">
                        <h3 className="sec-5-home-12__custom-title mb-0">Need custom pricing?</h3>
                        <p className="sec-5-home-12__custom-desc mb-0"><Link className="sec-5-home-12__custom-link" to="/contact-1">Tell us about</Link> your goals, challenges, and timeline. We&rsquo;ll craft a tailored digital solution that fits your needs and budget.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
