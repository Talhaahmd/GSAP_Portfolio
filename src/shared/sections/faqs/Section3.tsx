import RevealText from "@/shared/effects/RevealText";

// FAQs section 3 - Scroll sections with accordions by topic

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

type FaqItem = {
    id: string;
    num: string;
    question: string;
    answer: string;
    open: boolean;
};

type FaqSection = {
    number: string;
    title: React.ReactNode;
    description: string;
    accordionId: string;
    items: FaqItem[];
};

const FAQ_SECTIONS: FaqSection[] = [
    {
        number: "01",
        title: "General Information",
        description:
            "Essential questions to understand who we are, what we do, and who we work with.",
        accordionId: "accordionFaq1",
        items: [
            {
                id: "collapseFaq1-1",
                num: "1",
                question: "What does your agency do?",
                answer:
                    "We help brands grow through strategy, design, and digital experiences that connect with people.",
                open: true,
            },
            {
                id: "collapseFaq1-2",
                num: "2",
                question: "Who do you typically work with?",
                answer:
                    "We work with startups, growing businesses, and established brands across industries.",
                open: false,
            },
            {
                id: "collapseFaq1-3",
                num: "3",
                question: "Are you a full-service creative agency?",
                answer: "Yes, we provide end-to-end services from strategy to execution.",
                open: false,
            },
            {
                id: "collapseFaq1-4",
                num: "4",
                question: "Do you work with international clients?",
                answer:
                    "Yes, we collaborate with clients worldwide across different time zones.",
                open: false,
            },
        ],
    },
    {
        number: "02",
        title: (
            <>
                Services <br />
                and Solutions
            </>
        ),
        description:
            "Details about our AI solutions, consulting offerings, and system capabilities.",
        accordionId: "accordionFaq2",
        items: [
            {
                id: "collapseFaq2-1",
                num: "1",
                question: "What services do you offer?",
                answer:
                    "We help brands grow through strategy, design, and digital experiences that connect with people.",
                open: true,
            },
            {
                id: "collapseFaq2-2",
                num: "2",
                question: "Do you offer custom solutions?",
                answer: "Yes, every solution is tailored to each client's goals and needs.",
                open: false,
            },
            {
                id: "collapseFaq2-3",
                num: "3",
                question: "Can you handle both design and development?",
                answer: "Yes, our team covers both design and full-stack development.",
                open: false,
            },
            {
                id: "collapseFaq2-4",
                num: "4",
                question: "Do you work on one-time projects or ongoing partnerships?",
                answer: "We offer both one-time projects and long-term collaborations.",
                open: false,
            },
        ],
    },
    {
        number: "03",
        title: "Process & Collaboration",
        description:
            "How we approach problems, execute projects, and collaborate with clients.",
        accordionId: "accordionFaq3",
        items: [
            {
                id: "collapseFaq3-1",
                num: "1",
                question: "How do projects usually start?",
                answer:
                    "Projects begin with a discovery phase to understand objectives, data readiness, and system constraints.",
                open: true,
            },
            {
                id: "collapseFaq3-2",
                num: "2",
                question: "How do you communicate during a project?",
                answer:
                    "We communicate regularly through meetings, emails, and project tools.",
                open: false,
            },
            {
                id: "collapseFaq3-3",
                num: "3",
                question: "How long does a typical project take?",
                answer: "Timelines vary based on scope, but most projects take 4–12 weeks.",
                open: false,
            },
            {
                id: "collapseFaq3-4",
                num: "4",
                question: "Can the scope change during development?",
                answer: "Yes, scope changes are managed through a clear change process.",
                open: false,
            },
        ],
    },
    {
        number: "04",
        title: (
            <>
                Engagement <br />
                and Support
            </>
        ),
        description:
            "Post-launch support, maintenance, updates, and system optimization.",
        accordionId: "accordionFaq4",
        items: [
            {
                id: "collapseFaq4-1",
                num: "1",
                question: "How do you price your services?",
                answer:
                    "Pricing is based on project scope, complexity, and engagement type.",
                open: true,
            },
            {
                id: "collapseFaq4-2",
                num: "2",
                question: "Do you offer fixed or hourly pricing?",
                answer: "We offer both fixed-price and hourly engagement models.",
                open: false,
            },
            {
                id: "collapseFaq4-3",
                num: "3",
                question: "Is there a minimum project size?",
                answer: "Yes, minimum project scope depends on service requirements.",
                open: false,
            },
            {
                id: "collapseFaq4-4",
                num: "4",
                question: "Do you provide support after launch?",
                answer: "Yes, we offer ongoing support and maintenance options.",
                open: false,
            },
        ],
    },
];

export default function Section3() {
    return (
        <section className="sec-3-faqs p-relative z-n1 pb-100">
            <div className="scroll-section">
                <div className="wrapper">
                    {FAQ_SECTIONS.map((section) => (
                        <div
                            key={section.accordionId}
                            className="item bg-neutral-0 d-block"
                        >
                            <div className="pt-100 border-top-100">
                                <div className="container">
                                    <div className="row g-4">
                                        <div className="col-lg-4 h-100">
                                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                                <span className="text-uppercase">
                                                    <span className="text-1">
                                                        [ {section.number} ]
                                                    </span>
                                                    <span className="text-2">
                                                        [ {section.number} ]
                                                    </span>
                                                </span>
                                                <i>
                                                    {ARROW_SVG}
                                                    {ARROW_SVG}
                                                </i>
                                            </span>
                                            <h3 className="reveal-text">
                                                <RevealText>{section.title}</RevealText>
                                            </h3>
                                            <h6 className="fw-500 mb-0 fz-font-lg">
                                                {section.description}
                                            </h6>
                                            <div className="section-title-pin"></div>
                                        </div>
                                        <div className="col-lg-7 offset-lg-1 p-relative">
                                            <div
                                                className="accordion p-relative z-index-3"
                                                id={section.accordionId}
                                            >
                                                {section.items.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="at-faq-item bg-neutral-0 border-100 rounded-4"
                                                    >
                                                        <div className="at-faq-header d-flex gap-2">
                                                            <div className="box-number">
                                                                <span className="at-faq-number">
                                                                    {item.num}
                                                                </span>
                                                            </div>
                                                            <button
                                                                className={`at-faq-button${item.open ? "" : " collapsed"}`}
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#${item.id}`}
                                                                aria-expanded={item.open}
                                                                aria-controls={item.id}
                                                            >
                                                                {item.question}
                                                            </button>
                                                        </div>
                                                        <div
                                                            id={item.id}
                                                            className={`at-faq-collapse collapse${item.open ? " show" : ""}`}
                                                            data-bs-parent={`#${section.accordionId}`}
                                                        >
                                                            <div className="at-faq-body">
                                                                <p>{item.answer}</p>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
