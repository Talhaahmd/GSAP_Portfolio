import { Link } from "react-router-dom";

export type PortfolioCard1Tag = {
  label: string;
  href: string;
};

export type PortfolioCard1Props = {
  link: string;
  img: string;
  title: string;
  description: string;
  tags: PortfolioCard1Tag[];
  classList?: string;
};

export default function PortfolioCard1({ link, img, title, description, tags, classList = "" }: PortfolioCard1Props) {
  return (
    <div className={`${classList} mg-portfolio-item anim-zoomin-wrap`}>
      <div className="mg-portfolio-thumb anim-zoomin not-hide-cursor">
        <Link to={link} className="mg-portfolio-thumb d-block">
          <img
            src={img}
            alt={title}
            data-speed=".8"
            data-delay=".4"
            data-fade-from="bottom"
            data-ease="bounce"
            data-parallax
            data-parallax-speed="0.45"
            data-parallax-range="100"
            className="img-cover"
          />
        </Link>
        <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
          <div className="w-md-75">
            <h5 className="cs-portfolio-title at-title-anim fix mr-20">
              <Link to={link} className="at-title-text">
                {title}
              </Link>
            </h5>
            <p className="mg-portfolio-desc fz-font-lg neutral-500">{description}</p>
          </div>
          <div className="cs-portfolio-tag">
            <ul className="d-flex justify-content-md-end flex-wrap text-nowrap">
              {tags.map((tag, i) => (
                <li key={i}>
                  <a href={tag.href} onClick={(e) => e.preventDefault()}>
                    {tag.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

