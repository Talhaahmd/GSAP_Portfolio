// FAQs Section 1 - Hero (title + search input)

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

export default function Section1() {
    return (
        <section className="sec-1-faqs overflow-hidden pt-150 pb-120 bg-neutral-50">
            <div className="container">
                <div className="row g-4 align-items-end">
                    <div className="col-xxl-5 col-lg-6 pt-lg-0 pt-100">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Frequently Asked Questions</span>
                                <span className="text-2">Frequently Asked Questions</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h4 className="section-title d-flex fw-600">
                            Join the community with more than 12k+ topics already created
                        </h4>
                        <p className="neutral-600 fz-font-xl">
                            Professional support team will solve your problem.
                        </p>
                    </div>
                    <div className="col-xxl-5 col-lg-6 ms-auto">
                        <div className="input-subscribe p-relative changeless">
                            <input placeholder="Your question..." type="text" className="bg-neutral-0" />
                            <button type="button" className="at-btn p-absolute end-0 top-50 bg-neutral-900 rounded-3 translate-middle-y me-4">
                                <i className="icon-arrow-right">
                                    {ARROW_RIGHT_SVG}
                                    {ARROW_RIGHT_SVG}
                                </i>
                                <span>
                                    <span className="text-1">Find the answer</span>
                                    <span className="text-2">Find the answer</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
