import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 3 Section 11 - Insights & Inspiration / Latest journal

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const POSTS = [
    { category: "Optimize", title: "Designing Digital Experiences That Connect Brands and People", author: "Daniel", date: "July 8, 2026", img: "/assets/imgs/pages/img-71.webp" },
    { category: "Trending", title: "From Concept to Launch: Building Products That Truly Matter", author: "Olivia", date: "July 3, 2026", img: "/assets/imgs/pages/img-72.webp" },
    { category: "marketing", title: "Why Strong Visual Identity Is the Foundation of Modern Brands", author: "Lucas", date: "July 17, 2026", img: "/assets/imgs/pages/img-73.webp" },
    { category: "Optimize", title: "Designing Digital Experiences That Connect Brands and People", author: "Olivia", date: "July 28, 2026", img: "/assets/imgs/pages/img-51.webp" },
    { category: "Trending", title: "From Concept to Launch: Building Products That Truly Matter", author: "Daniel", date: "July 08, 2026", img: "/assets/imgs/pages/img-52.webp" },
    { category: "marketing", title: "Why Strong Visual Identity Is the Foundation of Modern Brands", author: "Emma", date: "July 17, 2026", img: "/assets/imgs/pages/img-53.webp" },
];

export default function Section11() {
    return (
        <div className="home-3-section-11 overflow-hidden pb-100">
            <div className="container section-fix pt-100">
                <div className="row g-4 section-title-pin">
                    <div className="col-xxl-6 col-lg-5 h-100">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Insights & Inspiration</span>
                                    <span className="text-2">Insights & Inspiration</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="reveal-text fz-ds-1 mb-30 fw-500 lh-1">
                                <RevealText>Explore our Latest journal</RevealText>
                            </h3>
                            <Link className="at-btn" to="/archive-2">
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

                    <div className="col-xxl-6 col-lg-7 p-relative">
                        <div className="scroll-section vertical-section section">
                            <div className="wrapper">
                                <div role="list" className="list">
                                    {POSTS.map((post, i) => (
                                        <div key={i} className="item">
                                            <article className="blog-card-2 bg-neutral-0 py-5">
                                                <div className="blog-card-2__left flex-grow-1">
                                                    <span className="blog-card-2__category">{post.category}</span>
                                                    <h6 className="blog-card-2__title">
                                                        <Link to="/blog-details" className="blog-card-2__title-link">
                                                            {post.title}
                                                        </Link>
                                                    </h6>
                                                    <p className="blog-card-2__meta">
                                                        <span className="blog-card-2__meta-text">By </span>
                                                        <Link to="/team-details" className="blog-card-2__author">
                                                            {post.author}
                                                        </Link>
                                                        <span className="blog-card-2__meta-text"> – {post.date}</span>
                                                    </p>
                                                </div>
                                                <div className="blog-card-2__thumb hover-effect-1">
                                                    <Link to="/blog-details" className="blog-card-2__img-link">
                                                        <img
                                                            src={post.img}
                                                            alt="Orisa"
                                                            width={400}
                                                            height={280}
                                                            className="blog-card-2__img" loading="lazy" />
                                                    </Link>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
