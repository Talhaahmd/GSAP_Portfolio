import SwiperDynamic from "@/shared/components/SwiperDynamic";

// Services details Section 2 - Image slider (about-me-slider-active)

const SLIDES = [
    { src: "/assets/imgs/pages/img-156.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-157.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-158.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-159.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-160.webp", alt: "orisa" },
];

export default function Section2() {
    return (
        <section className="sec-2-services-details at-item-anime-area pt-100 pb-120">
            <SwiperDynamic
                className="swiper about-me-slider-active"
                slidesPerView={2}
                spaceBetween={24}
                loop
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
                            height={560}
                            className="w-100 rounded-4" loading="lazy" />
                    </div>
                ))}
            </SwiperDynamic>
        </section>
    );
}
