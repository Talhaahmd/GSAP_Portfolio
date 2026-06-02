import VideoReelModal from "@/shared/sections/index-11/VideoReelModal";

export default function Section1() {
    return (
        <>
            {/* Home 11 / Section 1 -- Cinematic Hero with SplitText title reveal */}
            <section className="sec-1-home-11 changeless" aria-label="Motion Video Creative Studio Hero">
                {/* Full-bleed background video */}
                <div className="sec-1-home-11__bg" aria-hidden="true">
                    <video className="sec-1-home-11__bg-video" autoPlay muted loop playsInline preload="metadata">
                        <source src="/assets/imgs/pages/home-11/hero-11.webm" type="video/webm" />
                    </video>
                    <div className="sec-1-home-11__bg-overlay"></div>
                </div>

                {/* Top navigation bar (eyebrow) */}
                <div className="sec-1-home-11__topbar">
                    <span className="sec-1-home-11__topbar-label text-uppercase text-scramble">Est. 2019</span>
                    <span className="sec-1-home-11__topbar-divider" aria-hidden="true"></span>
                    <span className="sec-1-home-11__topbar-label text-uppercase">Motion &amp; Video Creative Studio</span>
                    <span className="sec-1-home-11__topbar-divider" aria-hidden="true"></span>
                    <span className="sec-1-home-11__topbar-label text-uppercase">Seoul &middot; London &middot; NYC</span>
                </div>

                {/* Hero headline: SplitText reveal */}
                <div className="sec-1-home-11__headline at_fade_anim" data-delay=".1" data-fade-from="bottom">
                    <h1 className="sec-1-home-11__title">
                        <span className="d-block">We Frame</span>
                        <span className="d-block">The Future</span>
                    </h1>
                </div>

                {/* Bottom row: descriptor + play button + scroll cue */}
                <div className="sec-1-home-11__footer">
                    <p
                        className="sec-1-home-11__desc at_fade_anim"
                        data-delay=".6"
                        data-fade-from="bottom"
                        data-start="100%"
                    >
                        Award-winning direction, VFX, and branded motion for the world&apos;s boldest storytellers.
                    </p>

                    {/* Play reel button */}
                    <button
                        className="sec-1-home-11__reel js-home-11-reel-modal-trigger at_fade_anim"
                        role="button"
                        data-delay=".65"
                        data-fade-from="bottom"
                        data-start="100%"
                        aria-label="Play showreel video"
                        aria-haspopup="dialog"
                        aria-controls="sec1Home11ReelModal"
                        data-bs-toggle="modal"
                        data-bs-target="#sec1Home11ReelModal"
                    >
                        <span className="sec-1-home-11__reel-ring" aria-hidden="true">
                            <svg
                                className="sec-1-home-11__reel-icon"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M1 1L19 11L1 21V1Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span className="sec-1-home-11__reel-label">Play Reel</span>
                    </button>

                    {/* Scroll indicator */}
                    <div
                        className="sec-1-home-11__scroll at_fade_anim"
                        data-delay=".7"
                        data-fade-from="bottom"
                        data-start="100%"
                        aria-hidden="true"
                    >
                        <span className="sec-1-home-11__scroll-line"></span>
                        <span className="sec-1-home-11__scroll-text text-uppercase">Scroll</span>
                    </div>
                </div>

                {/* Floating award badge */}
                <div
                    className="sec-1-home-11__badge at_fade_anim"
                    data-delay=".8"
                    data-fade-from="bottom"
                    aria-label="Awwwards Site of the Year 2024"
                >
                    <span className="sec-1-home-11__badge-value">AWWWARDS</span>
                    <span className="sec-1-home-11__badge-label">Site of the Year</span>
                    <span className="sec-1-home-11__badge-year text-scramble">2024</span>
                </div>
            </section>

            {/* Hero reel modal (sibling of section -- hero uses overflow:hidden) */}
            <VideoReelModal />
        </>
    );
}
