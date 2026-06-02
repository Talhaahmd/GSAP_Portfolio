const ICON_SUPPORT = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
        <path d="M15 30V15H0L15 0L30 15V30H15Z" fill="currentColor" />
        <path d="M0 15L15 30H0V15Z" fill="currentColor" />
    </svg>
);

const ICON_RETURNS = (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
        <path d="M14.3478 16.9565L21.5217 13.0435V3.91304L14.3478 0L7.17391 3.91304L14.3478 8.47826V16.9565Z" fill="currentColor" />
        <path d="M14.3478 16.9565L7.17391 13.0435L0 16.9565V26.087L7.17391 30V21.5217L14.3478 16.9565Z" fill="currentColor" />
        <path d="M14.3478 16.9565L21.5217 21.5217L28.6957 16.9565V26.087L21.5217 30L14.3478 26.087V16.9565Z" fill="currentColor" />
    </svg>
);

const ICON_WARRANTY = (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
        <path d="M17.1429 10L14.2857 5L17.1429 0L20 5H25.7143L22.8571 10H17.1429Z" fill="currentColor" />
        <path d="M22.8571 20L20 15L22.8571 10H28.5714L25.7143 15L28.5714 20H22.8571Z" fill="currentColor" />
        <path d="M14.2857 25L17.1429 20H22.8571L25.7143 25H20L17.1429 30L14.2857 25Z" fill="currentColor" />
        <path d="M5.71429 20H11.4286L14.2857 25L11.4286 30L8.57143 25H2.85714L5.71429 20Z" fill="currentColor" />
        <path d="M5.71429 10H11.4286L14.2857 5L11.4286 0L8.57143 5H2.85714L5.71429 10Z" fill="currentColor" />
        <path d="M5.71429 10H0L2.85714 15L0 20H5.71429L8.57143 15L5.71429 10Z" fill="currentColor" />
    </svg>
);

export default function Section1() {
    return (
        <section className="sec-1-shop-archive-1 overflow-hidden pt-150">
            <div className="container pb-40">
                <div className="row g-4 align-items-end">
                    <div className="col-xxl-3">
                        <h1 className="fz-200 lh-1 fw-600 mb-lg-0 mb-4">Store</h1>
                    </div>
                    <div className="col-xxl-8 ms-auto">
                        <div className="d-flex flex-wrap gap-4 justify-content-between pb-20">
                            <div className="d-flex gap-4 justify-content-center">
                                {ICON_SUPPORT}
                                <div>
                                    <h6 className="fw-600 fz-18 mb-0">Customer Support</h6>
                                    <p className="mb-0">Mon - Sat, 10am - 9pm</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4 justify-content-center">
                                {ICON_RETURNS}
                                <div>
                                    <h6 className="fw-600 fz-18 mb-0">Easy Returns</h6>
                                    <p className="mb-0">Returns extended to 60 days</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4 justify-content-center">
                                {ICON_WARRANTY}
                                <div>
                                    <h6 className="fw-600 fz-18 mb-0">One-year Warranty</h6>
                                    <p className="mb-0">No questions asked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="at-banner-thumb overflow-hidden scale-up-img">
                <img
                    className="img-cover scale-up"
                    data-speed=".4"
                    src="/assets/imgs/pages/img-216.webp"
                    alt="orisa"
                    width={1920}
                    height={800} loading="lazy" />
            </div>
        </section>
    );
}
