import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

{/* Home 7 Section 5 — Specialized services + accordion + throwable logos */}

const EYEBROW_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
    </svg>
);

const CTA_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ACCORDION_ITEMS = [
    {
        id: "Sec5H71",
        headingId: "headingSec5H71",
        num: "01",
        title: "MVP Development",
        expanded: true,
        text: "Go from idea to a high-fidelity, functional product in record time. We focus on the core features that prove your concept and win over early adopters.",
        tags: ["Prototyping", "Fast-track Dev", "User Validation"],
    },
    {
        id: "Sec5H72",
        headingId: "headingSec5H72",
        num: "02",
        title: "Product Design",
        expanded: false,
        text: "We craft intuitive interfaces and immersive user experiences that make your startup feel premium and established from day one.",
        tags: ["UI/UX Design", "Design Systems", "Visual Storytelling"],
    },
    {
        id: "Sec5H73",
        headingId: "headingSec5H73",
        num: "03",
        title: "Scalable Engineering",
        expanded: false,
        text: "Modern tech stacks built for growth. We architect clean, secure, and high-performance systems that handle traffic spikes without a blink.",
        tags: ["Next.js", "Cloud Architecture", "API Integration"],
    },
    {
        id: "Sec5H74",
        headingId: "headingSec5H74",
        num: "04",
        title: "Growth & Strategy",
        expanded: false,
        text: "Launching is just the start. We provide the data-driven insights and technical optimizations needed to scale your user base and retain them.",
        tags: ["Performance Opt", "A/B Testing", "Scalability Audit"],
    },
];

type ClientLogo = { src: string; bgClass: string; width: number; height: number };

const CLIENT_LOGOS: ClientLogo[] = [
    { src: "/assets/imgs/template/logo/logo-brand-02.webp", bgClass: "client-box--brand-h7", width: 130, height: 38 },
    { src: "/assets/imgs/template/logo/logo-brand-03.webp", bgClass: "client-box--brand-h7", width: 125, height: 27 },
    { src: "/assets/imgs/template/logo/logo-brand-04.webp", bgClass: "client-box--brand-h7", width: 105, height: 24 },
    { src: "/assets/imgs/template/logo/logo-brand-05.webp", bgClass: "bg-neutral-500", width: 120, height: 27 },
    { src: "/assets/imgs/template/logo/logo-brand-07.webp", bgClass: "client-box--brand-h7", width: 94, height: 42 },
    { src: "/assets/imgs/template/logo/logo-brand-08.webp", bgClass: "bg-neutral-500", width: 109, height: 32 },
    { src: "/assets/imgs/template/logo/logo-brand-02.webp", bgClass: "bg-neutral-500", width: 130, height: 38 },
    { src: "/assets/imgs/template/logo/logo-brand-01.webp", bgClass: "client-box--brand-h7", width: 130, height: 33 },
    { src: "/assets/imgs/template/logo/logo-brand-06.webp", bgClass: "client-box--brand-h7", width: 125, height: 28 },
    { src: "/assets/imgs/template/logo/logo-brand-09.webp", bgClass: "client-box--brand-h7", width: 117, height: 32 },
    { src: "/assets/imgs/template/logo/logo-brand-10.webp", bgClass: "bg-neutral-500", width: 135, height: 48 },
    { src: "/assets/imgs/template/logo/logo-brand-03.webp", bgClass: "client-box--brand-h7", width: 125, height: 27 },
];

export default function Section5() {
    return (
        <div className="sec-5-home-7 bg-neutral-0 overflow-hidden">
            <div className="container-2200 px-lg-5 px-3 pt-120 pb-80">
                <div className="row g-4 g-xl-5 align-items-start">
                    <div className="col-xl-4 col-lg-5 col-12">
                        <div className="sec-5-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                            <span className="text-scramble" data-scramble-text="Specialized services">Specialized services</span>
                            {EYEBROW_ARROW_SVG}
                        </div>
                        <h2 className="sec-5-home-7__title mb-4 mb-xl-5 reveal-text"><RevealText>We Build Products That Founders Dream Of.</RevealText></h2>
                        <div className="sec-5-home-7__cta d-inline-flex align-items-stretch at_fade_anim">
                            <Link to="/contact-1" className="at-btn sec-5-home-7__cta-btn text-capitalize">
                                <span>
                                    <span className="text-1">Get a free quote</span>
                                    <span className="text-2">Get a free quote</span>
                                </span>
                            </Link>
                            <Link to="/contact-1" className="sec-5-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Get a free quote">
                                {CTA_CIRCLE_SVG}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5 col-12 mx-lg-auto">
                        <div className="sec-5-home-7__photo scroll-move-up">
                            <div className="fix anim-zoomin">
                                <img
                                    src="/assets/imgs/pages/home-7/sec-5-founder.webp"
                                    alt="Founder working at a desk"
                                    className="w-100 h-100 object-fit-cover"
                                    width={493}
                                    height={582}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-12">
                        <div className="accordion accordion-flush sec-5-home-7__accordion" id="accordionSec5Home7">
                            {ACCORDION_ITEMS.map((item) => (
                                <div key={item.id} className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                                    <h3 className="accordion-header" id={item.headingId}>
                                        <button
                                            className={`accordion-button sec-5-home-7__acc-btn${item.expanded ? "" : " collapsed"}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${item.id}`}
                                            aria-expanded={item.expanded ? "true" : "false"}
                                            aria-controls={`collapse${item.id}`}
                                        >
                                            <span className="sec-5-home-7__acc-title">{item.num}. {item.title}</span>
                                            <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                                                <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div
                                        id={`collapse${item.id}`}
                                        className={`accordion-collapse collapse${item.expanded ? " show" : ""}`}
                                        data-bs-parent="#accordionSec5Home7"
                                    >
                                        <div className="accordion-body sec-5-home-7__acc-body">
                                            <p className="sec-5-home-7__acc-text mb-0">{item.text}</p>
                                            <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                                                {item.tags.map((tag) => (
                                                    <span key={tag} className="sec-5-home-7__tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0 text-center">
                <div className="scroll-move-up">
                    <h6 className="mb-4 mb-xl-5 reveal-text"><RevealText>Collaborating with the world&rsquo;s most ambitious companies to redefine what&rsquo;s possible.</RevealText></h6>
                </div>
            </div>

            <div className="container-fluid px-0">
                <div className="client-capsule-wrapper-box" data-t-throwable-scene="true">
                    <div className="client-capsule-wrapper">
                        {CLIENT_LOGOS.map((logo, i) => (
                            <p key={i} data-t-throwable-el="">
                                <span className={`client-box ${logo.bgClass}`}>
                                    <img
                                        className="invert-1"
                                        src={logo.src}
                                        alt="Partner logo"
                                        width={logo.width}
                                        height={logo.height} loading="lazy" />
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
