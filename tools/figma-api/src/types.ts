import { HttpStatusCode } from "axios";

/**
 * An RGBA color
 */
export type Color = {
  /**
   * Red channel value, between 0 and 1
   */
  r: number;
  /**
   * Green channel value, between 0 and 1
   */
  g: number;
  /**
   * Blue channel value, between 0 and 1
   */
  b: number;
  /**
   * Alpha channel value, between 0 and 1
   */
  a: number;
};

/**
 * A solid color, gradient, or image texture that can be applied as fills or strokes
 */
type Paint = {
  /**
   * Type of paint as a string enum
   */
  type:
    | "SOLID"
    | "GRADIENT_LINEAR"
    | "GRADIENT_RADIAL"
    | "GRADIENT_ANGULAR"
    | "GRADIENT_DIAMOND"
    | "IMAGE"
    | "EMOJI"
    | "VIDEO";
  /**
   * Is the paint enabled?
   * @default true
   */
  visible: boolean;
  /**
   * Overall opacity of paint (colors within the paint can also have opacity values which would blend with this)
   * @default 1
   */
  opacity: number;
  /**
   * Solid color of the paint
   * - Only present if type is `SOLID`
   */
  color?: Color;
  /**
   * How this node blends with nodes behind it in the scene
   * - Only present if type is `GRADIENT_*`
   */
  blendMode?: BlendMode;
  /**
   * This field contains three vectors, each of which are a position in normalized object space
   * (normalized object space is if the top left corner of the bounding box of the object is
   * (0, 0) and the bottom right is (1,1)). The first position corresponds to the start of the
   * gradient (value 0 for the purposes of calculating gradient stops), the second position is
   * the end of the gradient (value 1), and the third handle position determines the width of the gradient.
   * - Only present if type is `GRADIENT_*`
   */
  gradientHandlePositions?: Vector[];
  /**
   * Positions of key points along the gradient axis with the colors anchored there. Colors along the gradient
   * are interpolated smoothly between neighboring gradient stops.
   * - Only present if type is `GRADIENT_*`
   */
  gradientStops?: ColorStop[];
  /**
   * Image scaling mode
   * - Only present if type is `IMAGE`
   */
  scaleMode?: "FILL" | "FIT" | "TILE" | "STRETCH";
  /**
   * Affine transform applied to the image
   * - Only present if scaleMode is `STRETCH`
   */
  imageTransform?: Transform;
  /**
   * Amount image is scaled by in tiling
   * - Only present if scaleMode is `TILE`
   */
  scalingFactor?: number;
  /**
   * Image rotation in degrees
   * - Only present if type is `IMAGE`
   */
  rotation?: number;
  /**
   * A reference to an image embedded in this node. To download the image using this reference, use the GET file images endpoint to retrieve the mapping from image references to image URLs
   * - Only present if type is `IMAGE`
   */
  imageRef?: string;
  /**
   * Defines what image filters have been applied to this paint, if any. If this property is not defined, no filters have been applied.
   * @default {}
   * - Only present if type is `IMAGE`
   */
  filters?: ImageFilters;
  /**
   * A reference to the GIF embedded in this node, if the image is a GIF. To download the image using this reference, use the GET file images endpoint to retrieve the mapping from image references to image URLs
   * - Only present if type is `IMAGE`
   */
  gifRef?: string;
};

/**
 * Defines the image filters applied to an image paint. All values are from -1 to 1
 */
type ImageFilters = {
  /**
   * @default 0
   */
  contrast: number;
  /**
   * @default 0
   */
  exposure: number;
  /**
   * @default 0
   */
  saturation: number;
  /**
   * @default 0
   */
  temperature: number;
  /**
   * @default 0
   */
  tint: number;
  /**
   * @default 0
   */
  highlights: number;
  /**
   * @default 0
   */
  shadows: number;
};

/**
 * A position color pair representing a gradient stop
 */
type ColorStop = {
  /**
   * Value between 0 and 1 representing position along the gradient axis
   */
  position: number;
  /**
   * Color attached to corresponding position
   */
  color: Color;
};

/**
 * A width and height
 */
type Size = {
  /**
   * The width of a size
   */
  width: number;
  /**
   * The height of a size
   */
  height: number;
};

