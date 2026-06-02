import { Link } from "react-router-dom";
import ArticleCard1 from "@/shared/cards/ArticleCard1";

// archive-1 section 1

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const BLOG_POSTS = [
    {
        img: "/assets/imgs/pages/img-190.webp",
        title:
            "Beyond the Accuracy Score: Why Scalability is the True Metric of Production AI",
        author: "Olivia",
        authorHref: "/team-details",
        date: "July 3, 2026",
    },
    {
        img: "/assets/imgs/pages/img-191.webp",
        title:
            "Optimizing Real-Time Detection: Strategies for Reducing Latency in Edge Computing",
        author: "Lucas",
        authorHref: "/team-details",
        date: "July 17, 2026",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-1 overflow-hidden pt-150">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Blog & Resources</span>
                                <span className="text-2">Blog & Resources</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                    <div className="col-lg-8">
                        <h1 className="fz-ds-1 lh-1 fw-500 mb-lg-0 mb-4">Insights & Articles</h1>
                    </div>
                    <div className="col-lg-4 ms-auto text-lg-end">
                        <h6 className="fw-500 fz-font-lg mb-0">
                            Articles and insights shaped by real projects, strategic thinking, and a
                            passion for thoughtful design.
                        </h6>
                    </div>
                </div>
                <div className="row g-4 pt-70">
                    <div className="col-lg-4 col-12">
                        <div className="alt-portfolio-item mb-30 at-hover-item">
                            <Link
                                to="/blog-details"
                                className="alt-portfolio-thumb mb-15 rounded-0 p-relative fix d-block"
                            >
                                <img
                                    className="w-100 scale-img-from-to"
                                    data-value-1="1.5"
                                    data-value-2="1"
                                    src="/assets/imgs/pages/img-189.webp"
                                    alt="orisa"
                                    width={450}
                                    height={550} loading="lazy" />
                                <span className="alt-portfolio-btn start-0 end-0 mx-4">
                                    <span className="content">
                                        <span className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-label">
                                            GENERATIVE AI
                                        </span>
                                        <h4 className="fw-600 text-white mb-0 mt-20">
                                            Lessons Learned from Large-Scale LLM
                                        </h4>
                                        <p className="text-white fz-font-lg mb-0 mt-10 text-truncate-3 des">
                                            Moving a Large Language Model from a local notebook to a
                                            global production environment reveals challenges that
                                            benchmarks don&apos;t show.
                                        </p>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    {BLOG_POSTS.map((post, i) => (
                        <div key={i} className="col-lg-4 col-12">
                            <ArticleCard1
                                linkPost="/blog-details"
                                linkAuthor={post.authorHref}
                                img={post.img}
                                title={post.title}
                                author={post.author}
                                date={post.date}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
