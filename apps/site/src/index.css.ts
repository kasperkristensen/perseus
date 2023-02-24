import { vars } from "@medusa-ui/core";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: vars.colors.texts.textPrimary,
  backgroundColor: vars.colors.backgrounds.bgBase,
  margin: 0,
  display: "flex",
  placeItems: "center",
  minWidth: "320px",
  minHeight: "100vh",
});
