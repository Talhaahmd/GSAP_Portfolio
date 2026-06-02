import RevealText from "@/shared/effects/RevealText";

{/* Home 7 Section 11 — Get in touch (contact form) */}

const EYEBROW_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
    </svg>
);

const SUBMIT_ARROW_SVG = (
    <>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
        </svg>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
        </svg>
    </>
);

export default function Section11() {
    return (
        <div className="sec-11-home-7 pt-120 pb-120">
            <div className="container-2200 px-lg-5 px-3">
                <div className="row align-items-start g-4 g-xl-5">
                    <div className="col-xl-5 col-lg-6 col-12">
                        <div className="sec-11-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                            <span className="text-scramble" data-scramble-text="Contact us">Contact us</span>
                            {EYEBROW_ARROW_SVG}
                        </div>
                        <h2 className="sec-11-home-7__title mb-0 reveal-text"><RevealText>Get in touch</RevealText></h2>
                    </div>
                    <div className="col-xl-6 col-lg-6 ms-lg-auto">
                        <form className="sec-4-about-form sec-11-home-7__form" action="#" method="post">
                            <div className="sec-4-about-form__field at_fade_anim">
                                <input type="text" className="sec-4-about-form__input" name="name" placeholder="Your name *" required aria-label="Your name" />
                            </div>
                            <div className="sec-4-about-form__field at_fade_anim">
                                <input type="email" className="sec-4-about-form__input" name="email" placeholder="Your email *" required aria-label="Your email" />
                            </div>
                            <div className="sec-4-about-form__field at_fade_anim">
                                <input type="tel" className="sec-4-about-form__input" name="phone" placeholder="Your phone *" required aria-label="Your phone" />
                            </div>
                            <div className="sec-4-about-form__field at_fade_anim">
                                <textarea className="sec-4-about-form__input sec-4-about-form__textarea" name="message" placeholder="Your message *" rows={5} required aria-label="Your message"></textarea>
                            </div>
                            <div className="sec-4-about-form__actions at_fade_anim">
                                <button type="submit" className="sec-4-about-form__btn at-btn at_fade_anim">
                                    <span>
                                        <span className="text-1 text-capitalize">Send Message</span>
                                        <span className="text-2 text-capitalize">Send Message</span>
                                    </span>
                                    <i>
                                        {SUBMIT_ARROW_SVG}
                                    </i>
                                </button>
                            </div>
                            <p className="sec-4-about-form__disclaimer at_fade_anim" data-delay="0.1">
                                By submitting, you agree to our <a href="#" className="sec-4-about-form__link">Terms</a> and{" "}
                                <a href="#" className="sec-4-about-form__link">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