type FileFormat = "PNG" | "JPG" | "SVG";

/**
 * Sizing constraint for exports
 */
type Constraint = {
  /**
   * Type of constraint to apply; string enum with potential values below:
   * - `SCALE`: Scale by value
   * - `WIDTH`: Scale proportionally and set width to value
   * - `HEIGHT`: Scale proportionally and set height to value
   */
  type: "SCALE" | "WIDTH" | "HEIGHT";
  /**
   * See `type` property for effect of this field
   */
  value: number;
};

/**
 * Format and size to export an asset at
 */
type ExportSetting = {
  /**
   * File suffix to append to all filenames
   */
  suffix: string;
  /**
   * Image type, string enum that supports values `JPG`, `PNG`, and `SVG`
   */
  format: FileFormat;
  /**
   * Constraint that determines sizing of exported asset
   */
  constraint: Constraint;
};

/**
 * A flow starting point used when launching a prototype to enter Presentation view.
 */
type FlowStartingPoint = {
  /**
   * Unique identifier specifying the frame
   */
  nodeId: string;
  /**
   * Name of flow
   */
  name: string;
};

type PrototypeDevice = {
  type: "NONE" | "PRESET" | "CUSTOM" | "PRESENTATION";
  size: Size;
  presetIdentifier: string;
  rotation: "NONE" | "CCW_90";
};

/**
 * Position of stroke relative to vector outline, as a string enum with possible values:
 * - INSIDE: stroke drawn inside the shape boundary
 * - OUTSIDE: stroke drawn outside the shape boundary
 * - CENTER: stroke drawn centered along the shape boundary
 */
type StrokeAlign = "INSIDE" | "OUTSIDE" | "CENTER";

/**
 * Determines if the layer should stretch along the parent’s counter axis. This property is only provided for direct children of auto-layout frames.
 * - INHERIT
 * - STRETCH
 * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
 * - MIN
 * - CENTER
 * - MAX
 * - STRETCH
 * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
 */
type LayoutAlign = "INHERIT" | "STRETCH" | "MIN" | "CENTER" | "MAX";

type LayoutMode = "NONE" | "HORIZONTAL" | "VERTICAL";

/**
 * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
 * @default "AUTO"
 */
type PrimaryAxisSizingMode = "FIXED" | "AUTO";

/**
 * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
 * @default "AUTO"
 */
type CounterAxisSizingMode = "FIXED" | "AUTO";

/**
 * Determines how the auto-layout frame’s children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.
 * @default "MIN"
 */
type PrimaryAxisAlignItems = "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";

/**
 * Determines how the auto-layout frame’s children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.
 * @default "MIN"
 */
type CounterAxisAlignItems = "MIN" | "CENTER" | "MAX" | "STRETCH" | "BASELINE";

/**
 * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable
 */
type LayoutPosition = "ABSOLUTE" | "AUTO";

/**
 * Defines the scrolling behavior of the frame, if there exist contents outside of the frame boundaries.
 * The frame can either scroll vertically, horizontally, or in both directions to the extents of the content
 * contained within it. This behavior can be observed in a prototype.
 */
type OverflowDirection =
  | "HORIZONTAL_SCROLLING"
  | "VERTICAL_SCROLLING"
  | "HORIZONTAL_AND_VERTICAL_SCROLLING";

/**
 * Enum describing how layer blends with layers below
 */
type BlendMode =
  | "PASS_THROUGH"
  | "NORMAL"
  | "DARKEN"
  | "MULTIPLY"
  | "LINEAR_BURN"
  | "COLOR_BURN"
  | "LIGHTEN"
  | "SCREEN"
  | "LINEAR_DODGE"
  | "COLOR_DODGE"
  | "OVERLAY"
  | "SOFT_LIGHT"
  | "HARD_LIGHT"
  | "DIFFERENCE"
  | "EXCLUSION"
  | "HUE"
  | "SATURATION"
  | "COLOR"
  | "LUMINOSITY";

type LayoutConstraint = "TOP" | "BOTTOM" | "CENTER" | "TOP_BOTTOM" | "SCALE";

type EasingType =
  | "EASE_IN"
  | "EASE_OUT"
  | "EASE_IN_AND_OUT"
  | "LINEAR"
  | "GENTLE_SPRING";

