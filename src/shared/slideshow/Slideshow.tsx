import { Project } from "./types";
import useSlideshowScript, { SlideshowVariant } from "./useSlideshowScript";

const renderStage = (variant: SlideshowVariant, projects: Project[]): React.ReactNode => {
    switch (variant) {
        case "cinema":
            return (
                <>
                    <div className="project-list"></div>
                    <nav className="rail" aria-label="Project rail">
                        <div className="rail-track"></div>
                    </nav>
                </>
            );
        case "curtain":
            return (
                <>
                    <div className="curtain-stage"></div>
                    <nav className="curtain-nav" aria-label="Project navigation"></nav>
                </>
            );
        case "horizontal":
            return (
                <>
                    <div className="horizon-track"></div>
                    <button type="button" className="horizon-nav horizon-nav-prev" aria-label="Previous slide">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M15 19L8 12L15 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                            />
                        </svg>
                    </button>
                    <button type="button" className="horizon-nav horizon-nav-next" aria-label="Next slide">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M9 5L16 12L9 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                            />
                        </svg>
                    </button>
                    <div className="horizon-pagination" role="tablist" aria-label="Slide pagination"></div>
                </>
            );
        case "split": {
            const total = projects.length.toString().padStart(2, "0");
            return (
                <>
                    <div className="project-list"></div>
                    <nav className="orbital" aria-label="Project orbital navigation">
                        <div className="orbital-ring"></div>
                        <div className="orbital-indicator"></div>
                        <div className="orbital-label">
                            <span className="orbital-current">01</span>
                            <span className="orbital-total">{`/ ${total}`}</span>
                        </div>
                    </nav>
                </>
            );
        }
        case "stack":
            return (
                <>
                    <div className="project-list"></div>
                    <nav className="stack-progress" aria-label="Project progress">
                        <span className="stack-progress-fill"></span>
                    </nav>
                </>
            );
        case "vista":
            return (
                <>
                    <div className="project-list"></div>
                    <div className="minimap" aria-label="Project minimap">
                        <div className="minimap-wrapper">
                            <div className="minimap-img-preview"></div>
                            <div className="minimap-info-list"></div>
                        </div>
                    </div>
                    <nav className="vista-nav" aria-label="Project navigation"></nav>
                    <button type="button" className="vista-next" aria-label="Next project">
                        <svg
                            className="vista-arrow"
                            width="80"
                            height="10"
                            viewBox="0 0 80 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M80 5H1M1 5L6 1M1 5L6 9"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>Next</span>
                    </button>
                    <button type="button" className="vista-prev" aria-label="Previous project">
                        <span>Preview</span>
                        <svg
                            className="vista-arrow"
                            width="80"
                            height="10"
                            viewBox="0 0 80 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M0 5H79M79 5L74 1M79 5L74 9"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </>
            );
        case "zstack":
            return (
                <>
                    <div className="project-list"></div>
                    <nav className="zstack-index" aria-label="Project index"></nav>
                </>
            );
    }
};

const VARIANT_CLASS: Record<SlideshowVariant, string> = {
    cinema: "slideshow",
    curtain: "slideshow is-curtain",
    horizontal: "slideshow is-horizontal",
    split: "slideshow is-split",
    stack: "slideshow is-stack",
    vista: "slideshow is-vista",
    zstack: "slideshow is-zstack",
};

const VARIANT_LABEL: Record<SlideshowVariant, string> = {
    cinema: "Portfolio Cinema - Horizontal Cinema",
    curtain: "Portfolio Curtain - Diagonal Curtain Reveal",
    horizontal: "Portfolio Horizontal - Infinite Parallax Slider",
    split: "Portfolio Split - Editorial Split with Orbital Navigation",
    stack: "Portfolio Stack - Typographic Stack with Progress Bar",
    vista: "Portfolio Vista - Infinite Parallax with Central Minimap",
    zstack: "Portfolio Z-Stack - 3D Layered Reveal",
};

interface SlideshowProps {
    variant: SlideshowVariant;
    projects: Project[];
}

export default function Slideshow({ variant, projects }: SlideshowProps) {
    useSlideshowScript(variant);

    return (
        <section className={VARIANT_CLASS[variant]} aria-label={VARIANT_LABEL[variant]}>
            <div className="project-source-list" hidden>
                {projects.map((p, i) => (
                    <article key={i} className="project-source" data-image={p.image} data-link={p.link}>
                        <h3 className="project-source-title">{p.title}</h3>
                        <span className="project-source-category">{p.category}</span>
                        <span className="project-source-year">{p.year}</span>
                        {p.description && <p className="project-source-description">{p.description}</p>}
                    </article>
                ))}
            </div>
            {renderStage(variant, projects)}
        </section>
    );
}
