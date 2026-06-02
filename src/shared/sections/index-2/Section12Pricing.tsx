import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const FEATURE_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z"
            fill="currentColor"
        />
    </svg>
);

const PERSONAL_PRICES = { starter: "$1,200", growth: "$2,800", scale: "$3,600" };
const BUSINESS_PRICES = { starter: "$2,400", growth: "$5,600", scale: "$7,200" };

const PLANS = [
    {
        key: "starter" as const,
        title: "Starter",
        priceClass: "text-price-starter",
        desc: "A solid digital foundation focused on clarity, usability, and performance essentials.",
        btnText: "Get Started",
        features: [
            "Digital strategy setup",
            "Digital audit & Insights",
            "Positioning & Messaging",
            "SEO & Technical setup",
            "Analytics tracking",
        ],
        popular: false,
    },
    {
        key: "growth" as const,
        title: "Growth",
        priceClass: "text-price-growth",
        desc: "A performance-driven plan to accelerate acquisition and conversion.",
        btnText: "Choose Growth",
        features: [
            "Growth strategy",
            "Conversion optimization",
            "SEO & Content performance",
            "Campaign setup & Reporting",
            "Advance analytics tracking",
        ],
        popular: true,
    },
    {
        key: "scale" as const,
        title: "Scale",
        priceClass: "text-price-scale",
        desc: "A long-term digital partnership for sustainable growth at scale.",
        btnText: "Scale Your Business",
        features: [
            "Full strategy & execution",
            "Dedicated success manager",
            "Advanced SEO & content",
            "Multi-channel campaigns",
            "Custom reporting & insights",
        ],
        popular: false,
    },
];

type Section12PricingProps = {
    titleSlot?: ReactNode;
    footerSlot?: ReactNode;
};

export default function Section12Pricing({ titleSlot, footerSlot }: Section12PricingProps) {
    const [isBusiness, setIsBusiness] = useState(false);
    const prices = isBusiness ? BUSINESS_PRICES : PERSONAL_PRICES;

    return (
        <>
            <div className="row align-items-end mb-60 g-4">
                <div className="col-lg-9">{titleSlot}</div>
                <div className="col-lg-3 ms-lg-auto">
                    <div className="change-price-plan jus mt-6 wow img-custom-anim-top">
                        <span
                            className="price-plan-toggle-label"
                            data-plan="personal"
                            onClick={() => setIsBusiness(false)}
                            onKeyDown={(e) => e.key === "Enter" && setIsBusiness(false)}
                            role="button"
                            tabIndex={0}
                        >
                            Personal
                        </span>
                        <label className="price-plan-toggle">
                            <input
                                type="checkbox"
                                className="price-plan-toggle__input"
                                id="price-plan-toggle"
                                aria-label="Select Business plan"
                                checked={isBusiness}
                                onChange={(e) => setIsBusiness(e.target.checked)}
                            />
                            <span className="price-plan-toggle__track" />
                            <span className="price-plan-toggle__thumb" />
                        </label>
                        <span
                            className="price-plan-toggle-label"
                            data-plan="business"
                            onClick={() => setIsBusiness(true)}
                            onKeyDown={(e) => e.key === "Enter" && setIsBusiness(true)}
                            role="button"
                            tabIndex={0}
                        >
                            Business
                        </span>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center g-4">
                {PLANS.map((plan) => (
                    <div key={plan.key} className="col-lg-4">
                        <div
                            className={`home-2-pricing-card ${plan.popular ? "home-2-pricing-card--popular" : ""}`.trim()}
                        >
                            {plan.popular && (
                                <span className="home-2-pricing-card__badge">Most popular</span>
                            )}
                            <div className="home-2-pricing-card__body">
                                <h4 className="home-2-pricing-card__title">{plan.title}</h4>
                                <div className="home-2-pricing-card__price">
                                    <span
                                        className={`home-2-pricing-card__price-value ${plan.priceClass}`}
                                    >
                                        {prices[plan.key]}
                                    </span>
                                    <span className="home-2-pricing-card__price-period">
                                        /monthly
                                    </span>
                                </div>
                                <p className="home-2-pricing-card__desc">{plan.desc}</p>
                                <Link className="at-btn px-5" to="#">
                                    <span>
                                        <span className="text-1 text-capitalize">{plan.btnText}</span>
                                        <span className="text-2 text-capitalize">{plan.btnText}</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                            </div>
                            <ul className="home-2-pricing-card__features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                                            {FEATURE_ICON_SVG}
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                {footerSlot}
            </div>
        </>
    );
}
