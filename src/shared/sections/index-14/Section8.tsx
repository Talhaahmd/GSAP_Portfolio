import RevealText from "@/shared/effects/RevealText";

const PRESS = ["VOGUE", "•", "GQ", "•", "NAT GEO", "•", "WALLPAPER*", "•", "IGNANT", "•", "ANOTHER", "•", "APERTURE", "•"];

const AWARDS = [
    { num: "01", year: "2025", name: "Sony World Photography Awards", cat: "Editorial series · Open category", result: "Finalist", resultMod: "finalist", latest: true, delay: ".1" },
    { num: "02", year: "2024", name: "International Photo Awards (IPA)", cat: "Portrait series · Professional", result: "Gold", resultMod: "gold", delay: ".15" },
    { num: "03", year: "2024", name: "LensCulture Critics' Choice", cat: "Documentary · Long-form", result: "Selected", resultMod: "", delay: ".2" },
    { num: "04", year: "2023", name: "Hasselblad Masters", cat: "Editorial · Print & web", result: "Honourable mention", resultMod: "", delay: ".25" },
    { num: "05", year: "2023", name: "Communication Arts Photo Annual", cat: "Brand · Campaign work", result: "Selected", resultMod: "", delay: ".3" },
    { num: "06", year: "2022", name: "PDN Photo Annual", cat: "Studio · Still life", result: "Winner", resultMod: "gold", delay: ".35" },
];

export default function Section8() {
    return (
        <section className="sec-8-home-14" aria-label="Press and awards">
            <div className="sec-8-home-14__inner">
                <header className="sec-8-home-14__head">
                    <div className="sec-8-home-14__head-left">
                        <div className="sec-8-home-14__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".1">
                            <span className="sec-8-home-14__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-8-home-14__eyebrow-key">RECOGNITION INDEX</span>
                            <span className="sec-8-home-14__eyebrow-meta">&mdash; 2012 / 2025</span>
                        </div>
                        <h2 className="sec-8-home-14__title reveal-text mb-0"><RevealText>Press, prizes,<br />&amp; quiet proof.</RevealText></h2>
                    </div>

                    <div className="sec-8-home-14__head-right">
                        <dl className="sec-8-home-14__metrics at_fade_anim mb-0" data-fade-from="bottom" data-delay=".3">
                            <div className="sec-8-home-14__metric"><dt className="sec-8-home-14__metric-key mb-0">Awards</dt><dd className="sec-8-home-14__metric-val mb-0">24</dd></div>
                            <div className="sec-8-home-14__metric"><dt className="sec-8-home-14__metric-key mb-0">Years</dt><dd className="sec-8-home-14__metric-val mb-0">12</dd></div>
                            <div className="sec-8-home-14__metric"><dt className="sec-8-home-14__metric-key mb-0">Publications</dt><dd className="sec-8-home-14__metric-val mb-0">07</dd></div>
                        </dl>
                    </div>
                </header>

                <div className="sec-8-home-14__ticker at_fade_anim" data-fade-from="bottom" data-delay=".15" aria-label="As featured in">
                    <span className="sec-8-home-14__ticker-label">
                        <span className="sec-8-home-14__ticker-label-dot" aria-hidden="true"></span>
                        AS FEATURED IN
                    </span>
                    <div className="sec-8-home-14__ticker-viewport">
                        <div className="sec-8-home-14__ticker-track">
                            {[0, 1].map((dup) => (
                                <ul key={dup} className="sec-8-home-14__ticker-list list-unstyled mb-0" aria-hidden={dup === 1 ? "true" : undefined}>
                                    {PRESS.map((item, i) => (
                                        <li key={i} className="sec-8-home-14__ticker-item" {...(item === "•" ? { "aria-hidden": "true" as const } : {})}>{item}</li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sec-8-home-14__roster">
                    <ol className="sec-8-home-14__awards list-unstyled mb-0">
                        {AWARDS.map((a) => (
                            <li key={a.num} className={`sec-8-home-14__award${a.latest ? " sec-8-home-14__award--latest" : ""} at_fade_anim`} data-fade-from="bottom" data-delay={a.delay}>
                                {a.latest && <span className="sec-8-home-14__award-badge">Latest</span>}
                                <span className="sec-8-home-14__award-index mb-0">{a.num}</span>
                                <span className="sec-8-home-14__award-year mb-0">{a.year}</span>
                                <div className="sec-8-home-14__award-body">
                                    <p className="sec-8-home-14__award-name mb-0">{a.name}</p>
                                    <p className="sec-8-home-14__award-cat mb-0">{a.cat}</p>
                                </div>
                                <span className={`sec-8-home-14__award-result${a.resultMod ? ` sec-8-home-14__award-result--${a.resultMod}` : ""}`}>{a.result}</span>
                            </li>
                        ))}
                    </ol>

                    <p className="sec-8-home-14__roster-foot at_fade_anim mb-0" data-fade-from="bottom" data-delay=".4">
                        <span className="sec-8-home-14__roster-foot-dot" aria-hidden="true"></span>
                        Showing 6 of 24 entries &mdash;
                        <a className="sec-8-home-14__roster-foot-link" href="#">view full archive &rarr;</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
