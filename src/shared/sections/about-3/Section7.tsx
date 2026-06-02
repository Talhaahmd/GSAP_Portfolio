import RevealText from "@/shared/effects/RevealText";

// About 3 Section 7 - FAQ

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const FAQ_ITEMS = [
    {
        id: "collapseOne",
        num: "1",
        question: "What does Klarus AI actually build?",
        answer: "We build AI automation systems, MVPs, CRM integrations, workflow tools, and scalable digital products. Everything we deliver is designed to reduce manual work and help your business grow faster.",
        open: true,
    },
    {
        id: "collapseTwo",
        num: "2",
        question: "How long does a typical project take?",
        answer: "Timelines vary by scope. A workflow automation can be live in 1–2 weeks, while a full MVP typically takes 4–10 weeks — with clear milestones throughout.",
        open: false,
    },
    {
        id: "collapseThree",
        num: "3",
        question: "Do you work with startups or established businesses?",
        answer: "Both. We work with early-stage startups building their first product and established companies looking to automate operations or integrate AI into existing systems.",
        open: false,
    },
    {
        id: "collapseFour",
        num: "4",
        question: "What tools and platforms do you work with?",
        answer: "We work across a wide range including OpenAI, Make.com, Zapier, HubSpot, Airtable, React, Node.js, Next.js, AWS, Supabase, PostgreSQL, and more — choosing the right stack for each project.",
        open: false,
    },
];

export default function Section7({ classList = "" }: { classList?: string }) {
    return (
        <section className={`sec-7-about py-5 overflow-hidden ${classList ?? ""}`.trim()}>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">FAQ</span>
                                <span className="text-2">FAQ</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="section-title lh-1 reveal-text">
                            <RevealText>
                                Frequently <br />Asked Questions
                            </RevealText>
                        </h3>
                        <h6 className="fz-font-lg fw-500">
                            Your questions about our process, services, <br className="d-none d-xxl-block" />and workflow—answered.
                        </h6>
                    </div>
                    <div className="col-lg-7 ms-lg-auto">
                        <div className="accordion pt-80" id="accordionExample">
                            {FAQ_ITEMS.map((item) => (
                                <div
                                    key={item.id}
                                    className="at-faq-item bg-neutral-0 border-100 scroll-move-up rounded-4"
                                >
                                    <div className="at-faq-header d-flex gap-2">
                                        <div className="box-number">
                                            <span className="at-faq-number">{item.num}</span>
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
                                        data-bs-parent="#accordionExample"
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
        </section>
    );
}
