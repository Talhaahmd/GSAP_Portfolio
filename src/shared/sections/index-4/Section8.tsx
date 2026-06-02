import { Link } from "react-router-dom";
import ArticleCard1 from "@/shared/cards/ArticleCard1";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARTICLES = [
    {
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-97.webp",
        title: "Designing Digital Experiences That Connect Brands and People",
        author: "Olivia",
        date: "July 3, 2026",
    },
    {
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-98.webp",
        title: "From Concept to Launch: Building Products That Truly Matter",
        author: "Daniel",
        date: "July 8, 2026",
    },
    {
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-99.webp",
        title: "Why Strong Visual Identity Is the Foundation of Modern Brands",
        author: "Emma",
        date: "July 12, 2026",
    },
    {
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-100.webp",
        title: "Creating Impactful Interfaces Through Thoughtful Design Systems",
        author: "Lucas",
        date: "July 17, 2026",
    },
];

export default function Section8() {
    return (
        <section className="home-4-section-8 bg-cover pt-120 pb-120">
            <div className="container">
                <div className="row align-items-end mb-50">
                    <div className="col-lg-3">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">INSIDE COMPANY</span>
                                <span className="text-2">INSIDE COMPANY</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="alt-section-title lh-1 neutral-900 fw-700 mb-30 reveal-text mb-0">
                            Inside the World of AI
                        </h3>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <p className="fz-font-lg neutral-900 fw-500 mb-0">
                            Explore expert insights on AI innovation, real-world applications, and the future of
                            intelligent systems.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-4 ms-auto text-md-end">
                        <div className="at-service-btn pt-30">
                            <Link to="/archive-4" className="at-btn">
                                <span>
                                    <span className="text-1">ALL ARTICLES</span>
                                    <span className="text-2">ALL ARTICLES</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    {ARTICLES.map((article) => (
                        <ArticleCard1
                            key={article.img}
                            classList={article.classList}
                            linkPost={article.linkPost}
                            linkAuthor={article.linkAuthor}
                            img={article.img}
                            title={article.title}
                            author={article.author}
                            date={article.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
