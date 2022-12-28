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
