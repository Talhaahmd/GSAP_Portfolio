const CREDITS = [
    { label: "Design", value: "Orisa Studio" },
    { label: "Direction", value: "Elena Morrison" },
    { label: "Client", value: "Nebula Labs" },
    { label: "Year", value: "2024" },
];

const MarqueeText = (
    <span className="sec-1-portfolio-details-6__marquee-text">
        Fashion <span className="sec-1-portfolio-details-6__marquee-dot">●</span> Identity <span className="sec-1-portfolio-details-6__marquee-dot">●</span> Editorial <span className="sec-1-portfolio-details-6__marquee-dot">●</span> Lookbook <span className="sec-1-portfolio-details-6__marquee-dot">●</span> Branding <span className="sec-1-portfolio-details-6__marquee-dot">●</span>{" "}
    </span>
);

export default function Section1() {
    return (
        <section className="sec-1-portfolio-details-6 overflow-hidden">
            <div className="sec-1-portfolio-details-6__top pt-150 pb-50">
                <div className="container text-center">
                    <span className="sec-1-portfolio-details-6__byline fz-font-label text-uppercase fw-600 neutral-500 d-block mb-30 at_fade_anim" data-fade-from="bottom" data-delay=".05">Issue N°06 <span aria-hidden="true">·</span> May 2024 <span aria-hidden="true">·</span> Case Study</span>
                    <h1 className="sec-1-portfolio-details-6__title fw-500 neutral-950 d-inline-flex mb-30 at_fade_anim" data-fade-from="bottom" data-delay=".1">
                        Nebula<sup className="fz-80 fw-400 top-0">®</sup>
                    </h1>
                    <p className="sec-1-portfolio-details-6__tagline fz-font-3xl fw-400 neutral-500 mb-50 at_fade_anim" data-fade-from="bottom" data-delay=".2">Fashion Brand Identity Design</p>

                    <div className="sec-1-portfolio-details-6__credits border-top-100 border-bottom-100 at_fade_anim" data-fade-from="bottom" data-delay=".3">
                        <div className="row text-start">
                            {CREDITS.map((c) => (
                                <div key={c.label} className="col-md-3 col-6 sec-1-portfolio-details-6__credit-cell">
                                    <span className="d-block fz-font-label text-uppercase fw-600 neutral-500 mb-2">{c.label}</span>
                                    <p className="fz-font-md fw-500 neutral-950 mb-0">{c.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec-1-portfolio-details-6__marquee" aria-hidden="true">
                <div className="sec-1-portfolio-details-6__marquee-track">
                    {MarqueeText}{MarqueeText}{MarqueeText}
                </div>
            </div>
        </section>
    );
}
