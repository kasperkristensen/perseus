import { Color } from "@medusa-ui/figma-api";

export const convertColorToRGBA = (color: Color) => {
  const { r, g, b, a } = color;

  const value = (v: number) => Math.round(v * 255);

  return `rgba(${value(r)}, ${value(g)}, ${value(b)}, ${a})`;
};
