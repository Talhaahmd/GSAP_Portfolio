import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SM = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const FAB_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
        <path d="M1 14L14 1M14 1H4M14 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MEMBERS = [
    { first: "Darrell", last: "Steward", role: "UI/UX Designer", img: "sec-6-member-1.png", fab: "light", className: "sec-6-home-15__member--1" },
    { first: "Esther", last: "Howard", role: "Software Developer", img: "sec-6-member-2.png", fab: "light", className: "sec-6-home-15__member--2" },
    { first: "Amelia", last: "Courtney", role: "Project Manager", img: "sec-6-member-3.png", fab: "dark", className: "sec-6-home-15__member--3" },
    { first: "Jacob", last: "Jones", role: "Marketing CEO", img: "sec-6-member-4.png", fab: "light", className: "sec-6-home-15__member--4" },
];

interface ThrowItem { logo: string; box: "brand" | "neutral" }
const THROW_ITEMS: ThrowItem[] = [
    { logo: "02", box: "brand" }, { logo: "03", box: "brand" }, { logo: "04", box: "brand" },
    { logo: "05", box: "neutral" }, { logo: "07", box: "brand" }, { logo: "08", box: "neutral" },
    { logo: "02", box: "neutral" }, { logo: "01", box: "brand" }, { logo: "06", box: "brand" },
    { logo: "09", box: "brand" }, { logo: "10", box: "neutral" }, { logo: "03", box: "brand" },
];

export default function Section6() {
    return (
        <section className="sec-6-home-15" aria-label="Meet our team">
            <div className="sec-6-home-15__container">
                <div className="sec-6-home-15__layout">
                    <header className="sec-6-home-15__title-block">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Meet our team</span>
                                <span className="text-2">Meet our team</span>
                            </span>
                            <i>{ARROW_SM}{ARROW_SM}</i>
                        </span>
                        <h2 className="sec-6-home-15__title mt-3 mb-0 at_fade_anim reveal-text" data-delay="0.08">
                            <RevealText>Meet our dedicated and skilled team</RevealText>
                        </h2>
                    </header>

                    {MEMBERS.map((m) => (
                        <article key={m.first} className={`sec-6-home-15__member ${m.className}`}>
                            <Link className="sec-6-home-15__member-link" to="/team-details">
                                <div className="sec-6-home-15__member-frame">
                                    <div className="fix anim-zoomin">
                                        <img className="sec-6-home-15__member-img" src={`/assets/imgs/pages/home-15/${m.img}`} alt={`${m.first} ${m.last}`} loading="lazy" />
                                    </div>
                                    <div className="sec-6-home-15__member-overlay">
                                        <h3 className="sec-6-home-15__member-name mb-0">
                                            <span className="d-block">{m.first}</span>
                                            <span className="d-block">{m.last}</span>
                                        </h3>
                                        <p className="sec-6-home-15__member-role mb-0">{m.role}</p>
                                    </div>
                                    <span className={`sec-6-home-15__member-fab sec-6-home-15__member-fab--${m.fab}`} aria-hidden="true">{FAB_ARROW}</span>
                                </div>
                            </Link>
                        </article>
                    ))}

                    <div className="sec-6-home-15__foot at_fade_anim" data-delay="0.18">
                        <p className="sec-6-home-15__foot-text mb-0 reveal-text"><RevealText>Creative experts designing meaningful digital experiences that help ambitious brands grow faster and lead their markets.</RevealText></p>
                    </div>
                </div>
            </div>

            <div className="sec-6-home-15__throw">
                <div className="client-capsule-wrapper-box" data-t-throwable-scene="true">
                    <div className="client-capsule-wrapper">
                        {THROW_ITEMS.map((it, i) => (
                            <p key={i} data-t-throwable-el="">
                                <span className={`client-box ${it.box === "brand" ? "client-box--brand-h15" : "bg-neutral-500"}`}>
                                    <img className="invert-1" src={`/assets/imgs/template/logo/logo-brand-${it.logo}.webp`} alt="Partner logo" loading="lazy" />
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
