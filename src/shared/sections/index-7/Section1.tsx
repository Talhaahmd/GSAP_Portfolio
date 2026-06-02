import { Link } from "react-router-dom";
{/* Home 7 Section 1 (Hero - Advancing Startup Innovation) */}

const TAG_ITEMS = [
    { href: "/services-details", label: "MVP Launch", delay: "0.1" },
    { href: "/services-details", label: "Product Design", delay: "0.2" },
    { href: "/services-details", label: "Scalable Tech", delay: "0.4" },
    { href: "/services-details", label: "Growth Strategy", delay: "0.1" },
    { href: "/services-details", label: "UI/UX Excellence", delay: "0.3" },
];

const BRACKET_ITEMS = [
    { text: "[ BUILD ]", delay: "0.1" },
    { text: "[ GROW ]", delay: "0.2" },
    { text: "[ SCALE ]", delay: "0.3" },
    { text: "[ BOOST ]", delay: "0.4" },
];

const AVATARS = [
    { src: "/assets/imgs/pages/home-7/avatar-1.webp", alt: "Client 1", delay: "0.1" },
    { src: "/assets/imgs/pages/home-7/avatar-2.webp", alt: "Client 2", delay: "0.2" },
    { src: "/assets/imgs/pages/home-7/avatar-3.webp", alt: "Client 3", delay: "0.3" },
    { src: "/assets/imgs/pages/home-7/avatar-4.webp", alt: "Client 4", delay: "0.4" },
    { src: "/assets/imgs/pages/home-7/avatar-5.webp", alt: "Client 5", delay: "0.5" },
];

const TAG_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
    </svg>
);

const COORDS_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 27 20" fill="none">
        <path
            d="M13.3203 20C5.9637 20 0 15.5228 0 10C0 4.47715 5.9637 0 13.3203 0C20.6769 0 26.6406 4.47715 26.6406 10C26.6406 15.5228 20.6769 20 13.3203 20ZM10.27 17.6674C8.98779 15.6259 8.20174 13.3742 8.02857 11H2.7465C3.27413 14.1765 6.28238 16.7747 10.27 17.6674ZM10.6971 11C10.8975 13.4388 11.8255 15.7297 13.3203 17.752C14.8151 15.7297 15.7431 13.4388 15.9435 11H10.6971ZM23.8941 11H18.6121C18.4389 13.3742 17.6529 15.6259 16.3707 17.6674C20.3582 16.7747 23.3665 14.1765 23.8941 11ZM2.7465 9H8.02857C8.20174 6.62577 8.98779 4.37407 10.27 2.33256C6.28238 3.22533 3.27413 5.8235 2.7465 9ZM10.6971 9H15.9435C15.7431 6.56122 14.8151 4.27025 13.3203 2.24799C11.8255 4.27025 10.8975 6.56122 10.6971 9ZM16.3707 2.33256C17.6529 4.37407 18.4389 6.62577 18.6121 9H23.8941C23.3665 5.8235 20.3582 3.22533 16.3707 2.33256Z"
            fill="currentColor" />
    </svg>
);

const HEADLINE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="53" viewBox="0 0 69 53" fill="none">
        <path d="M40.2 0L67.72 25.4267L69 26.7141L67.72 27.6797L40.2 53.1064L38.6 51.4971L64.2 27.6797H-59V25.4267H64.2L38.6 1.60928L40.2 0Z" fill="currentColor" />
    </svg>
);

const CTA_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 11" fill="none">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

