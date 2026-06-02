import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const CHECKOUT_ARROW_SVG = (
    <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const COUPON_ARROW_SVG = (
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

type CartItemType = {
    id: string;
    img: string;
    title: string;
    meta: string;
    price: number;
    quantity: number;
    selected: boolean;
};

const INITIAL_ITEMS: CartItemType[] = [
    { id: "1", img: "/assets/imgs/pages/product/product-1.webp", title: "Minimal crewneck sweatshirt", meta: "Size: 42, Color: Red", price: 64, quantity: 1, selected: false },
    { id: "2", img: "/assets/imgs/pages/product/product-2.webp", title: "Classic Oversized Brown Hoodie", meta: "Size: M, Color: Brown", price: 72, quantity: 1, selected: false },
    { id: "3", img: "/assets/imgs/pages/product/product-3.webp", title: "Heritage Patterned Knit Sweater", meta: "Size: L, Color: Grey", price: 88, quantity: 1, selected: false },
];

const CHECK_ICON = "/assets/imgs/icons/check.svg";
const DISCOUNT = 39;

const formatPrice = (n: number) => `$${n.toFixed(2)}`;

export default function Section1() {
    const [items, setItems] = useState<CartItemType[]>(INITIAL_ITEMS);
    const [coupon, setCoupon] = useState("");

    const allSelected = items.length > 0 && items.every((i) => i.selected);
    const someSelected = items.some((i) => i.selected);

    const toggleSelectAll = useCallback(() => {
        const next = !allSelected;
        setItems((prev) => prev.map((i) => ({ ...i, selected: next })));
    }, [allSelected]);

    const toggleItem = useCallback((id: string) => {
        setItems((prev) => prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i)));
    }, []);

    const removeSelected = useCallback(() => {
        setItems((prev) => prev.filter((i) => !i.selected));
    }, []);

    const setQuantity = useCallback((id: string, delta: number) => {
        setItems((prev) =>
            prev.map((i) => {
                if (i.id !== id) return i;
                const qty = Math.max(1, i.quantity + delta);
                return { ...i, quantity: qty };
            })
        );
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const summary = useMemo(() => {
        const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
        const discount = DISCOUNT;
        const tax = 0;
        const subtotalAfter = Math.max(0, subtotal - discount);
        const shipping = 0;
        const total = subtotalAfter + shipping;
        return { subtotal, discount, tax, subtotalAfter, shipping, total };
    }, [items]);

    return (
        <section className="sec-1-shop-archive-1 overflow-hidden pt-150">
            <div className="container pb-20">
                <div className="row align-items-end">
                    <div className="col-lg-3 col-md-6">
                        <h2 className="lh-1 fw-600 mb-md-0 mb-4">Your Cart</h2>
                    </div>
                    <div className="col-lg-3 col-md-6 ms-auto text-md-end">
                        <Link to="/product-archive" className="border-bottom-900 d-inline-block text-decoration-none">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Continue shopping</span>
                                    <span className="text-2">Continue shopping</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </Link>
                    </div>
                    <div className="col-12">
                        <div className="border-bottom-100 pb-40 mb-60" />
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="cart-list">
                            <div className="cart-list__header d-flex align-items-end justify-content-between">
                                <label className="cart-list__select-all d-flex align-items-center gap-2 mb-0">
                                    <input
                                        type="checkbox"
                                        className="cart-select-all d-none"
                                        aria-label="Select all"
                                        checked={allSelected}
                                        onChange={toggleSelectAll}
                                    />
                                    <span className={`cart-list__check-wrap ${allSelected ? "active" : ""}`}>
                                        <img src={CHECK_ICON} alt="" className="cart-list__check-icon" width={20} height={20} aria-hidden loading="lazy" />
                                    </span>
                                    <span className="cart-list__select-all-text">Select All</span>
                                </label>
                                <button
                                    type="button"
                                    className="cart-remove-selected btn border-0 bg-transparent p-0"
                                    onClick={removeSelected}
                                    disabled={!someSelected}
                                >
                                    Remove
                                </button>
                            </div>
                            <div className="cart-list__items">
                                {items.map((item) => (
                                    <article key={item.id} className="cart-item" data-cart-id={item.id}>
                                        <div className="cart-item__inner d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="cart-item__left d-flex align-items-center gap-3">
                                                <label className="cart-item__check-label mb-0">
                                                    <input
                                                        type="checkbox"
                                                        className="cart-item-check d-none"
                                                        aria-label="Select item"
                                                        checked={item.selected}
                                                        onChange={() => toggleItem(item.id)}
                                                    />
                                                    <span className={`cart-item__check-wrap ${item.selected ? "active" : ""}`}>
                                                        <img src={CHECK_ICON} alt="" className="cart-item__check-icon" width={20} height={20} aria-hidden loading="lazy" />
                                                    </span>
                                                </label>
                                                <div className="cart-item__main d-flex align-items-center gap-3">
                                                    <div className="cart-item__img-wrap">
                                                        <img
                                                            src={item.img}
                                                            alt={item.title}
                                                            className="cart-item__img"
                                                            width={120}
                                                            height={150} loading="lazy" />
                                                    </div>
                                                    <div className="cart-item__info">
                                                        <h3 className="cart-item__title">{item.title}</h3>
                                                        <p className="cart-item__meta">{item.meta}</p>
                                                        <p className="cart-item__price">{formatPrice(item.price)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-item__right d-flex align-items-center justify-content-between">
                                                <div className="cart-item__qty">
                                                    <button
                                                        type="button"
                                                        className="cart-item-qty-minus"
                                                        aria-label="Decrease quantity"
                                                        onClick={() => setQuantity(item.id, -1)}
                                                    >
                                                        −
                                                    </button>
                                                    <span className="cart-item-qty-val" aria-live="polite">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="cart-item-qty-plus"
                                                        aria-label="Increase quantity"
                                                        onClick={() => setQuantity(item.id, 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="cart-item-delete"
                                                    aria-label="Remove item"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                                                        <path
                                                            d="M10.9201 3.91998L10.0801 3.07998L7.00008 6.15998L3.92008 3.07998L3.08008 3.91998L6.16008 6.99998L3.08008 10.08L3.92008 10.92L7.00008 7.83998L10.0801 10.92L10.9201 10.08L7.84008 6.99998L10.9201 3.91998Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cart-summary">
                            <h3 className="cart-summary__title">Summary</h3>
                            <div className="cart-summary__coupon d-flex align-items-center gap-2 flex-wrap">
                                <input
                                    type="text"
                                    className="cart-summary__coupon-input"
                                    placeholder="Enter Your Coupon"
                                    aria-label="Coupon code"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                />
                                <button className="at-btn cart-summary__coupon-btn" type="button">
                                    <span>
                                        <span className="text-1">Apply</span>
                                        <span className="text-2">Apply</span>
                                    </span>
                                    <i className="icon-arrow-right">
                                        {COUPON_ARROW_SVG}
                                        {COUPON_ARROW_SVG}
                                    </i>
                                </button>
                            </div>
                            <div className="cart-summary__divider" aria-hidden />
                            <div className="cart-summary__rows">
                                <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                    <span className="cart-summary__label">Sub total</span>
                                    <span className="cart-summary__value cart-summary__subtotal">{formatPrice(summary.subtotal)}</span>
                                </div>
                                <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                    <span className="cart-summary__label">Discount</span>
                                    <span className="cart-summary__value cart-summary__discount">{formatPrice(summary.discount)}</span>
                                </div>
                                <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                    <span className="cart-summary__label">Tax</span>
                                    <span className="cart-summary__value cart-summary__tax">{formatPrice(summary.tax)}</span>
                                </div>
                                <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                    <span className="cart-summary__label">Sub total</span>
                                    <span className="cart-summary__value cart-summary__subtotal-after">{formatPrice(summary.subtotalAfter)}</span>
                                </div>
                                <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                    <span className="cart-summary__label">Shipping</span>
                                    <span className="cart-summary__value cart-summary__shipping">Free</span>
                                </div>
                                <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                    <span className="cart-summary__label">Total</span>
                                    <span className="cart-summary__value cart-summary__total">{formatPrice(summary.total)}</span>
                                </div>
                            </div>
                            <Link to="/product-checkout" className="at-btn cart-summary__checkout-btn w-100">
                                <span>
                                    <span className="text-1">Proceed to Checkout</span>
                                    <span className="text-2">Proceed to Checkout</span>
                                </span>
                                <i className="icon-arrow-up-right">
                                    {CHECKOUT_ARROW_SVG}
                                    {CHECKOUT_ARROW_SVG}
                                </i>
                            </Link>
                            <p className="cart-summary__delivery text-center">
                                <span className="cart-summary__delivery-text">Estimated Delivery by </span>
                                <span className="cart-summary__delivery-date">27 April 2026</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