/**
 * A rectangle that expresses a bounding box in absolute coordinates
 */
type Rectangle = {
  /**
   * X coordinate of top left corner of the rectangle
   */
  x: number;
  /**
   * Y coordinate of top left corner of the rectangle
   */
  y: number;
  /**
   * Width of the rectangle
   */
  width: number;
  /**
   * Height of the rectangle
   */
  height: number;
};

/**
 * A 2d vector
 */
type Vector = {
  /**
   * X coordinate of the vector
   */
  x: number;
  /**
   * Y coordinate of the vector
   */
  y: number;
};

/**
 * A 2x3 affine transformation matrix
 * @example [[1, 0, 0], [0, 1, 0]]
 */
type Transform = [[number, number, number], [number, number, number]];

/**
 * Orientation of the grid as a string enum
 * - ROWS: Horizontal grid
 * - COLUMNS: Vertical grid
 * - GRID: Square grid
 */
type GridPattern = "ROWS" | "COLUMNS" | "GRID";

type GridAlignment = "MIN" | "CENTER" | "STRETCH";

/**
 * Guides to align and place objects within a frame
 */
type LayoutGrid = {
  /**
   * Orientation of the grid as a string enum
   * - ROWS: Horizontal grid
   * - COLUMNS: Vertical grid
   * - GRID: Square grid
   */
  pattern: GridPattern;
  /**
   * Width of column grid or height of row grid or square grid spacing
   */
  sectionSize: number;
  /**
   * Is the grid currently visible?
   */
  visible: boolean;
  /**
   * Color of the grid
   */
  color: Color;
  /**
   * Positioning of grid as a string enum
   * Only meaningful for directional grids (COLUMNS or ROWS)
   */
  alignment: GridAlignment;
  /**
   * Spacing in between columns and rows
   * Only meaningful for non-directional grids (GRID)
   */
  gutterSize: number;
  /**
   * Spacing before the first column or row
   * Only meaningful for non-directional grids (GRID)
   */
  offset: number;
  /**
   * Number of columns or rows
   * Only meaningful for non-directional grids (GRID)
   */
  count: number;
};

/**
 * A visual effect such as a shadow or blur
 */
export type Effect = {
  /**
   * Type of effect as a string enum
   */
  type: "DROP_SHADOW" | "INNER_SHADOW" | "LAYER_BLUR" | "BACKGROUND_BLUR";
  /**
   * Is the effect active?
   */
  visible: boolean;
  /**
   * Radius of the blur effect (applies to shadows as well)
   */
  radius: number;
  /**
   * The color of the shadow
   * Only applies to shadow effects
   */
  color: Color;
  /**
   * The blend mode of the shadow
   * Only applies to shadow effects
   */
  blendMode: BlendMode;
  /**
   * How far the shadow is projected in the x and y directions
   */
  offset: Vector;
  /**
   * How far the shadow spreads
   */
  spread: number;
  /**
   * Whether to show the shadow behind translucent or transparent pixels (applies only to drop shadows)
   */
  showShadowBehindNode: boolean;
};

type NodeType =
  | "CANVAS"
  | "FRAME"
  | "COMPONENT"
  | "INSTANCE"
  | "TEXT"
  | "VECTOR"
  | "BOOLEAN_OPERATION"
  | "STAR"
  | "LINE"
  | "ELLIPSE"
  | "REGULAR_POLYGON"
  | "RECTANGLE"
  | "GROUP"
  | "SLICE"
  | "STICKY"
  | "POLYGON";

export type Node = {
  /**
   * A string uniquely identifying this node within the document
   */
  id: string;
  /**
   * The name given to the node by the user in the tool.
   */
  name: string;
  /**
   * Whether or not the node is visible on the canvas
   * @default true
   */
  visible: boolean;
  /**
   * The type of the node
   */
  type: NodeType;
  /**
   * The rotation of the node, if not 0.
   */
  rotation: number;
  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData: any;
  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData: any;
  /**
   * A mapping of a layer's property to component property name of component properties attached to this node.
   * The component property name can be used to look up more information on the node's containing component's
   * or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences: Record<string, string>;
};

export type DocumentNode = Node & {
  /**
   * An array of canvases attached to the document
   */
  children: Node[];
};

