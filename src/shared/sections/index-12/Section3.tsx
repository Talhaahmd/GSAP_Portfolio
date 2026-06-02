import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const SERVICES = [
    { delay: "0.05", num: "01", iconFilled: true, title: "Brand Identity", desc: "Logo systems, type pairings, color, and visual language that travels across every touchpoint.", tags: ["Logo", "Type system", "Guidelines"] },
    { delay: "0.1", num: "02", iconFilled: false, title: "Web Design", desc: "Marketing sites, portfolios, and product pages designed in Figma and ready for development.", tags: ["Landing", "Portfolio", "Marketing"] },
    { delay: "0.15", num: "03", iconFilled: false, title: "Webflow & Framer", desc: "Hand-built no-code sites with motion, CMS, and clean structure you can actually maintain.", tags: ["Framer", "Webflow", "CMS"] },
    { delay: "0.2", num: "04", iconFilled: false, title: "Product UI/UX", desc: "Dashboards, onboarding flows, and product surfaces — clear, considered, ready for engineering.", tags: ["Dashboard", "App UI", "Flows"] },
    { delay: "0.25", num: "05", iconFilled: false, title: "Art Direction", desc: "Visual systems, photography direction, and editorial layouts for brands that need a point of view.", tags: ["Editorial", "Photography", "Style"] },
    { delay: "0.3", num: "06", iconFilled: false, title: "Front-End Build", desc: "Pixel-perfect React or Next.js builds, accessible by default and shipped with care.", tags: ["React", "Next.js", "Tailwind"] },
];

export default function Section3() {
    return (
        <section className="sec-3-home-12" aria-label="Our Services">
            <div className="container">
                <header className="sec-3-home-12__header">
                    <div className="sec-3-home-12__header-left">
                        <p className="sec-3-home-12__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".05">OUR SERVICES</p>
                        <h2 className="sec-3-home-12__title reveal-text mb-0"><RevealText>What we do, with intention.</RevealText></h2>
                    </div>
                    <p className="sec-3-home-12__lede at_fade_anim mb-0" data-fade-from="bottom" data-delay=".15">A focused set of services designed to help brands look sharp, ship fast, and grow with confidence — no fluff, no filler.</p>
                </header>

                <div className="sec-3-home-12__grid">
                    {SERVICES.map((s) => (
                        <Link key={s.num} className="card-home-12-service at_fade_anim" data-fade-from="bottom" data-delay={s.delay} to="/services-details" aria-label={`${s.title} — view service`}>
                            <div className="card-home-12-service__top">
                                <div className="card-home-12-service__num-wrap">
                                    <span className="card-home-12-service__num-line" aria-hidden="true"></span>
                                    <span className="card-home-12-service__num">{s.num}</span>
                                </div>
                                <span className={`card-home-12-service__icon${s.iconFilled ? " is-filled" : ""}`} aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="card-home-12-service__title">{s.title}</h3>
                            <p className="card-home-12-service__desc">{s.desc}</p>
                            <ul className="card-home-12-service__tags" aria-label="Service tags">
                                {s.tags.map((tag) => (
                                    <li key={tag}><span className="card-home-12-service__tag">{tag}</span></li>
                                ))}
                            </ul>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
