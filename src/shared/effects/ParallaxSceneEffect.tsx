import { useEffect, useRef } from "react";

const MAGIC_NUMBER = 30;
const DEFAULTS = {
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false as false | number,
  limitY: false as false | number,
  scalarX: 10,
  scalarY: 10,
  frictionX: 0.12,
  frictionY: 0.12,
  originX: 0.5,
  originY: 0.5,
  supportDelay: 500,
};

type SceneState = {
  scene: HTMLElement;
  depthsX: number[];
  depthsY: number[];
  raf: number;
  enabled: boolean;
  calibrationFlag: boolean;
  cx: number;
  cy: number;
  ix: number;
  iy: number;
  vx: number;
  vy: number;
  bounds: DOMRect | null;
  ex: number;
  ey: number;
  ew: number;
  eh: number;
  ecx: number;
  ecy: number;
  erx: number;
  ery: number;
  ww: number;
  wh: number;
  wcx: number;
  wcy: number;
  wrx: number;
  wry: number;
  portrait: boolean | null;
  orientationStatus: number;
  supportDelay: number;
  onMouseMove: (e: MouseEvent) => void;
  onDeviceOrientation: (e: DeviceOrientationEvent) => void;
  onResize: () => void;
  onAnimationFrame: () => void;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function getDataFloat(el: HTMLElement, key: string): number | null {
  const v = el.getAttribute(`data-${key}`);
  if (v == null || v === "") return null;
  const n = parseFloat(v);
  return Number.isNaN(n) ? null : n;
}

function getDataBool(el: HTMLElement, key: string): boolean | null {
  const v = el.getAttribute(`data-${key}`);
  if (v == null || v === "") return null;
  return v === "true" || v === "1";
}

function createSceneState(scene: HTMLElement): SceneState {
  const layers = Array.from(scene.querySelectorAll<HTMLElement>(".layer"));
  const depthsX: number[] = [];
  const depthsY: number[] = [];

  const opts = { ...DEFAULTS };
  const calibrateX = getDataBool(scene, "calibrate-x") ?? opts.calibrateX;
  const calibrateY = getDataBool(scene, "calibrate-y") ?? opts.calibrateY;
  const invertX = getDataBool(scene, "invert-x") ?? opts.invertX;
  const invertY = getDataBool(scene, "invert-y") ?? opts.invertY;
  const limitX = getDataFloat(scene, "limit-x") ?? opts.limitX;
  const limitY = getDataFloat(scene, "limit-y") ?? opts.limitY;
  const scalarX = getDataFloat(scene, "scalar-x") ?? opts.scalarX;
  const scalarY = getDataFloat(scene, "scalar-y") ?? opts.scalarY;
  const frictionX = getDataFloat(scene, "friction-x") ?? opts.frictionX;
  const frictionY = getDataFloat(scene, "friction-y") ?? opts.frictionY;
  const originX = getDataFloat(scene, "origin-x") ?? opts.originX;
  const originY = getDataFloat(scene, "origin-y") ?? opts.originY;

  if (window.getComputedStyle(scene).position === "static") scene.style.position = "relative";

  layers.forEach((el) => {
    el.style.position = "absolute";
    el.style.display = "block";
    el.style.left = "0";
    el.style.top = "0";
    el.style.transform = "translate3d(0,0,0)";
    el.style.transformStyle = "preserve-3d";
    el.style.setProperty("backface-visibility", "hidden");
    const depth = getDataFloat(el, "depth") ?? 0;
    depthsX.push(getDataFloat(el, "depth-x") ?? depth);
    depthsY.push(getDataFloat(el, "depth-y") ?? depth);
  });
  if (layers[0]) layers[0].style.position = "relative";

  scene.style.transform = "translate3d(0,0,0)";
  scene.style.transformStyle = "preserve-3d";
  scene.style.setProperty("backface-visibility", "hidden");

  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const wcx = ww * originX;
  const wcy = wh * originY;
  const wrx = Math.max(wcx, ww - wcx);
  const wry = Math.max(wcy, wh - wcy);

  const state: SceneState = {
    scene,
    depthsX,
    depthsY,
    raf: 0,
    enabled: false,
    calibrationFlag: true,
    cx: 0,
    cy: 0,
    ix: 0,
    iy: 0,
    vx: 0,
    vy: 0,
    bounds: null,
    ex: 0,
    ey: 0,
    ew: 0,
    eh: 0,
    ecx: 0,
    ecy: 0,
    erx: 0,
    ery: 0,
    ww,
    wh,
    wcx,
    wcy,
    wrx,
    wry,
    portrait: null,
    orientationStatus: 0,
    supportDelay: DEFAULTS.supportDelay,
    onMouseMove: () => {},
    onDeviceOrientation: () => {},
    onResize: () => {},
    onAnimationFrame: () => {},
  };

  state.onResize = () => {
    state.ww = window.innerWidth;
    state.wh = window.innerHeight;
    state.wcx = state.ww * originX;
    state.wcy = state.wh * originY;
    state.wrx = Math.max(state.wcx, state.ww - state.wcx);
    state.wry = Math.max(state.wcy, state.wh - state.wcy);
  };

  state.onMouseMove = (e: MouseEvent) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    const wrx2 = state.wrx || 1;
    const wry2 = state.wry || 1;
    state.ix = (clientX - state.wcx) / wrx2;
    state.iy = (clientY - state.wcy) / wry2;
  };

  state.onDeviceOrientation = (e: DeviceOrientationEvent) => {
    if (e.beta != null && e.gamma != null) state.orientationStatus = 1;
    if (state.portrait === null && e.beta != null && e.gamma != null) {
      const portrait = window.innerHeight > window.innerWidth;
      if (state.portrait !== portrait) {
        state.portrait = portrait;
        state.calibrationFlag = true;
      }
      if (state.calibrationFlag) {
        state.calibrationFlag = false;
        state.cx = (e.beta ?? 0) / MAGIC_NUMBER;
        state.cy = (e.gamma ?? 0) / MAGIC_NUMBER;
      }
      state.ix = (e.gamma ?? 0) / MAGIC_NUMBER;
      state.iy = (e.beta ?? 0) / MAGIC_NUMBER;
    }
  };

  state.onAnimationFrame = () => {
    if (!state.scene.isConnected) {
      state.raf = requestAnimationFrame(state.onAnimationFrame);
      return;
    }
    state.bounds = state.scene.getBoundingClientRect();
    state.ex = state.bounds.left;
    state.ey = state.bounds.top;
    state.ew = state.bounds.width;
    state.eh = state.bounds.height;
    state.ecx = state.ew * originX;
    state.ecy = state.eh * originY;
    state.erx = Math.max(state.ecx, state.ew - state.ecx);
    state.ery = Math.max(state.ecy, state.eh - state.ecy);

    let mx = state.ix;
    let my = state.iy;
    if (state.portrait !== null) {
      mx = calibrateX ? state.iy : state.ix;
      my = calibrateY ? state.ix : state.iy;
    }
    mx *= state.ew * (scalarX / 100);
    my *= state.eh * (scalarY / 100);
    if (typeof limitX === "number" && !Number.isNaN(limitX)) mx = clamp(mx, -limitX, limitX);
    if (typeof limitY === "number" && !Number.isNaN(limitY)) my = clamp(my, -limitY, limitY);
    state.vx += (mx - state.vx) * frictionX;
    state.vy += (my - state.vy) * frictionY;

    const xOffset = state.vx * (invertX ? -1 : 1);
    const yOffset = state.vy * (invertY ? -1 : 1);
    const layers2 = state.scene.querySelectorAll<HTMLElement>(".layer");
    const dx = state.depthsX;
    const dy = state.depthsY;

    requestAnimationFrame(() => {
      for (let i = 0; i < layers2.length; i++) {
        const depthX = dx[i] ?? dx[0] ?? 1;
        const depthY = dy[i] ?? dy[0] ?? 1;
        const layer = layers2[i];
        if (!layer.isConnected) continue;
        const tx = xOffset * depthX;
        const ty = yOffset * depthY;
        layer.style.transform = `translate3d(${tx}px,${ty}px,0)`;
      }
    });

    state.raf = requestAnimationFrame(state.onAnimationFrame);
  };

  return state;
}

