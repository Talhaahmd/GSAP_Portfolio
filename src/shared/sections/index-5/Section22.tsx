import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 5 Section 2 - Why Klarus AI / Portfolio area

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_BTN_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path
            d="M7.15771 2.62632L1.01015 9.24677L0 8.15892L6.14756 1.53846H0.729157V0H8.58628V8.46154H7.15771V2.62632Z"
            fill="#1D1D1D"
        />
    </svg>
);

const STAR_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path
            d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369575 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
            fill="currentColor"
        />
    </svg>
);

const QUOTE_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
            d="M6.75 13.5C10.4779 13.5 13.5 10.4779 13.5 6.75C13.5 10.477 16.5207 13.4986 20.2474 13.5C16.5207 13.5014 13.5 16.523 13.5 20.25C13.5 16.5221 10.4779 13.5 6.75 13.5C3.02208 13.5 4.58005e-07 16.5221 2.95052e-07 20.25L0 27L6.75 27C10.4779 27 13.5 23.9779 13.5 20.25C13.5 23.9779 16.5221 27 20.25 27L27 27L27 20.25C27 16.523 23.9794 13.5014 20.2526 13.5C23.9794 13.4986 27 10.477 27 6.75L27 4.54184e-06L20.25 4.83689e-06C16.5221 3.09249e-06 13.5 3.02208 13.5 6.75C13.5 3.02208 10.4779 3.35669e-06 6.75 1.6123e-06L2.36042e-06 0L1.47526e-06 6.75C9.86401e-07 10.4779 3.02208 13.5 6.75 13.5Z"
            fill="currentColor"
        />
    </svg>
);

const HERO_LIST_ITEMS = [
    "AI Automation Systems",
    "n8n Workflow Engineering",
    "Custom AI Agents",
    "MVP & Product Development",
    "System Integrations",
    "Operations Automation",
];

const SKILLS_LIST_ITEMS = [
    "n8n, Make.com, Zapier",
    "React, Next.js, Node.js",
    "OpenAI APIs, Claude, LangChain",
    "Supabase, PostgreSQL, Firebase",
    "AWS, Docker, REST APIs",
];
const AVATAR_IMGS = [
    "/assets/imgs/template/avatar/avatar-10.webp",
    "/assets/imgs/template/avatar/avatar-11.webp",
    "/assets/imgs/template/avatar/avatar-12.webp",
    "/assets/imgs/template/avatar/avatar-13.webp",
    "/assets/imgs/template/avatar/avatar-14.webp",
];

const FOOTER_TAGS = [
    "[ Conversion-focused ]",
    "[ Data-driven ]",
    "[ Built for scale ]",
    "[ User-centric ]",
    "[Future-proof]",
];

