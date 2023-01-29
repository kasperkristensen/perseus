import { transform } from "@svgr/core";
import { defaultTemplate, fixedColorTemplate } from "../templates";

export async function transformSVG({
  DOM,
  componentName,
  fixedColor,
}: {
  DOM: string;
  componentName: string;
  fixedColor: boolean;
}) {
  return await transform(
    DOM,
    {
      typescript: true,
      replaceAttrValues: !fixedColor
        ? {
            "#11181C": "{color}",
          }
        : undefined,
      ref: true,
      icon: 20,
      dimensions: true,
      expandProps: "end",
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      template: fixedColor ? fixedColorTemplate : defaultTemplate,
    },
    {
      componentName,
    }
  );
}