export type CanvasNode = Node & {
  /**
   * An array of top level layers on the canvas
   */
  children: Node[];
  /**
   * Background color of the canvas.
   */
  backgroundColor: Color;
  /**
   * Node ID that corresponds to the start frame for prototypes. This is deprecated with the introduction of multiple flows. Please use the flowStartingPoints field.
   * @deprecated
   */
  prototypeStartNodeID: string;
  /**
   * A array of flow starting points sorted by its position in the prototype settings panel.
   * @default []
   */
  flowStartingPoints: FlowStartingPoint[];
  /**
   * The device used to view a prototype
   */
  prototypeDevice: PrototypeDevice;
  /**
   * An array of export settings representing images to export from the canvas
   * @default []
   */
  exportSettings: ExportSetting[];
};

export type FrameNode = Node & {
  /**
   * An array of nodes that are direct children of this node
   */
  children: Node[];
  /**
   * If true, layer is locked and cannot be edited or selected
   * @default false
   */
  locked: boolean;
  /**
   * Background of the node. This is deprecated, as backgrounds for frames are now in the fills field.
   * @deprecated
   */
  background: Paint[];

  /**
   * [DEPRECATED] Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the fills field instead.
   */
  backgroundColor: Color;
  /**
   * An array of fill paints applied to the node
   * @default []
   */
  fills: Paint[];
  /**
   * An array of stroke paints applied to the node
   * @default []
   */
  strokes: Paint[];
  /**
   * The weight of strokes on the node
   */
  strokeWeight: number;
  /**
   * Position of stroke relative to vector outline, as a string enum
   */
  strokeAlign: StrokeAlign;
  /**
   * Radius of each corner of the frame if a single radius is set for all corners
   */
  cornerRadius: number;
  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise
   * @default same as cornerRadius
   */
  rectangleCornerRadii: number[];
  /**
   * An array of export settings representing images to export from the node
   * @default []
   */
  exportSettings: ExportSetting[];
  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;
  /**
   * Keep height and width constrained to same ratio
   * @default false
   */
  preserveRatio: boolean;
  /**
   * Horizontal and vertical layout constraints for node
   */
  constraints: LayoutConstraint;
  /**
   * Determines if the layer should stretch along the parent’s counter axis. This property is only provided for direct children of auto-layout frames.
   */
  layoutAlign: LayoutAlign;
  /**
   * Node ID of node to transition to in prototyping
   * @default null
   */
  transitionNodeID: string | null;
  /**
   * The duration of the prototyping transition on this node (in milliseconds)
   * @default null
   */
  transitionDuration: number | null;
  /**
   * The easing curve used in the prototyping transition on this node
   * @default null
   */
  transitionEasing: EasingType | null;
  /**
   * Opacity of the node
   * @default 1
   */
  opacity: number;
  /**
   * Bounding box of the node in absolute space coordinates
   */
  absoluteBoundingBox: Rectangle;
  /**
   * The bounds of the rendered node in the file in absolute space coordinates
   */
  absoluteRenderBounds: Rectangle;
  /**
   * Width and height of element. This is different from the width and height of the bounding box
   * in that the absolute bounding box represents the element after scaling and rotation.
   * Only present if geometry=paths is passed
   */
  size: Vector;
  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if geometry=paths is passed
   */
  relativeTransform: Transform;
  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean;
  /**
   * Whether this layer uses auto-layout to position its children.
   * @default "NONE"
   */
  layoutMode: LayoutMode;
  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   * @default "AUTO"
   */
  primaryAxisSizingMode: PrimaryAxisSizingMode;
  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   * @default "AUTO"
   */
  counterAxisSizingMode: CounterAxisSizingMode;
  /**
   * Determines how the auto-layout frame’s children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.
   * @default "MIN"
   */
  primaryAxisAlignItems: PrimaryAxisAlignItems;
  /**
   * Determines how the auto-layout frame’s children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.
   * @default "MIN"
   */
  counterAxisAlignItems: CounterAxisAlignItems;
  /**
   * The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingLeft: number;
  /**
   * The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingRight: number;
  /**
   * The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingTop: number;
  /**
   * The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingBottom: number;
  /**
   * The horizontal padding between the borders of the frame and its children. This property is only applicable for auto-layout frames. Deprecated in favor of setting individual paddings.
   * @default 0
   * @deprecated
   */
  horizontalPadding: number;
  /**
   * The vertical padding between the borders of the frame and its children. This property is only applicable for auto-layout frames. Deprecated in favor of setting individual paddings.
   * @default 0
   * @deprecated
   */
  verticalPadding: number;
  /**
   * The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames.
   * @default 0
   */
  itemSpacing: number;
  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   * @default "AUTO"
   */
  layoutPositioning: LayoutPosition;
  /**
   * Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames.
   * @default false
   */
  itemReverseZIndex: boolean;
  /**
   * Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames.
   * @default false
   */
  strokesIncludedInLayout: boolean;
  /**
   * An array of layout grids attached to this node (see layout grids section for more details).GROUP nodes do not have this attribute
   * @default []
   */
  layoutGrids: LayoutGrid[];
  /**
   * Defines the scrolling behavior of the frame, if there exist contents outside of the frame boundaries. The frame can either scroll vertically, horizontally, or in both directions to the extents of the content contained within it. This behavior can be observed in a prototype.
   * @default "NONE"
   */
  overflowDirection: OverflowDirection;
  /**
   * An array of effects attached to this node (see effects section for more details)
   * @default []
   */
  effects: Effect[];
  /**
   * Does this node mask sibling nodes in front of it?
   * @default false
   */
  isMask: boolean;
  /**
   * Does this mask ignore fill style (like gradients) and effects?
   * @default false
   */
  isMaskOutline: boolean;
  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles: Record<StyleType, string>;
};

