import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const AVATARS = [
    { src: "/assets/imgs/template/avatar/avatar-1.webp", alt: "orisa", zClass: "z-2" },
    { src: "/assets/imgs/template/avatar/avatar-2.webp", alt: "orisa", zClass: "z-3" },
    { src: "/assets/imgs/template/avatar/avatar-3.webp", alt: "orisa", zClass: "z-4" },
    { src: "/assets/imgs/template/avatar/avatar-4.webp", alt: "orisa", zClass: "z-5" },
    { src: "/assets/imgs/template/avatar/avatar-5.webp", alt: "orisa", zClass: "z-5" },
] as const;

export default function Section2() {
    return (
        <section className="at-about-area pt-100">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xxl-11">
                        <div className="at-about-title-wrap mb-30">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">About Us</span>
                                    <span className="text-2">About Us</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                            <h3 className="at-section-title mb-0">
                                <span className="">
                                    We shape animated stories that inspire and engage, uniting thoughtful design, fluid motion, and digital craftsmanship.
                                </span>
                                <span className="at-about-btn-transform ml-20">
                                    <Link className="at-btn" to="/contact-1">
                                        <span>
                                            <span className="text-1">GET IN TOUCH</span>
                                            <span className="text-2">GET IN TOUCH</span>
                                        </span>
                                        <i>{ARROW_SVG}{ARROW_SVG}</i>
                                    </Link>
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="at-about-border mt-20 pt-55">
                    <div className="row">
                        <div className="col-xxl-2 col-lg-3 col-md-7 mb-md-5">
                            <div className="at-about-subtitle-wrap mb-30">
                                <span className="at-about-subtitle">
                                    <svg className="fill-primary mb-10" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M40 20V0H20H0V20V40H20L40 20ZM40 20H20V40L0 20L20 0L40 20Z" fill="#F0460E" />
                                    </svg>
                                    <br className="d-block" />
                                    We build <span className="fw-700">bold</span>, resilient brands designed to leave a lasting <br />
                                    mark on the world.
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="block-author d-flex align-items-center position-relative">
                                    {AVATARS.map((avatar, i) => (
                                        <div key={i} className={`avatar overflow-hidden ${avatar.zClass}`}>
                                            <Link to="/team-details">
                                                <img
                                                    src={avatar.src}
                                                    alt={avatar.alt}
                                                    width={48}
                                                    height={48} loading="lazy" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <div className="fz-font-md fw-600 text-nowrap">
                                    <OdometerCounter count={15} suffix="+" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-3 col-5 align-self-end ms-auto">
                            <div className="at-about-svg-wrap move-up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                    <path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none">
                                    <path opacity="0.3" d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z" fill="#515151" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                    <path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-8 ms-auto">
                            <div className="at-about-thumb-wrap ml-75">
                                <div className="row gx-80">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="at-about-item anim-zoomin-wrap mb-40">
                                            <div className="mb-35">
                                                <div className="at-about-thumb fix anim-zoomin">
                                                    <img
                                                        data-speed=".8"
                                                        data-delay=".4"
                                                        data-fade-from="bottom"
                                                        data-ease="bounce"
                                                        data-parallax
                                                        data-parallax-speed="0.45"
                                                        data-parallax-range="100"
                                                        src="/assets/imgs/pages/img-3.webp"
                                                        alt="orisa"
                                                        width={600}
                                                        height={450} loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="at-about-content">
                                                <h3 className="at-about-title mb-10 at-char-animation">Creative Expertise</h3>
                                                <p className="at-about-dec at_fade_anim">
                                                    With over a decade of design expertise, we create tailored solutions that engage audiences, build meaningful connections, and elevate brands with creativity and intent.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="at-about-item mb-40 d-flex flex-column gap-4">
                                            <div className="at-about-content order-2 order-md-1">
                                                <h3 className="at-about-title mb-10 at-char-animation">Experience & Innovation</h3>
                                                <p className="at-about-dec at_fade_anim">
                                                    Backed by a decade of creative experience, we craft visual experiences that bring together strategy, design, and technology to grow brands, inspire audiences, and create meaningful impact.
                                                </p>
                                            </div>
                                            <div className="anim-zoomin-wrap order-1 order-md-2">
                                                <div className="at-about-thumb fix anim-zoomin">
                                                    <img
                                                        data-speed=".8"
                                                        data-delay=".4"
                                                        data-fade-from="bottom"
                                                        data-ease="bounce"
                                                        src="/assets/imgs/pages/img-4.webp"
                                                        alt="orisa"
                                                        width={500}
                                                        height={450} loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
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
