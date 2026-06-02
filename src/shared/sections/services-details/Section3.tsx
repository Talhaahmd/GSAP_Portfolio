import RevealText from "@/shared/effects/RevealText";

// Services details Section 3 - What we do (vertical scroll cards)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 18.6259 29.37 23.9975 35.9953 24C29.37 24.0025 24 29.3742 24 36C24 29.3726 18.6274 24 12 24C5.37258 24 8.1423e-07 29.3726 5.24536e-07 36L0 48L12 48C18.6274 48 24 42.6274 24 36C24 42.6274 29.3726 48 36 48L48 48L48 36C48 29.3742 42.63 24.0025 36.0047 24C42.63 23.9975 48 18.6259 48 12L48 9.34594e-06L36 9.87048e-06C29.3726 6.34548e-06 24 5.37259 24 12C24 5.37259 18.6274 6.81516e-06 12 7.10486e-06L4.19629e-06 3.8147e-06L2.62268e-06 12C1.7536e-06 18.6274 5.37258 24 12 24Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_2 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M48 7.2C48 11.1764 44.7764 14.4 40.8 14.4C36.8235 14.4 33.6 11.1764 33.6 7.2C33.6 3.22355 36.8235 0 40.8 0C44.7764 0 48 3.22355 48 7.2Z" fill="currentColor" />
        <path d="M48 40.8C48 44.7764 44.7764 48 40.8 48C36.8235 48 33.6 44.7764 33.6 40.8C33.6 36.8235 36.8235 33.6 40.8 33.6C44.7764 33.6 48 36.8235 48 40.8Z" fill="currentColor" />
        <path d="M36.24 24C36.24 30.76 30.76 36.24 24 36.24C17.24 36.24 11.76 30.76 11.76 24C11.76 17.24 17.24 11.76 24 11.76C30.76 11.76 36.24 17.24 36.24 24Z" fill="currentColor" />
        <path d="M14.4 7.2C14.4 11.1764 11.1764 14.4 7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2Z" fill="currentColor" />
        <path d="M14.4 40.8C14.4 44.7764 11.1764 48 7.2 48C3.22355 48 0 44.7764 0 40.8C0 36.8235 3.22355 33.6 7.2 33.6C11.1764 33.6 14.4 36.8235 14.4 40.8Z" fill="currentColor" />
    </svg>
);

const ICON_3 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
            d="M21.5836 1.47087C22.5977 -0.490291 25.4023 -0.490291 26.4163 1.47087L32.8735 13.9595C33.1322 14.4599 33.54 14.8677 34.0406 15.1264L46.529 21.5836C48.4903 22.5977 48.4903 25.4023 46.529 26.4163L34.0406 32.8735C33.54 33.1322 33.1322 33.54 32.8735 34.0406L26.4163 46.529C25.4023 48.4903 22.5977 48.4903 21.5836 46.529L15.1264 34.0406C14.8677 33.54 14.4599 33.1322 13.9595 32.8735L1.47087 26.4163C-0.490291 25.4023 -0.490291 22.5977 1.47087 21.5836L13.9595 15.1264C14.4599 14.8677 14.8677 14.4599 15.1264 13.9595L21.5836 1.47087Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_4 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H16V16H0V0ZM31.9999 16H16V31.9999H0V48H16V31.9999H31.9999V48H48V31.9999H31.9999V16ZM31.9999 16H48V0H31.9999V16Z"
            fill="currentColor"
        />
    </svg>
);

const ITEMS = [
    {
        icon: ICON_1,
        title: "Business & market understanding",
        description: "We analyze your market, audience, data, and existing performance to uncover real growth opportunities.",
    },
    {
        icon: ICON_2,
        title: "User & Behavior",
        description: "We study real user needs, behaviors, and motivations to ensure strategies are grounded in human insight—not assumptions.",
    },
    {
        icon: ICON_3,
        title: "Data & AI Readiness",
        description: "We assess data quality, availability, and system maturity to determine how ready your organization is to adopt and scale AI solutions.",
    },
    {
        icon: ICON_4,
        title: "Strategic Direction",
        description: "We translate insights into clear priorities, guiding principles, and a focused roadmap that aligns teams and drives confident execution.",
    },
];

export default function Section3() {
    return (
        <section className="sec-3-services-details pb-120">
            <div className="container section-fix pt-100">
                <div className="row">
                    <div className="col-lg-5 h-100">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">What we do</span>
                                <span className="text-2">What we do</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="reveal-text mb-40">
                            <RevealText>
                                Strategy &amp; Research lays the foundation for every successful product and AI system.
                            </RevealText>
                        </h3>
                        <h6 className="fw-600 mb-0">
                            We investigate business goals, users, data, and technology to define the right problems—before building solutions.
                        </h6>
                        <div className="section-title-pin" />
                    </div>
                    <div className="col-xxl-6 col-lg-7 offset-xxl-1 p-relative">
                        <div className="scroll-section vertical-section section scroll-active-item">
                            <div className="wrapper">
                                <div role="list" className="list">
                                    {ITEMS.map((item, i) => (
                                        <div key={i} className="item">
                                            <div className="container bg-neutral-0 rounded-4 border-100 p-relative">
                                                <div className="rectangular bg-neutral-0 border-100" />
                                                <div className="row align-items-center py-3">
                                                    <div className="col-12 h-100">
                                                        <div className="d-flex flex-column p-md-5 p-3 justify-content-between h-100">
                                                            <div className="icon pb-20">{item.icon}</div>
                                                            <h5 className="mb-4">{item.title}</h5>
                                                            <p className="mb-0 fz-font-lg">{item.description}</p>
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
        </section>
    );
}
