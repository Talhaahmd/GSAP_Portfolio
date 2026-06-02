import RevealText from "@/shared/effects/RevealText";

// Home 3 Section 10 - Our Growth Process

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const AVATARS = [
    "/assets/imgs/template/avatar/avatar-10.webp",
    "/assets/imgs/template/avatar/avatar-11.webp",
    "/assets/imgs/template/avatar/avatar-12.webp",
    "/assets/imgs/template/avatar/avatar-13.webp",
    "/assets/imgs/template/avatar/avatar-14.webp",
];

const STEPS = [
    { number: "01", title: "Discover & Diagnose", description: "We analyze your market, audience, data, and existing performance to uncover real growth opportunities." },
    { number: "02", title: "Strategy & Planning", description: "We define clear goals, channel strategy, budgets, and success metrics aligned with your business objectives." },
    { number: "03", title: "Launch & Execute", description: "Campaigns go live with tested creatives, precise targeting, and performance-focused execution." },
    { number: "04", title: "Optimize & Scale", description: "We continuously test, refine, and scale what works to maximize ROI and reduce inefficiencies." },
    { number: "05", title: "Measure & Evolve", description: "We track impact, report insights, and evolve strategies based on real data and outcomes." },
];

export default function Section10() {
    return (
        <div className="container-2200">
            <div className="home-3-section-10 section-fix overflow-hidden bg-neutral-50 rounded-5 mx-lg-3 mx-2">
                <div className="container pt-100 pb-100">
                    <div className="row section-title-pin">
                        <div className="col-lg-5 h-100">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Our Growth Process</span>
                                    <span className="text-2">Our Growth Process</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="reveal-text mb-0">
                                <RevealText>We push boundaries while following a proven methodology.</RevealText>
                            </h3>
                            <ul className="list-unstyled navigation-section-10 navigation-active-item pt-50">
                                {AVATARS.map((src, i) => (
                                    <li key={i}>
                                        <div className="item">
                                            <img
                                                src={src}
                                                alt=""
                                                width={120}
                                                height={120}
                                                className="img-cover p-relative" loading="lazy" />
                                            <div className="rectangular bg-neutral-0 border-100" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-xxl-6 col-lg-7 ms-auto p-relative pt-50">
                            <div className="pb-30 fz-font-label neutral-900 fw-600">
                                [ Step-by-step implementation ]
                            </div>
                            <div className="scroll-section vertical-section section">
                                <div className="wrapper">
                                    <div role="list" className="list">
                                        {STEPS.map((step, i) => (
                                            <div key={i} className="item">
                                                <div className="container bg-neutral-0 rounded-4 border-100 p-relative">
                                                    <div className="rectangular bg-neutral-0 border-100" />
                                                    <div className="row align-items-center py-3">
                                                        <div className="col-12 h-100">
                                                            <div className="d-flex flex-column p-md-5 p-3 justify-content-between h-100">
                                                                <div className="block-number icon-shape mb-20 size-50 bg-neutral-100 rounded-3">
                                                                    <h6 className="number mb-0 fw-600">{step.number}</h6>
                                                                </div>
                                                                <h5 className="mb-4">{step.title}</h5>
                                                                <p className="mb-0 fz-font-xl">{step.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
