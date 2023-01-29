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

// ––––– Figma API –––––

export type FrameInfo = {
  /**
   * Id of the frame node within the file
   */
  nodeId: string;
  /**
   * Name of the frame
   */
  name: string;
  /**
   * Background colour of the frame
   */
  backgroundColour: string;
  /**
   * Id of the frame's residing page
   */
  pageId: string;
  /**
   * Name of the frame's residing page
   */
  pageName: string;
};

export type User = {
  /**
   * Unique stable id of the user
   */
  id: string;
  /**
   * Name of the user
   */
  handle: string;
  /**
   * URL link to the user's profile image
   */
  img_url: string;
  /**
   * Email associated with the user's account. This will only be present on the /v1/me endpoint.
   */
  email: string;
};

export type UserNoEmail = Omit<User, "email">;

export type StyleType = "FILL" | "TEXT" | "EFFECT" | "GRID";

export type LibraryItemData = {
  /**
   * Unique identifier of library item
   */
  key: string;
  /**
   * Name of library item
   */
  name: string;
};

export type Component = {
  /**
   * The unique identifier of the component
   */
  key: string;
  /**
   * Then unique identifier of the figma file which contains the component
   */
  file_key: string;
  /**
   * Id of the component node within the figma file
   */
  node_id: string;
  /**
   * URL link to the component's thumbnail image
   */
  thumbnail_url: string;
  /**
   * Name of the component
   */
  name: string;
  /**
   * The description of the component as entered by the publisher
   */
  description: string;
  /**
   * The UTC ISO 8601 time at which the component was created
   */
  created_at: string;
  /**
   * The UTC ISO 8601 time at which the component was updated
   */
  updated_at: string;
  /**
   * The user who last updated the component
   */
  user: UserNoEmail;
  /**
   * Data on the component's containing frame, if component resides within a frame
   * @default {}
   */
  containing_frame: FrameInfo | {};
};

export type ComponentSet = {
  /**
   * The unique identifier of the component set
   */
  key: string;
  /**
   * The unique identifier of the figma file which contains the component set
   */
  file_key: string;
  /**
   * Id of the component set node within the figma file
   */
  node_id: string;
  /**
   * URL link to the component set's thumbnail image
   */
  thumbnail_url: string;
  /**
   * Name of the component set
   */
  name: string;
  /**
   * The description of the component set as entered by the publisher
   */
  description: string;
  /**
   * The UTC ISO 8601 time at which the component set was created
   */
  created_at: string;
  /**
   * The UTC ISO 8601 time at which the component set was updated
   */
  updated_at: string;
  /**
   * The user who last updated the component set
   */
  user: UserNoEmail;
  /**
   * Data on the component set's containing frame, if component set resides within a frame
   * @default {}
   */
  containing_frame: FrameInfo | {};
};

export type Style = {
  /**
   * The unique identifier of the style
   */
  key: string;
  /**
   * The unique identifier of the figma file which contains the style
   */
  file_key: string;
  /**
   * Id of the style node within the figma file
   */
  node_id: string;
  /**
   * The type of style
   */
  style_type: StyleType;
  /**
   * URL link to the style's thumbnail image
   */
  thumbnail_url: string;
  /**
   * Name of the style
   */
  name: string;
  /**
   * The description of the style as entered by the publisher
   */
  description: string;
  /**
   * The UTC ISO 8601 time at which the style was created
   */
  created_at: string;
  /**
   * The UTC ISO 8601 time at which the style was updated
   */
  updated_at: string;
  /**
   * The user who last updated the style
   */
  user: UserNoEmail;
  /**
   * A user specified order number by which the style can be sorted
   */
  sort_position: string;
};
