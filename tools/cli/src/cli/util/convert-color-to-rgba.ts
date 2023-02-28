import { Color } from "@medusa-ui/figma-api";

export const convertColorToRGBA = (color: Color, opacity?: number) => {
  const { r, g, b, a } = color;

  const value = (v: number) => Math.round(v * 255);

  const alpha = opacity !== undefined ? opacity : a;
  const alphaValue = alpha < 1 && alpha > 0 ? alpha.toFixed(2) : alpha;

  return `rgba(${value(r)}, ${value(g)}, ${value(b)}, ${alphaValue})`;
};
