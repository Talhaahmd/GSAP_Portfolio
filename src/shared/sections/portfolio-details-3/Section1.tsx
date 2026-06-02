import { useCaseStudy } from "./CaseStudyContext";

export default function Section1() {
    const { data: cs, loading } = useCaseStudy();

    if (loading || !cs) return <section className="sec-1-portfolio-details-3 overflow-hidden pt-150 pb-100" />;

    const meta = [
        { label: "Client",       value: cs.meta_client   ?? "", delay: ".1" },
        { label: "Release Date", value: cs.meta_year     ?? "", delay: ".2" },
        { label: "Role",         value: cs.meta_role     ?? "", delay: ".3" },
        { label: "Duration",     value: cs.meta_duration ?? "", delay: ".4" },
    ];

    return (
        <section className="sec-1-portfolio-details-3 overflow-hidden pt-150 pb-100">
            <div className="container">
                <div className="row align-items-center g-4 g-lg-5 sec-1-portfolio-details-3__row">
                    <div className="col-lg-7">
                        <span className="sec-1-portfolio-details-3__eyebrow d-block fz-font-label text-uppercase fw-600 neutral-500 mb-30 at_fade_anim" data-fade-from="left" data-delay=".05">
                            {cs.eyebrow}
                        </span>
                        <h1 className="sec-1-portfolio-details-3__title fz-ds-1 lh-1 fw-500 d-flex mb-30 at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            {cs.client_name}<sup className="fz-80 fw-400 top-0">®</sup>
                        </h1>
                        <p className="sec-1-portfolio-details-3__tagline fz-font-3xl fw-400 neutral-500 mb-50 at_fade_anim" data-fade-from="bottom" data-delay=".2">
                            {cs.tagline}
                        </p>
                        {cs.demo_url && cs.demo_url !== "#" && (
                            <a href={cs.demo_url} target="_blank" rel="noopener noreferrer" className="sec-1-portfolio-details-3__demo d-inline-flex align-items-center gap-2 bg-neutral-950 rounded-pill at_fade_anim" data-fade-from="bottom" data-delay=".3">
                                <span className="fz-font-md fw-500">View live demo</span>
                                <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                                </svg>
                            </a>
                        )}
                    </div>
                    <div className="col-lg-5">
                        <div className="sec-1-portfolio-details-3__portrait">
                            <img className="anim-zoomin" src={cs.hero_portrait_image ?? cs.card_image} alt={cs.title} loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="sec-1-portfolio-details-3__meta border-top-100 mt-60 pt-50">
                    <div className="row g-4">
                        {meta.map((m) => (
                            <div key={m.label} className="col-md-3 col-sm-6 at_fade_anim" data-fade-from="bottom" data-delay={m.delay}>
                                <span className="d-block fz-font-label text-uppercase fw-600 neutral-500 mb-15">{m.label}</span>
                                <p className="fz-font-xl fw-500 neutral-950 mb-0">{m.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
