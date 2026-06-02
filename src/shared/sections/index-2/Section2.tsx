import RevealText from "@/shared/effects/RevealText";

const CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            d="M20 0C20.3015 10.9184 29.0816 19.6985 40 20C29.0816 20.3015 20.3015 29.0816 20 40C19.6985 29.0816 10.9184 20.3015 0 20C10.9184 19.6985 19.6985 10.9184 20 0Z"
            fill="#B7B7B7"
        />
    </svg>
);

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const QUOTE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40 20V0H20H0V20V40H20L40 20ZM40 20H20V40L0 20L20 0L40 20Z"
            fill="#FEFEFE"
        />
    </svg>
);

const SERVICE_LABEL = [
    "Web Development",
    "Motion Graphics",
    "Brand Strategy",
    "Product Design",
]


const SERVICE_BTN_CLASS =
    "at-btn at-btn-border-white ps-2 pt-20 pb-20 pe-2 text-white bg-transparent rounded-0 border-top-0 border-start-0 border-end-0 w-100";

export default function Section2() {
    return (
        <section className="sec-2-home-2 container-2200">
            <div className="mx-4 pt-20 pb-20">
                <div className="d-flex align-items-center justify-content-between">
                    {CIRCLE_SVG}
                    {CIRCLE_SVG}
                    {CIRCLE_SVG}
                </div>
            </div>
            <div
                className="bg-coating rounded-5 overflow-hidden mx-lg-3 mx-2 bg-cover"
                data-background="/assets/imgs/pages/img-28.webp"
            >
                <video
                    src="/assets/imgs/video/live-bg.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="img-cover p-absolute top-0 start-0 end-0 bottom-0 z-0"
                />
                <div className="container pb-100 p-relative z-index-2">
                    <div className="row">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-12 text-center">
                                <div className={`${SERVICE_BTN_CLASS}`}>
                                    <span>
                                        <span className="text-1">{SERVICE_LABEL[i - 1]}</span>
                                        <span className="text-2">{SERVICE_LABEL[i - 1]}</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container pb-100 p-relative z-index-2">
                    <div className="row g-4 justify-content-lg-between justify-content-center align-items-end">
                        <div className="col-lg-5 col-12">
                            <div className="at-about-title-wrap">
                                <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">who we are</span>
                                        <span className="text-2">who we are</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <h2 className="at-section-title reveal-text text-white lh-1 mb-40 mt-20">
                                    <RevealText>We build digital experiences that drive real growth.</RevealText>
                                </h2>
                                <p className="text-white mb-0">
                                    Strategy, design, and technology aligned to deliver measurable{" "}
                                    <br className="d-xxl-block d-lg-none d-none" /> business results for ambitious brands.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-7 tp_fade-anim">
                            <div
                                className="card-item p-relative at_fade_anim"
                                data-fade-from="bottom"
                                data-duration="1"
                                data-delay="0.5"
                            >
                                <div className="card-item__bg">
                                    <img
                                        src="/assets/imgs/pages/img-29.webp"
                                        alt="Mountain background"
                                        className="home-2-card-item__bg-img img-cover"
                                        width={400}
                                        height={400} loading="lazy" />
                                </div>
                                <div className="card-item-avatar p-absolute top-0 end-0 changeless">
                                    <img
                                        src="/assets/imgs/template/avatar/avatar-9.webp"
                                        alt="Profile"
                                        className="home-2-card-item__avatar-img"
                                        width={65}
                                        height={65} loading="lazy" />
                                </div>
                                <div className="card-item-content p-absolute bottom-0 start-0">
                                    {QUOTE_SVG}
                                    <h6 className="card-item-text mb-0 text-white">
                                        Trusted by fast-growing startups and global companies worldwide
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
