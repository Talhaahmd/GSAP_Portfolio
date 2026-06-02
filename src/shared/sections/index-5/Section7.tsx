import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 5 Section 7 - Testimonials

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const STAR_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path
            d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369575 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
            fill="currentColor"
        />
    </svg>
);

type TestimonialItem = {
    name: string;
    roleLine: string;
    avatar: string;
    quote: string;
    /** If true: header (name +) on top, then body. If false: body first, then header. */
    headerFirst: boolean;
    orderClass: string;
};

const TESTIMONIALS: TestimonialItem[] = [
    {
        name: "Marcus Thorne",
        roleLine: "CTO\nNexusTech",
        avatar: "/assets/imgs/template/avatar/avatar-10.webp",
        quote:
            '"Orisa doesn\'t just build models; he builds engines for growth. His ability to deploy complex architectures with 99.9% reliability is what sets his work apart."',
        headerFirst: true,
        orderClass: "order-1",
    },
    {
        name: "Sarah Jenkins",
        roleLine: "Lead Architect\nFlowData",
        avatar: "/assets/imgs/template/avatar/avatar-12.webp",
        quote:
            '"From start to finish, the transition from raw data to a production-ready API was seamless. The efficiency gains in our pipeline exceeded all expectations."',
        headerFirst: false,
        orderClass: "order-md-2 order-3",
    },
    {
        name: "Elena Rossi",
        roleLine: "Head of AI\nSynthetix Systems",
        avatar: "/assets/imgs/template/avatar/avatar-16.webp",
        quote:
            '"Orisa possesses a rare architectural intuition. He successfully optimized our legacy neural networks, reducing latency by 40% without compromising on model accuracy."',
        headerFirst: true,
        orderClass: "order-md-3 order-2",
    },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
    const headerBlock = (
        <div className="bg-neutral-0 rounded-4 px-5 py-3">
            <h6 className="d-flex justify-content-between align-items-center mb-0">
                <span>{item.name}</span>
                <span>+</span>
            </h6>
        </div>
    );
    const bodyBlock = (
        <div className="bg-neutral-0 rounded-4 p-5 mt-2">
            <h6 className="fz-font-md fw-500 text-end mb-0">
                {item.roleLine.split("\n").map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < item.roleLine.split("\n").length - 1 && <br />}
                    </span>
                ))}
            </h6>
            <div className="pt-30">
                <div className="sec-2-home-5__avatar-sm">
                    <img
                        src={item.avatar}
                        alt="orisa"
                        width={65}
                        height={65}
                        className="img-cover" loading="lazy" />
                </div>
                <blockquote className="neutral-500 fz-font-lg fw-500 mb-3 mt-30 text-truncate-5">
                    {item.quote}
                </blockquote>
                <div className="d-flex">
                    {[true, true, true, false, false].map((filled, i) => (
                        <span key={i} className={filled ? "star" : ""}>
                            {STAR_SVG}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
    return (
        <div className="hover-unborder">
            {item.headerFirst ? (
                <>
                    {headerBlock}
                    {bodyBlock}
                </>
            ) : (
                <>
                    <div className="bg-neutral-0 rounded-4 p-5 mb-2">
                        <h6 className="fz-font-md fw-500 text-end mb-0">
                            {item.roleLine.split("\n").map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < item.roleLine.split("\n").length - 1 && <br />}
                                </span>
                            ))}
                        </h6>
                        <div className="pt-30">
                            <div className="sec-2-home-5__avatar-sm">
                                <img
                                    src={item.avatar}
                                    alt="orisa"
                                    width={65}
                                    height={65}
                                    className="img-cover" loading="lazy" />
                            </div>
                            <blockquote className="neutral-500 fz-font-lg fw-500 mb-3 mt-30 text-truncate-5">
                                {item.quote}
                            </blockquote>
                            <div className="d-flex">
                                {[true, true, true, false, false].map((filled, i) => (
                                    <span key={i} className={filled ? "star" : ""}>
                                        {STAR_SVG}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {headerBlock}
                </>
            )}
        </div>
    );
}

export default function Section7() {
    return (
        <section className="home-5-section-7 p-relative pt-120 pb-100 bg-neutral-50">
            <div className="container">
                <div className="row align-items-end g-4">
                    <div className="col-xxl-5">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Testimonials</span>
                                <span className="text-2">Testimonials</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="reveal-text mb-0">
                            <RevealText>Insights from Industry Partners</RevealText>
                        </h2>
                    </div>
                    <div className="col-xxl-5 col-md-8 ms-xxl-auto">
                        <div className="d-flex align-items-center gap-5 justify-content-xxl-end">
                            <h6 className="fw-600">
                                245 Fifth Avenue, Suite 1800 <br />
                                New York, NY 10016, USA
                            </h6>
                            <div>
                                <h6 className="fw-600">
                                    <Link to="tel:+2125557398">+212-555-7398</Link>
                                </h6>
                                <h6 className="fw-600">
                                    <Link to="mailto:hello@orisa.com">hello@orisa.com</Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-80">
                <div className="row g-2">
                    {TESTIMONIALS.map((item, i) => (
                        <div
                            key={i}
                            className={`col-xxl-3 col-lg-4 col-md-6 col-12 ${item.orderClass}`}
                        >
                            <TestimonialCard item={item} />
                        </div>
                    ))}
                    <div className="col-xxl-3 col-md-6 order-4 d-lg-none d-xxl-block">
                        <div className="changeless">
                            <div className="team-card">
                                <div className="team-card-image">
                                    <div className="anim-zoomin">
                                        <img
                                            src="/assets/imgs/pages/img-112.webp"
                                            alt="orisa"
                                            width={450}
                                            height={500}
                                            className="img-cover" loading="lazy" />
                                    </div>
                                </div>
                                <div className="team-card-content">
                                    <h6 className="team-card-position fz-font-3xl fw-400 m-0 neutral-0">
                                        Real-world experience through projects.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
