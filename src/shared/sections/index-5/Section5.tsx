import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

// Home 5 Section 5 - Stats + contact

type StatItem = {
    count: number;
    prefix?: string;
    suffix: string;
    label: string;
};

const STATS: StatItem[] = [
    { count: 25, suffix: "+", label: "Models in Production" },
    { count: 15, prefix: "$", suffix: "M+", label: "Daily Inferences" },
    { count: 300, suffix: "%", label: "Latency Optimization" },
    { count: 500, suffix: "TB", label: "Data Orchestrated" },
    { count: 99, suffix: ".9%", label: "System Uptime" },
];

export default function Section5() {
    return (
        <div className="bg-neutral-50">
            <section className="sec-5-home-5 pt-100 pb-100">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-8 col-lg-9">
                            <h3 className="reveal-text">
                                <RevealText>
                                    Years of Practice, Hundreds of Deployments, and Satisfied Partners
                                </RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 ms-auto">
                            <div>
                                <h6 className="fw-600">I&apos;m here</h6>
                                <div className="d-flex flex-wrap gap-md-5 gap-4">
                                    <span className="fz-font-md neutral-500">
                                        205 North Michigan Avenue, Suite 810
                                        <br className="d-block" />
                                        Chicago, 60601, USA
                                        <br className="d-block" />
                                        Phone:{" "}
                                        <span className="neutral-900">
                                            <Link to="tel:+1234567890">+1234567890</Link>
                                        </span>
                                        <br className="d-block" />
                                        Email:{" "}
                                        <span className="neutral-900">
                                            <Link to="mailto:hello@orisa.com">hello@orisa.com</Link>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 pt-100">
                            <div className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center gap-md-5 gap-3">
                                {STATS.map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <h1 className="fw-600 mb-0">
                                            <OdometerCounter
                                                count={stat.count}
                                                prefix={stat.prefix}
                                                suffix={stat.suffix}
                                            />
                                        </h1>
                                        <h6 className="fw-500 fz-font-md neutral-500 mb-0">{stat.label}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
