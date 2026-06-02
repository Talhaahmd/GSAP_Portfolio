import { Link } from "react-router-dom";
// FAQs section 2 - Browse by topic (service-style cards)

const TOPICS = [
    {
        number: "01",
        title: "Overview",
        href: "#",
        description:
            "Essential questions to understand who we are, what we do, and who we work with.",
        image: "/assets/imgs/pages/img-161.webp",
    },
    {
        number: "02",
        title: "Services",
        href: "#",
        description:
            "Details about our solutions, consulting offerings, and system capabilities.",
        image: "/assets/imgs/pages/img-162.webp",
    },
    {
        number: "03",
        title: "Process",
        href: "#",
        description:
            "How we approach problems, execute projects, and collaborate with clients.",
        image: "/assets/imgs/pages/img-163.webp",
    },
    {
        number: "04",
        title: "Support",
        href: "#",
        description:
            "Post-launch support, maintenance, updates, and system optimization.",
        image: "/assets/imgs/pages/img-164.webp",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-faqs at-item-anime-area pt-100 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Browse by topic</h3>
                    </div>
                </div>
                <div className="row g-3 pt-100">
                    {TOPICS.map((topic, index) => (
                        <div
                            key={topic.number}
                            className="col-xxl-3 col-md-6"
                        >
                            <div
                                className={`at-service-card hover-up border-100 rounded-2 overflow-hidden p-relative bg-neutral-0 z-index-3 ${index === 0 ? "no-before " : ""
                                    }`}
                            >
                                <Link
                                    to={topic.href}
                                    className="p-absolute top-0 left-0 w-100 h-100"
                                    aria-label={topic.title}
                                />
                                <div className="at-service-card-content m-xxl-5 m-4">
                                    <div className="at-service-card-number">
                                        <h6 className="fw-600 neutral-300">
                                            [{topic.number}]
                                        </h6>
                                    </div>
                                    <h4 className="mt-3 fw-600">
                                        <Link to={topic.href}>
                                            {topic.title}
                                        </Link>
                                    </h4>
                                    <div className="at-service-card-description">
                                        <p className="mb-0 neutral-900">
                                            {topic.description}
                                        </p>
                                    </div>
                                    <div className="at-service-card-img rounded-2 fix mt-4 hover-effect-1">
                                        <img
                                            className="img-cover rounded-2"
                                            src={topic.image}
                                            alt="orisa"
                                            width={400}
                                            height={260} loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