export type GroupNode = FrameNode;

export type VectorNode = Node & {
  /**
   * If true, layer is locked and cannot be edited
   * @default false
   */
  locked: boolean;
  /**
   * An array of export settings representing images to export from the node
   * @default []
   */
  exportSettings: ExportSetting[];
  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;
  /**
   * Keep height and width constrained to same ratio
   * @default false
   */
  preserveRatio: boolean;
  /**
   * Determines if the layer should stretch along the parent’s counter axis. This property is only provided for direct children of auto-layout frames.
   */
  layoutAlign: LayoutAlign;

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent’s primary axis. A 0 corresponds to a fixed size and 1 corresponds to stretch
   * @default 0
   */
  layoutGrow: number;
  /**
   * Horizontal and vertical layout constraints for node
   */
  constraints: LayoutConstraint;
  /**
   * Node ID of node to transition to in prototyping
   * @default null
   */
  transitionNodeID: string | null;
  /**
   * The duration of the prototyping transition on this node (in milliseconds)
   * @default null
   */
  transitionDuration: number | null;
  /**
   * The easing curve used in the prototyping transition on this node
   * @default null
   */
  transitionEasing: EasingType | null;
  /**
   * Opacity of the node
   * @default 1
   */
  opacity: number;
  /**
   * Bounding box of the node in absolute space coordinates
   */
  absoluteBoundingBox: Rectangle;
  /**
   * The bounds of the rendered node in the file in absolute space coordinates
   */
  absoluteRenderBounds: Rectangle;
  /**
   * An array of effects attached to this node (see effects section for more details)
   * @default []
   */
  effects: Effect[];
  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if geometry=paths is passed
   */
  size: Vector;
  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if geometry=paths is passed
   */
  relativeTransform: Transform;
  /**
   * Does this node mask sibling nodes in front of it?
   * @default false
   */
  isMask: boolean;
  /**
   * An array of fill paints applied to the node
   * @default []
   */
  fills: Paint[];
  /**
   * Only specified if parameter geometry=paths is used. An array of paths representing the object fill
   */
  fillGeometry: Path[];
  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the geometry=paths option. Each path returned may have an overrideId which maps to this table.
   */
  fillOverrideTable: Record<number, PaintOverride>;
  /**
   * An array of stroke paints applied to the node
   * @default []
   */
  strokes: Paint[];
  /**
   * The weight of strokes on the node
   */
  strokeWeight: number;
  /**
   * An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.
   */
  individualStrokeWeights: StrokeWeights;
  /**
   * A string enum with value of "NONE", "ROUND", "SQUARE", "LINE_ARROW", or "TRIANGLE_ARROW", describing the end caps of vector paths.
   * @default "NONE"
   */
  strokeCap: "NONE" | "ROUND" | "SQUARE" | "LINE_ARROW" | "TRIANGLE_ARROW";
  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   * @default "MITER"
   */
  strokeJoin: "MITER" | "BEVEL" | "ROUND";
  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector path follows. For example a value of [1, 2] indicates that the path has a dash of length 1 followed by a gap of length 2, repeated.
   * @default []
   */
  strokeDashes: number[];
  /**
   * Only valid if strokeJoin is "MITER". The corner angle, in degrees, below which strokeJoin will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   * @default 28.96
   */
  strokeMiterAngle: number;
  /**
   * Only specified if parameter geometry=paths is used. An array of paths representing the object stroke
   */
  strokeGeometry: Path[];
  /**
   * Position of stroke relative to vector outline, as a string enum
   */
  strokeAlign: StrokeAlign;
  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles: Record<StyleType, string>;
};

