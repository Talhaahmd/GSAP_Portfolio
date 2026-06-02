const TAGS = ["Brand Identity", "Editorial", "Fashion"];

export default function Section1() {
    return (
        <section className="sec-1-portfolio-details-4 overflow-hidden pt-150 pb-60">
            <div className="container">
                <div className="row align-items-end mb-60">
                    <div className="col-lg-10">
                        <nav className="sec-1-portfolio-details-4__crumbs fz-font-label text-uppercase fw-600 neutral-500 mb-30 at_fade_anim" data-fade-from="left" data-delay=".05" aria-label="Breadcrumb">
                            Portfolio <span aria-hidden="true">/</span> Brand Identity <span aria-hidden="true">/</span> Nebula®
                        </nav>
                        <h1 className="sec-1-portfolio-details-4__title fz-ds-1 lh-1 fw-500 d-flex mb-30 at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            Nebula<sup className="fz-80 fw-400 top-0">®</sup>
                        </h1>
                        <p className="sec-1-portfolio-details-4__tagline fz-font-2xl fw-400 neutral-500 mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".2">Fashion Brand Identity Design — built to be felt, not just seen.</p>
                    </div>
                </div>
                <div className="row align-items-center sec-1-portfolio-details-4__bottom">
                    <div className="col-md-9">
                        <ul className="sec-1-portfolio-details-4__tags list-unstyled mb-0 d-flex flex-wrap gap-2 at_fade_anim" data-fade-from="bottom" data-delay=".3">
                            {TAGS.map((t) => (
                                <li key={t} className="sec-1-portfolio-details-4__tag fz-font-label text-uppercase fw-600">{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-3 text-md-end mt-3 mt-md-0">
                        <a href="#" className="sec-1-portfolio-details-4__demo fz-font-md fw-500 neutral-950 at_fade_anim" data-fade-from="right" data-delay=".4">
                            View live demo <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="border-bottom-100 mt-50"></div>
            </div>
        </section>
    );
}
