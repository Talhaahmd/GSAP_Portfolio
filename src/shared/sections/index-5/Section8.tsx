import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import ArticleCard1 from "@/shared/cards/ArticleCard1";

// Home 5 Section 8 - My blog / Latest news

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const BLOG_POSTS = [
    {
        img: "/assets/imgs/pages/img-114.webp",
        title:
            "Beyond the Accuracy Score: Why Scalability is the True Metric of Production AI",
        author: "Olivia",
        authorHref: "/team-details",
        date: "July 3, 2026",
    },
    {
        img: "/assets/imgs/pages/img-115.webp",
        title:
            "Optimizing Real-Time Detection: Strategies for Reducing Latency in Edge Computing",
        author: "Lucas",
        authorHref: "/team-details",
        date: "July 17, 2026",
    },
];

export default function Section8() {
    return (
        <div className="bg-neutral-50">
            <section className="home-5-section-8 bg-cover pt-100 pb-120">
                <div className="container">
                    <div className="row align-items-end mb-50 g-4">
                        <div className="col-xxl-1 align-self-start m-0">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0 mt-10">
                                <span className="text-uppercase">
                                    <span className="text-1">my blog</span>
                                    <span className="text-2">my blog</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </div>
                        <div className="col-lg-6 mt-0">
                            <h3 className="alt-section-title lh-1 neutral-900 fw-700 mb-30 reveal-text mb-0">
                                <RevealText>
                                    Latest news <br /> from my blog.
                                </RevealText>
                            </h3>
                        </div>
                        <div className="col-xxl-2 col-md-4 ms-lg-auto d-flex justify-content-lg-end">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/archive-1">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/archive-1">
                                    View all articles
                                </Link>
                                <Link className="at-btn-circle" to="/archive-1">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Feature / hero post */}
                        <div className="col-lg-4 col-12">
                            <div className="alt-portfolio-item mb-30 at-hover-item">
                                <Link to="/blog-details" className="alt-portfolio-thumb mb-15 p-relative fix d-block">
                                    <img
                                        className="w-100 scale-img-from-to"
                                        data-value-1="1.5"
                                        data-value-2="1"
                                        src="/assets/imgs/pages/img-113.webp"
                                        alt="orisa"
                                        width={550}
                                        height={650} loading="lazy" />
                                    <span className="alt-portfolio-btn start-0 end-0 mx-4">
                                        <span className="content">
                                            <span className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-label">
                                                ui design
                                            </span>
                                            <h4 className="fw-600 text-white mb-0 mt-20">
                                                Lessons Learned from Large-Scale LLM
                                            </h4>
                                            <p className="text-white fz-font-lg mb-0 mt-10 text-truncate-3 des">
                                                Moving a Large Language Model from a local notebook to a global production
                                                environment reveals challenges that benchmarks don&apos;t show.
                                            </p>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Standard blog cards */}
                        {BLOG_POSTS.map((post, i) => (
                            <div key={i} className="col-lg-4 col-12">
                                <div>
                                    <div className="blog-card__thumb rounded-4 hover-effect-1">
                                        <Link to="/blog-details" className="blog-card__img-link">
                                            <span className="anim-zoomin">
                                                <img
                                                    src={post.img}
                                                    className="blog-card__img"
                                                    alt="orisa"
                                                    width={500}
                                                    height={300} loading="lazy" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="blog-card__content mt-30">
                                        <h5 className="blog-card__title">
                                            <Link to="/blog-details" className="blog-card__title-link">
                                                {post.title}
                                            </Link>
                                        </h5>
                                        <p className="blog-card__meta">
                                            <span className="blog-card__meta-text">By </span>
                                            <Link to={post.authorHref} className="blog-card__author">
                                                {post.author}
                                            </Link>
                                            <span className="blog-card__meta-text"> – {post.date}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
