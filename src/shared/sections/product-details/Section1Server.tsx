import { Link } from "react-router-dom";
import Section1Interactive from "./Section1Interactive";

const GALLERY_IMGS: { src: string; width: number; height: number }[] = [
    { src: "/assets/imgs/pages/product/product-details-1.webp", width: 408, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-2.webp", width: 407, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-3.webp", width: 408, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-4.webp", width: 407, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-5.webp", width: 408, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-6.webp", width: 407, height: 476 },
];

export default function Section1Server() {
    return (
        <section className="sec-1-shop-details overflow-hidden pt-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            {GALLERY_IMGS.map((img, i) => (
                                <div key={i} className="col-md-6">
                                    <div className="product-card">
                                        <div className="product-card__inner">
                                            <div className="product-card__thumb">
                                                <Link
                                                    to="#"
                                                    className="product-card__img-link d-flex justify-content-center align-items-end"
                                                >
                                                    <img
                                                        className="product-card__img"
                                                        src={img.src}
                                                        alt="orisa"
                                                        width={img.width}
                                                        height={img.height}
                                                        style={{ width: "auto", height: "auto" }} loading="lazy" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Section1Interactive />
                    </div>
                </div>
            </div>
        </section>
    );
}
