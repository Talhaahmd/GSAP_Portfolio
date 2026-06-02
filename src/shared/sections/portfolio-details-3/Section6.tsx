import { useCaseStudy } from "./CaseStudyContext";

export default function Section6() {
    const { data: cs, loading } = useCaseStudy();
    if (loading || !cs) return <section className="sec-6-portfolio-details-3 overflow-hidden pt-100 pb-100" />;

    return (
        <section className="sec-6-portfolio-details-3 overflow-hidden pt-100 pb-100">
            <div className="container">
                <div className="row mb-50">
                    <div className="col-12">
                        <div className="sec-6-portfolio-details-3__eyebrow d-flex align-items-center gap-2 at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-6-portfolio-details-3__plus" aria-hidden="true"></span>
                            <h2 className="h6 fw-600 mb-0">Solution &amp; Outcome</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 sec-6-portfolio-details-3__pair">
                    <div className="col-lg-6 sec-6-portfolio-details-3__col at_fade_anim" data-fade-from="left" data-delay=".1">
                        <span className="d-block fz-font-label text-uppercase fw-600 neutral-500 mb-3">01 — The Solution</span>
                        <h3 className="fz-font-3xl fw-500 neutral-950 mb-30">{cs.solution_heading}</h3>
                        <p className="fz-font-md neutral-500 mb-30">{cs.solution_paragraph}</p>
                        <ul className="sec-6-portfolio-details-3__list ps-0 mb-0">
                            {cs.solution_items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="col-lg-6 sec-6-portfolio-details-3__col sec-6-portfolio-details-3__col--right at_fade_anim" data-fade-from="right" data-delay=".2">
                        <span className="d-block fz-font-label text-uppercase fw-600 neutral-500 mb-3">02 — Outcome</span>
                        <h3 className="fz-font-3xl fw-500 neutral-950 mb-30">{cs.outcome_heading}</h3>
                        <p className="fz-font-md neutral-500 mb-30">{cs.outcome_paragraph}</p>
                        <ul className="sec-6-portfolio-details-3__list ps-0 mb-0">
                            {cs.outcome_items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
