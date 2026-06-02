import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const PROJECTS = [
    { loc: "OSLO, NO  —  2024", title: "The Obsidian Coastal Villa", img: "sec-3-img-1.webp", link: "/portfolio-details-1", desc: "A minimalist coastal residence sculpted from black volcanic stone, balancing brutal mass with floor-to-ceiling glass that opens to the fjord.", category: "Residential", size: "12,400 Sq Ft.", service: "Architecture & Interior" },
    { loc: "KYOTO, JP  —  2024", title: "Atrium of Quiet Light", img: "sec-3-img-2.webp", link: "/portfolio-details-1", desc: "A wellness retreat woven through cedar groves, with timber pavilions, water reflection pools, and shoji screens that diffuse seasonal light.", category: "Hospitality", size: "44,200 Sq Ft.", service: "Master Planning" },
    { loc: "MILAN, IT  —  2023", title: "Stratum Cultural Pavilion", img: "sec-3-img-3.webp", link: "/portfolio-details-1", desc: "A civic landmark of stacked travertine slabs, anchored by a sunken plaza and capped by a cantilevered roof that redefines the urban skyline.", category: "Cultural", size: "118,300 Sq Ft.", service: "Architecture & Engineering" },
    { loc: "NEW YORK, NY  —  2023", title: "Lattice House", img: "sec-3-img-4.webp", link: "/portfolio-details-1", desc: "An eight-story residential infill clad in a hand-cast concrete lattice that filters sunlight, frames neighbors, and turns the facade into a living screen.", category: "Residential", size: "8,600 Sq Ft.", service: "Architecture" },
];

const ARROW_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

export default function Section3() {
    return (
        <section className="sec-3-home-13" aria-label="Selected Projects">
            <div className="sec-3-home-13__inner">
                <header className="sec-3-home-13__header">
                    <div className="sec-3-home-13__head-text">
                        <div className="sec-3-home-13__label at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-3-home-13__label-dot" aria-hidden="true"></span>
                            <span className="sec-3-home-13__label-text">SELECTED PROJECTS</span>
                        </div>
                        <h2 className="sec-3-home-13__title mb-0 reveal-text">
                            <RevealText>Recent works that define </RevealText>
                            <span className="sec-3-home-13__title-italic"><RevealText>our architectural vision.</RevealText></span>
                        </h2>
                    </div>

                    <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                        <Link className="at-btn-circle" to="/portfolio-1">{ARROW_ICON}</Link>
                        <Link className="at-btn z-index-1" to="/portfolio-1">View latest projects</Link>
                        <Link className="at-btn-circle" to="/portfolio-1">{ARROW_ICON}</Link>
                    </div>
                </header>

                <div className="sec-3-home-13__list">
                    {PROJECTS.map((p, i) => (
                        <article key={i} className="sec-3-home-13__card">
                            <div className="sec-3-home-13__card-meta">
                                <p className="sec-3-home-13__card-loc mb-0">{p.loc}</p>
                                <h3 className="sec-3-home-13__card-title mb-0 reveal-text"><RevealText>{p.title}</RevealText></h3>
                                <Link className="sec-3-home-13__card-link" to={p.link}>
                                    <span>VIEW DETAILS</span>
                                    <span className="sec-3-home-13__card-link-dots" aria-hidden="true">• • •</span>
                                </Link>
                            </div>
                            <Link className="sec-3-home-13__card-media anim-zoomin-wrap" to={p.link}>
                                <img className="anim-zoomin" data-speed=".8" src={`/assets/imgs/pages/home-13/${p.img}`} alt="Orisa" loading="lazy" />
                            </Link>
                            <div className="sec-3-home-13__card-info">
                                <p className="sec-3-home-13__card-desc mb-0">{p.desc}</p>
                                <dl className="sec-3-home-13__card-specs mb-0">
                                    <div className="sec-3-home-13__card-row"><dt>CATEGORY</dt><dd>{p.category}</dd></div>
                                    <div className="sec-3-home-13__card-row"><dt>SIZE</dt><dd>{p.size}</dd></div>
                                    <div className="sec-3-home-13__card-row"><dt>SERVICE</dt><dd>{p.service}</dd></div>
                                </dl>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
