import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Toggle } from "./toggle"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Inputs/Toggle",
  component: Toggle,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Default = Template.bind({})
