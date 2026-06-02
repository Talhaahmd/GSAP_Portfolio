import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

{/* Home 7 Section 8 (Team — Dedicated Team + Staggered Portrait Grid) */}

const EYEBROW_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
    </svg>
);

const CTA_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BADGE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z" fill="currentColor" />
    </svg>
);

const COL1_MEMBERS = [
    {
        name: "Darrell",
        surname: "Steward",
        role: "UI/UX Designer",
        img: "/assets/imgs/pages/home-7/team-1-darrell.webp",
        alt: "Darrell Steward",
        badgeClass: "",
    },
    {
        name: "Amelia",
        surname: "Courtney",
        role: "Project Manager",
        img: "/assets/imgs/pages/home-7/team-2-amelia.webp",
        alt: "Amelia Courtney",
        badgeClass: "sec-8-home-7__badge--dark",
    },
];

const COL2_MEMBERS = [
    {
        name: "Esther",
        surname: "Howard",
        role: "Software Developer",
        img: "/assets/imgs/pages/home-7/team-3-esther.webp",
        alt: "Esther Howard",
        badgeClass: "",
    },
    {
        name: "Jacob",
        surname: "Jones",
        role: "Marketing CEO",
        img: "/assets/imgs/pages/home-7/team-4-jacob.webp",
        alt: "Jacob Jones",
        badgeClass: "",
    },
];

export default function Section8() {
    return (
        <div className="sec-8-home-7 p-relative bg-neutral-0">
            <div className="container-2200 px-lg-5 px-3">
                <div className="row g-0 align-items-start">
                    {/* LEFT: Eyebrow + huge heading + description + CTA */}
                    <div className="col-xl-5 col-lg-5 col-12 sec-8-home-7__lead">
                        <Link to="/team" className="sec-8-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                            <span className="text-scramble" data-scramble-text="Meet Our Team">Meet Our Team</span>
                            {EYEBROW_ARROW_SVG}
                        </Link>

                        <h2 className="sec-8-home-7__heading mb-40 reveal-text">
                            <RevealText>Dedicated Team</RevealText>
                        </h2>

                        <p className="sec-8-home-7__desc mb-40 reveal-text">
                            <RevealText>
                                Creative experts designing meaningful digital experiences that help ambitious brands grow faster and lead their markets.
                            </RevealText>
                        </p>

                        <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60 at_fade_anim">
                            <Link to="/team" className="at-btn sec-4-home-7__cta-btn text-capitalize">
                                <span>
                                    <span className="text-1">Join our Team</span>
                                    <span className="text-2">Join our Team</span>
                                </span>
                            </Link>
                            <Link to="/team" className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Join our Team">
                                {CTA_CIRCLE_SVG}
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Staggered 2-column team grid */}
                    <div className="col-xl-7 col-lg-7 col-12 mt-5 mt-lg-0">
                        <div className="sec-8-home-7__grid">
                            {/* Column 1 */}
                            <div className="sec-8-home-7__col">
                                {COL1_MEMBERS.map((member, i) => (
                                    <Link
                                        key={i}
                                        to="/team-details"
                                        className="sec-8-home-7__card"
                                        aria-label={`${member.name} ${member.surname} — ${member.role}`}
                                    >
                                        <div className="sec-8-home-7__photo">
                                            <div className="fix anim-zoomin">
                                                <img src={member.img} alt={member.alt} width={400} height={480} loading="lazy" />
                                            </div>
                                        </div>
                                        <span className={`sec-8-home-7__badge${member.badgeClass ? ` ${member.badgeClass}` : ""}`}>
                                            {BADGE_SVG}
                                        </span>
                                        <div className="sec-8-home-7__info">
                                            <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                                                {member.name} <br />{member.surname}
                                            </h3>
                                            <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">{member.role}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Column 2 (offset down for staircase effect on desktop) */}
                            <div className="sec-8-home-7__col sec-8-home-7__col--offset">
                                {COL2_MEMBERS.map((member, i) => (
                                    <Link
                                        key={i}
                                        to="/team-details"
                                        className="sec-8-home-7__card"
                                        aria-label={`${member.name} ${member.surname} — ${member.role}`}
                                    >
                                        <div className="sec-8-home-7__photo">
                                            <div className="fix anim-zoomin">
                                                <img src={member.img} alt={member.alt} width={400} height={480} loading="lazy" />
                                            </div>
                                        </div>
                                        <span className={`sec-8-home-7__badge${member.badgeClass ? ` ${member.badgeClass}` : ""}`}>
                                            {BADGE_SVG}
                                        </span>
                                        <div className="sec-8-home-7__info">
                                            <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                                                {member.name} <br />{member.surname}
                                            </h3>
                                            <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">{member.role}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
