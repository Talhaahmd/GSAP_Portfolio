import { Link } from "react-router-dom";
import { useBlogPost } from "./BlogPostContext";

const CHEVRON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
        <path d="M0.666992 0.666672L5.33366 5.33334L0.666992 10" stroke="#585959" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const INSTAGRAM_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9.92475 0C10.9376 0.00167406 11.4509 0.00703828 11.8945 0.0202418L12.0692 0.025948C12.2709 0.0331213 12.47 0.0421215 12.7101 0.0533719C13.6678 0.0976265 14.3211 0.249129 14.8949 0.471887C15.4881 0.700648 15.9892 1.00966 16.4894 1.50993C16.9889 2.0102 17.298 2.51271 17.5275 3.10448C17.7494 3.67751 17.901 4.33153 17.946 5.28931C17.9567 5.52933 17.9653 5.72841 17.9725 5.93024L17.9781 6.10492C17.9913 6.5484 17.9973 7.06177 17.9992 8.07471L17.9999 8.74577C18 8.82777 18 8.91237 18 8.99967L17.9999 9.25357L17.9994 9.92472C17.9977 10.9376 17.9923 11.451 17.9791 11.8944L17.9734 12.0691C17.9662 12.271 17.9572 12.4701 17.946 12.7101C17.9017 13.6679 17.7494 14.3211 17.5275 14.8949C17.2987 15.4882 16.9889 15.9892 16.4894 16.4895C15.9892 16.989 15.4859 17.298 14.8949 17.5275C14.3211 17.7495 13.6678 17.901 12.7101 17.946C12.47 17.9567 12.2709 17.9654 12.0692 17.9725L11.8945 17.9781C11.4509 17.9914 10.9376 17.9973 9.92475 17.9993L9.25359 18C9.1716 18 9.087 18 8.99969 18H8.7458L8.07464 17.9994C7.06175 17.9977 6.54839 17.9924 6.1049 17.9791L5.93022 17.9734C5.72839 17.9662 5.5293 17.9572 5.2893 17.946C4.33151 17.9018 3.67899 17.7495 3.10448 17.5275C2.51195 17.2988 2.01018 16.989 1.50992 16.4895C1.00965 15.9892 0.701394 15.4859 0.471886 14.8949C0.249129 14.3211 0.0983735 13.6679 0.053372 12.7101C0.0426796 12.4701 0.0339582 12.271 0.026893 12.0691L0.0212318 11.8944C0.00806435 11.451 0.00206123 10.9376 0.000117163 9.92472L0 8.07471C0.00167406 7.06177 0.00702925 6.5484 0.0202327 6.10492L0.0259479 5.93024C0.0331212 5.72841 0.0421216 5.52933 0.053372 5.28931C0.0976175 4.33078 0.249129 3.67825 0.471886 3.10448C0.700638 2.51196 1.00965 2.0102 1.50992 1.50993C2.01018 1.00966 2.51271 0.701396 3.10448 0.471887C3.67825 0.249129 4.33077 0.0983735 5.2893 0.0533719C5.5293 0.0426885 5.72839 0.0339673 5.93022 0.026902L6.1049 0.0212407C6.54839 0.00806417 7.06175 0.00206102 8.07464 0.000116949L9.92475 0ZM8.99969 4.49953C6.51298 4.49953 4.49952 6.51518 4.49952 8.99967C4.49952 11.4864 6.51517 13.4998 8.99969 13.4998C11.4864 13.4998 13.4998 11.4842 13.4998 8.99967C13.4998 6.513 11.4841 4.49953 8.99969 4.49953ZM8.99969 6.2996C10.491 6.2996 11.6998 7.50805 11.6998 8.99967C11.6998 10.4909 10.4913 11.6998 8.99969 11.6998C7.50843 11.6998 6.29958 10.4914 6.29958 8.99967C6.29958 7.50841 7.50798 6.2996 8.99969 6.2996ZM13.7249 3.14949C13.1045 3.14949 12.5998 3.65342 12.5998 4.27376C12.5998 4.89411 13.1037 5.39882 13.7249 5.39882C14.3452 5.39882 14.8499 4.89489 14.8499 4.27376C14.8499 3.65342 14.3443 3.14871 13.7249 3.14949Z" fill="currentColor" />
    </svg>
);

