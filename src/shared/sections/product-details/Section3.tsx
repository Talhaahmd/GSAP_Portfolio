import ProductCard from "@/shared/cards/ProductCard";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const RELATED_PRODUCTS = [
    {
        category: "woman",
        classList: "col-lg-3 col-md-6 col-12",
        titleClassList: "neutral-0",
        link: "/product-details",
        img: "/assets/imgs/pages/product/product-5.webp",
        brand: "ETIQUE",
        title: "Belted Trench Jacket",
        price: "$156",
    },
    {
        category: "man",
        classList: "col-lg-3 col-md-6 col-12",
        titleClassList: "neutral-0",
        link: "/product-details",
        img: "/assets/imgs/pages/product/product-6.webp",
        brand: "MIRETTI",
        title: "Olive Sweatshirt",
        price: "$65",
    },
    {
        category: "woman",
        classList: "col-lg-3 col-md-6 col-12",
        titleClassList: "neutral-0",
        link: "/product-details",
        img: "/assets/imgs/pages/product/product-7.webp",
        brand: "SOLENE",
        title: "Pocket Overshirt",
        price: "$98",
    },
    {
        category: "man",
        classList: "col-lg-3 col-md-6 col-12",
        titleClassList: "neutral-0",
        link: "/product-details",
        img: "/assets/imgs/pages/product/product-8.webp",
        brand: "RIDGEWAY",
        title: "Wool Blend Blazer",
        price: "$175",
    },
];

export default function Section3() {
    return (
        <section className="sec-4-shop-details-1 overflow-hidden bg-neutral-900 changeless pt-100 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <span className="at-btn text-white text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Related PRODUCTS</span>
                                <span className="text-2">Related PRODUCTS</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                </div>
                <div className="row mt-30">
                    {RELATED_PRODUCTS.map((product) => (
                        <div key={product.title} className={product.classList}>
                            <ProductCard
                                link={product.link}
                                img={product.img}
                                title={product.title}
                                brand={product.brand}
                                price={product.price}
                                category={product.category}
                                titleClassName={product.titleClassList}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
