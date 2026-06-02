import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const AVATAR_CLASSES = ["z-index-1", "z-index-2", "z-index-3", "z-index-4", "z-index-5"];

const AVATARS = [
    "/assets/imgs/template/avatar/avatar-15.webp",
    "/assets/imgs/template/avatar/avatar-16.webp",
    "/assets/imgs/template/avatar/avatar-17.webp",
    "/assets/imgs/template/avatar/avatar-18.webp",
    "/assets/imgs/template/avatar/avatar-19.webp",
];

const TAGS = ["[ Conversion-focused ]", "[ Data-driven ]", "[ Built for scale ]", "[ User-centric ]", "[Future-proof]"];

export default function Section1() {
    return (
        <section className="sec-1-home-3 pt-110 p-relative">
            <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
                        <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                    </div>
                ))}
                <div className="position-relative h-100 border-r border-dark/01 md:border-none">
                    <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                    <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                </div>
                {[5, 6, 7].map((i) => (
                    <div key={i} className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
                        <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                    </div>
                ))}
            </div>

            <div className="container pt-xxl-0 pt-110">
                <div className="row g-xxl-5 g-4 align-items-center">
                    <div className="col-lg-3 col-md-6 order-2 order-lg-1 mb-100">
                        <div className="testimonial-cart pe-xxl-5">
                            <div className="ripple-image ripples rounded-4 overflow-hidden">
                                <img
                                    className="img-cover"
                                    src="/assets/imgs/pages/img-54.webp"
                                    alt="orisa"
                                    width={400}
                                    height={300} loading="lazy" />
                            </div>
                            <div className="testimonial-content p-3">
                                <h6 className="fw-400 reveal-text py-3">
                                    &ldquo; Real experiences. Real results. Hear from clients who&apos;ve gained clarity, confidence, and financial growth. &rdquo;
                                </h6>
                                <div className="testimonial-author d-flex align-items-start mb-0 gap-2">
                                    <div className="testimonial-left-img size-30 rounded-2 overflow-hidden">
                                        <img
                                            src="/assets/imgs/template/avatar/avatar-6.webp"
                                            alt="orisa"
                                            width={30}
                                            height={30}
                                            className="img-cover" loading="lazy" />
                                    </div>
                                    <div className="testimonial-content">
                                        <h6 className="testimonial-content-author-name fw-600 mb-0 fz-font-md">Hannah Lee</h6>
                                        <p className="testimonial-content-author-position m-0 fz-font-label">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-5 align-self-center order-1 order-lg-2">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Performance Marketing Agency</span>
                                <span className="text-2">Performance Marketing Agency</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h1 className="fw-900 lh-1 mt-10">
                            Marketing <br /> That Delivers <br /> Real <span className="theme-primary">Value</span>
                        </h1>
                        <p className="fz-font-lg neutral-500 mb-65 mt-25">
                            We help ambitious brands acquire customers, increase conversions, and scale revenue through data-driven marketing strategies.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-4">
                            <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <Link to="/portfolio-1" className="at-btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
                                    </svg>
                                </Link>
                                <Link to="/portfolio-1" className="at-btn z-index-1">
                                    View latest projects
                                </Link>
                                <Link to="/portfolio-1" className="at-btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </div>
                            <Link to="/pricing" className="at-btn common-black border-bottom-900 text-uppercase bg-transparent rounded-0 p-0 pb-2">
                                <span className="text-uppercase">
                                    <span className="text-1">View Pricing Plan </span>
                                    <span className="text-2">View Pricing Plan </span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xxl-1 mt-150 order-lg-3 order-5 d-none d-xxl-block align-self-start">
                        <svg className="rotate-infinite" xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <path d="M4.4275 53.66C16.0138 44.9195 21.807 40.5492 28.5001 40.5492C35.1932 40.5492 40.9863 44.9195 52.5727 53.66L56.9999 56.9999L53.6601 52.5727C44.9195 40.9863 40.5492 35.1932 40.5492 28.5001C40.5492 21.807 44.9195 16.0138 53.66 4.42751L57 0.000133148L52.5727 3.34004C40.9863 12.0806 35.1932 16.4509 28.5001 16.4509C21.807 16.4509 16.0138 12.0806 4.4275 3.34004L0 0L3.34004 4.42749C12.0806 16.0138 16.4509 21.807 16.4509 28.5001C16.4509 35.1932 12.0806 40.9863 3.34005 52.5726L0.000112182 57L4.4275 53.66Z" fill="#CACACA" />
                        </svg>
                    </div>

                    <div className="col-lg-4 col-md-6 order-3">
                        <div className="p-relative rounded-4 fix cilent-word-wide changeless">
                            <img
                                className="img-cover"
                                src="/assets/imgs/pages/img-55.webp"
                                alt="orisa"
                                width={500}
                                height={400} loading="lazy" />
                            <div className="cilent-word-wide-content p-absolute bottom-0 end-0 m-lg-5 m-md-4 m-4">
                                <span className="fw-800 fz-font-3xl neutral-900">
                                    <OdometerCounter count={16} suffix="K+" className="text-nowrap" />
                                </span>
                                <h6 className="fz-font-md">Clients word-wide</h6>
                                <div className="position-relative d-flex align-items-center gap-2">
                                    {AVATARS.map((src, i) => (
                                        <div key={src} className={`avatar ${AVATAR_CLASSES[i]}`}>
                                            <img
                                                className="img-cover"
                                                src={src}
                                                alt="orisa"
                                                width={56}
                                                height={56} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 order-5">
                        <div
                            className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center pb-50 gap-md-5 gap-2 at_fade_anim"
                            data-fade-from="bottom"
                            data-duration="2"
                        >
                            {TAGS.map((tag) => (
                                <p key={tag} className="neutral-900 mb-0">
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
