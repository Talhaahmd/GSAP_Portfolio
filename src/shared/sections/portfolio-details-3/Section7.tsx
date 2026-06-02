import { useCaseStudy } from "./CaseStudyContext";

export default function Section7() {
    const { data: cs, loading } = useCaseStudy();
    if (loading || !cs?.closing_image) return null;

    return (
        <section className="sec-7-portfolio-details-3 overflow-hidden">
            <div className="sec-7-portfolio-details-3__media">
                <img className="anim-zoomin" src={cs.closing_image} alt={cs.title} loading="lazy" />
            </div>
        </section>
    );
}
