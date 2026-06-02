import OdometerCounter from "@/shared/elements/OdometerCounter";
const STATS = [
    {
        prefix: "$",
        count: 28,
        suffix: "M+",
        label: (
            <>
                Revenue driven through <br /> digital strategy
            </>
        ),
    },
    {
        prefix: "",
        count: 64,
        suffix: "K+",
        label: (
            <>
                Qualified leads <br /> generated
            </>
        ),
    },
    {
        prefix: "",
        count: 190,
        suffix: "+",
        label: (
            <>
                Brands scaled <br /> with Orisa
            </>
        ),
    },
];

export default function Section9() {
    return (
        <section className="home-2-section-9 at-item-anime-area">
            <div className="container pt-100 pb-100">
                <div className="row justify-content-center">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="col-lg-4 col-md-6 col-6 text-center"
                        >
                            <h1 className="fz-ds-1 fw-500 mb-0 text-nowrap">
                                {stat.prefix}
                                <span
                                    className="odometer"
                                    data-count={stat.count}
                                >
                                    <OdometerCounter count={stat.count} />
                                </span>
                                {stat.suffix}
                            </h1>
                            <h6 className="fw-500">{stat.label}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
