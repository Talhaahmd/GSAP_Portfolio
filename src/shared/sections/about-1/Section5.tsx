import Marquee from "react-fast-marquee";

// About 1 Section 5 - Brand scroll (carousel ticker)

const BRAND_ROWS: string[][] = [
    ["01", "02", "03"],
    ["05", "06", "07"],
    ["03", "04", "05"],
    ["04", "05", "06"],
    ["06", "07", "08"],
    ["07", "08", "09"],
    ["08", "09", "10"],
    ["02", "03", "04"],
    ["07", "09", "08"],
    ["09", "08", "10"],
    ["06", "08", "07"],
    ["08", "09", "07"],
];

function logoSrc(num: string) {
    return `/assets/imgs/template/logo/logo-brand-${num}.webp`;
}

export default function Section5() {
    return (
        <section className="sec-5-about pt-65 pb-65">
            <div className="at-brand-scroll carouselTicker carouselTicker-right">
                <Marquee
                    speed={40}
                    direction="right"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul
                        className="at-brand-scroll-wrap d-flex justify-content-center gap-2 carouselTicker__list"
                        style={{
                            display: "flex",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            overflow: "visible",
                            gap: "0 0.5rem",
                        }}
                    >
                        {BRAND_ROWS.map((logos, i) => (
                            <li key={i} className="at-brand-item" style={{ margin: "0", float: "none" }}>
                                <div className="brand">
                                    {logos.map((logo) => (
                                        <span
                                            key={logo}
                                            className="brand-logo-slide"
                                            data-logo={logo}
                                        >
                                            <img
                                                src={logoSrc(logo)}
                                                alt="orisa"
                                                width={120}
                                                height={48}
                                                className="dark-mode-invert" loading="lazy" />
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
