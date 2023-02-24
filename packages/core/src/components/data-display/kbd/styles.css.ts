import { style } from "@vanilla-extract/css";
import { vars } from "../../../lib";

export const kbd = style({
  backgroundColor: vars.colors.tags.tagNeutralBg,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.colors.tags.tagNeutralBorder,
  color: vars.colors.tags.tagNeutralText,
});
