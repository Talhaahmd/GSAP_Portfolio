import RevealText from "@/shared/effects/RevealText";

const PROCESS = [
    { delay: "0.05", img: "sec-4-process-1.webp", title: "Discover", desc: "We dive deep into your brand's DNA to define a clear strategic roadmap." },
    { delay: "0.15", img: "sec-4-process-2.webp", title: "Design", desc: "Crafting intuitive interfaces and cinematic motions that bring your vision to life." },
    { delay: "0.25", img: "sec-4-process-3.webp", title: "Deploy", desc: "Delivering high-performance solutions with clean code and seamless functionality." },
];

export default function Section4() {
    return (
        <section className="sec-4-home-12" aria-label="Process Philosophy">
            <div className="container">
                <header className="sec-4-home-12__header">
                    <p className="sec-4-home-12__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".05">PROCESS PHILOSOPHY</p>
                    <h2 className="sec-4-home-12__title reveal-text mb-0"><RevealText>Deep Strategy. Pure Craft. Fast Dev.</RevealText></h2>
                </header>

                <div className="sec-4-home-12__row">
                    {PROCESS.map((p) => (
                        <div key={p.title} className="card-home-12-process at_fade_anim" data-fade-from="bottom" data-delay={p.delay}>
                            <div className="card-home-12-process__image anim-zoomin-wrap">
                                <img className="card-home-12-process__img anim-zoomin" src={`/assets/imgs/pages/home-12/${p.img}`} alt="Orisa" loading="lazy" />
                            </div>
                            <div className="card-home-12-process__text">
                                <h3 className="card-home-12-process__title">{p.title}</h3>
                                <p className="card-home-12-process__desc">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
