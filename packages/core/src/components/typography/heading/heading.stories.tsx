import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Heading } from "./heading"

export default {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>Important Heading</Heading>
)

export const H1 = Template.bind({})
H1.args = {
  as: "h1",
}

export const H2 = Template.bind({})
H2.args = {
  as: "h2",
}

export const H3 = Template.bind({})
H3.args = {
  as: "h3",
}
