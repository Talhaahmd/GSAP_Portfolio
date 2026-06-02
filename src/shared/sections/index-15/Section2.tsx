import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const ARROW_BTN = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const ARROW_SM = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const PLUS_ICON = (
    <svg className="sec-2-home-15__feature-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M9 1v16M1 9h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const FEATURES = [
    { delay: ".15", text: "Strategy-first digital thinking" },
    { delay: ".2", text: "Human-centered design approach" },
    { delay: ".25", text: "Scalable & future-ready solutions" },
    { delay: ".3", text: "Long-term brand partnerships" },
];

const STATS = [
    { count: 10, suffix: "+", label: "Years of Creative Practice", delay: ".1" },
    { count: 50, suffix: "k+", label: "Projects Carefully Crafted", delay: ".2" },
    { count: 16, suffix: "k+", label: "Brands Collaborated With", delay: ".3" },
];

export default function Section2() {
    return (
        <section className="sec-2-home-15 pt-100 pb-100" aria-label="About Orisa">
            <div className="container">
                <div className="row align-items-end gx-4 gy-4 mb-60">
                    <div className="col-xxl-9 col-xl-8 col-lg-9">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">About Us</span>
                                <span className="text-2">About Us</span>
                            </span>
                            <i>{ARROW_SM}{ARROW_SM}</i>
                        </span>
                        <h2 className="sec-2-home-15__heading reveal-text mb-0"><RevealText>We are a creative digital agency shaping meaningful experiences</RevealText></h2>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-3 d-flex justify-content-lg-end">
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link className="at-btn-circle" to="/portfolio-1">{ARROW_BTN}</Link>
                            <Link className="at-btn z-index-1" to="/portfolio-1">View latest projects</Link>
                            <Link className="at-btn-circle" to="/portfolio-1">{ARROW_BTN}</Link>
                        </div>
                    </div>
                </div>

                <div className="row gx-4 gy-4">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="sec-2-home-15__media-1 anim-zoomin-wrap">
                            <img className="sec-2-home-15__media-1-img anim-zoomin" src="/assets/imgs/pages/home-15/sec-2-img-1.webp" alt="Orisa" loading="lazy" />
                            <div className="sec-2-home-15__media-1-badge at_fade_anim" data-fade-from="bottom" data-delay=".4">
                                <span className="sec-2-home-15__media-1-badge-dot" aria-hidden="true"></span>
                                <span className="sec-2-home-15__media-1-badge-text">
                                    <span className="sec-2-home-15__media-1-badge-title">Available for projects</span>
                                    <span className="sec-2-home-15__media-1-badge-meta">Now booking &mdash; Q3 2026</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6 position-relative">
                        <div className="sec-2-home-15__content">
                            <p className="sec-2-home-15__body at_fade_anim mb-0 mt-4" data-fade-from="bottom" data-delay=".2">
                                Orisa&trade; goes beyond aesthetics&mdash;bringing clarity through motion, flexible structure, and practical tools that help you move faster without defining your identity.
                            </p>
                            <ul className="sec-2-home-15__features list-unstyled mb-0">
                                {FEATURES.map((f) => (
                                    <li key={f.text} className="sec-2-home-15__feature at_fade_anim" data-fade-from="bottom" data-delay={f.delay}>
                                        {PLUS_ICON}
                                        <span>{f.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <form className="sec-4-about-form sec-2-home-15__form mt-4" action="#" method="post" noValidate>
                                <h6 className="sec-2-home-15__form-label2 at_fade_anim mb-0" data-fade-from="bottom" data-delay=".1">Have a project in mind? Drop us a line</h6>
                                <div className="sec-2-home-15__form-row">
                                    <div className="sec-4-about-form__field at_fade_anim" data-fade-from="bottom" data-delay=".15">
                                        <input type="text" className="sec-4-about-form__input" name="name" placeholder="Your name *" required aria-label="Your name" />
                                    </div>
                                    <div className="sec-4-about-form__field at_fade_anim" data-fade-from="bottom" data-delay=".2">
                                        <input type="email" className="sec-4-about-form__input" name="email" placeholder="Your email *" required aria-label="Your email" />
                                    </div>
                                </div>
                                <div className="sec-4-about-form__field at_fade_anim" data-fade-from="bottom" data-delay=".25">
                                    <textarea className="sec-4-about-form__input sec-4-about-form__textarea sec-2-home-15__form-textarea" name="message" placeholder="Tell us about your project *" rows={3} required aria-label="Your message"></textarea>
                                </div>
                                <div className="sec-4-about-form__actions sec-2-home-15__form-actions at_fade_anim" data-fade-from="bottom" data-delay=".3">
                                    <button type="submit" className="sec-4-about-form__btn at-btn">
                                        <span>
                                            <span className="text-1 text-capitalize">Send Message</span>
                                            <span className="text-2 text-capitalize">Send Message</span>
                                        </span>
                                        <i>{ARROW_SM}{ARROW_SM}</i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="at-about-svg-wrap sec-2-home-15__object move-up" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none"><path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none"><path opacity="0.3" d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z" fill="#515151" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none"><path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" /></svg>
                        </div>
                    </div>
                </div>

                <div className="row gx-4 gy-5 mt-30 align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                        <div className="sec-2-home-15__stats row gx-3 gy-4">
                            {STATS.map((s) => (
                                <div key={s.label} className="sec-2-home-15__stat col-sm-4 col-12 at_fade_anim" data-fade-from="bottom" data-delay={s.delay}>
                                    <p className="sec-2-home-15__stat-num mb-3"><OdometerCounter count={s.count} /><span className="sec-2-home-15__stat-suffix">{s.suffix}</span></p>
                                    <p className="sec-2-home-15__stat-label mb-0">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                        <div className="sec-2-home-15__media-2 anim-zoomin-wrap">
                            <img className="sec-2-home-15__media-2-img anim-zoomin" src="/assets/imgs/pages/home-15/sec-2-img-2.webp" alt="Orisa" loading="lazy" />
                            <div className="sec-2-home-15__media-2-badge at_fade_anim" data-fade-from="bottom" data-delay=".4">
                                <span className="sec-2-home-15__media-2-badge-icon" aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                                        <path d="M12 2l2.39 6.95H21.5l-5.8 4.21 2.21 6.84L12 15.77l-5.91 4.23 2.21-6.84L2.5 8.95h7.11L12 2z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="sec-2-home-15__media-2-badge-text">
                                    <span className="sec-2-home-15__media-2-badge-title">Site of the Day</span>
                                    <span className="sec-2-home-15__media-2-badge-meta">Awwwards &times; 2026</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                        <div className="sec-2-home-15__statement at_fade_anim" data-fade-from="bottom" data-delay=".3">
                            <img className="sec-2-home-15__statement-icon" src="/assets/imgs/pages/home-15/sec-2-shape-25.svg" alt="Orisa" loading="lazy" />
                            <p className="sec-2-home-15__statement-text mb-0">We always provide people a complete solution upon focused of any business</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
