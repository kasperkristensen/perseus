import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../inputs/button/button";

import { Tooltip } from "./tooltip";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Data Display/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button variant="primary">Hover me</Button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  title: "Tooltip",
  content: "This is a tooltip",
};
