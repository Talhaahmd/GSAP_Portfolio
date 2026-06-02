const tickerItems = [
    "Research & Insights",
    "Purpose, Mission & Vision",
    "Value Proposition",
    "Brand Positioning",
    "Brand Architecture",
    "Brand Personality Trait",
    "UX Research & User Journeys",
    "Information Architecture",
    "Wireframing & Prototyping",
    "Design Systems",
    "Digital Strategy",
];

function TickerRow() {
    return (
        <>
            {tickerItems.flatMap((item, index) => [
                <li className="sec-2-home-8__item" key={`item-${index}`}>{item}</li>,
                <li className="sec-2-home-8__sep" key={`sep-${index}`}>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="orisa" width={20} height={20} loading="lazy" />
                </li>,
            ])}
        </>
    );
}

export default function Section2() {
    return (
        <div className="sec-2-home-8">
            {/* Orange marquee band */}
            <div className="sec-2-home-8__row">
                <div className="sec-2-home-8__ticker py-3 changeless carouselTicker carouselTicker-left">
                    <ul className="d-flex align-items-center carouselTicker__list scroll-move-left list-unstyled mb-0 sec-2-home-8__list">
                        <TickerRow />
                        <TickerRow />
                    </ul>
                </div>
            </div>

            {/* Thin ruled lines under the band */}
            <div className="sec-2-home-8__rules" aria-hidden="true"></div>
        </div>
    );
}
