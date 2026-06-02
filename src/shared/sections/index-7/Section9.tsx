{/* Home 7 Section 9 (Marquee — carouselTicker + GSAP scroll-move) */}

const MARQUEE_ITEMS = [
    "Marketing strategy",
    "Customer insights",
    "Positioning",
    "Value proposition",
    "Brand identity",
    "Performance",
    "Rebranding",
    "Omnichannel",
    "Social ads",
    "Technical SEO",
    "KPI tracking",
];

function generateMarqueeItems(prefix: string) {
    const items: React.ReactNode[] = [];
    // Two loops to match the original: original set + duplicate for infinite scroll
    for (let loop = 0; loop < 2; loop++) {
        MARQUEE_ITEMS.forEach((item, i) => {
            items.push(
                <li key={`${prefix}-${loop}-${i}`} className="sec-9-home-7__item">{item}</li>
            );
            items.push(
                <li key={`${prefix}-sep-${loop}-${i}`} className="sec-9-home-7__sep">
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width={24} height={24} loading="lazy" />
                </li>
            );
        });
    }
    return items;
}

export default function Section9() {
    return (
        <div className="sec-9-home-7 py-4">
            {/* Row 1: ticker left + list scrolls left (GSAP) */}
            <div className="sec-9-home-7__row">
                <div className="sec-9-home-7__ticker py-3 changeless carouselTicker carouselTicker-left">
                    <ul className="d-flex align-items-center gap-4 carouselTicker__list scroll-move-left list-unstyled mb-0 sec-9-home-7__list">
                        {generateMarqueeItems("l")}
                    </ul>
                </div>
            </div>

            {/* Row 2: opposite direction */}
            <div className="sec-9-home-7__row">
                <div className="sec-9-home-7__ticker py-3 changeless carouselTicker carouselTicker-right">
                    <ul className="d-flex align-items-center gap-4 carouselTicker__list scroll-move-right list-unstyled mb-0 sec-9-home-7__list">
                        {generateMarqueeItems("r")}
                    </ul>
                </div>
            </div>
        </div>
    );
}
