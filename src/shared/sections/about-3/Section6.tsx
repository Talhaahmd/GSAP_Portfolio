import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

// About 3 Section 6 - My Skills / Tech Stack

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const LOGO_DIMS: Record<number, { width: number; height: number }> = {
    1: { width: 24, height: 24 },
    2: { width: 24, height: 27 },
    3: { width: 24, height: 24 },
    4: { width: 20, height: 24 },
    5: { width: 24, height: 27 },
    6: { width: 45, height: 24 },
    7: { width: 16, height: 24 },
    8: { width: 23, height: 24 },
    9: { width: 29, height: 24 },
    10: { width: 24, height: 24 },
    11: { width: 25, height: 24 },
    12: { width: 24, height: 24 },
    13: { width: 39, height: 24 },
    14: { width: 30, height: 24 },
    15: { width: 24, height: 24 },
};

const tag = (n: number, label: string, iconClass?: string) => ({
    icon: `/assets/imgs/icons/logo-${n}.svg`,
    label,
    iconClass,
    ...LOGO_DIMS[n],
});

const SKILL_CARDS = [
    {
        thumb: "/assets/imgs/pages/img-148.webp",
        title: "AI & Automation",
        tags: [tag(1, "Python"), tag(3, "OpenAI"), tag(6, "Make.com")],
        score: 98,
    },
    {
        thumb: "/assets/imgs/pages/img-149.webp",
        title: "MVP Development",
        tags: [tag(3, "React"), tag(1, "Node.js"), tag(4, "Next.js")],
        score: 96,
    },
    {
        thumb: "/assets/imgs/pages/img-150.webp",
        title: "CRM & Integrations",
        tags: [tag(7, "HubSpot"), tag(8, "Zapier"), tag(9, "Airtable")],
        score: 95,
    },
    {
        thumb: "/assets/imgs/pages/img-151.webp",
        title: "Infrastructure",
        tags: [
            tag(10, "Docker", "dark-mode-invert"),
            tag(11, "AWS"),
            tag(12, "Supabase", "dark-mode-invert"),
        ],
        score: 90,
    },
    {
        thumb: "/assets/imgs/pages/img-152.webp",
        title: "Databases & APIs",
        tags: [tag(13, "PostgreSQL"), tag(14, "REST APIs"), tag(15, "GraphQL")],
        score: 94,
    },
];

export default function Section6() {
    return (
        <section className="sec-6-about pt-120 pb-80 p-relative bg-neutral-50">
            <div className="container p-relative z-1">
                <div className="row pb-100 align-items-lg-end">
                    <div className="col-lg-4">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">our skills</span>
                                <span className="text-2">our skills</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="reveal-text">
                            <RevealText>Tech Stack / Tools</RevealText>
                        </h3>
                    </div>
                    <div className="col-xxl-5 col-lg-7 text-lg-end ms-auto">
                        <h6 className="fw-600 fz-font-lg">
                            We leverage modern AI tools, automation platforms, and full-stack development expertise to build reliable systems that scale with your business.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="container p-relative z-1">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-cards">
                            {SKILL_CARDS.map((card, i) => (
                                <div key={i} className="skill-card scroll-move-up">
                                    <div className="skill-card__thumb">
                                        <img
                                            className="img-cover"
                                            src={card.thumb}
                                            alt={card.title}
                                            width={400}
                                            height={300} loading="lazy" />
                                    </div>
                                    <h6 className="skill-card__title">{card.title}</h6>
                                    <div className="skill-card__content">
                                        <div className="skill-card__tags">
                                            {card.tags.map((tag, j) => (
                                                <span key={j} className="skill-card__tag">
                                                    <img
                                                        src={tag.icon}
                                                        alt={tag.label}
                                                        width={tag.width}
                                                        height={tag.height}
                                                        className={`skill-card__tag-icon ${tag.iconClass ?? ""}`.trim()}
                                                        style={{ height: 24, width: "auto" }} loading="lazy" />
                                                    {tag.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="skill-card__score">
                                        <span className="skill-card__score-value">
                                            <OdometerCounter count={card.score} />
                                        </span>
                                        /100
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
