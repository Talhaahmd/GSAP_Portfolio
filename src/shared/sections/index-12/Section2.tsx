import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const PROJECTS = [
    {
        link: "/portfolio-details-1",
        img: "sec-2-project-1.webp",
        num: "01",
        title: "Lumen Studio",
        desc: "A complete brand refresh for an indie photography studio — visual system, web identity, and printed collateral built around bold contrast and quiet confidence.",
        tags: ["Brand Identity", "Web Design", "Product Design", "Interaction"],
        filledTagIndex: 0,
    },
    {
        link: "/portfolio-details-1",
        img: "sec-2-project-2.webp",
        num: "02",
        title: "Helix Wear",
        desc: "Direct-to-consumer fashion launch covering art direction, lookbook photography, and a Shopify storefront with fast-load performance baked in.",
        tags: ["Art Direction", "E-Commerce", "Photography"],
        filledTagIndex: -1,
    },
    {
        link: "/portfolio-details-1",
        img: "sec-2-project-3.webp",
        num: "03",
        title: "North Reserve",
        desc: "Heritage-forward identity work for a craft coffee roaster — packaging, signage, and a bilingual marketing site that holds up across markets.",
        tags: ["Packaging", "Identity", "Web Design"],
        filledTagIndex: -1,
    },
    {
        link: "/portfolio-details-1",
        img: "sec-2-project-4.webp",
        num: "04",
        title: "Cobalt Index",
        desc: "Editorial site and content system for a monthly tech publication — flexible templates, custom typography, and a calm reading experience that scales.",
        tags: ["Editorial", "CMS", "Typography"],
        filledTagIndex: -1,
    },
];

export default function Section2() {
    return (
        <section className="sec-2-home-12" aria-label="Selected Projects">
            <div className="container">
                <header className="sec-2-home-12__header">
                    <p className="sec-2-home-12__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".05">WORKS</p>
                    <h2 className="sec-2-home-12__title reveal-text mb-0"><RevealText>Selected Projects.</RevealText></h2>
                    <p className="sec-2-home-12__sub mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".2">A handpicked set of recent work — each one shaped by clarity, intent, and craft.</p>
                </header>

                <div className="sec-2-home-12__cards">
                    {PROJECTS.map((p) => (
                        <Link key={p.num} className="card-home-12-project" to={p.link} aria-label={`${p.title} — view project`}>
                            <div className="card-home-12-project__image anim-zoomin-wrap">
                                <img className="card-home-12-project__img anim-zoomin" src={`/assets/imgs/pages/home-12/${p.img}`} alt="Orisa" loading="lazy" />
                            </div>
                            <div className="card-home-12-project__content">
                                <div className="card-home-12-project__top">
                                    <span className="card-home-12-project__num">{p.num}</span>
                                    <span className="card-home-12-project__dot" aria-hidden="true"></span>
                                    <span className="card-home-12-project__label">PROJECT</span>
                                </div>
                                <h3 className="card-home-12-project__title">{p.title}</h3>
                                <p className="card-home-12-project__desc">{p.desc}</p>
                                <ul className="card-home-12-project__tags" aria-label="Project tags">
                                    {p.tags.map((tag, i) => (
                                        <li key={tag}><span className={`card-home-12-project__tag${i === p.filledTagIndex ? " is-filled" : ""}`}>{tag}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
