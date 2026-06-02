import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const ARROW_CIRCLE = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const NAV_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.1716 8.77806L8.55964e-06 8.77806L1.47897e-06 6.77807L12.1716 6.77807L6.80761 1.41412L8.22183 -9.53337e-05L16 7.77806L8.22181 15.5562L6.80759 14.142L12.1716 8.77806Z" fill="currentColor" />
    </svg>
);

const NAV_ITEMS = [
    { num: "01", title: "Performance Marketing" },
    { num: "02", title: "SEO & Content Growth" },
    { num: "03", title: "Rate Optimization" },
    { num: "04", title: "Marketing Automation" },
    { num: "05", title: "Analytics & Attribution" },
];

const ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 18.6259 29.37 23.9975 35.9953 24C29.37 24.0025 24 29.3742 24 36C24 29.3726 18.6274 24 12 24C5.37258 24 8.1423e-07 29.3726 5.24536e-07 36L0 48L12 48C18.6274 48 24 42.6274 24 36C24 42.6274 29.3726 48 36 48L48 48L48 36C48 29.3742 42.63 24.0025 36.0047 24C42.63 23.9975 48 18.6259 48 12L48 9.34594e-06L36 9.87048e-06C29.3726 6.34548e-06 24 5.37259 24 12C24 5.37259 18.6274 6.81516e-06 12 7.10486e-06L4.19629e-06 3.8147e-06L2.62268e-06 12C1.7536e-06 18.6274 5.37258 24 12 24Z" fill="currentColor" />
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
        <path d="M21.5836 1.47087C22.5977 -0.490291 25.4023 -0.490291 26.4163 1.47087L32.8735 13.9595C33.1322 14.4599 33.54 14.8677 34.0406 15.1264L46.529 21.5836C48.4903 22.5977 48.4903 25.4023 46.529 26.4163L34.0406 32.8735C33.54 33.1322 33.1322 33.54 32.8735 34.0406L26.4163 46.529C25.4023 48.4903 22.5977 48.4903 21.5836 46.529L15.1264 34.0406C14.8677 33.54 14.4599 33.1322 13.9595 32.8735L1.47087 26.4163C-0.490291 25.4023 -0.490291 22.5977 1.47087 21.5836L13.9595 15.1264C14.4599 14.8677 14.8677 14.4599 15.1264 13.9595L21.5836 1.47087Z" fill="currentColor" />
    </svg>
);
const ICON_4 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1 0H17V16H1V0ZM32.9999 16H17V31.9999H1V48H17V31.9999H32.9999V48H49V31.9999H32.9999V16ZM32.9999 16H49V0H32.9999V16Z" fill="currentColor" />
    </svg>
);
const ICON_5 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M24 5.96611L16 0V16H0L5.96611 24L6.99382e-07 31.9999H16V16L31.9999 16V0L24 5.96611ZM42.0338 24L48 16L31.9999 16V31.9999H16V48L24 42.0338L31.9999 48V31.9999H48L42.0338 24Z" fill="currentColor" />
    </svg>
);

const SCROLL_ITEMS = [
    {
        icon: ICON_1,
        title: "Paid ads across Google, Meta, TikTok, LinkedIn",
        bullets: ["Campaign strategy & planning", "Ad creative & copy testing", "Audience targeting & retargeting", "Budget optimization & scaling", "ROAS & CPA optimization"],
        img: "/assets/imgs/pages/img-58.webp",
    },
    {
        icon: ICON_2,
        title: "Search visibility that compounds over time",
        bullets: ["Keyword research & search intent mapping", "On-page SEO optimization", "Content strategy & editorial planning", "Technical SEO audits", "Link building & authority growth"],
        img: "/assets/imgs/pages/img-59.webp",
    },
    {
        icon: ICON_3,
        title: "Optimization – Turning high-intent traffic into loyal",
        bullets: ["Funnel analysis & user behavior tracking", "Landing page optimization", "A/B testing & experimentation", "UX & messaging refinement", "Conversion tracking setup"],
        img: "/assets/imgs/pages/img-60.webp",
    },
    {
        icon: ICON_4,
        title: "Scale campaigns with smart workflows",
        bullets: ["Email & lifecycle automation", "CRM integration & setup", "Lead scoring & segmentation", "Automated nurturing flows", "Campaign performance triggers"],
        img: "/assets/imgs/pages/img-61.webp",
    },
    {
        icon: ICON_5,
        title: "Track what truly drives long-term revenue performance",
        bullets: ["GA4 & event tracking setup", "Multi-touch attribution modeling", "Dashboard & reporting systems", "Funnel & cohort analysis", "Data-driven optimization insights"],
        img: "/assets/imgs/pages/img-62.webp",
    },
];

export default function Section4() {
    return (
        <section className="sec-4-home-3 pt-120 z-n1">
            <div className="container">
                <div className="row g-4 align-items-end">
                    <div className="col-xxl-10 col-12">
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
                        <h3 className="reveal-text mb-0">
                            <RevealText>
                                We turn ideas into high-impact digital solutions that attract customers, boost conversions, and accelerate sustainable growth.
                            </RevealText>
                        </h3>
                    </div>
                    <div className="col-xxl-4 col-12 d-flex justify-content-lg-end">
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link to="/portfolio-1" className="at-btn-circle">
                                {ARROW_CIRCLE}
                            </Link>
                            <Link to="/portfolio-1" className="at-btn z-index-1">
                                View latest projects
                            </Link>
                            <Link to="/portfolio-1" className="at-btn-circle">
                                {ARROW_CIRCLE}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container section-fix pt-100">
                <div className="row g-4">
                    <div className="col-xxl-3 col-lg-4 h-100">
                        <ul className="list-unstyled navigation-sec4home3 navigation-active-item section-title-pin h-100">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.num}>
                                    <div className="item">
                                        <div className="content d-flex align-items-center">
                                            <span className="fz-font-md neutral-500">[{item.num}]</span>
                                            <h6 className="mb-0">{item.title}</h6>
                                            {NAV_ARROW}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="row p-relative z-n1 pt-250 d-none d-lg-block">
                            <div className="col-lg-2 offset-lg-7">
                                <div className="at-about-svg-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                        <path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none">
                                        <path opacity="0.3" d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z" fill="#515151" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                        <path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-xxl-1 p-relative">
                        <div className="scroll-section vertical-section section">
                            <div className="wrapper">
                                <div role="list" className="list">
                                    {SCROLL_ITEMS.map((card, idx) => (
                                        <div key={idx} className="item">
                                            <div className="container bg-neutral-50 rounded-4">
                                                <div className="row align-items-center py-3">
                                                    <div className="col-lg-6 col-md-7 col-12 h-100">
                                                        <div className="d-flex flex-column p-xxl-5 p-4 justify-content-between h-100">
                                                            <div className="icon pb-20">{card.icon}</div>
                                                            <span className="fz-font-2xl fw-400 mb-4 text-scale-anim">{card.title}</span>
                                                            <ul className="ps-3 neutral-950 mb-3">
                                                                {card.bullets.map((bullet, i) => (
                                                                    <li key={i}>{bullet}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-5 col-lg-6 col-md-5 offset-xxl-1 d-none d-md-block">
                                                        <div className="rounded-3 overflow-hidden">
                                                            <img className="img-cover" src={card.img} alt="orisa" width={500} height={350} loading="lazy" />
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
