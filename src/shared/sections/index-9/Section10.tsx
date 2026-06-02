import { Link } from "react-router-dom";
function ArrowIcon() {
    return (
        <>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
        </>
    );
}

function LongArrowRight() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
        </svg>
    );
}

const galleryImages = [
    "/assets/imgs/pages/img-130.webp",
    "/assets/imgs/pages/img-131.webp",
    "/assets/imgs/pages/img-132.webp",
    "/assets/imgs/pages/img-133.webp",
    "/assets/imgs/pages/img-134.webp",
    "/assets/imgs/pages/img-135.webp",
    "/assets/imgs/pages/img-136.webp",
];

export default function Section10() {
    return (
        <>
            {/* Home 9 / section 10 - Contact CTA + moving gallery */}
            <div className="home-9-contact-area position-relative bg-neutral-900 overflow-hidden pt-150">
                <div className="container position-relative z-2 text-center">
                    {/* Title & Button wrapper */}
                    <div className="content-wrapper d-flex flex-column align-items-center justify-content-center">
                        <span className="at-btn common-white text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">CONTACT US</span>
                                <span className="text-2">CONTACT US</span>
                            </span>
                            <i>
                                <ArrowIcon />
                            </i>
                        </span>
                        <h1 className="contact-title common-white fw-500 mb-50 at_fade_anim mx-auto at-char-animation" data-fade-from="bottom" data-delay=".2">
                            Let&apos;s architect your digital legacy.
                        </h1>
                        <div className="at-btn-group btn-brand-1 at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link className="at-btn-circle" to="/portfolio-1">
                                <LongArrowRight />
                            </Link>
                            <Link className="at-btn z-index-1" to="/portfolio-1">View latest projects</Link>
                            <Link className="at-btn-circle" to="/portfolio-1">
                                <LongArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-900 overflow-hidden">
                <div className="moving-gallery-wrap position-relative z-1 pt-120">
                    <div className="moving-gallery at_fade_anim carouselTicker carouselTicker-left" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                        <ul className="wrapper-gallery carouselTicker__list scroll-move-left">
                            {galleryImages.map((img, i) => (
                                <li key={i}>
                                    <img src={img} alt="orisa" width={300} height={200} loading="lazy" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
