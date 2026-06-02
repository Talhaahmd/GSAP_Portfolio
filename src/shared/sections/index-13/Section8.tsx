import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ITEMS = [
    { num: "[ 01 ]", name: "Heritage-Driven Innovation", img: "sec-8-building-1.webp", lede: "We merge visionary concepts with seamless implementation, guaranteeing that every initiative, aesthetic, or framework transcends visual appeal.", active: true },
    { num: "[ 02 ]", name: "Motion graphics production", img: "sec-8-building-2.webp", lede: "From storyboard to final composite, we craft motion sequences that breathe life into static spaces and translate architecture into kinetic narrative." },
    { num: "[ 03 ]", name: "Technical Fidelity", img: "sec-8-building-3.webp", lede: "Drawings, models, and details rigorously coordinated. Every joint, tolerance, and material specification documented to construction-grade precision." },
    { num: "[ 04 ]", name: "Minimalist Structural Logic", img: "sec-8-building-4.webp", lede: "A disciplined less-is-more approach where every column, slab, and span earns its purpose — structure becomes the architecture itself." },
    { num: "[ 05 ]", name: "Sustainable Integrity", img: "sec-8-building-5.webp", lede: "Low-carbon materials, passive strategies, and lifecycle thinking woven into every decision — buildings designed to outlast their generation." },
];

const ArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Section8() {
    return (
        <section className="sec-8-home-13" aria-label="The Orisa Distinction">
            <div className="sec-8-home-13__inner">
                <header className="sec-8-home-13__top">
                    <div className="sec-8-home-13__head">
                        <Link className="sec-8-home-13__tag at_fade_anim" data-fade-from="left" data-delay=".05" to="/about-1">
                            <span>THE ORISA DISTINCTION</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.66667M10.5 3.5V9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <h2 className="sec-8-home-13__title mb-0 reveal-text">
                            <RevealText>Defining the benchmarks of modern architectural excellence.</RevealText>
                        </h2>
                    </div>

                    <div className="at-service-btn pt-30">
                        <Link className="at-btn" to="/contact-1">
                            <span>
                                <span className="text-1">Get a free quote</span>
                                <span className="text-2">Get a free quote</span>
                            </span>
                            <i>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                                </svg>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                                </svg>
                            </i>
                        </Link>
                    </div>
                </header>

                <div className="sec-8-home-13__body">
                    <div className="sec-8-home-13__left">
                        <figure className="sec-8-home-13__media anim-zoomin-wrap mb-0">
                            <img className="anim-zoomin" src={`/assets/imgs/pages/home-13/${ITEMS[0].img}`} alt="Orisa" loading="lazy" />
                        </figure>
                        <p className="sec-8-home-13__lede mb-0">{ITEMS[0].lede}</p>
                    </div>

                    <ul className="sec-8-home-13__list list-unstyled mb-0">
                        {ITEMS.map((it) => (
                            <li key={it.num} className={`sec-8-home-13__item${it.active ? " sec-8-home-13__item--active" : ""}`} data-img={`/assets/imgs/pages/home-13/${it.img}`} data-lede={it.lede}>
                                <Link className="sec-8-home-13__row" to="/services-1">
                                    <span className="sec-8-home-13__row-num">{it.num}</span>
                                    <span className="sec-8-home-13__row-name">{it.name}</span>
                                    <span className="sec-8-home-13__row-arrow" aria-hidden="true">{ArrowSvg}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
