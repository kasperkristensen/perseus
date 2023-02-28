import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Notification } from "./notification";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Feedback/Notification",
  component: Notification,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      defaultValue: "Title",
    },
    message: {
      control: {
        type: "text",
      },
      defaultValue: "Message",
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["info", "success", "warning", "error"],
      defaultValue: "info",
    },
  },
  parameters: {
    layout: "centered",
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Info = Template.bind({});
Info.args = {
  variant: "info",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};
