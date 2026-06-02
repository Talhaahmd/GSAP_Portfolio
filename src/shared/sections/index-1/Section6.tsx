import RevealText from "@/shared/effects/RevealText";
import SwiperDynamic from "@/shared/components/SwiperDynamic";
import TestimonialCard1 from "@/shared/cards/TestimonialCard1";
import { Link } from "react-router-dom";
const TESTIMONIAL_SOURCES = [
    {
        starColor: "#FFB618",
        img: "/assets/imgs/template/avatar/avatar-6.webp",
        logo: "/assets/imgs/icons/brand-7.webp",
        logoWidth: 86,
        logoHeight: 25,
        name: "Amelia Wright",
        position: "Head of Marketing",
        company: "London United Kingdom",
        comment:
            "They delivered not just a design, but a complete brand experience. Strategic, creative, and incredibly detail-oriented.",
    },
    {
        starColor: "#585959",
        img: "/assets/imgs/template/avatar/avatar-7.webp",
        logo: "/assets/imgs/icons/brand-8.webp",
        logoWidth: 101,
        logoHeight: 25,
        name: "Lucas Moreno",
        position: "Product Manager",
        company: "Barcelona, Spain",
        comment:
            "The collaboration was seamless from start to finish. Their UX decisions significantly improved our product engagement.",
    },
    {
        starColor: "#FFB618",
        img: "/assets/imgs/template/avatar/avatar-8.webp",
        logo: "/assets/imgs/icons/brand-9.webp",
        logoWidth: 119,
        logoHeight: 25,
        name: "Hannah Lee",
        position: "Creative Director",
        company: "Studio Kinetic",
        comment:
            "A rare combination of technical expertise and artistic vision. The final result felt premium and purposeful.",
    },
];

const TESTIMONIALS = [...TESTIMONIAL_SOURCES, ...TESTIMONIAL_SOURCES];

const LOGO_SVG = (
    <svg className="fill-primary mb-20" xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 40 42" fill="none">
        <path d="M16 14L12 7L16 0H24L28 7H20L16 14Z" fill="#F0460E" />
        <path d="M36 21L32 14H24L28 7H36L40 14L36 21Z" fill="#F0460E" />
        <path d="M28 35H36L40 28L36 21H28L32 28L28 35Z" fill="#F0460E" />
        <path d="M12 35H20L24 28L28 35L24 42H16L12 35Z" fill="#F0460E" />
        <path d="M4 21H12L8 14L12 7H4L0 14L4 21Z" fill="#F0460E" />
        <path d="M4 21L0 28L4 35H12L16 28H8L4 21Z" fill="#F0460E" />
    </svg>
);

const ARROW_PREV_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M11.3481 7.47314L5.25879 13.2856L11.3481 19.0981" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3124 13.2856H5.53564" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ARROW_NEXT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M15.2234 7.47314L21.3126 13.2856L15.2234 19.0981" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.259 13.2856H21.0358" stroke="currentColor" strokeWidth="1.66071" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Section6() {
    return (
        <div className="container-2200">
            <section id="sec-6-home-1" className="sec-6-home-1 mx-lg-3 mx-2 bg-black pt-100 pb-100 rounded-5 changeless overflow-hidden">
                <div className="container">
                    <div className="row align-items-end mb-50 g-3 z-index-2">
                        <div className="col-md-8">
                            {LOGO_SVG}
                            <h2 className="alt-section-title lh-1 mb-10 reveal-text text-white">
                                <RevealText>Trusted by Clients</RevealText>
                            </h2>
                            <p className="mg-portfolio-dec mb-50 text-white mb-0">
                                Real client experiences that speak to the strength of our work.
                            </p>
                        </div>
                        <div className="col-lg-2 ms-auto">
                            <div className="swiper-button-wrapper justify-content-end">
                                <button type="button" className="swiper-btn-prev" aria-label="Previous">
                                    {ARROW_PREV_SVG}
                                </button>
                                <button type="button" className="swiper-btn-next" aria-label="Next">
                                    {ARROW_NEXT_SVG}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 scroll-move-up2 z-index-2">
                            <SwiperDynamic
                                className="swiper slider-testimonial rounded-4"
                                slidesPerView={1}
                                spaceBetween={24}
                                centeredSlides
                                loop
                                navigation={{
                                    prevEl: "#sec-6-home-1 .swiper-btn-prev",
                                    nextEl: "#sec-6-home-1 .swiper-btn-next",
                                }}
                                breakpoints={{
                                    768: { slidesPerView: 1 },
                                    992: { slidesPerView: 1 },
                                    1200: { slidesPerView: 3 },
                                }}
                            >
                                {TESTIMONIALS.map((item, idx) => (
                                    <TestimonialCard1
                                        key={`testimonial-${idx}`}
                                        img={item.img}
                                        logo={item.logo}
                                        logoWidth={item.logoWidth}
                                        logoHeight={item.logoHeight}
                                        name={item.name}
                                        position={item.position}
                                        company={item.company}
                                        comment={item.comment}
                                        starColor={item.starColor}
                                    />
                                ))}
                            </SwiperDynamic>
                        </div>
                        <div className="col-12 text-center pt-50 z-index-1">
                            <Link to="mailto:hello@orisa.com" className="at-btn bg-transparent p-relative">
                                <img
                                    className="badge-zoon-in"
                                    src="/assets/imgs/icons/badge-2.svg"
                                    alt="orisa"
                                    width={120}
                                    height={120} loading="lazy" />
                                <span className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center overflow-unset">
                                    <span className="mt-2 badge-text-zoom-in overflow-unset text-wrap">
                                        <span className="fw-700 common-white text-uppercase overflow-unset">
                                            Client <br />
                                            Stories
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