export type BooleanOperationNode = VectorNode & {
  /**
   * An array of nodes that are being boolean operated on
   */
  children: Node[];
  /**
   * A string enum with value of "UNION", "INTERSECT", "SUBTRACT", or "EXCLUDE" indicating the type of boolean operation applied
   */
  booleanOperation: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE";
};

export type StarNode = VectorNode;

export type LineNode = VectorNode;

export type EllipseNode = VectorNode & {
  /**
   * Start and end angles of the ellipse measured clockwise from the x axis, plus the inner radius for donuts
   */
  arcData: ArcData;
};

export type RegularPolygonNode = VectorNode;

export type RectangleNode = VectorNode & {
  /**
   * Radius of each corner of the rectangle if a single radius is set for all corners
   */
  cornerRadius: number;
  /**
   * Array of length 4 of the radius of each corner of the rectangle, starting in the top left and proceeding clockwise
   */
  rectangleCornerRadii: [number, number, number, number];
};

export type TextNode = Omit<VectorNode, "fillOverrideTable"> & {
  /**
   * Text contained within a text box
   */
  characters: string;
  /**
   * Style of text including font family and weight (see type style section for more information)
   */
  style: TypeStyle;
  /**
   * Array with same number of elements as characters in text box, each element is a reference to the styleOverrideTable defined below and maps to the corresponding character in the characters field. Elements with value 0 have the default type style
   */
  characterStyleOverrides: number[];
  /**
   * Map from ID to TypeStyle for looking up style overrides
   */
  styleOverrideTable: Record<number, TypeStyle>;
  /**
   * An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the list type of a specific line. List types are represented as string enums with one of these possible values:
   * - ORDERED: Text is an ordered list (numbered)
   * - UNORDERED: Text is an unordered list (bulleted)
   * - NONE: Text is plain text and not part of any list
   */
  lineTypes: ("ORDERED" | "UNORDERED" | "NONE")[];
  /**
   * An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the indentation level of a specific line.
   */
  lineIndentations: number[];
};

export type SliceNode = {
  /**
   * An array of export settings representing images to export from this node
   */
  exportSettings: ExportSetting[];
  /**
   * Bounding box of the node in absolute space coordinates
   */
  absoluteBoundingBox: Rectangle;
  /**
   * The bounds of the rendered node in the file in absolute space coordinates
   */
  absoluteRenderBounds: Rectangle;
  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if geometry=paths is passed
   */
  size: Vector;
  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if geometry=paths is passed
   */
  relativeTransform: Transform;
};

export type ComponentNode = FrameNode & {
  /**
   * A mapping of name to ComponentPropertyDefinition for every component property on this component. Each property has a type, defaultValue, and other optional values
   */
  componentProperties: Record<string, ComponentPropertyDefinition>;
};

export type ComponentSetNode = ComponentNode;

export type InstanceNode = FrameNode & {
  /**
   * ID of component that this instance came from, refers to components table (see endpoints section below)
   */
  componentId: string;
  /**
   * If true, this node has been marked as exposed to its containing component or component set
   * @default false
   */
  isExposedInstance: boolean;
  /**
   * IDs of instances that have been exposed to this node's level
   * @default []
   */
  exposedInstances: string[];
  /**
   * A mapping of name to ComponentProperty for all component properties on this instance. Each property has a type, value, and other optional values (see properties type section below)
   * @default {}
   */
  componentProperties: Record<string, ComponentProperty>;
  /**
   * An array of all of the fields directly overridden on this instance. Inherited overrides are not included.
   */
  overrides: Overrides[];
};

