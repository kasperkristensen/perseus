export const ENV_VARIABLES = [
  "FIGMA_BASE_URL",
  "FIGMA_ACCESS_TOKEN",
  "FIGMA_PROJECT_ID",
  "FIGMA_PROJECT_NODE_ID",
];

/**
 * The number of icons to request at a time
 * The Figma API has a rate limit, however, it is not documented.
 * This value has been determined by trial and error.
 */
export const RATE_LIMIT = 20;

/**
 * One minute in seconds
 * The Figma API has a rate limit, however, it is not documented.
 * This value has been determined by trial and error.
 */
export const WAIT_TIME = 60;

export const FIGMA_BASE_URL = "https://api.figma.com/v1/";
export const FIGMA_FILE_ID = "TW0kRpjhpsi3sR1u4a4wF8";
export const FIGMA_ICONS_NODE_ID = "109:599";
export const FIGMA_COLORS_NODE_ID = "109:596";
