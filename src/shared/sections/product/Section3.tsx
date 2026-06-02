import Marquee from "react-fast-marquee";

const TICKER_SVG = (
    <svg className="scroll-rotate" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            d="M20 0C20.3015 10.9184 29.0816 19.6985 40 20C29.0816 20.3015 20.3015 29.0816 20 40C19.6985 29.0816 10.9184 20.3015 0 20C10.9184 19.6985 19.6985 10.9184 20 0Z"
            fill="currentColor"
        />
    </svg>
);

const TICKER_ITEMS = [
    "Smart wear",
    "Casual cool",
    "Luxe touch",
    "Bold fashion",
    "Modern fit",
    "Feel trendy",
    "New vibes",
    "Urban style",
    "Fresh looks",
    "Daily wear",
    "Street ready",
];

export default function Section3({ classList }: { classList?: string }) {
    return (
        <section className="sec-3-shop-archive-1 pt-60 pb-60">
            <div className={`py-5 carouselTicker carouselTicker-right ${classList ?? ""}`}>
                <Marquee
                    speed={40}
                    direction="right"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul className="d-flex align-items-center justify-content-center gap-4 carouselTicker__list scroll-move-left overflow-hidden">
                        {TICKER_ITEMS.map((label) => (
                            <li key={label} className="d-flex align-items-center gap-4 carouselTicker__item mx-0">
                                <h5 className="mb-0 text-nowrap">{label}</h5>
                                {TICKER_SVG}
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
