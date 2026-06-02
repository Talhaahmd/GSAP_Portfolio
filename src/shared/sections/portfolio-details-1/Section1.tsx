import { Link } from "react-router-dom";
import SwiperDynamic from "@/shared/components/SwiperDynamic";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SLIDER_IMAGES = [
    { src: "/assets/imgs/pages/img-177.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-176.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-178.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-179.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-180.webp", alt: "orisa" },
];

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="d-flex justify-content-between border-bottom-100 py-4">
            <p className="fz-font-md neutral-900 mb-0">{label}</p>
            <p className="fz-font-lg fw-600 mb-0 neutral-900">{value}</p>
        </div>
    );
}

export default function Section1() {
    return (
        <section className="sec-1-portfolio-details-1 overflow-hidden pt-150 pb-100">
            <div className="container">
                <div className="row g-3 align-items-end">
                    <div className="col-md-9">
                        <h1 className="fz-ds-1 lh-1 fw-500 d-flex mb-0">
                            Nebula<sup className="fz-80 fw-400 top-0">®</sup>
                        </h1>
                        <h5 className="fw-600 mb-0">Fashion Brand Identity Design</h5>
                    </div>
                    <div className="col-md-3 ms-auto text-md-end">
                        <Link to="#" className="border-bottom-900 d-inline-block">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">live demo</span>
                                    <span className="text-2">live demo</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </Link>
                    </div>
                    <div className="col-12">
                        <div className="border-bottom-100 pb-30" />
                    </div>
                </div>
                <div className="row mt-50">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">Introduction</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <InfoRow label="Client" value="Nebula Labs" />
                        <InfoRow label="Release Date" value="2024" />
                        <InfoRow label="Role" value="UI/UX Designer" />
                        <InfoRow label="Duration" value="6 Weeks" />
                        <p className="fz-font-2xl fw-400 neutral-900 mt-40">
                            Nebula is a comprehensive fashion brand identity project dedicated to sculpting a
                            distinctive, modern, and highly expressive visual language. While many brands settle for
                            being seen, Nebula aims to be felt—bridging the gap between avant-garde artistry and
                            wearable design.
                        </p>
                    </div>
                </div>
            </div>
            <SwiperDynamic
                className="swiper about-me-slider-active pt-60 mb-60 at-item-anime-area"
                slidesPerView={2}
                spaceBetween={24}
                loop
                breakpoints={{
                    576: { slidesPerView: 1, spaceBetween: 24 },
                    768: { slidesPerView: 1, spaceBetween: 24 },
                    992: { slidesPerView: 2, spaceBetween: 30 },
                }}
            >
                {SLIDER_IMAGES.map((slide, index) => (
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">Challenge & Approach</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl neutral-900 mt-40">
                            The challenge was to create a brand identity that feels refined yet bold—balancing
                            elegance with individuality. The approach centered on defining a clear brand personality,
                            developing a cohesive visual system, and ensuring flexibility across both physical and
                            digital fashion touchpoints.
                        </p>
                        <p className="fz-font-xl neutral-900 mt-40">
                            We had to ensure that Nebula didn&apos;t feel like &quot;just another luxury
                            label&quot;—it needed to resonate with a sense of mystery and power without losing the
                            accessibility required for contemporary commercial success.
                        </p>
                        <ul className="ps-4">
                            <li className="neutral-950">Deep analysis of user behavior and product goals</li>
                            <li className="neutral-950">Clear information architecture and user flows</li>
                            <li className="neutral-950">Modular UI components for consistency and scalability</li>
                            <li className="neutral-950">Visual hierarchy focused on usability and focus</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <img
                            src="/assets/imgs/pages/img-181.webp"
                            alt="orisa"
                            width={1200}
                            height={700}
                            className="w-100" loading="lazy" />
                    </div>
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">The Solution</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl neutral-900 mt-40">
                            The final identity system features a clean logotype, a balanced color palette, and
                            carefully selected typography. Each element works together to create a cohesive and
                            recognizable fashion brand, adaptable across packaging, lookbooks, retail materials, and
                            digital platforms.
                        </p>
                        <h6 className="py-3">Key Features</h6>
                        <ul className="ps-4">
                            <li className="neutral-950">
                                Distinctive logotype with a modern, fashion-forward aesthetic
                            </li>
                            <li className="neutral-950">Curated color palette reflecting the brand&apos;s identity and mood</li>
                            <li className="neutral-950">Custom typography system for editorial and commercial use</li>
                            <li className="neutral-950">
                                Cohesive visual language across print, packaging, and digital assets
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 py-5">
                        <img
                            src="/assets/imgs/pages/img-182.webp"
                            alt="orisa"
                            width={600}
                            height={400}
                            className="w-100" loading="lazy" />
                    </div>
                    <div className="col-md-6 py-5">
                        <img
                            src="/assets/imgs/pages/img-183.webp"
                            alt="orisa"
                            width={600}
                            height={400}
                            className="w-100" loading="lazy" />
                    </div>
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">Outcome</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl fw-500 neutral-900 mt-40">
                            Nebula successfully emerges as a confident fashion brand with a timeless yet contemporary
                            identity. The project demonstrates how thoughtful brand design can elevate perception,
                            strengthen recognition, and create emotional connection within a competitive fashion
                            landscape.
                        </p>
                        <div className="py-3 border-bottom-100" />
                        <div className="testimonial-author d-flex align-items-start mb-0 gap-4 pt-60 w-75">
                            <div>
                                <div className="testimonial-left-img size-50 rounded-3 overflow-hidden">
                                    <img
                                        src="/assets/imgs/template/avatar/avatar-20.webp"
                                        alt="orisa"
                                        width={50}
                                        height={50}
                                        className="img-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="fz-3xl neutral-900 fw-400">
                                    &quot;Orisa completely transformed how we present our brand online. Their strategic
                                    mindset and attention to detail resulted in a digital experience that feels both
                                    refined and high-performing.&quot;
                                </p>
                                <h6 className="testimonial-content-author-name fw-600 mb-0 fz-font-md">
                                    Elena Morrison
                                </h6>
                                <p className="testimonial-content-author-position m-0 fz-font-label">
                                    Creative Director, Nebula Labs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
