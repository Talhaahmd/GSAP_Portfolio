import { useEffect } from "react";

export const EFFECT_TYPES = {
    ZOOM_MORPH: "zoom-morph",
    TILT_3D: "tilt-3d",
    GLITCH: "glitch",
    PARTICLE: "particle",
    LIQUID: "liquid",
    HOLOGRAM: "hologram",
    NEON: "neon",
    VINTAGE: "vintage",
} as const;

const processedContainers = {
    zoomMorph: new WeakSet<HTMLElement>(),
    tilt3d: new WeakSet<HTMLElement>(),
    glitch: new WeakSet<HTMLElement>(),
    particle: new WeakSet<HTMLElement>(),
    liquid: new WeakSet<HTMLElement>(),
    hologram: new WeakSet<HTMLElement>(),
    neon: new WeakSet<HTMLElement>(),
    vintage: new WeakSet<HTMLElement>(),
};

function createZoomMorphEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.zoomMorph.has(container)) return;
    processedContainers.zoomMorph.add(container);

    let overlayTimeout: number | null = null;

    const handleMouseEnter = () => {
        img.style.transform = "scale(1.05) rotate(1deg)";
        img.style.filter = "brightness(1.1) contrast(1.1) saturate(1.2)";
        img.style.borderRadius = "16px";

        const overlay = document.createElement("div");
        overlay.className = "zoom-overlay";
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(0,0,0,0.1))";
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.6s";
        overlay.style.pointerEvents = "none";
        overlay.style.borderRadius = "inherit";

        container.appendChild(overlay);

        overlayTimeout = window.setTimeout(() => {
            overlay.style.opacity = "1";
        }, 100);
    };

    const handleMouseLeave = () => {
        if (overlayTimeout) {
            window.clearTimeout(overlayTimeout);
            overlayTimeout = null;
        }

        img.style.transform = "";
        img.style.filter = "";
        img.style.borderRadius = "";

        container.querySelectorAll(".zoom-overlay").forEach((overlay) => overlay.remove());
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        if (overlayTimeout) {
            window.clearTimeout(overlayTimeout);
            overlayTimeout = null;
        }

        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.querySelectorAll(".zoom-overlay").forEach((overlay) => overlay.remove());
        processedContainers.zoomMorph.delete(container);
    };
}

function createTilt3DEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.tilt3d.has(container)) return;
    processedContainers.tilt3d.add(container);

    const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        img.style.transform = "";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        processedContainers.tilt3d.delete(container);
    };
}

function createGlitchEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.glitch.has(container)) return;
    processedContainers.glitch.add(container);

    let glitchInterval: number | null = null;
    let glitchImg1: HTMLImageElement | null = null;
    let glitchImg2: HTMLImageElement | null = null;

    const handleMouseEnter = () => {
        glitchImg1 = img.cloneNode(true) as HTMLImageElement;
        glitchImg2 = img.cloneNode(true) as HTMLImageElement;

        glitchImg1.className = "glitch-layer-1";
        glitchImg2.className = "glitch-layer-2";

        [glitchImg1, glitchImg2].forEach((glitchImg) => {
            glitchImg.style.position = "absolute";
            glitchImg.style.top = "0";
            glitchImg.style.left = "0";
            glitchImg.style.width = "100%";
            glitchImg.style.height = "100%";
            glitchImg.style.objectFit = "cover";
            glitchImg.style.pointerEvents = "none";
        });

        container.appendChild(glitchImg1);
        container.appendChild(glitchImg2);

        glitchInterval = window.setInterval(() => {
            if (!glitchImg1 || !glitchImg2) return;
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;

            glitchImg1.style.transform = `translate(${randomX}px, ${randomY}px)`;
            glitchImg1.style.filter = "hue-rotate(90deg)";
            glitchImg1.style.opacity = "0.8";
            glitchImg1.style.mixBlendMode = "multiply";

            glitchImg2.style.transform = `translate(${-randomX}px, ${-randomY}px)`;
            glitchImg2.style.filter = "hue-rotate(180deg)";
            glitchImg2.style.opacity = "0.6";
            glitchImg2.style.mixBlendMode = "screen";
        }, 100);
    };

    const clearGlitchInterval = () => {
        if (glitchInterval) {
            window.clearInterval(glitchInterval);
            glitchInterval = null;
        }
    };

    const handleMouseLeave = () => {
        clearGlitchInterval();
        if (glitchImg1 && glitchImg1.isConnected) glitchImg1.remove();
        if (glitchImg2 && glitchImg2.isConnected) glitchImg2.remove();
        glitchImg1 = null;
        glitchImg2 = null;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        clearGlitchInterval();
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        if (glitchImg1 && glitchImg1.isConnected) glitchImg1.remove();
        if (glitchImg2 && glitchImg2.isConnected) glitchImg2.remove();
        processedContainers.glitch.delete(container);
    };
}

function createParticleEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.particle.has(container)) return;
    processedContainers.particle.add(container);

    const handleMouseEnter = () => {
        img.style.filter = "brightness(1.1)";

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.position = "absolute";
            particle.style.width = `${Math.random() * 4 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
            particle.style.borderRadius = "50%";
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.pointerEvents = "none";
            particle.style.animation = "particleFloat 2s ease-in-out infinite";
            particle.style.animationDelay = `${Math.random() * 2}s`;

            container.appendChild(particle);
        }
    };

    const handleMouseLeave = () => {
        img.style.filter = "";
        container.querySelectorAll(".particle").forEach((particle) => particle.remove());
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.querySelectorAll(".particle").forEach((particle) => particle.remove());
        processedContainers.particle.delete(container);
    };
}

function createLiquidEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.liquid.has(container)) return;
    processedContainers.liquid.add(container);

    let waveTimeout: number | null = null;

    const handleMouseEnter = () => {
        img.style.transform = "scale(1.1) rotate(1deg)";
        img.style.filter = "hue-rotate(15deg) saturate(1.3)";

        const wave = document.createElement("div");
        wave.className = "liquid-wave";
        wave.style.position = "absolute";
        wave.style.bottom = "0";
        wave.style.left = "0";
        wave.style.width = "100%";
        wave.style.height = "30%";
        wave.style.background = "linear-gradient(45deg, rgba(0,255,255,0.3), rgba(255,0,255,0.3))";
        wave.style.transform = "translateY(100%)";
        wave.style.transition = "transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
        wave.style.pointerEvents = "none";
        wave.style.borderRadius = "inherit";

        container.appendChild(wave);

        waveTimeout = window.setTimeout(() => {
            wave.style.transform = "translateY(0)";
        }, 100);
    };

    const handleMouseLeave = () => {
        if (waveTimeout) {
            window.clearTimeout(waveTimeout);
            waveTimeout = null;
        }

        img.style.transform = "";
        img.style.filter = "";

        container.querySelectorAll(".liquid-wave").forEach((wave) => wave.remove());
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        if (waveTimeout) {
            window.clearTimeout(waveTimeout);
            waveTimeout = null;
        }

        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.querySelectorAll(".liquid-wave").forEach((wave) => wave.remove());
        processedContainers.liquid.delete(container);
    };
}

function createHologramEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.hologram.has(container)) return;
    processedContainers.hologram.add(container);

    const handleMouseEnter = () => {
        img.style.filter = "brightness(1.2) contrast(1.1) hue-rotate(180deg)";
        img.style.transform = "scale(1.05)";

        const scanLine = document.createElement("div");
        scanLine.className = "hologram-scan";
        scanLine.style.position = "absolute";
        scanLine.style.top = "0";
        scanLine.style.left = "0";
        scanLine.style.width = "100%";
        scanLine.style.height = "2px";
        scanLine.style.background = "linear-gradient(90deg, transparent, cyan, transparent)";
        scanLine.style.animation = "hologramScan 2s linear infinite";
        scanLine.style.pointerEvents = "none";

        container.appendChild(scanLine);
    };

    const handleMouseLeave = () => {
        img.style.filter = "";
        img.style.transform = "";

        container.querySelectorAll(".hologram-scan").forEach((scanLine) => scanLine.remove());
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.querySelectorAll(".hologram-scan").forEach((scanLine) => scanLine.remove());
        processedContainers.hologram.delete(container);
    };
}

function createNeonEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.neon.has(container)) return;
    processedContainers.neon.add(container);

    const handleMouseEnter = () => {
        img.style.filter = "brightness(1.3) contrast(1.2) saturate(1.5)";
        img.style.boxShadow = "0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(255,0,255,0.6)";

        container.style.boxShadow = "0 0 10px rgba(0,255,255,0.5), inset 0 0 10px rgba(255,0,255,0.3)";
        container.style.border = "2px solid rgba(0,255,255,0.8)";
    };

    const handleMouseLeave = () => {
        img.style.filter = "";
        img.style.boxShadow = "";

        container.style.boxShadow = "";
        container.style.border = "";
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.style.boxShadow = "";
        container.style.border = "";
        img.style.boxShadow = "";
        img.style.filter = "";
        processedContainers.neon.delete(container);
    };
}

function createVintageEffect(container: HTMLElement, img: HTMLImageElement) {
    if (processedContainers.vintage.has(container)) return;
    processedContainers.vintage.add(container);

    let overlayTimeout: number | null = null;

    const handleMouseEnter = () => {
        img.style.filter = "sepia(0.8) contrast(1.2) brightness(0.9) saturate(0.8)";
        img.style.transform = "scale(1.05) rotate(-1deg)";

        const overlay = document.createElement("div");
        overlay.className = "vintage-overlay";
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(139,69,19,0.2) 100%)";
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.6s";
        overlay.style.pointerEvents = "none";
        overlay.style.borderRadius = "inherit";

        container.appendChild(overlay);

        overlayTimeout = window.setTimeout(() => {
            overlay.style.opacity = "1";
        }, 100);
    };

    const handleMouseLeave = () => {
        if (overlayTimeout) {
            window.clearTimeout(overlayTimeout);
            overlayTimeout = null;
        }

        img.style.filter = "";
        img.style.transform = "";

        container.querySelectorAll(".vintage-overlay").forEach((overlay) => overlay.remove());
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        if (overlayTimeout) {
            window.clearTimeout(overlayTimeout);
            overlayTimeout = null;
        }

        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.querySelectorAll(".vintage-overlay").forEach((overlay) => overlay.remove());
        processedContainers.vintage.delete(container);
    };
}

function addCustomCSS() {
    if (document.getElementById("creative-hover-effects-css")) return;

    const style = document.createElement("style");
    style.id = "creative-hover-effects-css";
    style.textContent = `
    .hover-effect-1,
    .hover-effect-3,
    .hover-effect-4,
    .hover-effect-5,
    .hover-effect-6,
    .hover-effect-7,
    .hover-effect-8 {
      position: relative;
      overflow: hidden;
    }

    .hover-effect-1 {
      cursor: pointer;
    }

    .hover-effect-2 {
      position: relative;
      perspective: 1000px;
      transform-style: preserve-3d;
    }

    .hover-effect-5 {
      border-radius: 20px;
    }

    .hover-effect-7 {
      border-radius: 10px;
    }

    .hover-effect-8 {
      border-radius: 8px;
    }

    .hover-effect-1 img,
    .hover-effect-3 img,
    .hover-effect-4 img,
    .hover-effect-5 img,
    .hover-effect-6 img,
    .hover-effect-7 img,
    .hover-effect-8 img,
    .hover-effect-2 img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .hover-effect-1 img {
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      filter: brightness(1) contrast(1);
    }

    .hover-effect-2 img {
      transition: transform 0.3s ease-out;
      transform-style: preserve-3d;
    }

    .hover-effect-4 img {
      transition: filter 0.5s;
    }

    .hover-effect-5 img {
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .hover-effect-6 img {
      transition: all 0.5s;
    }

    .hover-effect-7 img {
      transition: all 0.4s;
    }

    .hover-effect-8 img {
      transition: all 0.6s;
    }

    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 1;
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.7;
      }
    }

    @keyframes hologramScan {
      0% {
        top: 0%;
      }
      100% {
        top: 100%;
      }
    }
  `;

    document.head.appendChild(style);
}

export default function useImageHoverEffects() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const cleanupFunctions: Array<() => void> = [];
        let initialized = false;

        const initEffects = () => {
            if (initialized) return;
            initialized = true;

            addCustomCSS();

            const registerEffect = (selector: string, initializer: (container: HTMLElement, img: HTMLImageElement) => void | (() => void)) => {
                document.querySelectorAll<HTMLElement>(selector).forEach((container) => {
                    const img = container.querySelector<HTMLImageElement>("img");
                    if (!img) return;
                    const cleanup = initializer(container, img);
                    if (typeof cleanup === "function") {
                        cleanupFunctions.push(cleanup);
                    }
                });
            };

            registerEffect(".hover-effect-1", createZoomMorphEffect);
            registerEffect(".hover-effect-2", createTilt3DEffect);
            registerEffect(".hover-effect-3", createGlitchEffect);
            registerEffect(".hover-effect-4", createParticleEffect);
            registerEffect(".hover-effect-5", createLiquidEffect);
            registerEffect(".hover-effect-6", createHologramEffect);
            registerEffect(".hover-effect-7", createNeonEffect);
            registerEffect(".hover-effect-8", createVintageEffect);
        };

        const handleLoad = () => {
            window.removeEventListener("load", handleLoad);
            initEffects();
        };

        if (document.readyState === "complete") {
            initEffects();
        } else {
            window.addEventListener("load", handleLoad, { once: true });
        }

        return () => {
            window.removeEventListener("load", handleLoad);
            cleanupFunctions.forEach((cleanup) => cleanup());
        };
    }, []);
}
