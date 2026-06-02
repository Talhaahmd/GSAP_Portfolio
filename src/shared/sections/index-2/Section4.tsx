import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SERVICES = [
    {
        title: "AI Automations",
        description:
            "We connect your tools, automate repetitive workflows, and reduce manual work through smart automation systems. From lead management to internal ops, we eliminate bottlenecks so your team can focus on what matters.",
        listLeft: ["Workflow Automation", "AI-Powered Triggers", "Multi-step Pipelines"],
        listRight: ["Data Sync & Routing", "Scheduled Processes"],
        image: "/assets/imgs/pages/img-30.webp",
        itemClass: "pb-40",
    },
    {
        title: "MVP Development",
        description:
            "We turn your idea into a functional, production-ready MVP with clean architecture and fast execution. Our product-focused approach gets you to market quickly — without compromising quality or scalability.",
        listLeft: ["Product Discovery", "Architecture Design", "Full-Stack Development"],
        listRight: ["User Testing", "Launch Support"],
        image: "/assets/imgs/pages/img-31.webp",
        itemClass: "pb-40",
    },
    {
        title: "CRM Integrations",
        description:
            "We integrate your CRM with the rest of your stack — automating contact management, pipeline updates, and communication workflows. Better data flow means faster decisions and more revenue.",
        listLeft: ["HubSpot & Salesforce", "Pipeline Automation", "Lead Scoring & Routing"],
        listRight: ["Email & Slack Sync", "Custom Dashboards"],
        image: "/assets/imgs/pages/img-32.webp",
        itemClass: "pb-40",
    },
    {
        title: "Network & Cloud",
        description:
            "From on-premise to cloud environments, we build the infrastructure that keeps your systems connected, scalable, and reliable. We ensure seamless communication between services so your operations never skip a beat.",
        listLeft: ["Cloud Infrastructure (AWS / GCP)", "API Development & Integration", "Database Architecture"],
        listRight: ["CI/CD Pipelines", "Security & Monitoring"],
        image: "/assets/imgs/pages/img-33.webp",
        itemClass: "pb-50",
    },
];

type Section4Props = {
    className?: string;
};

export default function Section4({ className }: Section4Props) {
    return (
        <div className={`container-2200 ${className ?? ""}`.trim()}>
            <section className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="at-service-subtitle-wrap at-about-border d-flex justify-content-between gap-3 mb-50">
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">Things we offer</span>
                                        <span className="text-2">Things we offer</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <span className="fs-font-md fw-500 text-decoration-underline">
                                    © Klarus AI
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-section vertical-section position-relative">
                    <div className="wrapper">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="item">
                                <div
                                    className={`container bg-neutral-50 pt-20 ${service.itemClass}`}
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="d-flex flex-column justify-content-between h-100 py-4 px-2">
                                                <h1 className="fz-ds-1 fw-500 text-scale-anim-2 pb-xxl-5 pb-4">
                                                    {service.title}
                                                </h1>
                                                <div className="d-xxl-flex align-items-end">
                                                    <p className="fz-font-2xl neutral-950 reveal-text pe-xxl-5 mb-3">
                                                        <RevealText>{service.description}</RevealText>
                                                    </p>
                                                    <div className="d-flex flex-column flex-md-row flex-xxl-column justify-content-between ps-xxl-5 ps-3">
                                                        <ul className="text-nowrap neutral-950">
                                                            {service.listLeft.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                        <ul className="text-nowrap neutral-950">
                                                            {service.listRight.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="rounded-4 overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt="orisa"
                                                    width={600}
                                                    height={400}
                                                    className="img-cover" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
