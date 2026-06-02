// FAQs section 4 - CTA contact (Still have a question?)

export default function Section4() {
    return (
        <section className="sec-4-faqs pb-80 pt-80 bg-neutral-50 fix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <div className="p-relative d-inline-block mb-40">
                            <div className="at-about-svg-wrap start-50 translate-middle d-none d-lg-block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="57"
                                    height="91"
                                    viewBox="0 0 57 91"
                                    fill="none"
                                >
                                    <path
                                        opacity="0.1"
                                        d="M0 0L56.4024 33.572V90.336L0 56.46V0Z"
                                        fill="#515151"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="113"
                                    height="68"
                                    viewBox="0 0 113 68"
                                    fill="none"
                                >
                                    <path
                                        opacity="0.3"
                                        d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z"
                                        fill="#515151"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="57"
                                    height="91"
                                    viewBox="0 0 57 91"
                                    fill="none"
                                >
                                    <path
                                        opacity="0.2"
                                        d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z"
                                        fill="#515151"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h4>Still have a questions?</h4>
                        <p className="fz-font-lg neutral-900">
                            If you cannot find answer to your question in our
                            FAQ, you can always contact us. <br />
                            We wil answer to you shortly! Meet our Support team
                        </p>
                        <h5 className="mt-40">
                            <a href="mailto:hello@orisa.com">
                                hello@orisa.com
                            </a>
                        </h5>
                        <h6>
                            <a href="tel:+2125557398">(212) 555-7398</a>
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    );
}
