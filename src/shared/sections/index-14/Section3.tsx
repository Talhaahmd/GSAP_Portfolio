import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const ITEMS = [
    { link: "/portfolio-details-2", img: "sec-3-card-1.webp", num: "NO. 02", title: "Wild Nordic", sub: "Documentary · 18 frames · Lofoten Islands, 2024" },
    { link: "/portfolio-details-3", img: "sec-3-card-2.webp", num: "NO. 03", title: "Quiet Faces", sub: "Portrait series · 9 frames · Studio 04F, 2024" },
    { link: "/portfolio-details-4", img: "sec-3-card-3.webp", num: "NO. 04", title: "Studio Light", sub: "Commercial · 24 frames · Brand: Aperture Mag, 2023" },
    { link: "/portfolio-details-5", img: "sec-3-card-4.webp", num: "NO. 05", title: "Black Tie", sub: "Event · 30+ frames · The Grand Theatre, 2024" },
];

export default function Section3() {
    return (
        <section className="sec-3-home-14" aria-label="Selected photography series">
            <div className="sec-3-home-14__inner">
                <div className="sec-3-home-14__head">
                    <div className="sec-3-home-14__head-left">
                        <div className="sec-3-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-3-home-14__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-3-home-14__eyebrow-key">SELECTED SERIES</span>
                            <span className="sec-3-home-14__eyebrow-meta">&mdash; 24 SERIES &middot; 2014&mdash;2026</span>
                        </div>
                        <h2 className="sec-3-home-14__title reveal-text mb-0">
                            <RevealText>A few quiet stories<br />worth lingering on.</RevealText>
                        </h2>
                    </div>
                    <div className="sec-3-home-14__head-right at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        <p className="sec-3-home-14__head-copy mb-0">
                            Pulled from twelve years of fieldwork &mdash; selected<br />
                            as representative of what the studio does best.
                        </p>
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                            <Link className="at-btn z-index-1" to="/portfolio-1">All 24 series</Link>
                            <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                        </div>
                    </div>
                </div>

                <div className="sec-3-home-14__grid">
                    <article className="sec-3-home-14__featured">
                        <Link className="sec-3-home-14__featured-link" to="/portfolio-details-1" aria-label="View Urban Soul series">
                            <div className="sec-3-home-14__featured-frame anim-zoomin-wrap">
                                <img className="sec-3-home-14__featured-img anim-zoomin" src="/assets/imgs/pages/home-14/sec-3-featured.webp" alt="Orisa" loading="lazy" />
                                <div className="sec-3-home-14__featured-overlay">
                                    <div className="sec-3-home-14__featured-top">
                                        <p className="sec-3-home-14__featured-num mb-0 text-white">NO. 01</p>
                                        <span className="sec-3-home-14__featured-badge">FEATURED &middot; NEW</span>
                                    </div>
                                    <div className="sec-3-home-14__featured-bot">
                                        <div className="sec-3-home-14__featured-meta">
                                            <p className="sec-3-home-14__featured-title mb-0 text-white">Urban Soul</p>
                                            <p className="sec-3-home-14__featured-sub mb-0 text-white">Editorial &middot; 12 frames &middot; Hà Nội, 2025</p>
                                        </div>
                                        <span className="sec-3-home-14__featured-arrow" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p className="sec-3-home-14__featured-desc mb-0">
                            A study of nightfall across Hanoi&rsquo;s old quarter &mdash; neon, fog, and the people who treat the streets as their living room. Shot on Sony A1 and a borrowed Hasselblad 500CM.
                        </p>
                    </article>

                    <ul className="sec-3-home-14__list list-unstyled mb-0">
                        {ITEMS.map((it) => (
                            <li key={it.num} className="sec-3-home-14__item">
                                <Link className="sec-3-home-14__item-link" to={it.link}>
                                    <span className="sec-3-home-14__item-img anim-zoomin-wrap">
                                        <img data-speed=".9" className="anim-zoomin" src={`/assets/imgs/pages/home-14/${it.img}`} alt="Orisa" loading="lazy" />
                                    </span>
                                    <span className="sec-3-home-14__item-meta">
                                        <span className="sec-3-home-14__item-top">
                                            <span className="sec-3-home-14__item-num">{it.num}</span>
                                            <span className="sec-3-home-14__item-view">View series &rarr;</span>
                                        </span>
                                        <span className="sec-3-home-14__item-title">{it.title}</span>
                                        <span className="sec-3-home-14__item-sub">{it.sub}</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
