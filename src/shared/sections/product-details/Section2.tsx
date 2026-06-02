import { Link } from "react-router-dom";
type GalleryImage = { src: string; className: string; width: number; height: number };

const IMAGES: GalleryImage[] = [
    { src: "/assets/imgs/pages/product/img-shop-1.webp", className: "col-md-6", width: 845, height: 956 },
    { src: "/assets/imgs/pages/product/img-shop-2.webp", className: "col-md-6", width: 845, height: 956 },
    { src: "/assets/imgs/pages/product/img-shop-3.webp", className: "col-12", width: 1720, height: 718 },
    { src: "/assets/imgs/pages/product/img-shop-1.webp", className: "col-md-4", width: 845, height: 956 },
    { src: "/assets/imgs/pages/product/img-shop-2.webp", className: "col-md-4", width: 845, height: 956 },
    { src: "/assets/imgs/pages/product/img-shop-1.webp", className: "col-md-4", width: 845, height: 956 },
];

export default function Section2() {
    return (
        <section className="sec-3-shop-details-1 pb-60">
            <div className="container">
                <div className="row g-3">
                    {IMAGES.map((img, i) => (
                        <div key={i} className={img.className}>
                            <div className="rounded-4 fix">
                                <img
                                    className="img-cover"
                                    src={img.src}
                                    alt="orisa"
                                    width={img.width}
                                    height={img.height} loading="lazy" />
                            </div>
                        </div>
                    ))}
                    <div className="col-12">
                        <div className="pt-100">
                            <div className="d-flex justify-content-center align-items-center gap-5">
                                <div className="at-about-svg-wrap d-none d-lg-block translate-middle-y z-n1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                        <path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none">
                                        <path opacity="0.3" d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z" fill="#515151" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                                        <path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" />
                                    </svg>
                                </div>
                                <div>
                                    <h6 className="fw-600">
                                        <Link to="tel:+2125557398" className="text-decoration-none">
                                            +212 - 555-7398
                                        </Link>
                                    </h6>
                                    <h4 className="mb-0 fw-medium text-decoration-underline">
                                        <Link to="mailto:hello@orisa.com">hello@orisa.com</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
