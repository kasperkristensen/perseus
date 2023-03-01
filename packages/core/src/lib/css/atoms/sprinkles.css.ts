import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"

const spacing = {
  auto: "auto",
  none: 0,
  "2xsmall": 4,
  xsmall: 8,
  small: 12,
  base: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
  "2xlarge": 40,
  "3xlarge": 48,
  "4xlarge": 56,
  "5xlarge": 64,
  "6xlarge": 96,
}

const sizes = {
  ...spacing,
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  full: "100%",
}

const borderRadii = {
  sharp: 0,
  soft: 4,
  mellow: 8,
  rounded: 16,
  circle: 9999,
}

const breakpointConditions = {
  mobile: {},
  tablet: { "@media": "screen and (min-width: 768px)" },
  laptop: { "@media": "screen and (min-width: 1024px)" },
  desktop: { "@media": "screen and (min-width: 1464px)" },
}

const layoutProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "mobile",
  properties: {
    margin: spacing,
    marginTop: spacing,
    marginRight: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    padding: spacing,
    paddingTop: spacing,
    paddingRight: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    width: sizes,
    height: sizes,
    minWidth: sizes,
    minHeight: sizes,
    maxWidth: sizes,
    maxHeight: sizes,
  },
  shorthands: {
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    w: ["width"],
    h: ["height"],
    minW: ["minWidth"],
    minH: ["minHeight"],
  },
})

const positioningProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "mobile",
  properties: {
    gap: spacing,
    columnGap: spacing,
    rowGap: spacing,
    gridGap: spacing,
    gridColumnGap: spacing,
    gridRowGap: spacing,
    inset: spacing,
  },
  shorthands: {
    gapX: ["rowGap"],
    gapY: ["columnGap"],
  },
})

const responsiveProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "mobile",
  properties: {
    justifyContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
    },
    alignItems: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },
    alignSelf: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },
    justifyItems: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },
    alignContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
      stretch: "stretch",
    },
    flex: {
      0: 0,
      1: 1,
    },
    gridTemplateColumns: {
      4: "repeat(4, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
  },
  shorthands: {
    gridCols: ["gridTemplateColumns"],
  },
})

const unresponsiveProperties = defineProperties({
  properties: {
    borderRadius: borderRadii,
  },
})

export const sprinkles = createSprinkles(
  layoutProperties,
  positioningProperties,
  responsiveProperties,
  unresponsiveProperties,
)
export type Sprinkles = Parameters<typeof sprinkles>[0]
