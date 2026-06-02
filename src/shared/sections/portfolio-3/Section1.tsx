import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortfolioCard3 from "@/shared/cards/PortfolioCard3";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import PortfolioFilterSort, { type FilterValue } from "@/shared/sections/portfolio-1/PortfolioFilterSort";
import { getCaseStudies, type CaseStudy } from "@/lib/supabase";

const AVATARS = [
    "/assets/imgs/template/avatar/avatar-10.webp",
    "/assets/imgs/template/avatar/avatar-11.webp",
    "/assets/imgs/template/avatar/avatar-12.webp",
    "/assets/imgs/template/avatar/avatar-13.webp",
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const PLAY_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="44" viewBox="0 0 35 44" fill="none">
        <path d="M6.40193e-06 5.72002V38.28C6.40193e-06 40.7629 2.76819 42.2714 4.90001 40.92L30.8 24.64C31.2534 24.3566 31.6269 23.9644 31.8858 23.5001C32.1446 23.0358 32.2803 22.5144 32.2803 21.9843C32.2803 21.4543 32.1446 20.9328 31.8858 20.4685C31.6269 20.0042 31.2534 19.612 30.8 19.3286L4.90001 3.08002C4.42009 2.77341 3.86529 2.60044 3.29413 2.57934C2.72298 2.55824 2.15665 2.6898 1.65488 2.96014C1.15312 3.23048 0.734523 3.62957 0.443259 4.11532C0.151995 4.60107 -0.00114111 5.15546 6.40193e-06 5.72002Z" fill="#FEFEFE" />
    </svg>
);

export default function Section1() {
    const [allItems, setAllItems] = useState<CaseStudy[]>([]);
    const [featured, setFeatured] = useState<CaseStudy | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCaseStudies().then((data) => {
            setFeatured(data.find((d) => d.is_featured) ?? null);
            setAllItems(data.filter((d) => !d.is_featured));
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const portfolioItems = allItems.map((item) => ({
        classList: "col-lg-6",
        category: item.category as FilterValue,
        link: `/portfolio-details-3/${item.slug}`,
        img: item.card_image,
        title: item.title,
        metricPrefix: item.metric_prefix,
        metricValue: item.metric_value,
        metricLabel: item.metric_label,
        tags: item.tags,
    }));

    return (
        <section className="sec-1-portfolio-3 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container pb-60">
                <div className="row g-4 align-items-end">
                    <div className="col-xxl-8 col-lg-7">
                        <h1 className="fz-ds-1 fw-500">What We&apos;ve Built</h1>
                        <p className="fz-font-lg neutral-900 mb-0">
                            A thoughtful selection of work shaped by simplicity and meaningful outcomes.
                        </p>
                    </div>
                    <div className="col-xxl-3 col-lg-5 ms-lg-auto">
                        <div className="sec-2-home-5__avatars-row d-flex justify-content-lg-end gap-2">
                            {AVATARS.map((src, i) => (
                                <div key={i} className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img">
                                    <img className="img-cover" src={src} alt="" width={48} height={48} loading="lazy" />
                                </div>
                            ))}
                        </div>
                        <h6 className="fw-500 fz-font-lg text-lg-end mt-3 mb-0">
                            info@klarus.io / (212) 555-7398
                        </h6>
                    </div>
                    <div className="col-12">
                        <div className="border-bottom-100 pb-30" />
                    </div>
                </div>
            </div>

            <div className="container">
                {loading && <p className="neutral-500 pb-60">Loading projects…</p>}
                {!loading && (
                    <PortfolioFilterSort items={portfolioItems}>
                        {(visibleItems, { hasMore, onLoadMore }) => (
                            <div className="row align-items-center g-4">
                                {/* Featured card */}
                                {featured && (
                                    <div className="col-12">
                                        <div className="card_case__studies-list card_case__studies">
                                            <div className="card_case__studies-card">
                                                <div className="card_case__studies-left">
                                                    <span className="card_case__studies-featured-tag">Featured case</span>
                                                    <h4 className="card_case__studies-title">
                                                        <Link to={`/portfolio-details-3/${featured.slug}`}>
                                                            {featured.title}
                                                        </Link>
                                                    </h4>
                                                    <p className="card_case__studies-desc">{featured.featured_description}</p>
                                                    <div className="card_case__studies-metrics">
                                                        <div className="card_case__studies-metric">
                                                            <h4 className="card_case__studies-metric-value mb-0">
                                                                <OdometerCounter count={Number(featured.metric_value) || 0} prefix={featured.metric_prefix} suffix="%" />
                                                            </h4>
                                                            <span className="card_case__studies-metric-label">{featured.metric_label}</span>
                                                        </div>
                                                        {featured.featured_metric_2_value && (
                                                            <>
                                                                <div className="card_case__studies-metric-divider" />
                                                                <div className="card_case__studies-metric">
                                                                    <h4 className="card_case__studies-metric-value mb-0">
                                                                        <OdometerCounter count={Number(featured.featured_metric_2_value) || 0} prefix={featured.featured_metric_2_prefix ?? ""} suffix="%" />
                                                                    </h4>
                                                                    <span className="card_case__studies-metric-label">{featured.featured_metric_2_label}</span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="d-flex align-items-end justify-content-between mt-auto">
                                                        <div className="card_case__studies-tags">
                                                            {(featured.featured_tags.length ? featured.featured_tags : featured.tags).map((tag) => (
                                                                <Link key={tag} to="#" className="card_case__studies-tag">{tag}</Link>
                                                            ))}
                                                        </div>
                                                        <Link to={`/portfolio-details-3/${featured.slug}`} className="card_case__studies-link text-white">
                                                            <span className="text-white text-nowrap">View case</span>
                                                            {PLUS_ICON}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="card_case__studies-right">
                                                    <div className="card_case__studies-thumb anim-zoomin">
                                                        <Link to={`/portfolio-details-3/${featured.slug}`}>
                                                            <img src={featured.featured_image ?? featured.card_image} alt={featured.title} width={800} height={500} className="img-cover" loading="lazy" />
                                                        </Link>
                                                        {featured.featured_video_url && (
                                                            <div className="card_case__studies-play p-relative postbox-play-btn">
                                                                <a className="popup-video size-100" href={featured.featured_video_url} target="_blank" rel="noopener noreferrer" aria-label="Play video">
                                                                    <span className="text-white">{PLAY_ICON}</span>
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Grid cards */}
                                {visibleItems.map((item, idx) => (
                                    <PortfolioCard3
                                        key={`${item.title}-${idx}`}
                                        classList={item.classList}
                                        category={item.category}
                                        link={item.link}
                                        img={item.img}
                                        title={item.title}
                                        metricPrefix={item.metricPrefix}
                                        metricValue={item.metricValue}
                                        metricLabel={item.metricLabel}
                                        tags={item.tags}
                                    />
                                ))}

                                {hasMore && (
                                    <div className="col-12 text-center pt-40">
                                        <button type="button" className="at-btn" onClick={onLoadMore}>
                                            <span>
                                                <span className="text-1">LOAD MORE PROJECTS</span>
                                                <span className="text-2">LOAD MORE PROJECTS</span>
                                            </span>
                                            <i>{ARROW_SVG}{ARROW_SVG}</i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </PortfolioFilterSort>
                )}
            </div>
        </section>
    );
}
