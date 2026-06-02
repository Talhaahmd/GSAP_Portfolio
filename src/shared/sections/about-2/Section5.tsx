import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

// About 2 Section 5 - Interesting Stats (Figures That Tell a Story)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const STATS_ITEMS = [
    {
        delay: ".1",
        count: 120,
        prefix: undefined as string | undefined,
        suffix: "%",
        label: "ROI increase",
        desc: "Delivered exceptional ROI growth through data-driven optimization.",
    },
    {
        delay: ".2",
        count: 25,
        prefix: "$",
        suffix: "M+",
        label: "Ad spend managed",
        desc: "Managed large-scale advertising budgets with measurable performance impact.",
    },
    {
        delay: ".3",
        count: 300,
        prefix: undefined as string | undefined,
        suffix: "+",
        label: "Campaigns launched",
        desc: "Executed hundreds of high-impact marketing initiatives across platforms.",
    },
];

export default function Section5() {
    return (
        <section className="sec-4-about bg-neutral-50 pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Interesting Stats</span>
                                <span className="text-2">Interesting Stats</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="reveal-text mb-0">
                            <RevealText>Figures That <br />Tell a Story</RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-7 ms-lg-auto pt-160">
                        <div className="cart-stats">
                            {STATS_ITEMS.map((item, i) => (
                                <div
                                    key={i}
                                    className="cart-stats__item scroll-move-up at_fade_anim"
                                    data-fade-from="bottom"
                                    data-duration="2"
                                    data-delay={item.delay}
                                >
                                    <div className="cart-stats__item-title">
                                        <h3 className="fz-ds-1 fw-500 cart-stats__item-number text-nowrap mb-0">
                                            <OdometerCounter
                                                count={item.count}
                                                prefix={item.prefix}
                                                suffix={item.suffix}
                                            />
                                        </h3>
                                        <h6 className="fw-500 mb-0">{item.label}</h6>
                                    </div>
                                    <div className="cart-stats__item-content">
                                        <p className="mb-0 fz-font-lg fw-500 neutral-900">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
