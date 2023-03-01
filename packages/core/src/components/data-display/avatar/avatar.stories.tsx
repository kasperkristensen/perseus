import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Avatar } from "./avatar"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
