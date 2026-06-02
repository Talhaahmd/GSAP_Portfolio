import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const FAB_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
        <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BIG_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const SERVICES = [
    { num: "[ 01 ]", title: "Brand Identity", delay: ".15" },
    { num: "[ 02 ]", title: "Web Design", delay: ".2" },
    { num: "[ 03 ]", title: "Webflow & Framer", delay: ".25" },
    { num: "[ 04 ]", title: "Product UI/UX", delay: ".3" },
    { num: "[ 05 ]", title: "Front-End Build", delay: ".35" },
    { num: "[ 06 ]", title: "Art Direction", delay: ".4" },
];

export default function Section7() {
    return (
        <section className="sec-7-home-15" aria-label="What we do">
            <div className="container">
                <header className="sec-7-home-15__head at_fade_anim" data-fade-from="bottom" data-delay=".1">
                    <div className="sec-7-home-15__eyebrow d-inline-flex align-items-center gap-2 text-uppercase">
                        <span className="sec-7-home-15__eyebrow-text">What we do</span>
                        {FAB_ARROW}
                    </div>
                    <h2 className="sec-7-home-15__heading mb-0 mt-3 reveal-text">
                        <RevealText>We turn ideas into high-impact digital solutions that attract customers, </RevealText>
                        <span className="sec-7-home-15__heading-muted"><RevealText>boost conversions, and accelerate sustainable growth.</RevealText></span>
                    </h2>
                </header>

                <div className="row gx-4 gx-xl-5 gy-5 sec-7-home-15__body">
                    <div className="col-xl-4 col-lg-5 col-12">
                        <div className="sec-7-home-15__media at_fade_anim" data-fade-from="bottom" data-delay=".15">
                            <div className="sec-7-home-15__media-frame">
                                <div className="fix">
                                    <img className="sec-7-home-15__media-img anim-zoomin" data-speed=".9" src="/assets/imgs/pages/home-15/sec-7-img.webp" alt="Orisa" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <p className="sec-7-home-15__caption mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".2">
                            We merge visionary concepts with seamless implementation, guaranteeing that every initiative, aesthetic, or framework transcends visual appeal.
                        </p>
                    </div>

                    <div className="col-xl-8 col-lg-7 col-12">
                        <ul className="sec-7-home-15__services list-unstyled mb-0">
                            {SERVICES.map((s) => (
                                <li key={s.num} className="sec-7-home-15__service at_fade_anim" data-fade-from="bottom" data-delay={s.delay}>
                                    <Link className="sec-7-home-15__service-link" to="/services-details">
                                        <span className="sec-7-home-15__service-index">{s.num}</span>
                                        <span className="sec-7-home-15__service-title">{s.title}</span>
                                        <span className="sec-7-home-15__service-fab" aria-hidden="true">{FAB_ARROW}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="sec-7-home-15__cta-block at_fade_anim" data-fade-from="bottom" data-delay=".25">
                            <span className="sec-7-home-15__cta-mark" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                                    <path d="M0 0H20V20H0V0Z" fill="#F0460E" />
                                    <path d="M20 20H40V40H20V20Z" fill="#F0460E" />
                                    <path d="M20 0L40 0L20 20L20 0Z" fill="#F0460E" opacity="0.55" />
                                    <path d="M0 20L20 20L0 40L0 20Z" fill="#F0460E" opacity="0.55" />
                                </svg>
                            </span>
                            <p className="sec-7-home-15__cta-copy mb-4">
                                A curated selection of projects where strategy, creativity, and craftsmanship come together to build meaningful and enduring brand experiences.
                            </p>
                            <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <Link className="at-btn-circle" to="/portfolio-1">{BIG_ARROW}</Link>
                                <Link className="at-btn z-index-1" to="/portfolio-1">Get a free quote</Link>
                                <Link className="at-btn-circle" to="/portfolio-1">{BIG_ARROW}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
