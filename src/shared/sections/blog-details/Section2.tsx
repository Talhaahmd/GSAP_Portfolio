import ArticleCard1 from "@/shared/cards/ArticleCard1";

// blog-details section 2 – Latest News, ArticleCard1 grid

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const LATEST_POSTS = [
    {
        category: "photography",
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-23.webp",
        title: "Designing Digital Experiences That Connect Brands and People",
        author: "Olivia",
        date: "July 3, 2026",
    },
    {
        category: "design",
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-24.webp",
        title: "From Concept to Launch: Building Products That Truly Matter",
        author: "Daniel",
        date: "July 8, 2026",
    },
    {
        category: "marketing",
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-25.webp",
        title: "Creating impactful interfaces through thoughtful design systems",
        author: "Emma",
        date: "July 12, 2026",
    },
    {
        category: "design",
        classList: "col-lg-3 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-192.webp",
        title: "Why strong visual identity is the foundation of modern brands",
        author: "Lucas",
        date: "July 17, 2026",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-blog-details overflow-hidden pt-100 pb-100 bg-neutral-50">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Latest News</span>
                                <span className="text-2">Latest News</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                </div>
                <div className="row pt-20">
                    {LATEST_POSTS.map((post, i) => (
                        <ArticleCard1
                            key={`${post.category}-${post.img}-${i}`}
                            classList={post.classList}
                            category={post.category}
                            linkPost={post.linkPost}
                            linkAuthor={post.linkAuthor}
                            img={post.img}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
