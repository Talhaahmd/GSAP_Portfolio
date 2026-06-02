import OdometerCounter from "@/shared/elements/OdometerCounter";

const stats = [
    { value: "152", suffix: "+", label: "Digital products launched across 20+ countries.", delay: ".1" },
    { value: "25", suffix: "M", label: "Active users interacting with our interfaces daily.", delay: ".22" },
    { value: "48", suffix: "", label: "International design awards and industry honors.", delay: ".34" },
    { value: "94", suffix: "%", label: "Client retention rate over the last 5 years.", delay: ".46" },
    { value: "99.8", suffix: "", label: "Average Google Lighthouse performance score.", delay: ".58" },
];

export default function Section2() {
    return (
        <>
            {/* Home 9 / section 2 - stats + odometer */}
            <section className="sec-2-home-9 bg-neutral-0">
                <div className="sec-2-home-9__container">
                    <div className="sec-2-home-9__stats">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="sec-2-home-9__stat at_fade_anim"
                                data-delay={stat.delay}
                                data-fade-from="left"
                                data-fade-offset="24"
                            >
                                <p className="sec-2-home-9__value text-nowrap">
                                    {i < 4 ? (
                                        <>
                                            <OdometerCounter count={Number(stat.value)} />{stat.suffix}
                                        </>
                                    ) : (
                                        stat.value
                                    )}
                                </p>
                                <p className="sec-2-home-9__label mb-0">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="sec-2-home-9__lines" aria-hidden="true">
                        <img
                            src="/assets/imgs/pages/home-9/sec-2-lines.svg"
                            alt="orisa"
                            width={1720}
                            height={33}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
