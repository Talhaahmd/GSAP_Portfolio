import RevealText from "@/shared/effects/RevealText";

export default function Section3() {
    return (
        <section className="sec-3-home-8">
            <div className="container-fluid sec-3-home-8__container">
                <div className="row align-items-start justify-content-between g-5 g-xxl-0">
                    {/* LEFT: typography + tags */}
                    <div className="col-xxl-5 col-md-6 col-lg-6">
                        <h2 className="sec-3-home-8__title at_fade_anim reveal-text" data-start="100%" data-delay=".1" data-fade-from="bottom">
                            <RevealText>Turning digital complexity into <span className="sec-3-home-8__title-accent">human simplicity</span></RevealText>
                        </h2>
                        <p className="sec-3-home-8__lead at_fade_anim" data-start="100%" data-delay=".2" data-fade-from="bottom">
                            We don&apos;t just draw screens. We build systems. From deep user research to scalable design systems, we provide the architectural foundation for digital products that win.
                        </p>
                        <div className="sec-3-home-8__tags d-flex flex-wrap at_fade_anim" data-start="100%" data-delay=".3" data-fade-from="bottom">
                            <span className="sec-3-home-8__tag">Strategy &amp; Research</span>
                            <span className="sec-3-home-8__tag">UI/UX Excellence</span>
                            <span className="sec-3-home-8__tag">Design Systems</span>
                            <span className="sec-3-home-8__tag">Motion &amp; Interaction</span>
                        </div>
                    </div>

                    {/* RIGHT: two staggered photos */}
                    <div className="col-xxl-6 col-md-6 col-lg-6">
                        <div className="sec-3-home-8__media d-flex justify-content-xxl-end justify-content-lg-center justify-content-start align-items-start">
                            <div className="sec-3-home-8__photo sec-3-home-8__photo--narrow anim-zoomin-wrap at_fade_anim" data-start="100%" data-delay=".15" data-fade-from="right">
                                <img className="anim-zoomin" data-speed=".8" src="/assets/imgs/pages/home-8/hero8-sec3-img-1.webp" alt="orisa" width={400} height={500} loading="lazy" />
                            </div>
                            <div className="sec-3-home-8__photo sec-3-home-8__photo--wide anim-zoomin-wrap at_fade_anim" data-start="100%" data-delay=".25" data-fade-from="right">
                                <img className="anim-zoomin" data-speed=".9" src="/assets/imgs/pages/home-8/hero8-sec3-img-2.webp" alt="orisa" width={500} height={400} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
