import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const PLUS_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
    <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
  </svg>
);

export type PortfolioCard2Props = {
  classList?: string;
  category: string;
  link: string;
  img: string;
  title: string;
  headline: string;
  description: string;
  linkCase: string;
  featuredHtml?: ReactNode;
};

export default function PortfolioCard2({
  classList = "",
  category,
  link,
  img,
  title,
  headline,
  description,
  linkCase,
  featuredHtml,
}: PortfolioCard2Props) {
  return (
    <div
      className={`alt-portfolio-item card-portfolio mb-50 at-hover-item ${classList}`.trim()}
      data-category={category}
    >
      <Link to={link} className="alt-portfolio-thumb mb-15 p-relative fix d-block">
        <img src={img} alt={title} width={600} height={400} className="w-100 img-cover" />
        <span className="alt-portfolio-btn">
          <div className="content changeless">
            <span className="bg-transparent text-uppercase border px-3 py-2 rounded-pill common-white fz-font-label">
              {category}
            </span>
            <h4 className="fw-400 text-white mb-0 mt-15">{headline}</h4>
            <p className="text-white fz-font-md mb-0 mt-10 text-truncate-3 des pr-250">{description}</p>
          </div>
        </span>
        {featuredHtml}
      </Link>
      <div className="alt-portfolio-content d-flex justify-content-between">
        <h5 className="alt-portfolio-title mb-0 fw-600">
          <Link to={link} className="common-underline">
            {title}
          </Link>
        </h5>
        <Link to={linkCase} className="alt-portfolio-plus neutral-950 d-flex align-items-center gap-2">
          <span className="fz-font-label neutral-900 text-uppercase fw-600">View case</span>
          {PLUS_SVG}
        </Link>
      </div>
    </div>
  );
}
