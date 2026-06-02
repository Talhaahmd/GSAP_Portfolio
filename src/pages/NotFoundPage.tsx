import { Link } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_RIGHT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path
            d="M8.33333 1L13 5.66667M13 5.66667L8.33333 10.3333M13 5.66667H1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ARROW_UP_LEFT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
            d="M2.00069 3.41421L10.6073 12.0208L12.0215 10.6066L3.41489 2H11.0007V0H0.000694275V11H2.00069V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

export default function NotFoundPage() {
    return (
        <>
            <PageMeta title="Orisa - 404" />
            <section className="sec-1-404 overflow-hidden pt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 pe-lg-5">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">404 error</span>
                                    <span className="text-2">404 error</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h1 className="reveal-text mb-40 fz-ds-1 fw-500 lh-1">
                                <RevealText>Oops! That page can&apos;t be found.</RevealText>
                            </h1>
                            <p className="fw-400 fz-font-3xl neutral-900 mb-40 w-75 lh-sm">
                                It looks like nothing was found at this location. Maybe try one of the links below or a search?
                            </p>
                            <form action="/page-search-results" method="get" className="w-75 pt-50 pb-60">
                                <div className="at-search-form-input opacity-100">
                                    <input type="text" name="q" placeholder="Search..." required />
                                    <span className="at-search-focus-border"></span>
                                    <button className="at-search-form-btn at-btn" type="submit">
                                        <span>
                                            <span className="text-1">Search</span>
                                            <span className="text-2">Search</span>
                                        </span>
                                        <i className="icon-arrow-right">
                                            {ARROW_RIGHT_SVG}
                                            {ARROW_RIGHT_SVG}
                                        </i>
                                    </button>
                                </div>
                            </form>
                            <Link
                                to="/"
                                className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0 border-bottom-900 pb-2"
                            >
                                <i className="icon-arrow-up-left">
                                    {ARROW_UP_LEFT_SVG}
                                    {ARROW_UP_LEFT_SVG}
                                </i>
                                <span className="text-uppercase">
                                    <span className="text-1">Back to home</span>
                                    <span className="text-2">Back to home</span>
                                </span>
                            </Link>
                        </div>
                        <div className="col-lg-5 pt-lg-0 pt-100 d-none d-lg-block">
                            <div className="card_case__studies-avatar fix anim-zoomin">
                                <img
                                    data-speed=".8"
                                    className="img-cover"
                                    src="/assets/imgs/pages/img-168.webp"
                                    alt="Amelia Courtney"
                                    width={480}
                                    height={600}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
