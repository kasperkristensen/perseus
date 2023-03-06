import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Label } from "./label"

export default {
  title: "Typography/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>Label</Label>
)

export const Xsmall = Template.bind({})
Xsmall.args = {
  size: "xsmall",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
}

export const Regular = Template.bind({})
Regular.args = {
  size: "regular",
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
}

export const RegularWeight = Template.bind({})
RegularWeight.args = {
  weight: "regular",
}

export const PlusWeight = Template.bind({})
PlusWeight.args = {
  weight: "plus",
}
