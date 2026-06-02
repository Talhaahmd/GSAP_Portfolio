import RevealText from "@/shared/effects/RevealText";

const EXPERTISE = [
    { img: "sec-5-img-1.webp", title: "01. Architectural Design", tag: "[ CORE_STRUCTURE ]", text: "Crafting high-end residential and commercial structures with a focus on minimalist volumes and natural light integration." },
    { img: "sec-5-img-2.webp", title: "02. Interior Architecture", tag: "[ SPATIAL_FLOW ]", text: "Defining the soul of internal spaces through custom material selection, precision lighting, and ergonomic flow." },
    { img: "sec-5-img-3.webp", title: "03. Urban Planning", tag: "[ MACRO_SYSTEMS ]", text: "Designing sustainable master plans that harmonize high-density urban requirements with green, livable environments." },
    { img: "sec-5-img-4.webp", title: "04. 3D Visualization & VR", tag: "[ IMMERSIVE_MODELING ]", text: "Utilizing high-fidelity real-time rendering to allow clients to walk through their future spaces before the first stone is laid." },
    { img: "sec-5-img-5.webp", title: "05. Sustainable Consulting", tag: "[ ECO_INTEGRITY ]", text: "Integrating eco-conscious materials and energy-efficient systems into modern architectural frameworks." },
];

export default function Section5() {
    return (
        <section className="sec-5-home-13" aria-label="Our Expertise">
            <div className="sec-5-home-13__inner">
                <header className="sec-5-home-13__header">
                    <h2 className="sec-5-home-13__title mb-0 reveal-text"><RevealText>Our Expertise</RevealText></h2>
                    <div className="sec-5-home-13__hint at_fade_anim" data-fade-from="right" data-delay=".05">
                        <span className="sec-5-home-13__hint-dot" aria-hidden="true"></span>
                        <span>Mastering the equilibrium between structural integrity and spatial emotion.</span>
                    </div>
                </header>

                <div className="sec-5-home-13__list">
                    {EXPERTISE.map((e, i) => (
                        <article key={i} className="sec-5-home-13__card">
                            <div className="sec-5-home-13__card-media anim-zoomin">
                                <img data-speed=".9" src={`/assets/imgs/pages/home-13/${e.img}`} alt="Orisa" loading="lazy" />
                            </div>
                            <div className="sec-5-home-13__card-body">
                                <header className="sec-5-home-13__card-head">
                                    <h3 className="sec-5-home-13__card-title mb-0 reveal-text"><RevealText>{e.title}</RevealText></h3>
                                    <div className="sec-5-home-13__card-tag">
                                        <span className="sec-5-home-13__card-tag-text">{e.tag}</span>
                                        <button className="sec-5-home-13__card-toggle" type="button" aria-label="Open expertise details">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                                <path d="M9 3.75V14.25M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </header>
                                <p className="sec-5-home-13__card-text mb-0 at_fade_anim">{e.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
