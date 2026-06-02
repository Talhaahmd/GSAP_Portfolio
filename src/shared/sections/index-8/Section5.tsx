import Marquee from "react-fast-marquee";
type Brand = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

const BRAND_SOURCES: Brand[] = [
    { src: "/assets/imgs/icons/brand-1.webp", alt: "logo-brand", width: 147, height: 40 },
    { src: "/assets/imgs/icons/brand-2.webp", alt: "logo-brand", width: 173, height: 43 },
    { src: "/assets/imgs/icons/brand-3.webp", alt: "logo-brand", width: 162, height: 47 },
    { src: "/assets/imgs/icons/brand-4.webp", alt: "logo-brand", width: 167, height: 35 },
    { src: "/assets/imgs/icons/brand-5.webp", alt: "logo-brand", width: 105, height: 24 },
    { src: "/assets/imgs/icons/brand-6.webp", alt: "logo-brand", width: 170, height: 48 },
];

const BRANDS: Brand[] = [...BRAND_SOURCES, ...BRAND_SOURCES, ...BRAND_SOURCES];

export default function Section3() {
    return (
        <section className="at-brand-area at_fade_anim">
            <div className="carouselTicker carouselTicker-right position-relative z-1">
                <Marquee
                    speed={40}
                    direction="right"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul className="carouselTicker__list scroll-move-right" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, overflow: "visible", gap: "0 2rem" }}>
                        {BRANDS.map((brand, i) => (
                            <li key={i} className="carouselTicker__item" style={{ margin: "0 1.5rem", float: "none" }}>
                                <div className="brand-item dark-mode-invert">
                                    <img
                                        src={brand.src}
                                        alt={brand.alt}
                                        width={brand.width}
                                        height={brand.height}
                                        style={{ height: 35, width: "auto" }} loading="lazy" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