const PREV_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path d="M3.19036 5.64852H13.3333V7.31518H3.19036L7.66033 11.7851L6.48183 12.9636L0 6.48185L6.48183 0L7.66033 1.17851L3.19036 5.64852Z" fill="currentColor" />
    </svg>
);

const NEXT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9999 11H4.78564" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Section1() {
    const { data: post, loading } = useBlogPost();

    if (loading || !post) {
        return <section className="sec-1-blog-details overflow-hidden pt-150 pb-100" />;
    }

    const formattedDate = new Date(post.published_at).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
    });

    return (
        <section className="sec-1-blog-details overflow-hidden pt-150 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto">
                        <div className="nav-menu d-flex align-items-center gap-2 pb-2">
                            <Link to="/archive-4" className="nav-menu__item neutral-900">Blog</Link>
                            <span className="nav-menu__item-separator">{CHEVRON_SVG}</span>
                            <span className="nav-menu__item neutral-500">{post.category}</span>
                        </div>
                        <h2 className="fw-600 lh-1 mb-0">{post.title}</h2>
                        <div className="d-flex flex-column flex-md-row align-items-md-end gap-2 justify-content-between pt-30">
                            <div className="d-flex align-items-center gap-2">
                                {post.author_avatar && (
                                    <div className="size-56 rounded-circle overflow-hidden">
                                        <img className="img-cover" src={post.author_avatar} alt={post.author} width={56} height={56} loading="lazy" />
                                    </div>
                                )}
                                <div>
                                    <h6 className="mb-0">{post.author}</h6>
                                    <span className="nav-menu__item fz-font-sm neutral-500">{formattedDate}</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <span className="nav-menu__item fz-font-label fw-600 neutral-500">SHARE THIS ARTICLE</span>
                                <ul className="at-social-list list-unstyled d-flex flex-wrap align-items-end gap-md-4 gap-3">
                                    <li>
                                        <a href="https://www.instagram.com/klarus.ai/" target="_blank" rel="noopener noreferrer" className="at-social__link d-flex align-items-center gap-2" aria-label="Instagram">
                                            {INSTAGRAM_SVG}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="col-12 py-5 text-center">
                        <img
                            src={post.hero_image ?? post.cover_image}
                            className="img-fluid"
                            alt={post.title}
                            width={1720}
                            height={789}
                            style={{ width: "auto", height: "auto" }}
                            loading="lazy"
                        />
                    </div>

                    <div className="col-lg-8 mx-auto">
                        <div className="content">
                            {/* Body HTML */}
                            {post.body_html && (
                                <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
                            )}

                            {/* Inline gallery */}
                            {post.gallery_images?.length > 0 && (
                                <div className="row mb-60 g-3">
                                    {post.gallery_images.map((img, i) => (
                                        <div key={i} className="col-md-6">
                                            <img src={img.url} className="img-fluid" alt={img.alt} width={600} height={400} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Tags */}
                            {post.tags?.length > 0 && (
                                <div className="border-top-100 py-5">
                                    <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
                                        {post.tags.map((tag) => (
                                            <Link key={tag} to="/archive-4" className="at-btn filter-btn btn-sm">{tag}</Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Prev / Next navigation */}
                            <div className="row">
                                {post.prev_slug && (
                                    <div className="col-md-5 me-auto d-flex flex-column gap-2">
                                        <Link to={`/blog-details/${post.prev_slug}`} aria-label="Previous">
                                            {PREV_SVG}
                                            <span className="text-uppercase"> Prev</span>
                                        </Link>
                                        <h6 className="fw-600">
                                            <Link to={`/blog-details/${post.prev_slug}`}>{post.prev_title}</Link>
                                        </h6>
                                    </div>
                                )}
                                {post.next_slug && (
                                    <div className="col-md-5 ms-auto d-flex flex-column gap-2 text-end">
                                        <Link to={`/blog-details/${post.next_slug}`} aria-label="Next">
                                            <span className="text-uppercase">Next</span>
                                            {NEXT_SVG}
                                        </Link>
                                        <h6 className="fw-600">
                                            <Link to={`/blog-details/${post.next_slug}`}>{post.next_title}</Link>
                                        </h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
