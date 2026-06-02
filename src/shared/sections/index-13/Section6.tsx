import RevealText from "@/shared/effects/RevealText";

const PHASES = [
    { num: "01", week: "Week 1-2", title: "Discovery", text: "Site analysis, brief workshops, programmatic studies, and constraint mapping. We listen first, then sketch.", delivs: ["Site Survey", "Program Brief", "Feasibility Memo"], active: true, delay: ".1" },
    { num: "02", week: "Week 3-5", title: "Concept", text: "Massing studies, material palettes, and design narrative. We test ideas in physical models and computational forms.", delivs: ["Concept Decks", "Massing Models", "Mood Boards"], delay: ".25" },
    { num: "03", week: "Week 6-10", title: "Schematic", text: "Plans, sections, and elevations resolved. Structural and MEP coordination begins. The building gains its bones.", delivs: ["Schematic Set", "Material Specs", "3D Renderings"], delay: ".4" },
    { num: "04", week: "Week 11-18", title: "Documentation", text: "Construction documents, technical drawings, and detailed specs. Permits filed, contractors briefed.", delivs: ["CD Set", "Tender Package", "Permit Filings"], delay: ".55" },
    { num: "05", week: "Week 19-24+", title: "Construction", text: "Site supervision, change orders, and quality control. We stay on-site until the last detail is right.", delivs: ["Site Visits", "Punch Lists", "Handover"], delay: ".7" },
];

export default function Section6() {
    return (
        <section className="sec-6-home-13" aria-label="Our process">
            <div className="sec-6-home-13__dots" aria-hidden="true"></div>

            <div className="sec-6-home-13__inner">
                <header className="sec-6-home-13__header">
                    <div className="sec-6-home-13__head-left">
                        <div className="sec-6-home-13__label at_fade_anim" data-fade-from="left" data-delay=".05">
                            <span className="sec-6-home-13__label-dot" aria-hidden="true"></span>
                            <span className="sec-6-home-13__label-text">OUR PROCESS</span>
                        </div>
                        <h2 className="sec-6-home-13__title mb-0 reveal-text">
                            <RevealText>How we shape every project, from blueprint to build.</RevealText>
                        </h2>
                    </div>

                    <div className="sec-6-home-13__head-right">
                        <p className="sec-6-home-13__desc mb-0 at_fade_anim">
                            A disciplined five-phase methodology where every drawing, model, and decision earns its place. Slow when it matters, swift when it counts.
                        </p>
                        <ul className="sec-6-home-13__metrics list-unstyled mb-0">
                            <li className="sec-6-home-13__metric at_fade_anim">
                                <span className="sec-6-home-13__metric-num">12-24w</span>
                                <span className="sec-6-home-13__metric-label">AVG TIMELINE</span>
                            </li>
                            <li className="sec-6-home-13__metric at_fade_anim">
                                <span className="sec-6-home-13__metric-num">05</span>
                                <span className="sec-6-home-13__metric-label">PHASES</span>
                            </li>
                        </ul>
                    </div>
                </header>

                <div className="sec-6-home-13__timeline">
                    {PHASES.map((p) => (
                        <div key={p.num} className={`sec-6-home-13__phase${p.active ? " sec-6-home-13__phase--active" : ""} at_fade_anim`} data-fade-from="left" data-fade-offset="24" data-delay={p.delay}>
                            <div className="sec-6-home-13__phase-head">
                                <div className="sec-6-home-13__phase-id">
                                    <span className="sec-6-home-13__phase-dot" aria-hidden="true"></span>
                                    <span className="sec-6-home-13__phase-num">{p.num}</span>
                                </div>
                                <span className="sec-6-home-13__phase-week">{p.week}</span>
                            </div>
                            <div className="sec-6-home-13__phase-body">
                                <h3 className="sec-6-home-13__phase-title mb-0">{p.title}</h3>
                                <p className="sec-6-home-13__phase-text mb-0">{p.text}</p>
                            </div>
                            <div className="sec-6-home-13__phase-deliv">
                                <p className="sec-6-home-13__phase-deliv-label mb-0">DELIVERABLES</p>
                                <ul className="sec-6-home-13__phase-deliv-list list-unstyled mb-0">
                                    {p.delivs.map((d) => (
                                        <li key={d}><span aria-hidden="true">+</span><span>{d}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
