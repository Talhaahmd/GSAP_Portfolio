import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 3 Section 8 - CTA / Ready to turn marketing

const ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section8() {
    return (
        <section
            className="home-3-section-8 bg-cover pt-120 pb-120 bg-neutral-900"
            data-background="/assets/imgs/pages/bg-img-3.webp"
            style={{
                backgroundImage: "url(/assets/imgs/pages/bg-img-3.webp)",
                backgroundSize: "cover",
            }}
        >
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-5 me-auto">
                        <h2 className="reveal-text mb-0 pe-lg-5 text-white">
                            <RevealText>Ready to turn marketing into a growth engine?</RevealText>
                        </h2>
                        <p className="text-white fz-xl py-4">
                            Let&apos;s audit your current marketing and <br /> uncover your biggest growth
                            opportunities.
                        </p>
                        <div
                            className="at-btn-group at-btn-group-transparent at_fade_anim"
                            data-delay=".4"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <Link className="at-btn-circle" to="/portfolio-1">
                                {ARROW_SVG}
                            </Link>
                            <Link className="at-btn z-index-1" to="/portfolio-1">
                                View latest projects
                            </Link>
                            <Link className="at-btn-circle" to="/portfolio-1">
                                {ARROW_SVG}
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="p-relative rounded-4 overflow-hidden">
                            <img
                                src="/assets/imgs/pages/img-70.webp"
                                alt="orisa"
                                width={600}
                                height={400}
                                className="img-cover w-100 h-100" loading="lazy" />
                            <div className="p-absolute bottom-0 start-0 m-5">
                                <img
                                    src="/assets/imgs/template/logo/favicon-md.webp"
                                    alt="orisa"
                                    width={63}
                                    height={69}
                                    style={{ width: "auto", height: "auto" }} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
