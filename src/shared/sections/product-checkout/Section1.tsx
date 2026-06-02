import { Link } from "react-router-dom";
const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
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

const CHECKOUT_ARROW_SVG = (
    <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const COUNTRY_OPTIONS = [
    { value: "+1", flag: "🇺🇸", label: "🇺🇸 +1" },
    { value: "+44", flag: "🇬🇧", label: "🇬🇧 +44" },
    { value: "+84", flag: "🇻🇳", label: "🇻🇳 +84" },
    { value: "+81", flag: "🇯🇵", label: "🇯🇵 +81" },
    { value: "+86", flag: "🇨🇳", label: "🇨🇳 +86" },
    { value: "+82", flag: "🇰🇷", label: "🇰🇷 +82" },
    { value: "+65", flag: "🇸🇬", label: "🇸🇬 +65" },
    { value: "+60", flag: "🇲🇾", label: "🇲🇾 +60" },
    { value: "+66", flag: "🇹🇭", label: "🇹🇭 +66" },
    { value: "+61", flag: "🇦🇺", label: "🇦🇺 +61" },
    { value: "+33", flag: "🇫🇷", label: "🇫🇷 +33" },
    { value: "+49", flag: "🇩🇪", label: "🇩🇪 +49" },
];

export default function Section1() {
    return (
        <section className="sec-1-shop-archive-1 overflow-hidden pt-150">
            <div className="container pb-20">
                <div className="row align-items-end">
                    <div className="col-lg-3 col-md-6">
                        <h2 className="lh-1 fw-600 mb-md-0 mb-4">Checkout</h2>
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
                <form action="#" method="post" noValidate>
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="checkout-billing">
                                <h3 className="checkout-billing__title">Billing Details</h3>
                                <p className="checkout-billing__desc">Select the address that matches your card or payment method.</p>
                                <div className="checkout-billing__form">
                                    <div className="checkout-billing__row checkout-billing__row--half">
                                        <div className="checkout-billing__field">
                                            <label htmlFor="billing-first-name" className="checkout-billing__label">First Name *</label>
                                            <input type="text" id="billing-first-name" className="checkout-billing__input" name="first_name" placeholder="First Name *" required aria-required />
                                        </div>
                                        <div className="checkout-billing__field">
                                            <label htmlFor="billing-last-name" className="checkout-billing__label">Last Name *</label>
                                            <input type="text" id="billing-last-name" className="checkout-billing__input" name="last_name" placeholder="Last Name *" required aria-required />
                                        </div>
                                    </div>
                                    <div className="checkout-billing__row checkout-billing__row--half">
                                        <div className="checkout-billing__field">
                                            <label htmlFor="billing-email" className="checkout-billing__label">Email address *</label>
                                            <input type="email" id="billing-email" className="checkout-billing__input" name="email" placeholder="Enter email address" required aria-required />
                                        </div>
                                        <div className="checkout-billing__field">
                                            <label htmlFor="billing-phone" className="checkout-billing__label">Phone number *</label>
                                            <div className="checkout-billing__phone-wrap">
                                                <select id="billing-country" className="checkout-billing__country-select" name="country_code" aria-label="Country code" title="Country" defaultValue="+1">
                                                    {COUNTRY_OPTIONS.map((opt) => (
                                                        <option key={opt.value} value={opt.value} data-flag={opt.flag}>
                                                            {opt.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input type="tel" id="billing-phone" className="checkout-billing__input checkout-billing__input--phone" name="phone" placeholder="Enter phone number" required aria-required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-billing__row">
                                        <div className="checkout-billing__field checkout-billing__field--full">
                                            <label htmlFor="billing-address" className="checkout-billing__label">Address *</label>
                                            <input type="text" id="billing-address" className="checkout-billing__input checkout-billing__input--full" name="address" placeholder="Delivery address *" required aria-required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-payment">
                                <h3 className="checkout-payment__title">Payment</h3>
                                <p className="checkout-payment__desc">Select the address that matches your card or payment method.</p>
                                <div className="checkout-payment__form">
                                    <div className="checkout-payment__row checkout-payment__row--cards">
                                        <div className="checkout-payment__field checkout-payment__field--card-number">
                                            <label htmlFor="payment-card-number" className="checkout-payment__label">Card number *</label>
                                            <div className="checkout-payment__card-input-wrap">
                                                <input type="text" id="payment-card-number" className="checkout-payment__input checkout-payment__input--card" name="card_number" placeholder="1234 1234 1234 1234" inputMode="numeric" maxLength={19} required aria-required autoComplete="cc-number" />
                                                <div className="checkout-payment__card-icons" aria-hidden>
                                                    <span className="checkout-payment__card-icon" title="Visa">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="13" viewBox="0 0 41 13" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.4698 0.218693L14.3956 12.4376H17.7142L19.7887 0.218693H16.4698ZM11.6035 0.218693L8.43942 8.62278L8.06516 6.81309L8.06542 6.81368L7.98295 6.40807C7.60002 5.61702 6.71314 4.11354 5.03848 2.83045C4.54337 2.4512 4.04429 2.12752 3.56183 1.85104L6.43743 12.4376H9.89513L15.1753 0.218693H11.6035ZM24.5553 3.61091C24.5553 2.22945 27.7873 2.40697 29.2075 3.15709L29.681 0.532791C29.681 0.532791 28.2195 0 26.6961 0C25.0491 0 21.1382 0.690392 21.1382 4.04499C21.1382 7.20209 25.7284 7.24132 25.7284 8.89883C25.7284 10.5563 21.6115 10.2601 20.2528 9.21454L19.7591 11.9576C19.7591 11.9576 21.2408 12.6479 23.5054 12.6479C25.7698 12.6479 29.1868 11.5235 29.1868 8.46476C29.1868 5.28792 24.5553 4.99204 24.5553 3.61091ZM38.0976 0.218693H35.4293C34.1973 0.218693 33.8973 1.1293 33.8973 1.1293L28.9482 12.4376H32.4072L33.0991 10.6228H37.3181L37.7073 12.4376H40.7545L38.0976 0.218693ZM34.0555 8.11532L35.7994 3.54271L36.7804 8.11532H34.0555Z" fill="#005BAC" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.99415 1.3691C6.99415 1.3691 6.85678 0.266317 5.39029 0.266317H0.0624075L0 0.47357C0 0.47357 2.56101 0.973992 5.01797 2.84884C7.36594 4.64075 8.13189 6.87444 8.13189 6.87444L6.99415 1.3691Z" fill="#F6AC1D" />
                                                        </svg>
                                                    </span>
                                                    <span className="checkout-payment__card-icon" title="Mastercard">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none">
                                                            <path d="M25.2959 7.37797C25.2959 11.4378 21.9231 14.7559 17.7071 14.7559C13.5313 14.7559 10.1184 11.4378 10.1184 7.37797C10.1184 3.31813 13.4911 0 17.667 0C21.9231 0 25.2959 3.31813 25.2959 7.37797Z" fill="#FFB600" />
                                                            <path d="M17.7071 0C21.883 0 25.2959 3.31813 25.2959 7.37797C25.2959 11.4378 21.9231 14.7559 17.7071 14.7559C13.5313 14.7559 10.1184 11.4378 10.1184 7.37797" fill="#F7981D" />
                                                            <path d="M10.1184 7.37797C10.1184 3.31813 13.4911 0 17.667 0C21.9231 0 25.2959 3.31813 25.2959 7.37797C25.2959 11.4378 21.9231 14.7559 17.7071 14.7559" fill="#EB001B" />
                                                            <path d="M7.50846 0C3.37279 0.0390369 0 3.31813 0 7.37797C0 11.4378 3.37279 14.7559 7.58877 14.7559C9.55623 14.7559 11.3229 14.0142 12.6881 12.8431C12.9692 12.6089 13.2101 12.3357 13.451 12.0624H11.8851C11.6843 11.8282 11.4835 11.5549 11.3229 11.3207H14.0131C14.1737 11.0865 14.3343 10.8132 14.4548 10.54H10.8812C10.7608 10.3057 10.6403 10.0325 10.56 9.75922H14.7359C14.9768 9.01752 15.1374 8.23678 15.1374 7.417C15.1374 6.87049 15.0571 6.36301 14.9768 5.85553H10.3191C10.3593 5.58227 10.4396 5.34805 10.5199 5.07479H14.6957C14.6154 4.80154 14.4949 4.52828 14.3745 4.29406H10.8411C10.9616 4.0208 11.1222 3.78658 11.2828 3.51332H13.973C13.8124 3.24006 13.6116 2.9668 13.3707 2.73258H11.8851C12.126 2.45932 12.3669 2.2251 12.6479 1.99088C11.3229 0.780738 9.51607 0.0780737 7.54861 0.0780737L7.50846 0Z" fill="#EB001B" />
                                                        </svg>
                                                    </span>
                                                    <span className="checkout-payment__card-icon" title="Amex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.4212 0H1.36141C0.612635 0 0 0.572169 0 1.27149V12.0791C0 12.7784 0.612635 13.3506 1.36141 13.3506H20.4212C21.1699 13.3506 21.7826 12.7784 21.7826 12.0791V1.27149C21.7826 0.572169 21.1699 0 20.4212 0Z" fill="#3498D8" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.56073 6.86603H5.64986L5.10529 5.59454L4.56073 6.86603ZM19.7405 4.4502H16.9496L16.2689 5.14952L15.6562 4.4502H9.73409L9.18952 5.59454L8.64496 4.4502H6.26249V4.9588L5.99021 4.4502H3.94809L1.97405 8.90041H4.35651L4.6288 8.20109H5.3095L5.58178 8.90041H8.23654V8.39181L8.44075 8.90041H9.80216L10.0064 8.32824V8.90041H15.452L16.1327 8.20109L16.7454 8.90041H19.5362L17.7664 6.67531L19.7405 4.4502ZM10.7551 8.26466V5.78526L9.59795 8.26466H8.91724L7.76004 5.78526V8.26466H6.19442L5.92214 7.56535H4.28844L4.01616 8.26466H3.13125L4.56073 5.08595H5.71793L7.01127 8.07394V5.08595H8.30461L9.32567 7.24747L10.2787 5.08595H11.572V8.26466H10.7551ZM18.2429 8.26466H17.2218L16.3369 7.1839L15.3159 8.26466H12.2527V5.08595H15.3839L16.3369 6.10314L17.358 5.08595H18.311L16.8134 6.67531L18.2429 8.26466ZM13.0015 5.72169V6.29386H14.7032V6.9296H13.0015V7.56535H14.9074L15.7924 6.61173L14.9755 5.72169H13.0015Z" fill="white" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-payment__field">
                                            <label htmlFor="payment-expiry" className="checkout-payment__label">Expiration date</label>
                                            <input type="text" id="payment-expiry" className="checkout-payment__input" name="expiry" placeholder="MM / YY" inputMode="numeric" maxLength={7} autoComplete="cc-exp" />
                                        </div>
                                        <div className="checkout-payment__field">
                                            <label htmlFor="payment-cvc" className="checkout-payment__label">Security code</label>
                                            <input type="text" id="payment-cvc" className="checkout-payment__input" name="cvc" placeholder="CVC" inputMode="numeric" maxLength={4} autoComplete="cc-csc" />
                                        </div>
                                    </div>
                                    <div className="checkout-payment__row checkout-payment__row--half">
                                        <div className="checkout-payment__field">
                                            <label htmlFor="payment-cardholder" className="checkout-payment__label">Cardholder name</label>
                                            <input type="text" id="payment-cardholder" className="checkout-payment__input" name="cardholder" placeholder="Cardholder name" autoComplete="cc-name" />
                                        </div>
                                        <div className="checkout-payment__field">
                                            <label htmlFor="payment-tax-id" className="checkout-payment__label">Tax ID number (optional)</label>
                                            <input type="text" id="payment-tax-id" className="checkout-payment__input" name="tax_id" placeholder="Tax ID number (optional)" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-summary">
                                <h3 className="cart-summary__title">Summary</h3>
                                <div className="cart-summary__coupon d-flex align-items-center gap-2 flex-wrap">
                                    <input type="text" className="cart-summary__coupon-input" placeholder="Enter Your Coupon" aria-label="Coupon code" />
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
                                        <span className="cart-summary__value cart-summary__subtotal">$239.45</span>
                                    </div>
                                    <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                        <span className="cart-summary__label">Discount</span>
                                        <span className="cart-summary__value cart-summary__discount">$39.00</span>
                                    </div>
                                    <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                        <span className="cart-summary__label">Tax</span>
                                        <span className="cart-summary__value cart-summary__tax">$0.00</span>
                                    </div>
                                    <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                        <span className="cart-summary__label">Sub total</span>
                                        <span className="cart-summary__value cart-summary__subtotal-after">$200.45</span>
                                    </div>
                                    <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                        <span className="cart-summary__label">Shipping</span>
                                        <span className="cart-summary__value cart-summary__shipping">Free</span>
                                    </div>
                                    <div className="cart-summary__row d-flex justify-content-between align-items-center">
                                        <span className="cart-summary__label">Total</span>
                                        <span className="cart-summary__value cart-summary__total">$200.45</span>
                                    </div>
                                </div>
                                <button type="submit" className="at-btn cart-summary__checkout-btn w-100">
                                    <span>
                                        <span className="text-1">Proceed to Checkout</span>
                                        <span className="text-2">Proceed to Checkout</span>
                                    </span>
                                    <i className="icon-arrow-up-right">
                                        {CHECKOUT_ARROW_SVG}
                                        {CHECKOUT_ARROW_SVG}
                                    </i>
                                </button>
                                <p className="cart-summary__delivery text-center">
                                    <span className="cart-summary__delivery-text">Estimated Delivery by </span>
                                    <span className="cart-summary__delivery-date">27 April 2026</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
