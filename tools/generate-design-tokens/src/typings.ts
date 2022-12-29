export type FigmaEntry = {
  id: string;
  name: string;
  type: string;
  children?: FigmaEntry[];
};

type FigmaNode = {
  document: {
    id: string;
    name: string;
    type: string;
    children: FigmaEntry[];
  };
  styles?: Record<string, FigmaStylePreviewNode>;
};

type FigmaStylePreviewNode = {
  key: string;
  name: string;
  styleType: string;
  remote: boolean;
  description: string;
};

export type FigmaFile = {
  name: string;
  nodes: Record<string, FigmaNode>;
};

type ID = string;
type URL = string;

export type FigmaImageNode = {
  err: string | null;
  status: number | undefined;
  images: Record<ID, URL>;
};

export type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type FigmaStyleNode = {
  document: {
    name: string;
    fills: {
      blendMode: string;
      type: string;
      color: Color;
    }[];
  };
};

export type FigmaFileNodes = {
  nodes: Record<string, FigmaStyleNode>;
};

type ThemeDomain = {
  [key: string]: string;
};

export type ThemeIdentifier = "dark" | "light";

export type Theme = Record<ThemeIdentifier, ThemeDomain>;
