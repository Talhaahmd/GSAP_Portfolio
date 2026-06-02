import { useEffect } from "react";

type CollapseTrigger = HTMLElement;

const COLLAPSE_SELECTOR = '[data-bs-toggle="collapse"], [data-toggle="collapse"]';
const TOGGLE_ATTRIBUTE = "data-bs-toggle";
const COLLAPSE_DURATION = 350;

const ensureSelectorHash = (selector: string): string => {
    if (!selector.startsWith("#")) {
        return `#${selector.replace(/^#/, "")}`;
    }
    return selector;
};

const getTargetSelector = (trigger: CollapseTrigger): string | null => {
    const dataTarget = trigger.getAttribute("data-bs-target") ?? trigger.getAttribute("data-target") ?? trigger.getAttribute("aria-controls");

    if (dataTarget && dataTarget !== "#") {
        return ensureSelectorHash(dataTarget);
    }

    const href = trigger.getAttribute("href");
    if (!href || href === "#") return null;

    if (href.startsWith("#")) {
        return href;
    }

    try {
        const url = new URL(href, window.location.href);
        return url.hash ? ensureSelectorHash(url.hash) : null;
    } catch {
        return null;
    }
};

const getTargetElement = (trigger: CollapseTrigger): HTMLElement | null => {
    const selector = getTargetSelector(trigger);
    return selector ? document.querySelector<HTMLElement>(selector) : null;
};

const ensureTransitionStyles = (collapseElement: HTMLElement) => {
    const style = collapseElement.style;
    if (!style.transition) {
        style.transition = `height ${COLLAPSE_DURATION}ms ease`;
    }
    if (!style.overflow) {
        style.overflow = "hidden";
    }
};

const setTriggerState = (trigger: CollapseTrigger, isExpanded: boolean) => {
    trigger.classList.toggle("collapsed", !isExpanded);
    trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
};

const getAssociatedTriggers = (collapseElement: HTMLElement): NodeListOf<CollapseTrigger> => {
    if (!collapseElement.id) {
        return document.querySelectorAll<CollapseTrigger>(":not(*)"); // empty NodeList
    }

    const selector = [`[${TOGGLE_ATTRIBUTE}="collapse"][href="#${collapseElement.id}"]`, `[${TOGGLE_ATTRIBUTE}="collapse"][data-bs-target="#${collapseElement.id}"]`, `[${TOGGLE_ATTRIBUTE}="collapse"][data-target="#${collapseElement.id}"]`, `[${TOGGLE_ATTRIBUTE}="collapse"][aria-controls="${collapseElement.id}"]`].join(",");

    return document.querySelectorAll<CollapseTrigger>(selector);
};

const collapseOtherPanels = (collapseElement: HTMLElement, parentSelector: string, timers: Set<number>) => {
    const parent = document.querySelector<HTMLElement>(parentSelector);
    if (!parent) return;

    parent.querySelectorAll<HTMLElement>(".collapse.show").forEach((openCollapse) => {
        if (openCollapse === collapseElement) return;

        const associatedTriggers = getAssociatedTriggers(openCollapse);
        associatedTriggers.forEach((otherTrigger) => setTriggerState(otherTrigger, false));

        ensureTransitionStyles(openCollapse);
        const startHeight = `${openCollapse.scrollHeight}px`;
        openCollapse.style.height = startHeight;

        requestAnimationFrame(() => {
            openCollapse.style.height = "0px";
        });

        const timeoutId = window.setTimeout(() => {
            openCollapse.classList.remove("show");
            openCollapse.style.height = "0px";
            timers.delete(timeoutId);
        }, COLLAPSE_DURATION);
        timers.add(timeoutId);
    });
};

const openCollapse = (trigger: CollapseTrigger, collapseElement: HTMLElement, timers: Set<number>) => {
    ensureTransitionStyles(collapseElement);
    collapseElement.classList.add("show");
    collapseElement.style.height = "0px";

    const rafId = window.requestAnimationFrame(() => {
        collapseElement.style.height = `${collapseElement.scrollHeight}px`;
        setTriggerState(trigger, true);
    });

    const timeoutId = window.setTimeout(() => {
        if (collapseElement.classList.contains("show")) {
            collapseElement.style.height = "auto";
        }
        timers.delete(timeoutId);
    }, COLLAPSE_DURATION);

    timers.add(timeoutId);

    return () => {
        window.cancelAnimationFrame(rafId);
    };
};

const closeCollapse = (trigger: CollapseTrigger, collapseElement: HTMLElement, timers: Set<number>) => {
    ensureTransitionStyles(collapseElement);
    const currentHeight = collapseElement.scrollHeight;
    collapseElement.style.height = `${currentHeight}px`;

    requestAnimationFrame(() => {
        collapseElement.style.height = "0px";
    });

    setTriggerState(trigger, false);

    const timeoutId = window.setTimeout(() => {
        collapseElement.classList.remove("show");
        collapseElement.style.height = "0px";
        timers.delete(timeoutId);
    }, COLLAPSE_DURATION);

    timers.add(timeoutId);
};

const initializeState = (trigger: CollapseTrigger, collapseElement: HTMLElement) => {
    ensureTransitionStyles(collapseElement);
    const isShown = collapseElement.classList.contains("show");

    if (isShown) {
        collapseElement.style.height = "auto";
    } else {
        collapseElement.style.height = "0px";
    }

    setTriggerState(trigger, isShown);
};

export const initCollapse = (): (() => void) => {
    const triggers = Array.from(document.querySelectorAll<CollapseTrigger>(COLLAPSE_SELECTOR));

    if (!triggers.length) {
        return () => undefined;
    }

    const timers = new Set<number>();
    const rafCleanups: Array<() => void> = [];
    const cleanupListeners: Array<() => void> = [];

    triggers.forEach((trigger) => {
        if (trigger.dataset.collapseInitialized === "true") {
            return;
        }

        const collapseElement = getTargetElement(trigger);
        if (!collapseElement) {
            return;
        }

        trigger.dataset.collapseInitialized = "true";
        initializeState(trigger, collapseElement);

        const handleClick: EventListener = (event) => {
            event.preventDefault();
            const currentTrigger = event.currentTarget as CollapseTrigger | null;
            if (!currentTrigger) return;

            const targetElement = getTargetElement(currentTrigger);
            if (!targetElement) return;

            const isCurrentlyShown = targetElement.classList.contains("show");
            const parentSelector = targetElement.getAttribute("data-bs-parent");

            if (parentSelector) {
                collapseOtherPanels(targetElement, parentSelector, timers);
            }

            if (isCurrentlyShown) {
                closeCollapse(currentTrigger, targetElement, timers);
            } else {
                const cancelOpenRaf = openCollapse(currentTrigger, targetElement, timers);
                rafCleanups.push(cancelOpenRaf);
            }
        };

        trigger.addEventListener("click", handleClick);

        cleanupListeners.push(() => {
            trigger.removeEventListener("click", handleClick);
            delete trigger.dataset.collapseInitialized;
        });
    });

    return () => {
        cleanupListeners.forEach((cleanup) => cleanup());
        rafCleanups.forEach((cancelRaf) => cancelRaf());
        timers.forEach((id) => window.clearTimeout(id));
        timers.clear();
    };
};

const useCollapse = (): void => {
    useEffect(() => {
        const cleanup = initCollapse();
        return cleanup;
    }, []);
};

export default useCollapse;
