import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Body } from "./body";

export default {
  title: "Typography/Body",
  component: Body,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => (
  <Body {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    tincidunt nisl. Sed euismod, nisl eget ultricies lacinia, nunc nisl aliquet
    nunc, eget aliquet nunc nisl eget nunc.
  </Body>
);

export const Regular = Template.bind({});
Regular.args = {
  size: "regular",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Xlarge = Template.bind({});
Xlarge.args = {
  size: "xlarge",
};

export const RegularWeight = Template.bind({});
RegularWeight.args = {
  weight: "regular",
};

export const PlusWeight = Template.bind({});
PlusWeight.args = {
  weight: "plus",
};
