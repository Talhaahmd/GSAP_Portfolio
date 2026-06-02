import { useState } from "react";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const TABS = [
    { filter: "all", label: "All", count: "128" },
    { filter: "portrait", label: "Portrait", count: "42" },
    { filter: "landscape", label: "Landscape", count: "24" },
    { filter: "street", label: "Street", count: "31" },
    { filter: "editorial", label: "Editorial", count: "18" },
    { filter: "studio", label: "Studio", count: "13" },
];

interface Tile { link: string; img: string; num: string; year: string; title: string; sub: string; category: string; size: string }

const COL1: Tile[] = [
    { link: "/portfolio-details-1", img: "sec-4-tile-01.webp", num: "#001", year: "2025", title: "Crossing 18", sub: "Street · HCMC", category: "street", size: "h540" },
    { link: "/portfolio-details-2", img: "sec-4-tile-02.webp", num: "#002", year: "2025", title: "Lila", sub: "Portrait · Studio", category: "portrait studio", size: "h720" },
    { link: "/portfolio-details-3", img: "sec-4-tile-03.webp", num: "#003", year: "2025", title: "Kept Daylight", sub: "Landscape · Lofoten", category: "landscape", size: "h420" },
    { link: "/portfolio-details-4", img: "sec-4-tile-04.webp", num: "#004", year: "2025", title: "Backstage 14", sub: "Editorial · GQ", category: "editorial", size: "h480" },
];

const COL2: Tile[] = [
    { link: "/portfolio-details-5", img: "sec-4-tile-05.webp", num: "#005", year: "2025", title: "Smoke & Linen", sub: "Editorial · AnOther", category: "editorial", size: "h600" },
    { link: "/portfolio-details-6", img: "sec-4-tile-06.webp", num: "#006", year: "2025", title: "Soft Defiance", sub: "Portrait · Studio", category: "portrait studio", size: "h500" },
    { link: "/portfolio-details-1", img: "sec-4-tile-07.webp", num: "#007", year: "2025", title: "Last Tram", sub: "Street · Oslo", category: "street", size: "h700" },
    { link: "/portfolio-details-2", img: "sec-4-tile-08.webp", num: "#008", year: "2025", title: "Borrowed Suit", sub: "Editorial · Studio", category: "editorial studio", size: "h480" },
];

const COL3: Tile[] = [
    { link: "/portfolio-details-3", img: "sec-4-tile-09.webp", num: "#009", year: "2025", title: "Apnea", sub: "Underwater · Studio", category: "studio", size: "h440" },
    { link: "/portfolio-details-4", img: "sec-4-tile-10.webp", num: "#010", year: "2025", title: "Northern Quiet", sub: "Landscape · Tromsø", category: "landscape", size: "h620" },
    { link: "/portfolio-details-5", img: "sec-4-tile-11.webp", num: "#011", year: "2025", title: "Cover Story", sub: "Editorial · Vogue", category: "editorial", size: "h520" },
    { link: "/portfolio-details-6", img: "sec-4-tile-12.webp", num: "#012", year: "2025", title: "Hands", sub: "Documentary · Studio", category: "studio", size: "h560" },
];

function Tile({ tile, filter }: { tile: Tile; filter: string }) {
    const cats = tile.category.split(/\s+/);
    const visible = filter === "all" || cats.includes(filter);
    return (
        <Link
            className={`sec-4-home-14__tile sec-4-home-14__tile--${tile.size} anim-zoomin-wrap`}
            to={tile.link}
            data-category={tile.category}
            style={{
                display: visible ? undefined : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
            aria-hidden={visible ? undefined : true}
        >
            <img className="sec-4-home-14__tile-img anim-zoomin" src={`/assets/imgs/pages/home-14/${tile.img}`} alt="Orisa" loading="lazy" />
            <span className="sec-4-home-14__tile-top">
                <span className="sec-4-home-14__tile-num">{tile.num}</span>
                <span className="sec-4-home-14__tile-year">{tile.year}</span>
            </span>
            <span className="sec-4-home-14__tile-meta">
                <span className="sec-4-home-14__tile-title">{tile.title}</span>
                <span className="sec-4-home-14__tile-sub">{tile.sub}</span>
            </span>
        </Link>
    );
}

export default function Section4() {
    const [filter, setFilter] = useState("all");
    return (
        <section className="sec-4-home-14" aria-label="Gallery archive">
            <div className="sec-4-home-14__inner">
                <div className="sec-4-home-14__head">
                    <div className="sec-4-home-14__head-left">
                        <div className="sec-4-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-4-home-14__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-4-home-14__eyebrow-key">GALLERY</span>
                            <span className="sec-4-home-14__eyebrow-meta">&mdash; 600+ FRAMES PUBLISHED</span>
                        </div>
                        <h2 className="sec-4-home-14__title reveal-text mb-0">
                            <RevealText>Wander the<br />archive.</RevealText>
                        </h2>
                    </div>
                    <div className="sec-4-home-14__head-right at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        <p className="sec-4-home-14__head-copy mb-0">
                            Filter the archive by genre. Each image links to its<br />
                            series page &mdash; the full set, the story behind it,<br />
                            and notes from the shoot.
                        </p>
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <a className="at-btn-circle" href="#">{ARROW}</a>
                            <a className="at-btn z-index-1" href="#">License a print</a>
                            <a className="at-btn-circle" href="#">{ARROW}</a>
                        </div>
                    </div>
                </div>

                <div className="sec-4-home-14__tabs" role="tablist" aria-label="Filter by genre">
                    {TABS.map((t) => {
                        const active = filter === t.filter;
                        return (
                            <button
                                key={t.filter}
                                type="button"
                                className={`sec-4-home-14__tab${active ? " is-active" : ""}`}
                                role="tab"
                                aria-selected={active ? "true" : "false"}
                                data-filter={t.filter}
                                onClick={() => setFilter(t.filter)}
                            >
                                <span className="sec-4-home-14__tab-label">{t.label}</span>
                                <span className="sec-4-home-14__tab-count">{t.count}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="sec-4-home-14__masonry">
                    <div className="sec-4-home-14__col">
                        {COL1.map((t) => <Tile key={t.num} tile={t} filter={filter} />)}
                    </div>
                    <div className="sec-4-home-14__col sec-4-home-14__col--offset-60">
                        {COL2.map((t) => <Tile key={t.num} tile={t} filter={filter} />)}
                    </div>
                    <div className="sec-4-home-14__col sec-4-home-14__col--offset-30">
                        {COL3.map((t) => <Tile key={t.num} tile={t} filter={filter} />)}
                    </div>
                </div>

                <div className="sec-4-home-14__bottom">
                    <p className="sec-4-home-14__bottom-text mb-0">SHOWING 12 OF 128 FRAMES</p>
                    <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                        <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                        <Link className="at-btn z-index-1" to="/portfolio-1">Load 12 more</Link>
                        <Link className="at-btn-circle" to="/portfolio-1">{ARROW}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
