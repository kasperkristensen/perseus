import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "./button"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  children: "Action",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  children: "Action",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: "tertiary",
  children: "Action",
}

export const Danger = Template.bind({})
Danger.args = {
  variant: "danger",
  children: "Action",
}

export const Transparent = Template.bind({})
Transparent.args = {
  variant: "transparent",
  children: "Action",
}
