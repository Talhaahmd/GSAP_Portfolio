import { useCaseStudy } from "./CaseStudyContext";

export default function Section2() {
    const { data: cs, loading } = useCaseStudy();
    if (loading || !cs) return <section className="sec-2-portfolio-details-3 overflow-hidden pt-100 pb-100" />;

    const stats = [
        { num: cs.stat_1_num, label: cs.stat_1_label, delay: ".15" },
        { num: cs.stat_2_num, label: cs.stat_2_label, delay: ".25" },
        { num: cs.stat_3_num, label: cs.stat_3_label, delay: ".35" },
    ].filter((s) => s.num);

    return (
        <section className="sec-2-portfolio-details-3 overflow-hidden pt-100 pb-100">
            <div className="container">
                <div className="row mb-50">
                    <div className="col-12">
                        <div className="sec-2-portfolio-details-3__eyebrow d-flex align-items-center gap-2 at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-2-portfolio-details-3__plus" aria-hidden="true"></span>
                            <h2 className="h6 fw-600 mb-0">Introduction</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 g-lg-5 align-items-start">
                    <div className="col-lg-4">
                        <h3 className="sec-2-portfolio-details-3__headline fz-font-3xl fw-500 neutral-950 mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            {cs.intro_headline}
                        </h3>
                    </div>
                    <div className="col-lg-4">
                        <p className="sec-2-portfolio-details-3__paragraph fz-font-md neutral-500 mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".2">
                            {cs.intro_paragraph}
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <ul className="sec-2-portfolio-details-3__stats list-unstyled mb-0">
                            {stats.map((s) => (
                                <li key={s.label} className="sec-2-portfolio-details-3__stat at_fade_anim" data-fade-from="left" data-delay={s.delay}>
                                    <span className="sec-2-portfolio-details-3__stat-number d-block fw-500 neutral-950 lh-1">{s.num}</span>
                                    <span className="sec-2-portfolio-details-3__stat-label d-block fz-font-md neutral-500">{s.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
