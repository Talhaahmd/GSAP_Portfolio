import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_SUPPORT = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 48V24H0L24 0L48 24V48H24Z" fill="currentColor" />
        <path d="M0 24L24 48H0V24Z" fill="currentColor" />
    </svg>
);

const ICON_RETURNS = (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="48" viewBox="0 0 46 48" fill="none">
        <path d="M22.9565 27.1304L34.4348 20.8696V6.26087L22.9565 0L11.4783 6.26087L22.9565 13.5652V27.1304Z" fill="currentColor" />
        <path d="M22.9565 27.1304L11.4783 20.8696L0 27.1304V41.7391L11.4783 48V34.4348L22.9565 27.1304Z" fill="currentColor" />
        <path d="M22.9565 27.1304L34.4348 34.4348L45.913 27.1304V41.7391L34.4348 48L22.9565 41.7391V27.1304Z" fill="currentColor" />
    </svg>
);

const ICON_GIFT = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 16H40L48 24L40 32H32V40L24 48L16 40V32H8L0 24L8 16H16V8L24 0L32 8V16ZM24 12L12 24L24 36L36 24L24 12Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_WARRANTY = (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="48" viewBox="0 0 46 48" fill="none">
        <path d="M27.4286 16L22.8571 8L27.4286 0L32 8H41.1429L36.5714 16H27.4286Z" fill="currentColor" />
        <path d="M36.5714 32L32 24L36.5714 16H45.7143L41.1429 24L45.7143 32H36.5714Z" fill="currentColor" />
        <path d="M22.8571 40L27.4286 32H36.5714L41.1429 40H32L27.4286 48L22.8571 40Z" fill="currentColor" />
        <path d="M9.14286 32H18.2857L22.8571 40L18.2857 48L13.7143 40H4.57143L9.14286 32Z" fill="currentColor" />
        <path d="M9.14286 16H18.2857L22.8571 8L18.2857 0L13.7143 8H4.57143L9.14286 16Z" fill="currentColor" />
        <path d="M9.14286 16H0L4.57143 24L0 32H9.14286L13.7143 24L9.14286 16Z" fill="currentColor" />
    </svg>
);

function ExploreBtn({ className = "" }: { className?: string }) {
    return (
        <Link className={`at-btn bg-white text-dark ${className}`} to="/about-2">
            <span>
                <span className="text-1">Explore All</span>
                <span className="text-2">Explore All</span>
            </span>
            <i>
                {ARROW_SVG}
                {ARROW_SVG}
            </i>
        </Link>
    );
}

export default function Section4() {
    return (
        <section className="sec-4-shop-archive-1 overflow-hidden">
            <div className="container">
                <div className="row g-3">
                    {/* Card 1: New Spring Collections */}
                    <div className="col-md-6">
                        <div className="p-relative rounded-4 fix">
                            <img
                                className="img-cover"
                                src="/assets/imgs/pages/product/img-shop-1.webp"
                                alt="orisa"
                                width={800}
                                height={600} loading="lazy" />
                            <div className="p-absolute bottom-0 start-0 m-lg-5 m-4">
                                <h4 className="fw-600 text-white">
                                    <Link to="#" className="text-white text-decoration-none">
                                        New Spring <br />
                                        Collections
                                    </Link>
                                </h4>
                                <h6 className="fw-600 text-white mb-4">On all orders over $100</h6>
                                <ExploreBtn />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: The Brand Behind the Clothes */}
                    <div className="col-md-6">
                        <div className="p-relative rounded-4 fix">
                            <img
                                className="img-cover"
                                src="/assets/imgs/pages/product/img-shop-2.webp"
                                alt="orisa"
                                width={800}
                                height={600} loading="lazy" />
                            <div className="p-absolute bottom-0 start-0 m-lg-5 m-4">
                                <h4 className="fw-600 text-white">
                                    <Link to="#" className="text-white text-decoration-none">
                                        The Brand <br /> Behind the <br /> Clothes
                                    </Link>
                                </h4>
                                <ExploreBtn />
                            </div>
                        </div>
                    </div>

                    {/* Feature row */}
                    <div className="col-12">
                        <div className="pt-60 pb-60">
                            <div className="d-flex flex-wrap gap-4 justify-content-between">
                                <div className="d-flex gap-4">
                                    {ICON_SUPPORT}
                                    <div>
                                        <h6 className="fw-600 fz-18 mb-0">Customer Support</h6>
                                        <p className="mb-0">Mon - Sat, 10am - 9pm</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-4">
                                    {ICON_RETURNS}
                                    <div>
                                        <h6 className="fw-600 fz-18 mb-0">Easy Returns</h6>
                                        <p className="mb-0">Returns extended to 60 days</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-4">
                                    {ICON_GIFT}
                                    <div>
                                        <h6 className="fw-600 fz-18 mb-0">Gift Package</h6>
                                        <p className="mb-0">Free packaging over $100</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-4">
                                    {ICON_WARRANTY}
                                    <div>
                                        <h6 className="fw-600 fz-18 mb-0">One-year Warranty</h6>
                                        <p className="mb-0">No questions asked</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full-width card: Best selling products */}
                    <div className="col-12">
                        <div className="p-relative rounded-4 fix vh-100">
                            <img
                                className="img-cover"
                                src="/assets/imgs/pages/product/img-shop-3.webp"
                                alt="orisa"
                                width={1920}
                                height={1080} loading="lazy" />
                            <div className="p-absolute bottom-0 start-0 m-lg-5 m-4">
                                <Link
                                    to="#"
                                    className="at-btn text-white bg-transparent mb-10 rounded-0 p-0 text-decoration-none"
                                >
                                    <span className="text-uppercase">
                                        <span className="text-1">don&apos;t miss</span>
                                        <span className="text-2">don&apos;t miss</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                                <h4 className="fw-600 text-white mb-4">
                                    <Link to="#" className="text-white text-decoration-none">
                                        Best selling products <br /> Up to 70% off
                                    </Link>
                                </h4>
                                <ExploreBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
