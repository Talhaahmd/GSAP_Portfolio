import SwiperDynamic from "@/shared/components/SwiperDynamic";

const SLIDES = [
    { src: "/assets/imgs/pages/img-48.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-45.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-46.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-47.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-49.webp", alt: "orisa" },
];

export default function Section8() {
    return (
        <section className="home-2-section-8">
            <SwiperDynamic
                className="swiper about-me-slider-active at-item-anime-area"
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
                            width={900}
                            height={700}
                            className="w-100 rounded-4" loading="lazy" />
                    </div>
                ))}
            </SwiperDynamic>
        </section>
    );
}
