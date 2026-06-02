import RevealText from "@/shared/effects/RevealText";

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

interface Tile { img: string; title: string; sub: string; size: string; speed: string }

const COL1: Tile[] = [
    { img: "sec-9-feed-1.webp", title: "Backstage 32", sub: "Editorial · 2 days ago", size: "h380", speed: "-0.5" },
    { img: "sec-9-feed-2.webp", title: "Coast", sub: "Travel · 5 days ago", size: "h480", speed: "-0.5" },
    { img: "sec-9-feed-3.webp", title: "Silk", sub: "Studio · last week", size: "h420", speed: "-0.5" },
];

const COL2: Tile[] = [
    { img: "sec-9-feed-4.webp", title: "Trio", sub: "Portrait · today", size: "h380", speed: "+0.5" },
    { img: "sec-9-feed-5.webp", title: "Steam", sub: "Street · 3 days ago", size: "h480", speed: "+0.5" },
    { img: "sec-9-feed-6.webp", title: "Light Study", sub: "Studio · last week", size: "h420", speed: "+0.5" },
];

const COL3: Tile[] = [
    { img: "sec-9-feed-7.webp", title: "Shutter", sub: "Behind the scenes", size: "h380", speed: "-0.3" },
    { img: "sec-9-feed-8.webp", title: "Field", sub: "Documentary · 4 days ago", size: "h480", speed: "-0.3" },
    { img: "sec-9-feed-9.webp", title: "Notebook", sub: "Workspace · today", size: "h420", speed: "-0.3" },
];

function Tile({ tile }: { tile: Tile }) {
    return (
        <a className={`sec-9-home-14__tile sec-9-home-14__tile--${tile.size} anim-zoomin-wrap`} href="https://instagram.com" target="_blank" rel="noopener">
            <img className="sec-9-home-14__tile-img anim-zoomin" src={`/assets/imgs/pages/home-14/${tile.img}`} alt="Orisa" loading="lazy" />
            <span className="sec-9-home-14__tile-top">
                <span className="sec-9-home-14__tile-handle text-white">@orisa.studio</span>
                <span className="sec-9-home-14__tile-tag text-white">speed {tile.speed}</span>
            </span>
            <span className="sec-9-home-14__tile-meta">
                <span className="sec-9-home-14__tile-title text-white">{tile.title}</span>
                <span className="sec-9-home-14__tile-sub text-white">{tile.sub}</span>
            </span>
        </a>
    );
}

export default function Section9() {
    return (
        <section className="sec-9-home-14" aria-label="Instagram feed">
            <div className="sec-9-home-14__inner">
                <div className="sec-9-home-14__head">
                    <div className="sec-9-home-14__head-left">
                        <div className="sec-9-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-9-home-14__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-9-home-14__eyebrow-key">LATEST FRAMES</span>
                            <span className="sec-9-home-14__eyebrow-meta">&mdash; @ORISA.STUDIO &middot; 18.4K FOLLOWERS</span>
                        </div>
                        <h2 className="sec-9-home-14__title reveal-text mb-0"><RevealText>From the<br />feed.</RevealText></h2>
                    </div>
                    <div className="sec-9-home-14__head-right at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        <p className="sec-9-home-14__head-copy mb-0">
                            A rolling stream of new work, in-progress notes,<br />
                            and things we found beautiful this week.
                        </p>
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <a className="at-btn-circle" href="https://instagram.com" target="_blank" rel="noopener">{ARROW}</a>
                            <a className="at-btn z-index-1" href="https://instagram.com" target="_blank" rel="noopener">Follow on Instagram</a>
                            <a className="at-btn-circle" href="https://instagram.com" target="_blank" rel="noopener">{ARROW}</a>
                        </div>
                    </div>
                </div>

                <div className="sec-9-home-14__gallery">
                    <div className="sec-9-home-14__col">
                        {COL1.map((t) => <Tile key={t.title} tile={t} />)}
                    </div>
                    <div className="sec-9-home-14__col sec-9-home-14__col--offset-80">
                        {COL2.map((t) => <Tile key={t.title} tile={t} />)}
                    </div>
                    <div className="sec-9-home-14__col sec-9-home-14__col--offset-40">
                        {COL3.map((t) => <Tile key={t.title} tile={t} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
