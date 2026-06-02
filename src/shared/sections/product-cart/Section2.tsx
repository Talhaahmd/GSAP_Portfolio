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

export default function Section2() {
    return (
        <section className="sec-2-shop-cart overflow-hidden pt-200">
            <div className="container">
                <div className="row">
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
                </div>
            </div>
        </section>
    );
}