/**
 * Fields directly overridden on an instance. Inherited overrides are not included.
 */
type Overrides = {
  /**
   * A unique ID for a node
   */
  id: string;
  /**
   * An array of properties
   */
  overriddenFields: string[];
};

/**
 * Component property definition
 */
type ComponentPropertyDefinition = {
  /**
   * Type of this component property
   */
  type: ComponentPropertyType;
  /**
   * Initial value of this property for instances
   */
  defaultValue: boolean | string;
  /**
   * All possible values for this property. Only exists on VARIANT properties
   */
  variantOptions?: string[];
  /**
   * List of user-defined preferred values for this property. Only exists on INSTANCE_SWAP properties
   */
  preferredValues?: InstanceSwapPreferredValue[];
};

/**
 * Component property
 */
type ComponentProperty = {
  /**
   * Type of this component property
   */
  type: ComponentPropertyType;
  /**
   * Value of this property set on this instance
   */
  value: boolean | string;
  /**
   * List of user-defined preferred values for this property. Only exists on INSTANCE_SWAP properties
   */
  preferredValues?: InstanceSwapPreferredValue[];
};

/**
 * Component property type
 */
type ComponentPropertyType = "BOOLEAN" | "INSTANCE_SWAP" | "TEXT" | "VARIANT";

/**
 * Instance swap preferred value
 */
type InstanceSwapPreferredValue = {
  /**
   * Type of node for this preferred value
   */
  type: "COMPONENT" | "COMPONENT_SET";
  /**
   * Key of this component or component set
   */
  key: string;
};

/**
 * Metadata for character formatting
 */
type TypeStyle = {
  /**
   * Font family of text (standard name)
   */
  fontFamily: string;
  /**
   * PostScript font name
   */
  fontPostScriptName: string;
  /**
   * Space between paragraphs in px, 0 if not present
   * @default 0
   */
  paragraphSpacing: number;
  /**
   * Paragraph indentation in px, 0 if not present
   * @default 0
   */
  paragraphIndent: number;
  /**
   * Space between list items in px, 0 if not present
   * @default 0
   */
  listSpacing: number;
  /**
   * Whether or not text is italicized
   */
  italic: boolean;
  /**
   * Numeric font weight
   */
  fontWeight: number;
  /**
   * Font size in px
   */
  fontSize: number;
  /**
   * Text casing applied to the node, default is the original casing
   * @default "ORIGINAL"
   */
  textCase:
    | "ORIGINAL"
    | "UPPER"
    | "LOWER"
    | "TITLE"
    | "SMALL_CAPS"
    | "SMALL_CAPS_FORCED";

  /**
   * Text decoration applied to the node, default is none
   * @default "NONE"
   */
  textDecoration: "NONE" | "STRIKETHROUGH" | "UNDERLINE";
  /**
   * Dimensions along which text will auto resize, default is that the text does not auto-resize. TRUNCATE means that the text will be shortened and trailing text will be replaced with "…" if the text contents is larger than the bounds.
   * @default "NONE"
   */
  textAutoResize:
    | "NONE"
    | "WIDTH_AND_HEIGHT"
    | "HEIGHT"
    | "WIDTH_AND_HEIGHT"
    | "TRUNCATE";

  /**
   * Horizontal text alignment as string enum
   */
  textAlignHorizontal: "LEFT" | "RIGHT" | "CENTER" | "JUSTIFIED";
  /**
   * Vertical text alignment as string enum
   */
  textAlignVertical: "TOP" | "CENTER" | "BOTTOM";
  /**
   * Space between characters in px
   */
  letterSpacing: number;
  /**
   * Paints applied to characters
   */
  fills: Paint[];
  /**
   * Link to a URL or frame
   */
  hyperlink: Hyperlink;
  /**
   * A map of OpenType feature flags to 1 or 0, 1 if it is enabled and 0 if it is disabled. Note that some flags aren't reflected here. For example, SMCP (small caps) is still represented by the textCase field.
   * @default {}
   */
  opentypeFlags: Record<string, number>;
  /**
   * Line height in px
   */
  lineHeightPx: number;
  /**
   * Line height as a percentage of normal line height. This is deprecated; in a future version of the API only lineHeightPx and lineHeightPercentFontSize will be returned.
   * @deprecated
   * @default 100
   * @min 0
   * @max 100
   */
  lineHeightPercent: number;
  /**
   * Line height as a percentage of the font size. Only returned when lineHeightPercent is not 100.
   */
  lineHeightPercentFontSize: number;
  /**
   * The unit of the line height value specified by the user.
   * - PIXELS: Line height is in pixels
   * - FONT_SIZE_%: Line height is a percentage of the font size
   * - INTRINSIC_%: Line height is a percentage of the font's intrinsic line height
   */
  lineHeightUnit: string;
};

