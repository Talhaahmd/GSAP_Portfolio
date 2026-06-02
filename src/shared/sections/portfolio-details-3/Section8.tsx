import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCaseStudy } from "./CaseStudyContext";
import { getRelatedCaseStudies, type CaseStudy } from "@/lib/supabase";

const ArrowIcon = (
    <svg width="22" height="22" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

export default function Section8() {
    const { data: cs, loading } = useCaseStudy();
    const [related, setRelated] = useState<CaseStudy[]>([]);

    useEffect(() => {
        if (!cs?.related_slugs?.length) return;
        getRelatedCaseStudies(cs.related_slugs).then(setRelated);
    }, [cs]);

    if (loading || !cs) return <section className="sec-8-portfolio-details-3 overflow-hidden pt-100 pb-150" />;

    return (
        <section className="sec-8-portfolio-details-3 overflow-hidden pt-100 pb-150">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-12">
                        <div className="sec-8-portfolio-details-3__eyebrow d-flex align-items-center gap-2 at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-8-portfolio-details-3__plus" aria-hidden="true"></span>
                            <h2 className="h6 fw-600 mb-0">Related projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row mb-60">
                    <div className="col-lg-8">
                        <p className="sec-8-portfolio-details-3__title fz-font-3xl fw-500 neutral-950 mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".15">
                            More work from Klarus AI
                        </p>
                    </div>
                </div>
                <div className="row g-4 g-lg-5">
                    {related.slice(0, 2).map((r, i) => (
                        <div key={r.slug} className="col-md-6 at_fade_anim" data-fade-from="bottom" data-delay={i === 0 ? ".1" : ".25"}>
                            <Link to={`/portfolio-details-3/${r.slug}`} className="sec-8-portfolio-details-3__card at-image-hover d-block">
                                <figure className="sec-8-portfolio-details-3__thumb">
                                    <img className="anim-zoomin" src={r.card_image} alt={r.title} loading="lazy" />
                                </figure>
                                <div className="sec-8-portfolio-details-3__meta">
                                    <div className="sec-8-portfolio-details-3__tag fz-font-label text-uppercase fw-600">{r.tags[0] ?? r.category}</div>
                                    <div className="sec-8-portfolio-details-3__row">
                                        <h3 className="sec-8-portfolio-details-3__name fz-font-3xl fw-500 mb-0">{r.title}</h3>
                                        <span className="sec-8-portfolio-details-3__arrow" aria-hidden="true">{ArrowIcon}</span>
                                    </div>
                                    <p className="sec-8-portfolio-details-3__desc fz-font-md neutral-500 mb-0">{r.tagline ?? r.featured_description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
