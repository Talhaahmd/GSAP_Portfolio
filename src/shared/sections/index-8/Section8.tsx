import RevealText from "@/shared/effects/RevealText";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    quote: string;
    avatar: string;
    groupClass: string;
    reversed?: boolean;
}

const testimonials: Testimonial[] = [
    {
        name: "Marcus Thorne",
        role: "CTO",
        company: "NexusTech",
        quote: "\"Orisa doesn't just build models; he builds engines for growth. His ability to deploy complex architectures with 99.9% reliability is what sets his work apart.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-1.webp",
        groupClass: "sec-8-home-8__group--a",
    },
    {
        name: "Sarah Jenkins",
        role: "Lead Architect",
        company: "FlowData",
        quote: "\"From start to finish, the transition from raw data to a production-ready API was seamless. The efficiency gains in our pipeline exceeded all expectations.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-2.webp",
        groupClass: "sec-8-home-8__group--b",
        reversed: true,
    },
    {
        name: "Elena Rossi",
        role: "Head of AI",
        company: "Synthetix Systems",
        quote: "\"Orisa has a rare architectural intuition, cutting legacy neural network latency by 40% while maintaining accuracy.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-3.webp",
        groupClass: "sec-8-home-8__group--c",
    },
    {
        name: "Daniel Park",
        role: "Head of AI",
        company: "Synthetix Systems",
        quote: "\"With a rare gift for architecture, Orisa optimized our legacy neural networks, slashing latency by 40% while maintaining accuracy.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-4.webp",
        groupClass: "sec-8-home-8__group--d",
    },
];

function StarsRating() {
    return (
        <>
            {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src="/assets/imgs/pages/home-8/sec8-star.svg" alt="orisa" width={16} height={16} loading="lazy" />
            ))}
        </>
    );
}

export default function Section8() {
    return (
        <section className="sec-8-home-8 p-relative">
            <div className="container-fluid sec-8-home-8__container">
                <div className="sec-8-home-8__top d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <span className="sec-8-home-8__kicker text-scramble">Testimonials</span>
                        <span className="sec-8-home-8__kicker-icon" aria-hidden="true">
                            <img src="/assets/imgs/pages/home-8/sec8-arrow.svg" alt="orisa" width={24} height={12} loading="lazy" />
                        </span>
                    </div>
                    <span className="sec-8-home-8__trusted text-decoration-underline at_fade_anim">15k+ trusted clients</span>
                </div>
                <div className="sec-8-home-8__stage">
                    <div className="sec-8-home-8__center">
                        <img className="sec-8-home-8__asterisk at-scroll-rotate" data-rotate-duration="12" data-rotate-sensitivity="0.18" data-rotate-boost="12" src="/assets/imgs/pages/home-8/sec8-asterisk.svg" alt="orisa" width={100} height={100} loading="lazy" />
                        <h2 className="sec-8-home-8__title mb-0 reveal-text"><RevealText>Insights from Industry Partners</RevealText></h2>
                    </div>

                    {testimonials.map((t, index) => (
                        <div key={index} className={`sec-8-home-8__group ${t.groupClass}`}>
                            {t.reversed ? (
                                <>
                                    <div className="sec-8-home-8__card">
                                        <div className="sec-8-home-8__role">
                                            <span>{t.role}</span>
                                            <span>{t.company}</span>
                                        </div>
                                        <div className="sec-8-home-8__body">
                                            <div className="sec-8-home-8__avatar">
                                                <img src={t.avatar} alt="orisa" width={80} height={80} loading="lazy" />
                                            </div>
                                            <p className="sec-8-home-8__quote mb-0">
                                                {t.quote}
                                            </p>
                                        </div>
                                        <div className="sec-8-home-8__stars" aria-hidden="true">
                                            <StarsRating />
                                        </div>
                                    </div>
                                    <div className="sec-8-home-8__namebar">
                                        <span className="sec-8-home-8__name">{t.name}</span>
                                        <span className="sec-8-home-8__plus" aria-hidden="true">+</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="sec-8-home-8__namebar">
                                        <span className="sec-8-home-8__name">{t.name}</span>
                                        <span className="sec-8-home-8__plus" aria-hidden="true">+</span>
                                    </div>
                                    <div className="sec-8-home-8__card">
                                        <div className="sec-8-home-8__role">
                                            <span>{t.role}</span>
                                            <span>{t.company}</span>
                                        </div>
                                        <div className="sec-8-home-8__body">
                                            <div className="sec-8-home-8__avatar">
                                                <img src={t.avatar} alt="orisa" width={80} height={80} loading="lazy" />
                                            </div>
                                            <p className="sec-8-home-8__quote mb-0">
                                                {t.quote}
                                            </p>
                                        </div>
                                        <div className="sec-8-home-8__stars" aria-hidden="true">
                                            <StarsRating />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center w-50 mx-auto scroll-move-up">
                    <h6 className="sec-8-home-8__view-all at_fade_anim reveal-text"><RevealText>Expert perspectives and strategic trends shared by our leading industry partners to help you stay ahead.</RevealText></h6>
                </div>
            </div>
        </section>
    );
}