export default function Section2() {
    return (
        <div className=" bg-neutral-50">
            <div className="container-2200">
                <section className="sec-2-home-5 portfolio-area pt-120 pb-120 rounded-5 mx-lg-3 mx-2 fix bg-neutral-100">
                    <div className="container">
                        <div className="row pb-60 g-2">
                            <div className="col-xxl-1 col-lg-2">
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">why klarus ai</span>
                                        <span className="text-2">why klarus ai</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                            </div>
                            <div className="col-xxl-9 col-lg-10">
                                <h3 className="reveal-text lh-1">
                                    <RevealText>
                                        I bridge the gap between complex data and intelligent action through robust,
                                        scalable, and production-ready AI.
                                    </RevealText>
                                </h3>
                            </div>
                        </div>

                        <div className="row g-3 sec-2-home-5__grid">
                            {/* Column 1 */}
                            <div className="col-xxl-4 col-lg-6">
                                <div className="sec-2-home-5__col p-2 rounded-4 bg-neutral-0">
                                    <div className="sec-2-home-5__card sec-2-home-5__card--hero rounded-4 overflow-hidden rounded-4 p-relative">
                                        <div className="sec-2-home-5__hero-bg" />
                                        <img
                                            src="/assets/imgs/pages/img-103.webp"
                                            alt="Intelligent Systems"
                                            width={600}
                                            height={400}
                                            className="sec-2-home-5__hero-img" loading="lazy" />
                                        <div className="sec-2-home-5__hero-overlay p-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-between p-4">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h6 className="sec-2-home-5__hero-title text-white fw-bold mb-0">
                                                    Intelligent Systems <br /> for Modern Problems.
                                                </h6>
                                                <span className="text-white opacity-75 text-nowrap">© 2026</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-wrap gap-2">
                                                <span className="text-white fz-font-body">
                                                    +5 Years <br /> of Experience
                                                </span>
                                                <Link
                                                    className="at-btn bg-neutral-0 changeless text-dark py-2 px-3 fz-font-body"
                                                    to="#"
                                                >
                                                    <span>
                                                        <span className="text-1">Let&apos;s build</span>
                                                        <span className="text-2">Let&apos;s build</span>
                                                    </span>
                                                    <i>
                                                        {ARROW_BTN_SVG}
                                                        {ARROW_BTN_SVG}
                                                    </i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sec-2-home-5__card sec-2-home-5__card--list p-4 d-flex align-items-center">
                                        <ul className="sec-2-home-5__list list-unstyled mb-0">
                                            {HERO_LIST_ITEMS.map((item, i) => (
                                                <li key={i} className="sec-2-home-5__list-item">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="col-xxl-4 col-lg-6">
                                <div className="sec-2-home-5__col">
                                    <div className="sec-2-home-5__card sec-2-home-5__card--testimonial p-relative rounded-4 bg-neutral-0 p-4 p-md-5 fix">
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div className="sec-2-home-5__avatar rounded-3 overflow-hidden flex-shrink-0">
                                                <img
                                                    src="/assets/imgs/template/avatar/avatar-10.webp"
                                                    alt="Jeff Nippard"
                                                    width={56}
                                                    height={56}
                                                    className="img-cover" loading="lazy" />
                                            </div>
                                            <div>
                                                <h6 className="fw-600 neutral-900 fz-font-md mb-0">Jeffena Nippard</h6>
                                                <span className="neutral-500 small fz-font-label">CTO, NCP API</span>
                                            </div>
                                        </div>
                                        <div className="sec-2-home-5__stars mb-3">
                                            {[true, true, true, false, false].map((filled, i) => (
                                                <span
                                                    key={i}
                                                    className={`sec-2-home-5__star opacity-25 ${filled ? "sec-2-home-5__star--filled" : ""}`}
                                                >
                                                    {STAR_SVG}
                                                </span>
                                            ))}
                                        </div>
                                        <blockquote className="neutral-900 fz-font-lg fw-500 mb-4">
                                            &quot;Klarus has a rare ability to bridge the gap between theoretical mathematics
                                            and production-grade code. He doesn&apos;t just build models; he builds engines
                                            for real-world growth.&quot;
                                        </blockquote>
                                        <div className="sec-2-home-5__avatars-row d-flex gap-2">
                                            {AVATAR_IMGS.map((src, i) => (
                                                <div key={i} className="sec-2-home-5__avatar-sm">
                                                    <img
                                                        src={src}
                                                        alt="Klarus AI"
                                                        width={65}
                                                        height={65}
                                                        className="img-cover" loading="lazy" />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="neutral-500 small d-block mt-60 pb-145">[Since 2012]</span>
                                        <div className="sec-2-home-5__product-img-wrap p-absolute bottom-0 end-0">
                                            <img
                                                src="/assets/imgs/pages/img-104.webp"
                                                alt="Product"
                                                width={365}
                                                height={210}
                                                className="sec-2-home-5__product-img at_fade_anim"
                                                data-delay=".5"
                                                style={{ width: "auto", height: "auto" }} loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="col-xxl-4 col-12">
                                <div className="sec-2-home-5__col sec-2-home-5__col--three">
                                    <div className="sec-2-home-5__card sec-2-home-5__card--small rounded-4 bg-neutral-0 p-4 p-md-5 p-relative fix mb-20">
                                        <div className="pb-80 d-flex justify-content-between flex-md-row flex-column">
                                            <div>
                                                <div className="sec-2-home-5__stat mb-2">200+</div>
                                                <p className="neutral-900 fw-semibold mb-4">
                                                    Production-grade <br /> models deployed
                                                </p>
                                            </div>
                                            <ul className="sec-2-home-5__list sec-2-home-5__list--sm list-unstyled mb-0">
                                                {SKILLS_LIST_ITEMS.map((item, i) => (
                                                    <li key={i} className="sec-2-home-5__list-item">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="p-absolute bottom-0 end-0">
                                            <img
                                                src="/assets/imgs/pages/img-105.webp"
                                                alt="Klarus AI"
                                                width={447}
                                                height={103}
                                                className="at_fade_anim"
                                                style={{ width: "auto", height: "auto" }} loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            <div className="sec-2-home-5__card sec-2-home-5__card--small sec-2-home-5__card--img rounded-4 h-100 fix">
                                                <div className="img">
                                                    <img
                                                        src="/assets/imgs/pages/img-106.webp"
                                                        alt="Product"
                                                        width={242}
                                                        height={248}
                                                        className="sec-2-home-5__thumb-img at_fade_anim"
                                                        data-delay=".5"
                                                        style={{ width: "auto", height: "auto" }} loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="sec-2-home-5__card sec-2-home-5__card--small sec-2-home-5__card--quote bg-neutral-0 overflow-hidden h-100">
                                                <div className="sec-2-home-5__quote-icon mb-20">{QUOTE_ICON_SVG}</div>
                                                <blockquote className="neutral-900 fz-font-md fw-500 mb-0">
                                                    &quot;High performance starts with clean data. I prioritize rigorous
                                                    preprocessing and feature engineering to ensure model reliability.&quot;
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-70">
                            <div className="col-12 order-5">
                                <div
                                    className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center gap-md-5 gap-2 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-duration="2"
                                >
                                    {FOOTER_TAGS.map((tag, i) => (
                                        <p key={i} className="neutral-900 mb-0">
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
