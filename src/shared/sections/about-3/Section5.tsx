// About 3 Section 5 - Gallery (3 columns, parallax-style data-speed)

const COLUMNS = [
    {
        dataSpeed: ".1",
        images: [
            "/assets/imgs/pages/img-140.webp",
            "/assets/imgs/pages/img-142.webp",
            "/assets/imgs/pages/img-143.webp",
            "/assets/imgs/pages/img-146.webp",
            "/assets/imgs/pages/img-140.webp",
            "/assets/imgs/pages/img-139.webp",
        ],
    },
    {
        dataSpeed: ".8",
        images: [
            "/assets/imgs/pages/img-147.webp",
            "/assets/imgs/pages/img-144.webp",
            "/assets/imgs/pages/img-138.webp",
            "/assets/imgs/pages/img-146.webp",
            "/assets/imgs/pages/img-148.webp",
            "/assets/imgs/pages/img-149.webp",
        ],
    },
    {
        dataSpeed: ".1",
        images: [
            "/assets/imgs/pages/img-126.webp",
            "/assets/imgs/pages/img-146.webp",
            "/assets/imgs/pages/img-147.webp",
            "/assets/imgs/pages/img-5.webp",
            "/assets/imgs/pages/img-142.webp",
            "/assets/imgs/pages/img-151.webp",
        ],
    },
];

export default function Section5({ classList = "" }: { classList?: string }) {
    return (
        <section className={`sec-5-about pt-65 pb-65 ${classList || ""}`}>
            <div className="mg-gallery-area fix">
                <div className="container-fluid container-2200">
                    <div className="at-gallery-wrapper">
                        <div className="row gx-30">
                            {COLUMNS.map((col, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="col-lg-4 col-md-4 col-sm-4 col-4"
                                >
                                    <div
                                        className="at-gallery-item-wrapper"
                                        data-speed={col.dataSpeed}
                                    >
                                        {col.images.map((src, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="at-gallery-item mb-30"
                                            >
                                                <span>
                                                    <img
                                                        className="w-100"
                                                        src={src}
                                                        alt="orisa"
                                                        width={620}
                                                        height={780}
                                                        style={{ width: "100%", height: "auto", objectFit: "cover" }} loading="lazy" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
