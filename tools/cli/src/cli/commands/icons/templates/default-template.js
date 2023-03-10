const defaultTemplate = (variables, { tpl }) => {
  return tpl`
/**
 * This file was generated automatically by @medusa-ui/cli.
 * Do not edit this file directly.
 */

import * as React from "react";
import { Ref, forwardRef } from "react";
import type { IconProps } from "../../types"


const ${variables.componentName} = ({ color = "currentColor", ...props }: IconProps, ref: Ref<SVGSVGElement>) => (
  ${variables.jsx}
)
 
${variables.exports}
`;
};

export default defaultTemplate;
