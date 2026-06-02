import { Link } from "react-router-dom";
// Home 3 Section 12 - Newsletter

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_SUBMIT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
            d="M9.33333 3.33301L14 7.99967M14 7.99967L9.33333 12.6663M14 7.99967H2"
            stroke="#FEFEFE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function Section12() {
    return (
        <section className="home-3-section-12 pb-100">
            <div className="container">
                <div className="box-newsletter bg-neutral-50 pt-80 pb-100 px-md-5 px-4">
                    <div className="row g-4">
                        <div className="col-lg-2">
                            <div className="ripple-image ripples rounded-3 overflow-hidden d-inline-flex">
                                <img
                                    src="/assets/imgs/pages/img-74.webp"
                                    alt="orisa"
                                    width={120}
                                    height={120}
                                    className="img-cover" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">newsletter</span>
                                    <span className="text-2">newsletter</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2>Stay ahead</h2>
                            <p className="fz-font-xl mb-0">
                                Get practical insights, trends, and strategies we use <br />to help brands grow—delivered
                                monthly, no spam.
                            </p>
                        </div>
                        <div className="col-lg-4 ms-auto align-self-end">
                            <div className="input-subscribe p-relative changeless">
                                <input placeholder="Enter you mail .." type="email" className="w-100 bg-neutral-0" />
                                <button
                                    type="button"
                                    className="p-absolute end-0 top-50 bg-neutral-900 rounded-3 size-56 translate-middle-y me-3"
                                    aria-label="Subscribe"
                                >
                                    {ARROW_SUBMIT_SVG}
                                </button>
                            </div>
                            <p className="mb-0 pt-20">
                                By clicking the button, you are <br /> agreeing with our{" "}
                                <Link to="#" className="neutral-900">
                                    Term & Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
