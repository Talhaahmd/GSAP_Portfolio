import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const RowArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SERVICES = [
    { num: "01", title: "Editorial & Magazine", desc: "Cover stories, fashion features, and long-form features for publications.", price: "From $4,800 / day", icon: "sec-5-icon-1.webp", rotate: "9deg", delay: ".1" },
    { num: "02", title: "Portraits & Headshots", desc: "Studio and on-location portraits for press kits, profiles, and personal archive.", price: "From $1,200 / session", icon: "sec-5-icon-2.webp", rotate: "positive-9deg", delay: ".2" },
    { num: "03", title: "Weddings & Events", desc: "Documentary coverage of intimate gatherings — minimal direction, maximum presence.", price: "From $3,400 / day", icon: "sec-5-icon-3.webp", rotate: "9deg", delay: ".3" },
    { num: "04", title: "Brand & Commercial", desc: "Campaigns, lookbooks, and product stories — with a creative team you can borrow.", price: "From $6,000 / project", icon: "sec-5-icon-4.webp", rotate: "positive-9deg", delay: ".4" },
    { num: "05", title: "Travel & Documentary", desc: "Multi-day shoots, residencies, and visual fieldwork — for brands and publications.", price: "From $2,400 / day", icon: "sec-5-icon-5.webp", rotate: "9deg", delay: ".5" },
];

export default function Section5() {
    return (
        <section className="sec-5-home-14 changeless" aria-label="Services">
            <div className="sec-5-home-14__inner">
                <div className="sec-5-home-14__head">
                    <div className="sec-5-home-14__head-left">
                        <div className="sec-5-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-5-home-14__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-5-home-14__eyebrow-key">SERVICES</span>
                            <span className="sec-5-home-14__eyebrow-meta">&mdash; 5 OFFERINGS &middot; STARTING FROM $2,400</span>
                        </div>
                        <h2 className="sec-5-home-14__title reveal-text mb-0"><RevealText>How we work<br />with you.</RevealText></h2>
                    </div>
                    <div className="sec-5-home-14__head-right at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        <p className="sec-5-home-14__head-copy mb-0">
                            We take on five kinds of project. The rest of the time<br />
                            we are out shooting &mdash; or in the dark room.
                        </p>
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link className="at-btn-circle" to="/contact-1">{ARROW}</Link>
                            <Link className="at-btn z-index-1" to="/contact-1">Request a quote</Link>
                            <Link className="at-btn-circle" to="/contact-1">{ARROW}</Link>
                        </div>
                    </div>
                </div>

                <ul className="sec-5-home-14__list list-unstyled mb-0">
                    {SERVICES.map((s) => (
                        <li key={s.num} className="sec-5-home-14__row at_fade_anim" data-fade-from="bottom" data-delay={s.delay} data-img-award={`/assets/imgs/pages/home-14/${s.icon}`} data-rotate={s.rotate}>
                            <Link className="sec-5-home-14__row-link" to="/services-1">
                                <span className="sec-5-home-14__row-num">[ <span className="text-scramble" data-scramble-text={s.num}>{s.num}</span> ]</span>
                                <span className="sec-5-home-14__row-icon">
                                    <img src={`/assets/imgs/pages/home-14/${s.icon}`} alt="Orisa" loading="lazy" />
                                </span>
                                <span className="sec-5-home-14__row-meta">
                                    <span className="sec-5-home-14__row-title">{s.title}</span>
                                    <span className="sec-5-home-14__row-desc">{s.desc}</span>
                                </span>
                                <span className="sec-5-home-14__row-price">
                                    <span className="sec-5-home-14__row-price-amount">{s.price}</span>
                                    <span className="sec-5-home-14__row-price-cta">Inquire &rarr;</span>
                                </span>
                                <span className="sec-5-home-14__row-arrow" aria-hidden="true">{RowArrow}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
