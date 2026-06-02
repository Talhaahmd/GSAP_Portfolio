import { useState, useMemo, useEffect } from "react";
import ArticleCard2 from "@/shared/cards/ArticleCard2";
import { getBlogPosts, type BlogPost } from "@/lib/supabase";

const INITIAL_VISIBLE = 4;
const LOAD_MORE_STEP = 4;

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

type CategoryFilter = "" | "design" | "photography" | "marketing";

export default function Section1() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState<CategoryFilter>("");
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

    useEffect(() => {
        getBlogPosts().then((data) => {
            setPosts(data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const filteredPosts = useMemo(() => {
        if (!activeFilter) return posts;
        return posts.filter((p) => p.category_filter === activeFilter);
    }, [posts, activeFilter]);

    const displayedPosts = useMemo(
        () => filteredPosts.slice(0, visibleCount),
        [filteredPosts, visibleCount]
    );
    const hasMore = visibleCount < filteredPosts.length;

    const handleFilter = (filter: CategoryFilter) => {
        setActiveFilter(filter);
        setVisibleCount(INITIAL_VISIBLE);
    };

    return (
        <section className="sec-1-archive-3 pt-150 pb-100">
            <div className="container">
                <div className="row g-3">
                    <div className="col-12">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">The Journal</span>
                                <span className="text-2">The Journal</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                    <div className="col-lg-8">
                        <h1 className="fz-ds-1 lh-1 fw-500 mb-0">Blog & Resources</h1>
                    </div>
                </div>
                <div className="row pt-60">
                    <div className="col-xxl-3">
                        <div className="filter-portfolio d-flex flex-xxl-column flex-md-row flex-wrap align-items-start gap-2 pb-4">
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "design" ? " active" : ""}`}
                                onClick={() => handleFilter(activeFilter === "design" ? "" : "design")}
                            >
                                AI & Automation
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "photography" ? " active" : ""}`}
                                onClick={() => handleFilter(activeFilter === "photography" ? "" : "photography")}
                            >
                                Workflows & Systems
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "marketing" ? " active" : ""}`}
                                onClick={() => handleFilter(activeFilter === "marketing" ? "" : "marketing")}
                            >
                                Strategy & Tools
                            </button>
                        </div>
                    </div>
                    <div className="col-xxl-9 ms-auto mt-70 d-flex flex-column gap-4">
                        {loading && (
                            <p className="neutral-500">Loading posts…</p>
                        )}
                        {!loading && displayedPosts.map((post, i) => (
                            <ArticleCard2
                                key={post.slug}
                                classList="blog-card-2-wrap scroll-move-up"
                                categoryFilter={post.category_filter as CategoryFilter}
                                linkPost={`/blog-details/${post.slug}`}
                                linkAuthor="/team-details"
                                img={post.cover_image}
                                category={post.category}
                                title={post.title}
                                excerpt={post.excerpt}
                                author={post.author}
                                date={new Date(post.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                            />
                        ))}
                        {hasMore && (
                            <div>
                                <button type="button" className="at-btn" onClick={() => setVisibleCount((v) => Math.min(v + LOAD_MORE_STEP, filteredPosts.length))}>
                                    <span>
                                        <span className="text-1">LOAD MORE POSTS</span>
                                        <span className="text-2">LOAD MORE POSTS</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
