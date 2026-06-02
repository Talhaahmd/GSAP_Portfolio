const BRAND_NUMS = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "01"];

interface Slide { logos: string[] }

const SLIDES: Slide[] = [
    { logos: ["02", "03", "04"] },
    { logos: ["03", "04", "05"] },
    { logos: ["04", "05", "06"] },
    { logos: ["05", "06", "07"] },
    { logos: ["06", "07", "08"] },
    { logos: ["07", "08", "09"] },
    { logos: ["08", "09", "10"] },
    { logos: ["09", "10", "01"] },
    { logos: ["10", "01", "02"] },
    { logos: ["01", "02", "03"] },
    { logos: ["02", "03", "04"] },
    { logos: ["03", "04", "05"] },
    { logos: ["04", "05", "06"] },
    { logos: ["05", "06", "07"] },
    { logos: ["06", "07", "08"] },
];

export default function Section3() {
    return (
        <section className="sec-3-home-15" aria-label="Featured brands">
            <div className="sec-3-home-15__strip at-brand-scroll carouselTicker carouselTicker-right">
                <ul className="carouselTicker__list d-flex align-items-center gap-4 mb-0 list-unstyled">
                    {SLIDES.map((slide, i) => (
                        <li key={i}>
                            <div className="at-brand-item">
                                <div className="brand">
                                    {slide.logos.map((logo) => (
                                        <span key={logo} className="brand-logo-slide" data-logo={logo}>
                                            <img className="dark-mode-invert" src={`/assets/imgs/template/logo/logo-brand-${logo}.webp`} alt="Orisa" loading="lazy" />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
