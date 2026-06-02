import Marquee from "react-fast-marquee";

const TICKER_ITEMS = [
    "Positioning",
    "Value proposition",
    "Brand identity",
    "Performance",
    "Rebranding",
    "Omnichannel",
    "Social ads",
];

const SCROLL_ICON = (
    <svg className="scroll-rotate" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 0C20.3015 10.9184 29.0816 19.6985 40 20C29.0816 20.3015 20.3015 29.0816 20 40C19.6985 29.0816 10.9184 20.3015 0 20C10.9184 19.6985 19.6985 10.9184 20 0Z" fill="#FEFEFE" />
    </svg>
);

export default function Section2() {
    return (
        <section className="sec-2-home-3">
            <div className="bg-neutral-900 py-5 changeless carouselTicker carouselTicker-right">
                <Marquee
                    speed={40}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul
                        className="d-flex align-items-center carouselTicker__list scroll-move-left"
                        style={{ listStyle: "none", margin: 0, padding: 0, overflow: "visible", gap: "0 2rem" }}
                    >
                        {TICKER_ITEMS.map((label, i) => (
                            <li key={`${label}-${i}`} className="d-flex align-items-center gap-4" style={{ margin: "0 1rem", float: "none" }}>
                                <h5 className="neutral-0 mb-0 text-nowrap">{label}</h5>
                                {SCROLL_ICON}
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
