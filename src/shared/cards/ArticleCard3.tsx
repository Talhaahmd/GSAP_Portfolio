import { Link } from "react-router-dom";
type CardProps = {
  card: {
    img: string;
    linkPost: string;
    date: string;
    title: string;
    classList?: string;
  };
  idx?: number;
};

export default function ArticleCard3({ card }: CardProps) {
  return (
    <article className={`blog-card-3 ${card.classList ?? ""}`.trim()}>
      <div className="blog-card-3__thumb hover-effect-1">
        <Link to={card.linkPost} className="blog-card-3__img-link">
          <img
            src={card.img}
            className="blog-card-3__img"
            alt={card.title}
            width={400}
            height={250} loading="lazy" />
        </Link>
      </div>
      <div className="blog-card-3__content">
        <h6 className="blog-card-3__title">
          <Link to={card.linkPost} className="blog-card-3__title-link">
            {card.title}
          </Link>
        </h6>
        <ul className="blog-card-3__meta ps-3">
          <li className="blog-card-3__meta-date">{card.date}</li>
        </ul>
      </div>
    </article>
  );
}
