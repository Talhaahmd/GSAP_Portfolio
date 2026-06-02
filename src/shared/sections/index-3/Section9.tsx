import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import TeamCard1 from "@/shared/cards/TeamCard1";

// Home 3 Section 9 - Meet our team

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const TEAM = [
    { classList: "col-lg-3 col-md-6 pt-md-5", linkPost: "/team-details", img: "/assets/imgs/pages/img-17.webp", name: "Darrell Steward", position: "UI/UX Designer" },
    { classList: "col-lg-3 col-md-6", linkPost: "/team-details", img: "/assets/imgs/pages/img-18.webp", name: "Amelia Courtney", position: "Project Manager" },
    { classList: "col-lg-3 col-md-6 pt-md-5", linkPost: "/team-details", img: "/assets/imgs/pages/img-19.webp", name: "Esther Howard", position: "Software Developer" },
    { classList: "col-lg-3 col-md-6", linkPost: "/team-details", img: "/assets/imgs/pages/img-20.webp", name: "Jacob Jones", position: "Marketing CEO" },
];

const TAGS = [
    "[ Conversion-focused ]",
    "[ Data-driven ]",
    "[ Built for scale ]",
    "[ User-centric ]",
    "[Future-proof]",
];

export default function Section9() {
    return (
        <section className="home-3-section-9 p-relative">
            {/* Background grid */}
            <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className={
                            i === 3
                                ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                        }
                    >
                        <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                        {i === 3 && (
                            <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                        )}
                    </div>
                ))}
            </div>

            <div className="pt-120 overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">MEET OUR TEAM</span>
                                    <span className="text-2">MEET OUR TEAM</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </div>
                        <div className="col-lg-5 h-100">
                            <h1 className="section-title fw-500 fz-ds-1 lh-1 reveal-text">
                                <RevealText>Behind the Visionaries</RevealText>
                            </h1>
                        </div>
                        <div className="col-lg-5 ms-auto">
                            <p className="fz-font-3xl mb-4">
                                Creative experts designing meaningful digital experiences that help ambitious brands grow
                                faster and lead their markets.
                            </p>
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/portfolio-1">
                                    {ARROW_CIRCLE}
                                </Link>
                                <Link className="at-btn z-index-1" to="/portfolio-1">
                                    Join our Team
                                </Link>
                                <Link className="at-btn-circle" to="/portfolio-1">
                                    {ARROW_CIRCLE}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-80 g-4">
                        {TEAM.map((member, index) => {
                            const isSlow = index === 0 || index === 2;
                            if (isSlow) {
                                return (
                                    <div
                                        key={index}
                                        className={member.classList}
                                        data-parallax
                                        data-parallax-speed="0.9"
                                    >
                                        <TeamCard1
                                            linkPost={member.linkPost}
                                            img={member.img}
                                            name={member.name}
                                            position={member.position}
                                        />
                                    </div>
                                );
                            }
                            return (
                                <TeamCard1
                                    key={index}
                                    classList={member.classList}
                                    linkPost={member.linkPost}
                                    img={member.img}
                                    name={member.name}
                                    position={member.position}
                                />
                            );
                        })}
                    </div>

                    <div className="row">
                        <div className="col-12 order-5">
                            <div
                                className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center pb-50 pt-50 gap-md-4 gap-2 at_fade_anim"
                                data-fade-from="bottom"
                                data-duration="2"
                            >
                                {TAGS.map((tag, i) => (
                                    <p key={i} className="neutral-900 mb-0">
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
