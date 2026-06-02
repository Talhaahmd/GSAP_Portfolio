import { Link } from "react-router-dom";
type CardProps = {
    card: {
        img: string;
        linkPost: string;
        linkAuthor?: string;
        linkTag?: string;
        tag?: string;
        title: string;
        author: string;
        date: string;
        category?: string;
        classList?: string;
    };
};

export default function ArticleCard4({ card }: CardProps) {
    const linkPost = card.linkPost || "#";
    const linkAuthor = card.linkAuthor || "#";
    const linkTag = card.linkTag || "#";
    const hasTag = card.tag != null && card.tag !== "";

    return (
        <div
            className={`blog-card mb-30 ${card.classList ?? ""}`.trim()}
            data-category={card.category ?? undefined}
        >
            <div className="blog-card__thumb hover-effect-1 p-relative">
                {hasTag && (
                    <Link
                        to={linkTag}
                        className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-md p-absolute bottom-0 start-0 m-4 z-index-3"
                    >
                        {card.tag}
                    </Link>
                )}
                <Link to={linkPost} className="blog-card__img-link">
                    <img
                        src={card.img}
                        className="blog-card__img22"
                        alt={card.title}
                        width={1140}
                        height={700} loading="lazy" />
                </Link>
            </div>
            <div className="blog-card__content">
                <h4 className="blog-card__title">
                    <Link to={linkPost} className="blog-card__title-link">
                        {card.title}
                    </Link>
                </h4>
                <p className="blog-card__meta">
                    <span className="blog-card__meta-text">By </span>
                    <Link to={linkAuthor} className="blog-card__author">
                        {card.author}
                    </Link>
                    <span className="blog-card__meta-text"> – {card.date}</span>
                </p>
            </div>
        </div>
    );
}
