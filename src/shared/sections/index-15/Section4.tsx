import { Link } from "react-router-dom";
import StickyCardsEffect from "@/shared/effects/StickyCardsEffect";
import RevealText from "@/shared/effects/RevealText";

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const PLUS = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none" aria-hidden="true" focusable="false">
        <path d="M6 0v11M0 5.5h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const PROJECTS = [
    { name: "Nexora", img: "sec-4-project-1.webp", featured: true },
    { name: "Noirform", img: "sec-4-project-2.webp", featured: true },
    { name: "Nebula", img: "sec-4-project-3.webp", featured: false },
    { name: "Veltrix", img: "sec-4-project-4.webp", featured: true },
];

const REPOS = [
    { label: "Github", href: "https://github.com" },
    { label: "Gitlab", href: "https://gitlab.com" },
    { label: "Bitbucket", href: "https://bitbucket.org" },
    { label: "SourceForge", href: "https://sourceforge.net" },
    { label: "Codeberg", href: "https://codeberg.org" },
];

export default function Section4() {
    return (
        <section className="sec-4-home-15 pt-65 pb-65" aria-label="Selected work">
            <StickyCardsEffect />
            <div className="container">
                <div className="sec-4-home-15__title-bar at_fade_anim" data-fade-from="bottom" data-delay=".1">
                    <h2 className="sec-4-home-15__heading reveal-text mb-0"><RevealText>Selected work</RevealText></h2>
                    <div className="at-btn-group at_fade_anim" data-delay=".2" data-fade-from="bottom" data-ease="bounce">
                        <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                        <Link className="at-btn z-index-1" to="/portfolio-1">View latest projects</Link>
                        <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                    </div>
                </div>

                <div className="sec-4-home-15__cards">
                    {PROJECTS.map((p) => (
                        <Link key={p.name} className="sec-4-home-15__card anim-zoomin-wrap" to="/portfolio-details-1" aria-label={`View case: ${p.name}`}>
                            <img className="sec-4-home-15__card-img anim-zoomin" src={`/assets/imgs/pages/home-15/${p.img}`} alt="Orisa" loading="lazy" />
                            {p.featured && <span className="sec-4-home-15__card-badge">Featured case</span>}
                            <span className="sec-4-home-15__card-bar">
                                <span className="sec-4-home-15__card-name">{p.name}</span>
                                <span className="sec-4-home-15__card-cta">
                                    <span>View case</span>
                                    {PLUS}
                                </span>
                            </span>
                        </Link>
                    ))}
                </div>

                <ul className="sec-4-home-15__repos list-unstyled mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".2">
                    {REPOS.map((r) => (
                        <li key={r.label}><a href={r.href} target="_blank" rel="noopener">[ {r.label} ]</a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
