import { Link } from "react-router-dom";
function ArrowIcon() {
    return (
        <>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
        </>
    );
}

function LongArrowRight() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
        </svg>
    );
}

export default function Section5() {
    return (
        <>
            {/* home-9 section 5 - Contact / marquee */}
            <section className="sec-5-home-9 position-relative overflow-x-hidden changeless">
                <div className="sec-5-home-9__bg" aria-hidden="true">
                    <img
                        className="sec-5-home-9__bg-img"
                        src="/assets/imgs/pages/home-9/sec-5-img-1.webp"
                        alt="orisa"
                        width={1024}
                        height={512}
                        loading="lazy"
                    />
                </div>

                <div className="sec-5-home-9__container">
                    <div className="row g-4 g-xl-5 justify-content-between sec-5-home-9__meta">
                        <div className="col-md-4 col-xl-3 at_fade_anim" data-delay="0.1">
                            <div className="sec-5-home-9__block">
                                <p className="sec-5-home-9__label text-white">Base on</p>
                                <p className="sec-5-home-9__value text-white">
                                    245 Fifth Avenue, Suite 1800<br />
                                    New York, NY 10016, USA
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-3 at_fade_anim" data-delay="0.2">
                            <div className="sec-5-home-9__block">
                                <p className="sec-5-home-9__label text-white">Tel</p>
                                <div className="sec-5-home-9__value sec-5-home-9__value--stack">
                                    <p className="mb-0 text-white">+212 - 555-7398</p>
                                    <p className="mb-0 text-white">+212 - 666-7399</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-3 at_fade_anim" data-delay="0.3">
                            <div className="sec-5-home-9__block">
                                <p className="sec-5-home-9__label text-white">Message</p>
                                <p className="sec-5-home-9__value mb-0 text-white">
                                    <a className="sec-5-home-9__mailto text-white" href="mailto:hello@orisa.com">hello@orisa.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sec-5-home-9__marquee-shell">
                        <div className="at-marquee sec-5-home-9__marquee at_fade_anim" data-delay=".1">
                            <div className="at-marquee__track sec-5-home-9__marquee-track">
                                <div className="at-marquee__group sec-5-home-9__marquee-group">
                                    <span className="sec-5-home-9__marquee-text">The future is digital. Let&rsquo;s make it yours</span>
                                    <span className="sec-5-home-9__marquee-sep" aria-hidden="true">&nbsp;&mdash;&nbsp;</span>
                                </div>
                                <div className="at-marquee__group sec-5-home-9__marquee-group" aria-hidden="true">
                                    <span className="sec-5-home-9__marquee-text">The future is digital. Let&rsquo;s make it yours</span>
                                    <span className="sec-5-home-9__marquee-sep" aria-hidden="true">&nbsp;&mdash;&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sec-5-home-9__cta-wrap">
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link className="at-btn-circle" to="/portfolio-1">
                                <LongArrowRight />
                            </Link>
                            <Link className="at-btn z-index-1" to="/portfolio-1">View latest projects</Link>
                            <Link className="at-btn-circle" to="/portfolio-1">
                                <LongArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
