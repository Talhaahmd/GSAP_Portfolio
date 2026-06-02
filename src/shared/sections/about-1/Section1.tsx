import RevealText from "@/shared/effects/RevealText";
import SwiperDynamic from "@/shared/components/SwiperDynamic";

// About 1 Section 1 - Hero / About Us

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const AVATARS = [
    { src: "/assets/imgs/template/avatar/avatar-10.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-11.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-12.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-13.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-14.webp", alt: "orisa", hiddenOnMobile: true },
];

const SLIDES = [
    { src: "/assets/imgs/pages/img-117.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-118.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-119.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-120.webp", alt: "orisa" },
];

export default function Section1() {
    return (
        <section className="sec-1-about pt-150 overflow-hidden">
            <div className="container pb-100">
                <div className="row align-items-center g-4">
                    <div className="col-12">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">About Us</span>
                                <span className="text-2">About Us</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                    <div className="col-lg-7 h-100">
                        <h2 className="section-title fw-600 lh-1 reveal-text">
                            <RevealText>
                                We are a creative digital agency shaping meaningful experiences
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-5 ms-auto">
                        <h6 className="mb-4 fw-600">
                            We blend strategy, creativity, and technology to help brands grow, connect, and stand out
                            in an ever-evolving digital world.
                        </h6>
                        <div className="sec-2-home-5__avatars-row d-flex gap-2">
                            {AVATARS.map((avatar, i) => (
                                <div
                                    key={i}
                                    className={`sec-2-home-5__avatar-sm at-offcanvas-gallery-img ${avatar.hiddenOnMobile ? "d-none d-md-block" : ""}`}
                                >
                                    <img
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        width={65}
                                        height={65}
                                        className="img-cover" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="at-item-anime-area">
                <SwiperDynamic
                    className="swiper about-me-slider-active"
                    slidesPerView={2}
                    spaceBetween={24}
                    loop={true}
                    breakpoints={{
                        576: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 1, spaceBetween: 24 },
                        992: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                >
                    {SLIDES.map((slide, index) => (
                        <div key={index} className="about-me-slider-thumb at-item-anime marque">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                width={770}
                                height={700}
                                className="w-100 rounded-4" loading="lazy" />
                        </div>
                    ))}
                </SwiperDynamic>
            </div>
        </section>
    );
}
