import { Color } from "@medusa-ui/figma-api";

export const convertColorToRGBA = (color: Color) => {
  const { r, g, b, a } = color;

  const value = (v: number) => Math.round(v * 255);

  const alpha = a < 1 && a > 0 ? a.toFixed(2) : a;

  return `rgba(${value(r)}, ${value(g)}, ${value(b)}, ${alpha})`;
};
