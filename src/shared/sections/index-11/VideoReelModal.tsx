import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MODAL_ID = "sec1Home11ReelModal";
const FADE_MS = 200;

export default function VideoReelModal() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [mounted, setMounted] = useState(false);
    const [shown, setShown] = useState(false);
    const [portalReady, setPortalReady] = useState(false);

    useEffect(() => {
        setPortalReady(true);
    }, []);

    const close = useCallback(() => {
        setShown(false);
        window.setTimeout(() => {
            setMounted(false);
            document.body.classList.remove("modal-open");
            videoRef.current?.pause();
        }, FADE_MS);
    }, []);

    // Trigger via [data-bs-target="#sec1Home11ReelModal"] click anywhere in document
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = e.target as Element | null;
            const trigger = target?.closest(`[data-bs-target="#${MODAL_ID}"]`);
            if (trigger) {
                e.preventDefault();
                setMounted(true);
                document.body.classList.add("modal-open");
            }
        };

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    // After mounted commits + paints, flip shown=true so the fade transition fires.
    useEffect(() => {
        if (!mounted) return;
        const raf = window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => setShown(true));
        });
        return () => window.cancelAnimationFrame(raf);
    }, [mounted]);

    // ESC closes
    useEffect(() => {
        if (!mounted) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [mounted, close]);

    if (!portalReady) return null;

    const modalNode = (
        <>
            <div
                className={`modal fade sec-1-home-11__reel-modal${shown ? " show" : ""}`}
                id={MODAL_ID}
                style={mounted ? { display: "block" } : undefined}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="sec1Home11ReelModalLabel"
                aria-modal={mounted}
                aria-hidden={!mounted}
                onClick={(e) => {
                    if (e.target === e.currentTarget) close();
                }}
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 shadow-none">
                        <div className="modal-body p-0 position-relative">
                            <button
                                type="button"
                                className="btn-close btn-close-white sec-1-home-11__reel-modal-close position-absolute top-0 end-0 m-3"
                                aria-label="Close"
                                onClick={close}
                            />
                            <span className="visually-hidden" id="sec1Home11ReelModalLabel">
                                Showreel video
                            </span>
                            <div className="ratio ratio-16x9 bg-black rounded-3 overflow-hidden">
                                <video
                                    id="sec1Home11ReelVideo"
                                    ref={videoRef}
                                    className="sec-1-home-11__reel-modal-video"
                                    controls
                                    playsInline
                                    preload="metadata"
                                >
                                    <source
                                        src="/assets/imgs/pages/home-11/hero-11.webm"
                                        type="video/webm"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {mounted && (
                <div
                    className={`modal-backdrop fade${shown ? " show" : ""}`}
                    onClick={close}
                />
            )}
        </>
    );

    return createPortal(modalNode, document.body);
}
