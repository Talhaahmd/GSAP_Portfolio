import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const PORTFOLIO_ITEMS = [
    {
        category: "branded-film",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-11/img-4.webp",
        thumbTitle: "Maison Velours",
        title: "Cinegravere -- Brand Film",
        description: "30-second hero reel for a luxury fragrance launch",
        tags: ["Branded Film", "VFX", "Colour Grading"],
    },
    {
        category: "title-sequence",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-11/img-5.webp",
        thumbTitle: "Northwind Pictures",
        title: "Volta -- Opening Title",
        description: "Award-winning main title sequence for a Netflix series",
        tags: ["Title Sequence", "Motion Design", "Sound Sync"],
    },
    {
        category: "interactive",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-11/img-6.webp",
        thumbTitle: "Tenkai Interactive",
        title: "Kodo -- Interactive Reel",
        description: "Cursor-driven interactive showreel for a game studio",
        tags: ["Interactive", "WebGL", "UX Motion"],
    },
    {
        category: "documentary",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/home-11/img-7.webp",
        thumbTitle: "Helios Grid",
        title: "Strata -- Documentary Short",
        description: "Aerial cinematography and motion infographics for an energy brand",
        tags: ["Documentary", "Cinematography", "Data Viz"],
    },
];

export default function Section4() {
    return (
        <section className="sec-4-home-11" id="home-11-sec-4" aria-label="Featured works">
            <div className="sec-4-home-11__container">
                <header className="sec-4-home-11__header row g-4 g-xl-5 align-items-end justify-content-between">
                    <div className="col-xl-6 col-lg-7">
                        <div className="sec-4-home-11__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay=".05">
                            <span className="sec-4-home-11__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-4-home-11__eyebrow-text text-uppercase">Featured works</span>
                        </div>
                        <h2 className="sec-4-home-11__title mt-3 mb-0 reveal-text">
                            <RevealText>
                                <span className="d-block">Motion that</span>
                                <span className="d-block">earns attention.</span>
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <p className="sec-4-home-11__intro mb-0 at_fade_anim" data-delay=".15">
                            A curated selection of branded films, title sequences, and interactive motion campaigns -- each one a story we&apos;re proud to have told.
                        </p>
                        <Link
                            className="sec-4-home-11__view-all d-inline-flex align-items-center gap-2 mt-4 at_fade_anim"
                            to="/portfolio-1"
                            data-delay=".2"
                        >
                            <span>View all projects</span>
                            <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
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
                </header>

                {/* Portfolio list */}
                <div className="sec-4-home-11__list mt-5">
                    {PORTFOLIO_ITEMS.map((item, idx) => (
                        <div
                            key={idx}
                            className="mg-portfolio-item anim-zoomin-wrap sec-4-home-11__loop-item mb-55"
                            data-category={item.category}
                        >
                            <div className="mg-portfolio-thumb anim-zoomin not-hide-cursor">
                                <Link className="cursor-hide" to={item.link}>
                                    <img
                                        data-speed=".8"
                                        className="w-100"
                                        src={item.img}
                                        alt={item.title}
                                        width={800}
                                        height={520} loading="lazy" />
                                    <span className="sec-4-home-11__thumb-title changeless" aria-hidden="true">
                                        {item.thumbTitle}
                                    </span>
                                </Link>
                            </div>
                            <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
                                <div className="w-md-75">
                                    <h3 className="h5 cs-portfolio-title at-title-anim fix mr-20 at-ff-sequel-semi-bold">
                                        <Link to={item.link} className="at-title-text">
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className="fz-font-lg neutral-500">{item.description}</p>
                                </div>
                                <div className="cs-portfolio-tag">
                                    <ul className="d-flex justify-content-md-end flex-wrap text-nowrap">
                                        {item.tags.map((tag) => (
                                            <li key={tag}>
                                                <Link to="#">{tag}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
