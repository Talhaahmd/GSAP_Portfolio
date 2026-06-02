import Marquee from "react-fast-marquee";

// About 2 Section 4 - Moving gallery (carousel ticker left)

const GALLERY_IMGS = [
    { src: "/assets/imgs/pages/img-130.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-131.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-132.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-133.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-134.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-135.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-136.webp", alt: "orisa" },
];

export default function Section4() {
    return (
        <section className="sec-4-about pt-120">
            <div
                className="moving-gallery at_fade_anim carouselTicker carouselTicker-left"
                data-delay=".5"
                data-fade-from="bottom"
                data-ease="bounce"
            >
                <Marquee
                    speed={40}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul
                        className="wrapper-gallery carouselTicker__list scroll-move-left"
                        style={{
                            display: "flex",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            overflow: "visible",
                            gap: "0 1.5rem",
                        }}
                    >
                        {GALLERY_IMGS.map((item, i) => (
                            <li key={i} style={{ margin: 0, float: "none" }}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={300}
                                    style={{ display: "block", objectFit: "cover" }} loading="lazy" />
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
