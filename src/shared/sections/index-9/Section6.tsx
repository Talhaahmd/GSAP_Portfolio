import { Link } from "react-router-dom";
const teamMembers = [
    {
        quote: "Data tells the story; we provide the voice.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-1.webp",
        name: "Elena Sterling",
        role: "Head of Strategy",
        skills: "Market Analysis, Consumer Psychology, Product Growth.",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-1.webp",
        accent: false,
    },
    {
        quote: "Motion is the language of the future.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-2.webp",
        name: "Marcus Chen",
        role: "Lead Interaction Architect",
        skills: "GSAP Animations, WebGL, Immersive Interfaces.",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-2.webp",
        accent: true,
    },
    {
        quote: "Empathy is the most powerful tool in our kit.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-3.webp",
        name: "Sarah Jenkins",
        role: "Senior UX Researcher",
        skills: "User Journey Mapping, Usability Testing, Ethnography.",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-3.webp",
        accent: false,
    },
    {
        quote: "Code should be as elegant as the UI it powers.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-4.webp",
        name: "Julian Voss",
        role: "Full-stack Engineering Lead",
        skills: "Next.js, Scalable Architecture, Performance Optimization.",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-4.webp",
        accent: false,
    },
    {
        quote: "Simple is hard, but simple is better.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-5.webp",
        name: "Amara Okafor",
        role: "Visual & Brand Designer",
        skills: "Minimalist Aesthetics, Typography, Visual Identity.",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-5.webp",
        accent: false,
    },
    {
        quote: "AI doesn&rsquo;t replace creativity; it amplifies it.",
        avatar: "/assets/imgs/pages/home-9/sec-6-avatar-6.webp",
        name: "Leo Vance",
        role: "AI Strategy & Automation Lead",
        skills: "Generative AI Workflows, Programmatic SEO",
        imgAward: "/assets/imgs/pages/home-9/sec-6-fly-6.webp",
        accent: false,
    },
];

export default function Section6() {
    return (
        <>
            {/* home-9 section 6 - Meet our team */}
            <section className="sec-6-home-9 changeless bg-neutral-50 overflow-x-hidden">
                <div className="sec-6-home-9__container">
                    <header className="sec-6-home-9__header">
                        <div className="sec-6-home-9__tag">
                            <span className="sec-6-home-9__tag-text text-scramble">Meet our team</span>
                            <img
                                src="/assets/imgs/pages/home-9/sec-6-tag-arrow.webp"
                                alt="orisa"
                                width={14}
                                height={13}
                                loading="lazy"
                            />
                        </div>
                        <h2 className="sec-6-home-9__title">
                            The minds behind <span className="sec-6-home-9__title-accent">the momentum.</span>
                        </h2>
                    </header>

                    <div className="sec-6-home-9__body">
                        <div className="sec-6-home-9__list">
                            {teamMembers.map((member, i) => (
                                <article
                                    key={i}
                                    className={`sec-6-home-9__card scroll-move-up${member.accent ? " sec-6-home-9__card--accent" : ""}`}
                                    data-img-award={member.imgAward}
                                    data-rotate="9deg"
                                >
                                    <p className="sec-6-home-9__quote">&ldquo;{member.quote}&rdquo;</p>
                                    <div className="sec-6-home-9__person">
                                        <div className="sec-6-home-9__avatar">
                                            <img
                                                src={member.avatar}
                                                alt="orisa"
                                                width={68}
                                                height={68}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="sec-6-home-9__meta">
                                            <h3 className="sec-6-home-9__name">
                                                <Link to="/team-details">{member.name}</Link>
                                            </h3>
                                            <p className="sec-6-home-9__role">{member.role}</p>
                                        </div>
                                    </div>
                                    <p className="sec-6-home-9__skills">{member.skills}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <footer className="sec-6-home-9__footer">
                        <div className="sec-6-home-9__footer-primary">
                            <div className="sec-6-home-9__footer-icon">
                                <img
                                    src="/assets/imgs/pages/home-9/sec-6-shape.webp"
                                    alt="orisa"
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                />
                            </div>
                            <div className="sec-6-home-9__footer-block">
                                <h3 className="sec-6-home-9__footer-heading at_fade_anim" data-delay=".1">We are here</h3>
                                <div className="sec-6-home-9__footer-lines at_fade_anim" data-delay=".2">
                                    <p>205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA</p>
                                    <p>Phone: <a className="sec-6-home-9__footer-link" href="tel:+11234567890">(123) 456-7890</a></p>
                                    <p>Email: <a className="sec-6-home-9__footer-link" href="mailto:hello@orisa.com">hello@orisa.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="sec-6-home-9__footer-secondary">
                            <div className="sec-6-home-9__footer-lines at_fade_anim" data-delay=".3">
                                <p>245 Fifth Avenue, Suite 1800<br />New York, NY 10016, USA</p>
                                <p>Phone: <a className="sec-6-home-9__footer-link" href="tel:+12125557398">(212) 555-7398</a></p>
                                <p>Email: <a className="sec-6-home-9__footer-link" href="mailto:sale@orisa.com">sale@orisa.com</a></p>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
}