export default function Section1() {
    return (
        <div className="sec-1-home-7 p-relative z-index-1 overflow-hidden">
            {/* Split background: vermilion (left) + maroon (right) */}
            <div className="sec-1-home-7__bg d-flex">
                <div className="sec-1-home-7__bg-left"></div>
                <div className="sec-1-home-7__bg-right"></div>
            </div>

            {/* Decorative 8-point asterisk sitting on the split */}
            <div className="sec-1-home-7__star d-none d-lg-flex">
                <img
                    className="at-scroll-rotate"
                    data-rotate-duration="18"
                    data-rotate-sensitivity="0.18"
                    data-rotate-boost="12"
                    src="/assets/imgs/pages/home-7/star-asterisk.svg"
                    alt="decorative star" loading="lazy" />
            </div>

            <div className="sec-1-home-7__img-wrap">
                <div className="anim-zoomin">
                    <img
                        className="sec-1-home-7__img"
                        src="/assets/imgs/pages/home-7/hero-vr.webp"
                        alt="Futuristic VR experience"
                        width={960}
                        height={1080} loading="lazy" />
                </div>
            </div>

            <div className="container-fluid p-relative">
                <div className="row g-0 align-items-stretch">
                    {/* LEFT: Hero image + overlays */}
                    <div className="col-lg-6 p-relative sec-1-home-7__left">
                        {/* Coordinates pinned below the header */}
                        <div className="sec-1-home-7__coords d-flex align-items-center gap-2">
                            {COORDS_SVG}
                            <span className="fw-500 text-uppercase text-scramble" data-scramble-text="27.1127&deg; S, 109.3497&deg; W">27.1127&deg; S, 109.3497&deg; W</span>
                        </div>

                        {/* Tag chips pinned above the image bottom */}
                        <div className="sec-1-home-7__tags d-flex flex-wrap gap-2">
                            {TAG_ITEMS.map((tag, i) => (
                                <Link
                                    key={i}
                                    to={tag.href}
                                    className="sec-1-home-7__tag at_fade_anim"
                                    data-start="100%"
                                    data-delay={tag.delay}
                                >
                                    <span>{tag.label}</span>
                                    {TAG_ARROW_SVG}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Copy + CTA */}
                    <div className="col-lg-6 sec-1-home-7__right">
                        <div className="sec-1-home-7__content">
                            {/* [BUILD] [GROW] [SCALE] [BOOST] */}
                            <ul className="sec-1-home-7__brackets list-unstyled d-flex flex-wrap gap-4 mb-30">
                                {BRACKET_ITEMS.map((item, i) => (
                                    <li
                                        key={i}
                                        className="at_fade_anim"
                                        data-start="100%"
                                        data-delay={item.delay}
                                    >
                                        {item.text}
                                    </li>
                                ))}
                            </ul>

                            {/* Headline with diagonal arrow */}
                            <div className="sec-1-home-7__headline-wrap p-relative">
                                <h1 className="sec-1-home-7__headline text-white text-uppercase fw-700 mb-30 at_fade_anim" data-start="100%" data-delay="0.3">
                                    Advancing Startup Innovation
                                </h1>
                                <span className="sec-1-home-7__headline-arrow-cover d-none d-md-inline-block">
                                    <span className="sec-1-home-7__headline-arrow at_fade_anim" data-start="100%" data-delay="0.6">
                                        {HEADLINE_ARROW_SVG}
                                    </span>
                                </span>
                            </div>

                            {/* Description */}
                            <p className="sec-1-home-7__desc text-white mb-40 at_fade_anim" data-start="100%" data-delay="0.5">
                                From MVP launch to global scaling, we provide the strategic design and high-performance technology startups need to dominate their market. Our team delivers products that matter.
                            </p>

                            {/* Primary CTA + icon bubble */}
                            <div className="sec-1-home-7__cta d-flex align-items-center flex-wrap gap-2 mb-60">
                                <Link to="/contact-1" className="sec-1-home-7__cta-btn at_fade_anim" data-start="100%" data-delay="0.3">
                                    <span>Start Your Journey</span>
                                </Link>
                                <Link to="/contact-1" className="sec-1-home-7__cta-arrow" aria-label="Start Your Journey">
                                    {CTA_ARROW_SVG}
                                </Link>
                            </div>

                            {/* Social proof: avatar stack + copy */}
                            <div className="sec-1-home-7__proof d-flex align-items-center flex-wrap gap-3">
                                <div className="sec-1-home-7__avatars">
                                    {AVATARS.map((avatar, i) => (
                                        <span
                                            key={i}
                                            className="sec-1-home-7__avatar at_fade_anim"
                                            data-start="100%"
                                            data-delay={avatar.delay}
                                        >
                                            <img
                                                src={avatar.src}
                                                alt={avatar.alt}
                                                width={48}
                                                height={48} loading="lazy" />
                                        </span>
                                    ))}
                                </div>
                                <p className="sec-1-home-7__proof-text text-white fw-700 mb-0 at_fade_anim" data-start="100%" data-delay="0.6">
                                    500+ Ventures scaled with <br className="d-none d-xl-inline" />Orisa global expertise
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
