export const lerp = (start: number, end: number, factor: number): number =>
    start + (end - start) * factor;

export const wrapIndex = (index: number, length: number): number =>
    ((Math.abs(index) % length) + length) % length;

export const formatNum = (index: number, length: number): string =>
    (wrapIndex(index, length) + 1).toString().padStart(2, "0");

export const totalLabel = (length: number): string =>
    length.toString().padStart(2, "0");
