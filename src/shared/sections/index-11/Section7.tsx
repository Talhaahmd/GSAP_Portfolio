import { Link } from "react-router-dom";
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

const TEAM_MEMBERS = [
    {
        nameFirst: "Darrell",
        nameLast: "Steward",
        role: "UI/UX Designer",
        img: "/assets/imgs/pages/home-11/member-1.webp",
        link: "/team-details-1",
        fabClass: "sec-6-home-10__member-fab--light",
        delay: "0.1",
    },
    {
        nameFirst: "Esther",
        nameLast: "Howard",
        role: "Software Developer",
        img: "/assets/imgs/pages/home-11/member-2.webp",
        link: "/team-details-1",
        fabClass: "sec-6-home-10__member-fab--light",
        delay: "0.12",
    },
    {
        nameFirst: "Amelia",
        nameLast: "Courtney",
        role: "Project Manager",
        img: "/assets/imgs/pages/home-11/member-3.webp",
        link: "/team-details-1",
        fabClass: "sec-6-home-10__member-fab--dark",
        delay: "0.14",
    },
    {
        nameFirst: "Jacob",
        nameLast: "Jones",
        role: "Marketing CEO",
        img: "/assets/imgs/pages/home-11/member-4.webp",
        link: "/team-details-1",
        fabClass: "sec-6-home-10__member-fab--light",
        delay: "0.16",
    },
];

export default function Section7() {
    return (
        <section className="sec-6-home-10">
            <div className="sec-6-home-10__container">
                <div className="sec-6-home-10__layout">
                    <header className="sec-6-home-10__title-block">
                        <div className="sec-6-home-10__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay="0.05">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Meet our team</span>
                                    <span className="text-2">Meet our team</span>
                                </span>
                                <i><DoubleArrowIcon /></i>
                            </span>
                        </div>
                        <h2 className="sec-6-home-10__title mt-3 mb-0 at_fade_anim reveal-text" data-delay="0.08">
                            <RevealText>The Structural Pioneers</RevealText>
                        </h2>
                    </header>

                    {TEAM_MEMBERS.map((member, idx) => (
                        <article
                            key={idx}
                            className={`sec-6-home-10__member sec-6-home-10__member--${idx + 1} at_fade_anim`}
                            data-delay={member.delay}
                        >
                            <Link className="sec-6-home-10__member-link" to={member.link}>
                                <div className="sec-6-home-10__member-frame">
                                    <div className="fix anim-zoomin">
                                        <img
                                            className="sec-6-home-10__member-img"
                                            src={member.img}
                                            alt={`${member.nameFirst} ${member.nameLast}`}
                                            width={520}
                                            height={700}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="sec-6-home-10__member-overlay">
                                        <h3 className="sec-6-home-10__member-name mb-0 changeless">
                                            <span className="d-block">{member.nameFirst}</span>
                                            <span className="d-block">{member.nameLast}</span>
                                        </h3>
                                        <p className="sec-6-home-10__member-role mb-0 changeless">{member.role}</p>
                                    </div>
                                    <span className={`sec-6-home-10__member-fab ${member.fabClass}`} aria-hidden="true">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M1 14L14 1M14 1H4M14 1V11"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}

                    <div className="sec-6-home-10__foot at_fade_anim" data-delay="0.18">
                        <p className="sec-6-home-10__foot-text mb-0 reveal-text">
                            <RevealText>A multidisciplinary team of visionaries bridging the gap between classical art and real-time technology.</RevealText>
                        </p>
                        <Link
                            className="sec-6-home-10__cta d-inline-flex align-items-center gap-3 mt-4 at_fade_anim"
                            to="/contact-1"
                        >
                            <span>Get a free quote</span>
                            <svg
                                className="sec-6-home-10__cta-arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
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
        </section>
    );
}
