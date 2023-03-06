import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Prompt } from "./prompt"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Feedback/Prompt",
  component: Prompt,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Prompt>

const Template: ComponentStory<typeof Prompt> = (args) => {
  return <Prompt {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: "Delete something",
  message: "Are you sure? This cannot be undone.",
}

export const WithConfirmationText = Template.bind({})
WithConfirmationText.args = {
  title: "Delete something",
  message: "Are you sure? This cannot be undone.",
  confirmationText: "medusa-design-system",
}
