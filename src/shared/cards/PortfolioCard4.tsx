import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export type PortfolioCard4Props = {
    classList?: string;
    img: string;
    alt: string;
    href: string;
    metricPrefix: string;
    metricValue: number;
    metricLabel: string;
    tags: string[];
    title: string;
    linkText: string;
};

export default function PortfolioCard4({
    classList = "",
    img,
    alt,
    href,
    metricPrefix,
    metricValue,
    metricLabel,
    tags,
    title,
    linkText,
}: PortfolioCard4Props) {
    return (
        <div
            className={`card_case__studies-list card_case__studies-list--row ${classList}`.trim()}
        >
            <div className="card_case__studies-card card_case__studies-card--overlay bg-neutral-100">
                <div className="card_case__studies-visual anim-zoomin">
                    <Link to={href}>
                        <img src={img} alt={alt} width={600} height={400} loading="lazy" />
                    </Link>
                    <div className="card_case__studies-metric-overlay">
                        <h4 className="card_case__studies-metric-value">
                            <OdometerCounter
                                count={metricValue}
                                prefix={metricPrefix}
                                suffix="%"
                            />
                        </h4>
                        <span className="card_case__studies-metric-label">{metricLabel}</span>
                    </div>
                    <div className="card_case__studies-tags-overlay">
                        {tags.map((tag, j) => (
                            <Link key={j} to="#" className="card_case__studies-tag">
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="card_case__studies-footer mt-10 bg-neutral-0">
                    <h5 className="card_case__studies-footer-title neutral-900">
                        <Link to={href}>{title}</Link>
                    </h5>
                    <Link to={href} className="card_case__studies-link neutral-900">
                        <span className="neutral-900"> {linkText}</span>
                        {PLUS_ICON}
                    </Link>
                </div>
            </div>
        </div>
    );
}