const isDesktop = () => !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);

function enableScene(state: SceneState): void {
  if (state.enabled) return;
  state.enabled = true;
  const hasOrientation = typeof window.DeviceOrientationEvent !== "undefined" && !isDesktop();
  if (hasOrientation) {
    state.portrait = null;
    window.addEventListener("deviceorientation", state.onDeviceOrientation);
    setTimeout(() => {
      if (state.orientationStatus === 0) {
        state.portrait = false;
        window.removeEventListener("deviceorientation", state.onDeviceOrientation);
        const onMove = state.onMouseMove;
        document.addEventListener("mousemove", onMove, { passive: true, capture: true });
        window.addEventListener("mousemove", onMove, { passive: true, capture: true });
      }
    }, state.supportDelay);
  } else {
    state.cx = 0;
    state.cy = 0;
    state.portrait = false;
    const onMove = state.onMouseMove;
    document.addEventListener("mousemove", onMove, { passive: true, capture: true });
    window.addEventListener("mousemove", onMove, { passive: true, capture: true });
  }
  window.addEventListener("resize", state.onResize);
  state.raf = requestAnimationFrame(state.onAnimationFrame);
}

function disableScene(state: SceneState): void {
  if (!state.enabled) return;
  state.enabled = false;
  window.removeEventListener("deviceorientation", state.onDeviceOrientation);
  const onMove = state.onMouseMove;
  document.removeEventListener("mousemove", onMove, true);
  window.removeEventListener("mousemove", onMove, true);
  window.removeEventListener("resize", state.onResize);
  cancelAnimationFrame(state.raf);
  state.scene.querySelectorAll<HTMLElement>(".layer").forEach((el) => {
    el.style.transform = "translate3d(0,0,0)";
  });
}

export default function ParallaxSceneEffect() {
  const statesRef = useRef<SceneState[]>([]);

  useEffect(() => {
    const scenes = document.querySelectorAll<HTMLElement>("[data-parallax-scene]");
    const states: SceneState[] = [];

    scenes.forEach((scene) => {
      if (scene.hasAttribute("data-parallax-initialized")) return;
      scene.setAttribute("data-parallax-initialized", "true");
      const state = createSceneState(scene);
      states.push(state);
      enableScene(state);
    });

    statesRef.current = states;

    return () => {
      statesRef.current.forEach((s) => disableScene(s));
      statesRef.current = [];
      document.querySelectorAll("[data-parallax-initialized]").forEach((el) => el.removeAttribute("data-parallax-initialized"));
    };
  }, []);

  return null;
}

