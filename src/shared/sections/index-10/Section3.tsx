import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const PROJECTS = [
    {
        id: "pos1",
        href: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-10/sec-3-project-1.webp",
        size: "sm",
        name: "Ethereal Flora",
        tags: ["Brand identity", "Editorial", "Spatial concept"],
        delay: "0.1",
    },
    {
        id: "pos2",
        href: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-10/sec-3-project-2.webp",
        size: "lg",
        name: "The Kinetic",
        tags: ["Brand identity", "Editorial", "Spatial concept"],
        delay: "0.12",
    },
    {
        id: "pos3",
        href: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-10/sec-3-project-3.webp",
        size: "lg",
        name: "Monolith",
        tags: ["Brand identity", "Editorial", "Spatial concept"],
        delay: "0.14",
    },
    {
        id: "pos4",
        href: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-10/sec-3-project-4.webp",
        size: "sm",
        name: "Cyber-Renaissance",
        tags: ["Brand identity", "Editorial", "Spatial concept"],
        delay: "0.16",
    },
    {
        id: "pos5",
        href: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-10/sec-3-project-5.webp",
        size: "lg",
        name: "SaaS Startup",
        tags: ["Brand identity", "Editorial", "Spatial concept"],
        delay: "0.18",
    },
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

export default function Section3() {
    return (
        <section className="sec-3-home-10">
            <div className="sec-3-home-10__container">
                <header className="sec-3-home-10__header row g-4 g-xl-5 align-items-end justify-content-between">
                    <div className="col-xl-7 col-lg-6">
                        <div className="sec-3-home-10__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay="0.05">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Selected Projects</span>
                                    <span className="text-2">Selected Projects</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                        </div>
                        <h2 className="sec-3-home-10__title mt-3 mb-0 at_fade_anim" data-delay="0.1">
                            <span className="d-block reveal-text"><RevealText>Curated artifacts:</RevealText></span>
                            <span className="d-block reveal-text"><RevealText>A voyage through digital dimensions</RevealText></span>
                        </h2>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <p className="sec-3-home-10__intro mb-0 at_fade_anim reveal-text" data-delay="0.15">
                            <RevealText>
                                <strong>Orisa</strong> is more than a design agency; we are a strategic partner for founders who dare to disrupt. We <strong>combine rapid</strong> prototyping with world-class engineering to <strong>turn bold</strong> visions into market-leading digital products.
                            </RevealText>
                        </p>
                    </div>
                </header>

                <div className="sec-3-home-10__grid">
                    {PROJECTS.map((project) => (
                        <article
                            key={project.id}
                            className={`sec-3-home-10__card sec-3-home-10__card--${project.id} at_fade_anim`}
                            data-delay={project.delay}
                        >
                            <Link
                                className={`sec-3-home-10__media sec-3-home-10__media--${project.size}`}
                                to={project.href}
                            >
                                <div className="anim-zoomin">
                                    <img
                                        src={project.img}
                                        alt="orisa"
                                        width={800}
                                        height={600} loading="lazy" />
                                </div>
                            </Link>
                            <div className="sec-3-home-10__body">
                                <h3 className="sec-3-home-10__name">
                                    <Link to={project.href}>{project.name}</Link>
                                </h3>
                                <ul className="sec-3-home-10__tags list-unstyled d-flex flex-wrap gap-2 mb-0">
                                    {project.tags.map((tag, i) => (
                                        <li key={i}>
                                            <span className="sec-3-home-10__tag text-uppercase">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
