import Marquee from "react-fast-marquee";

// Services 2 Section 2 - Ticker (service labels scroll)

const DOT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
            d="M8 0C8.1206 4.36736 11.6326 7.8794 16 8C11.6326 8.1206 8.1206 11.6326 8 16C7.8794 11.6326 4.36736 8.1206 0 8C4.36736 7.8794 7.8794 4.36736 8 0Z"
            fill="#B7B7B7"
        />
    </svg>
);

const TICKER_ITEMS = [
    "AI Automations",
    "MVP Development",
    "CRM Integrations",
    "Workflow Systems",
    "Cloud & APIs",
    "Process Automation",
    "Custom Integrations",
    "AI Chatbots",
    "Data Pipelines",
    "Scalable Architecture",
    "Digital Products",
];

export default function Section2() {
    return (
        <section className="sec-2-services pt-30 pb-30">
            <div className="carouselTicker carouselTicker-left">
                <Marquee
                    speed={40}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul className="d-flex align-items-center justify-content-center gap-4 carouselTicker__list scroll-move-left fix">
                        {TICKER_ITEMS.map((label, i) => (
                            <li
                                key={`${label}-${i}`}
                                className="d-flex align-items-center gap-4 carouselTicker__item mx-0"
                            >
                                <h5 className="mb-0 fz-font-md fw-600 text-nowrap">{label}</h5>
                                {DOT_SVG}
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