/**
 * A link to either a URL or another frame (node) in the document
 */
type Hyperlink = {
  /**
   * Type of hyperlink
   */
  type: "URL" | "NODE";

  /**
   * URL being linked to, if URL type
   */
  url: string;
  /**
   * ID of frame hyperlink points to, if NODE type
   */
  nodeID: string;
};

/**
 * Information about the arc properties of an ellipse. 0° is the x axis and increasing angles rotate clockwise
 */
type ArcData = {
  /**
   * Start of the sweep in radians
   */
  startingAngle: number;
  /**
   * End of the sweep in radians
   */
  endingAngle: number;
  /**
   * Inner radius value between 0 and 1
   * @min 0
   * @max 1
   */
  innerRadius: number;
};

type Path = any;

/**
 * Paint metadata to override default paints
 */
type PaintOverride = {
  /**
   * Paints applied to characters
   */
  fills: Paint[];
  /**
   * ID of style node, if any, that this inherits fill data from
   */
  inheritFillStyleId?: string;
};

/**
 * Individual stroke weights
 */
type StrokeWeights = {
  /**
   * The top stroke weight
   */
  top: number;
  /**
   * The bottom stroke weight
   */
  bottom: number;
  /**
   * The left stroke weight
   */
  left: number;
  /**
   * The right stroke weight
   */
  right: number;
};

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

export type GetFileComponentsResponse = {
  error: boolean;
  status: HttpStatusCode;
  meta: {
    components: Component[];
  };
};

export type GetFileComponentSetsResponse = {
  error: boolean;
  status: HttpStatusCode;
  meta: {
    component_sets: ComponentSet[];
  };
};

export type GetFileStylesResponse = {
  error: boolean;
  status: HttpStatusCode;
  meta: {
    styles: Style[];
  };
};

type Branch = {
  key: string;
  name: string;
  thumbnail_url: string;
  last_modified: string;
  link_access: string;
};

export type GetFileParams = {
  ids: string[];
  version?: string;
  depth?: number;
  geometry?: "paths" | "bounds";
  plugin_data?: string;
  branch_data: boolean;
};

export type GetFileResponse = {
  name: string;
  role: string;
  lastModified: string;
  editorType: string;
  thumbnailUrl: string;
  version: string;
  document: DocumentNode;
  components: Record<string, Component>;
  componentSets: Record<string, ComponentSet>;
  schemaVersion: number;
  styles: Record<string, Style>;
  mainFileKey: string;
  branches: Branch[];
};

export type GetFileNodesParams = {
  ids: string[];
  version?: string;
  depth?: number;
  geometry?: "paths" | "bounds";
  plugin_data?: string;
};

export type GetFileNodesResponse = {
  name: string;
  role: string;
  lastModified: string;
  editorType: string;
  thumbnailUrl: string;
  err: string | null;
  nodes: {
    [id: string]: {
      document: Node;
      components: Record<string, Component>;
      schemaVersion: number;
      styles: Record<string, Style>;
    };
  };
};

export type GetImageParams = {
  ids: string[];
  scale?: number;
  format?: "jpg" | "png" | "svg" | "pdf";
  svg_include_id?: boolean;
  svg_simplify_stroke?: boolean;
  use_absolute_bounds?: boolean;
  version?: string;
};

export type GetImageResponse = {
  err: string | null;
  images: Record<string, string>;
  status: HttpStatusCode;
};

export type GetImageFillsResponse = {
  images: Record<string, string>;
};
