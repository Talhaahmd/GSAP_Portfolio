import { useCaseStudy } from "./CaseStudyContext";

export default function Section3() {
    const { data: cs, loading } = useCaseStudy();
    if (loading || !cs || !cs.gallery_images?.length) return null;

    return (
        <section className="sec-3-portfolio-details-3 overflow-hidden pt-100 pb-100">
            <div className="container">
                <div className="row mb-50">
                    <div className="col-12">
                        <div className="sec-3-portfolio-details-3__eyebrow d-flex align-items-center gap-2 at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-3-portfolio-details-3__plus" aria-hidden="true"></span>
                            <h2 className="h6 fw-600 mb-0">Gallery</h2>
                        </div>
                    </div>
                </div>
                <div className="sec-3-portfolio-details-3__bento">
                    {cs.gallery_images.map((c, i) => (
                        <figure key={i} className={`sec-3-portfolio-details-3__cell sec-3-portfolio-details-3__cell--${c.size}`}>
                            <img className="anim-zoomin" src={`/assets/imgs/pages/${c.src}`} alt={c.alt} loading="lazy" />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
