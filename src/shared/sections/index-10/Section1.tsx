import { Link } from "react-router-dom";
export default function Section1() {
    return (
        <section className="sec-1-home-10" aria-label="Creative 3D Studio Hero">

            {/* Decorative background lines texture */}
            <div className="sec-1-home-10__bg-lines" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/home-10/sec-1-bg-lines.webp"
                    alt=""
                    style={{ objectFit: "cover" }} loading="lazy" />
            </div>

            {/* Cursor trail layer (scoped) */}
            <div className="sec-1-home-10__cursor-trail" aria-hidden="true"></div>

            {/* Giant running headline */}
            <div className="sec-1-home-10__headline-wrap overflow-hidden">
                <div className="sec-1-home-10__headline-track">
                    <h1 className="sec-1-home-10__big-title">Creative 3D Studio Base in Florence &emsp;</h1>
                    <span className="sec-1-home-10__big-title" aria-hidden="true">Creative 3D Studio Base in Florence &emsp;</span>
                </div>
            </div>

            {/* Middle content row */}
            <div className="sec-1-home-10__mid">

                {/* Left: description + buttons */}
                <div className="sec-1-home-10__left at_fade_anim" data-delay=".2" data-fade-from="bottom">
                    <p className="sec-1-home-10__desc">
                        We breathe life into pixels through spatial storytelling and immersive 3D experiences.
                    </p>
                    <div className="sec-1-home-10__btns">
                        <Link className="sec-1-home-10__btn-launch" to="#">
                            <span className="sec-1-home-10__btn-label">Launch Experience</span>
                            <span className="sec-1-home-10__btn-circle" aria-hidden="true">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 17.5L17.5 4.5M17.5 4.5H6.5M17.5 4.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Link>
                        <Link className="sec-1-home-10__btn-cases" to="#">
                            <span>See Case Studies</span>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M1 12L13 1M13 1H2M13 1V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Center: location badge */}
                <div className="sec-1-home-10__location at_fade_anim" data-delay=".25" data-fade-from="bottom">
                    <svg className="sec-1-home-10__globe" width="27" height="20" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <ellipse cx="15.5" cy="12" rx="11" ry="11" stroke="currentColor" strokeWidth="1" />
                        <path d="M15.5 1C10.5 6 10 18 15.5 23M15.5 1C20.5 6 21 18 15.5 23M5 7H26M4 17H27M1 12H30" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    <span className="sec-1-home-10__coords text-scramble">27.1127&#xb0; S, 109.3497&#xb0; W</span>
                </div>

                {/* Right: frosted glass card + info card */}
                <div className="sec-1-home-10__right at_fade_anim" data-delay=".35" data-fade-from="bottom">

                    {/* Frosted glass card with 3D character image */}
                    <div className="sec-1-home-10__glass-card">
                        <div className="sec-1-home-10__glass-img">
                            <video
                                src="/assets/imgs/pages/home-10/hero-10.webm"
                                poster="/assets/imgs/pages/home-10/hero-10-sec1-video-backup.webp"
                                width={400}
                                height={500}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        </div>
                        <div className="sec-1-home-10__glass-footer">
                            <Link className="at-btn text-dark rounded-0 bg-transparent px-0 pt-2 pb-3 border-0" to="/about-2">
                                <span>
                                    <span className="text-1">How we work</span>
                                    <span className="text-2">How we work</span>
                                </span>
                                <i>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                                    </svg>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                                    </svg>
                                </i>
                            </Link>
                        </div>
                    </div>

                    {/* Info text card */}
                    <div className="sec-1-home-10__info-card">
                        <div className="sec-1-home-10__info-icon" aria-hidden="true">
                            <img
                                src="/assets/imgs/pages/home-10/sec-1-shape-25.webp"
                                alt=""
                                width={48}
                                height={48} loading="lazy" />
                        </div>
                        <p className="sec-1-home-10__info-text">
                            We dissolve the boundary between screen and spectator, crafting environments that invite you to step inside rather than just look on.
                        </p>
                    </div>

                </div>
            </div>{/* /.sec-1-home-10__mid */}

            {/* Bottom terms strip */}
            <div className="sec-1-home-10__terms" aria-hidden="true">
                <span>[ VOLUMETRIC ]</span>
                <span>[ GEOMETRY ]</span>
                <span>[ REAL-TIME ]</span>
                <span>[ FIDELITY ]</span>
                <span>[ TOPOLOGY ]</span>
            </div>

        </section>
    );
}
