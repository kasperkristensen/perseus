import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Checkbox } from "./checkbox"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = ({ checked, ...args }) => {
  const [state, setState] = React.useState(checked)

  return <Checkbox {...args} checked={state} onCheckedChange={setState} />
}

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  defaultChecked: "indeterminate",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  disabled: true,
  defaultChecked: true,
}

export const DisabledIndeterminate = Template.bind({})
DisabledIndeterminate.args = {
  disabled: true,
  defaultChecked: "indeterminate",
}
