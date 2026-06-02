import { useState } from "react";
import { Link } from "react-router-dom";
import TabsInteractive from "@/shared/common/Tabs";

const ARROW_SVG = (
    <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SIZES = ["36", "37", "39", "40", "42"];
const COLORS: { hex: string; title: string }[] = [
    { hex: "#6c4d38", title: "Brown" },
    { hex: "#f2f1f0", title: "Cream" },
    { hex: "#9eb095", title: "Sage" },
    { hex: "#37415f", title: "Navy" },
    { hex: "#d0c89f", title: "Beige" },
    { hex: "#eebcbc", title: "Blush" },
];

const PRODUCT_TABS = [
    {
        id: "tab-description",
        title: "Description",
        linkClassName: "bg-transparent",
        content: (
            <>
                <p className="content-product-right__tab-lead neutral-900">
                    Designed for modern wardrobes, the Minimal Crewneck Sweatshirt combines simplicity, versatility, and premium comfort in one refined piece. Crafted from soft, breathable fabric, it features a relaxed yet structured fit that makes it perfect for layering or wearing on its own.
                </p>
                <p className="neutral-900">
                    The classic crew neckline and subtle detailing create a polished look suitable for casual outings, work-from-anywhere days, or weekend downtime. Durable stitching and carefully finished seams ensure long-lasting wear, while the neutral tone allows easy pairing with denim, tailored trousers, or outerwear.
                </p>
                <p className="neutral-900">
                    Whether you&apos;re building a capsule wardrobe or looking for a dependable everyday staple, this sweatshirt is made to keep your style understated, confident, and effortlessly cool.
                </p>
            </>
        ),
    },
    {
        id: "tab-additional",
        title: "Additional information",
        linkClassName: "bg-transparent",
        content: (
            <table className="content-product-right__spec-table">
                <tbody>
                    <tr>
                        <th>Material</th>
                        <td>Cotton blend</td>
                    </tr>
                    <tr>
                        <th>Care</th>
                        <td>Machine wash cold, tumble dry low</td>
                    </tr>
                    <tr>
                        <th>Fit</th>
                        <td>Relaxed</td>
                    </tr>
                    <tr>
                        <th>Origin</th>
                        <td>Made in Portugal</td>
                    </tr>
                </tbody>
            </table>
        ),
    },
    {
        id: "tab-reviews",
        title: "Reviews (0)",
        linkClassName: "bg-transparent",
        content: (
            <p className="content-product-right__no-reviews">
                There are no reviews yet. Be the first to review &quot;Minimal crewneck sweatshirt&quot;.
            </p>
        ),
    },
];

export default function Section1Interactive() {
    const [selectedSize, setSelectedSize] = useState("40");
    const [selectedColor, setSelectedColor] = useState(COLORS[1].hex); // Cream
    const [quantity, setQuantity] = useState(1);

    const minQty = 1;
    const incrementQty = () => setQuantity((q) => q + 1);
    const decrementQty = () => setQuantity((q) => (q > minQty ? q - 1 : q));

    return (
        <div className="content-product-right px-lg-5 pt-30">
            <div className="content-product-right__top d-flex flex-wrap align-items-center gap-3 mb-2">
                <span className="content-product-right__badge">In Stock</span>
                <span className="content-product-right__brand">HALSTON &amp; CO.</span>
            </div>
            <h5 className="content-product-right__title">Minimal crewneck sweatshirt</h5>
            <h6 className="content-product-right__price">$195.00</h6>
            <p className="content-product-right__shipping">Shipping calculated at checkout.</p>
            <div className="content-product-right__excerpt mb-4 w-50">
                <p className="content-product-right__excerpt-text">
                    <span className="content-product-right__excerpt-text-content">
                        A timeless essential with a clean silhouette, this minimal crewneck sweatshirt delivers everyday comfort with effortless style....
                    </span>
                    <Link to="#tab-description" className="content-product-right__read-more">
                        Read more
                    </Link>
                </p>
            </div>

            {/* Size */}
            <div className="content-product-right__option mb-4">
                <label className="content-product-right__option-label">Size</label>
                <div className="content-product-right__sizes">
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            type="button"
                            className={`content-product-right__size ${selectedSize === size ? "active" : ""}`}
                            data-size={size}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color */}
            <div className="content-product-right__option mb-4">
                <label className="content-product-right__option-label">Color</label>
                <div className="content-product-right__colors">
                    {COLORS.map(({ hex, title }) => (
                        <button
                            key={hex}
                            type="button"
                            className={`content-product-right__color ${selectedColor === hex ? "active" : ""}`}
                            data-color={hex}
                            title={title}
                            style={{ backgroundColor: hex }}
                            onClick={() => setSelectedColor(hex)}
                            aria-label={title}
                        />
                    ))}
                </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="content-product-right__option content-product-right__option--qty mb-4">
                <label className="content-product-right__option-label">Quantity</label>
                <div className="content-product-right__actions d-flex flex-wrap align-items-center gap-3">
                    <div className="content-product-right__qty">
                        <button
                            type="button"
                            className="content-product-right__qty-btn qty-down"
                            aria-label="Decrease"
                            onClick={decrementQty}
                        >
                            −
                        </button>
                        <span className="content-product-right__qty-val qty-val" aria-live="polite">
                            {quantity}
                        </span>
                        <button
                            type="button"
                            className="content-product-right__qty-btn qty-up"
                            aria-label="Increase"
                            onClick={incrementQty}
                        >
                            +
                        </button>
                    </div>
                    <Link
                        to="/product-cart"
                        className="at-btn content-product-right__btn content-product-right__btn--outline"
                    >
                        <span className="text-nowrap">
                            <span className="text-1">ADD TO CART</span>
                            <span className="text-2">ADD TO CART</span>
                        </span>
                        <i className="icon-arrow-up-right">
                            {ARROW_SVG}
                            {ARROW_SVG}
                        </i>
                    </Link>
                </div>
            </div>

            <div className="w-75 mb-40">
                <Link
                    to="/product-checkout"
                    className="at-btn content-product-right__btn content-product-right__btn--primary w-100 mb-4"
                >
                    <span>
                        <span className="text-1">BUY IT NOW</span>
                        <span className="text-2">BUY IT NOW</span>
                    </span>
                    <i className="icon-arrow-up-right">
                        {ARROW_SVG}
                        {ARROW_SVG}
                    </i>
                </Link>
            </div>

            <div className="content-product-right__meta row mb-4">
                <div className="col-md-6">
                    <p className="content-product-right__meta-item">
                        <strong>SKU:</strong> MCN-SWT-0427
                    </p>
                    <p className="content-product-right__meta-item">
                        <strong>Category:</strong> Sweatshirts
                    </p>
                    <p className="content-product-right__meta-item">
                        <strong>Tags:</strong> minimal, crewneck, casual, everyday wear, modern, basic essential, unisex, soft fabric, neutral tone
                    </p>
                </div>
                <div className="col-md-6">
                    <ul className="content-product-right__benefits">
                        <li>Test and Trial product on store</li>
                        <li>Free shipping</li>
                        <li>Installment support</li>
                        <li>30 days easy returns</li>
                    </ul>
                </div>
            </div>

            <div className="content-product-right__share d-flex align-items-center gap-3 mb-80">
                <span className="content-product-right__share-label">SHARE THIS</span>
                <ul className="at-social-list list-unstyled d-flex flex-wrap align-items-end gap-3">
                    <li>
                        <a href="#" className="at-social__link content-product-right__share-icon" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H5.25L8.98421 5.21053L13.5 0H15.5L9.8895 6.47368L16 15H10.75L7.01579 9.7895L2.5 15H0.5L6.11053 8.52632L0 0ZM11.5204 13.5L2.92043 1.5H4.47957L13.0796 13.5H11.5204Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="at-social__link content-product-right__share-icon" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path
                                    d="M12.4024 18V11.0344H14.7347L15.0838 8.3265H12.4024V6.59765C12.4024 5.81364 12.62 5.27934 13.7443 5.27934L15.1783 5.27867V2.85676C14.9302 2.82382 14.0791 2.75006 13.0888 2.75006C11.0213 2.75006 9.606 4.01198 9.606 6.32952V8.3265H7.2677V11.0344H9.606V18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H12.4024Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="at-social__link content-product-right__share-icon" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path
                                    d="M9.92475 0C10.9376 0.00167406 11.4509 0.00703828 11.8945 0.0202418L12.0692 0.025948C12.2709 0.0331213 12.47 0.0421215 12.7101 0.0533719C13.6678 0.0976265 14.3211 0.249129 14.8949 0.471887C15.4881 0.700648 15.9892 1.00966 16.4894 1.50993C16.9889 2.0102 17.298 2.51271 17.5275 3.10448C17.7494 3.67751 17.901 4.33153 17.946 5.28931C17.9567 5.52933 17.9653 5.72841 17.9725 5.93024L17.9781 6.10492C17.9913 6.5484 17.9973 7.06177 17.9992 8.07471L17.9999 8.74577C18 8.82777 18 8.91237 18 8.99967L17.9999 9.25357L17.9994 9.92472C17.9977 10.9376 17.9923 11.451 17.9791 11.8944L17.9734 12.0691C17.9662 12.271 17.9572 12.4701 17.946 12.7101C17.9017 13.6679 17.7494 14.3211 17.5275 14.8949C17.2987 15.4882 16.9889 15.9892 16.4894 16.4895C15.9892 16.989 15.4859 17.298 14.8949 17.5275C14.3211 17.7495 13.6678 17.901 12.7101 17.946C12.47 17.9567 12.2709 17.9654 12.0692 17.9725L11.8945 17.9781C11.4509 17.9914 10.9376 17.9973 9.92475 17.9993L9.25359 18C9.1716 18 9.087 18 8.99969 18H8.7458L8.07464 17.9994C7.06175 17.9977 6.54839 17.9924 6.1049 17.9791L5.93022 17.9734C5.72839 17.9662 5.5293 17.9572 5.2893 17.946C4.33151 17.9018 3.67899 17.7495 3.10448 17.5275C2.51195 17.2988 2.01018 16.989 1.50992 16.4895C1.00965 15.9892 0.701394 15.4859 0.471886 14.8949C0.249129 14.3211 0.0983735 13.6679 0.053372 12.7101C0.0426796 12.4701 0.0339582 12.271 0.026893 12.0691L0.0212318 11.8944C0.00806435 11.451 0.00206123 10.9376 0.000117163 9.92472L0 8.07471C0.00167406 7.06177 0.00702925 6.5484 0.0202327 6.10492L0.0259479 5.93024C0.0331212 5.72841 0.0421216 5.52933 0.053372 5.28931C0.0976175 4.33078 0.249129 3.67825 0.471886 3.10448C0.700638 2.51196 1.00965 2.0102 1.50992 1.50993C2.01018 1.00966 2.51271 0.701396 3.10448 0.471887C3.67825 0.249129 4.33077 0.0983735 5.2893 0.0533719C5.5293 0.0426885 5.72839 0.0339673 5.93022 0.026902L6.1049 0.0212407C6.54839 0.00806417 7.06175 0.00206102 8.07464 0.000116949L9.92475 0ZM8.99969 4.49953C6.51298 4.49953 4.49952 6.51518 4.49952 8.99967C4.49952 11.4864 6.51517 13.4998 8.99969 13.4998C11.4864 13.4998 13.4998 11.4842 13.4998 8.99967C13.4998 6.513 11.4841 4.49953 8.99969 4.49953ZM8.99969 6.2996C10.491 6.2996 11.6998 7.50805 11.6998 8.99967C11.6998 10.4909 10.4913 11.6998 8.99969 11.6998C7.50843 11.6998 6.29958 10.4914 6.29958 8.99967C6.29958 7.50841 7.50798 6.2996 8.99969 6.2996ZM13.7249 3.14949C13.1045 3.14949 12.5998 3.65342 12.5998 4.27376C12.5998 4.89411 13.1037 5.39882 13.7249 5.39882C14.3452 5.39882 14.8499 4.89489 14.8499 4.27376C14.8499 3.65342 14.3443 3.14871 13.7249 3.14949Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="content-product-right__tabs">
                <TabsInteractive
                    tabs={PRODUCT_TABS}
                    defaultActiveId="tab-description"
                    navClassName="nav nav-tabs content-product-right__tab-nav"
                    paneClassName="tab-content content-product-right__tab-content pt-4"
                />
            </div>
        </div>
    );
}
