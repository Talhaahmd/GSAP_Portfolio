import { Link } from "react-router-dom";
interface WorkCard {
    title: string;
    img: string;
    cardClass: string;
    parallaxRange: string;
    parallaxEase: string;
    showOnMobile?: boolean;
}

const works: WorkCard[] = [
    {
        title: "Noirform",
        img: "/assets/imgs/pages/home-8/sec6-work-1.webp",
        cardClass: "sec-6-home-8__card--sm sec-6-home-8__card--lt d-none d-xl-flex",
        parallaxRange: "28",
        parallaxEase: "power1.out",
    },
    {
        title: "Tridom",
        img: "/assets/imgs/pages/home-8/sec6-work-4.webp",
        cardClass: "sec-6-home-8__card--sm sec-6-home-8__card--lb d-none d-xl-flex",
        parallaxRange: "120",
        parallaxEase: "expo.inOut",
    },
    {
        title: "Gryth",
        img: "/assets/imgs/pages/home-8/sec6-work-2.webp",
        cardClass: "sec-6-home-8__card--lg sec-6-home-8__card--ct",
        parallaxRange: "42",
        parallaxEase: "sine.inOut",
    },
    {
        title: "Nebula",
        img: "/assets/imgs/pages/home-8/sec6-work-5.webp",
        cardClass: "sec-6-home-8__card--md sec-6-home-8__card--cm",
        parallaxRange: "34",
        parallaxEase: "none",
    },
    {
        title: "Vexyl",
        img: "/assets/imgs/pages/home-8/sec6-work-6.webp",
        cardClass: "sec-6-home-8__card--md sec-6-home-8__card--cb",
        parallaxRange: "34",
        parallaxEase: "none",
    },
    {
        title: "Zonetic",
        img: "/assets/imgs/pages/home-8/sec6-work-3.webp",
        cardClass: "sec-6-home-8__card--sm sec-6-home-8__card--rt d-none d-xl-flex",
        parallaxRange: "140",
        parallaxEase: "circ.inOut",
    },
    {
        title: "Quarn",
        img: "/assets/imgs/pages/home-8/sec6-work-7.webp",
        cardClass: "sec-6-home-8__card--sm sec-6-home-8__card--rb d-none d-xl-flex",
        parallaxRange: "80",
        parallaxEase: "power2.inOut",
    },
];

function PlusIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 11.52 10.8" fill="none">
            <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
        </svg>
    );
}

export default function Section6() {
    return (
        <section className="sec-6-home-8">
            <div className="container-fluid sec-6-home-8__container">
                <div className="sec-6-home-8__top d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <span className="sec-6-home-8__kicker text-scramble">Selected works</span>
                        <span className="sec-6-home-8__kicker-icon" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                            </svg>
                        </span>
                    </div>
                    <Link className="sec-6-home-8__view-all common-underline" to="/portfolio-1">View all works</Link>
                </div>

                <div className="sec-6-home-8__grid">
                    {works.map((work, index) => (
                        <Link
                            key={index}
                            className={`sec-6-home-8__card ${work.cardClass}`}
                            to="/portfolio-details-1"
                            data-sec6-parallax-range={work.parallaxRange}
                            data-sec6-parallax-ease={work.parallaxEase}
                        >
                            <div className="sec-6-home-8__img anim-zoomin">
                                <img data-speed=".8" src={work.img} alt="orisa" width={600} height={450} loading="lazy" />
                            </div>
                            <div className="sec-6-home-8__meta">
                                <span className="sec-6-home-8__title">{work.title}</span>
                                <span className="sec-6-home-8__plus" aria-hidden="true">
                                    <PlusIcon />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
