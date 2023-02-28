import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Body } from "../../typography";

import { Modal } from "./modal";

export default {
  title: "Feedback/Modal",
  component: Modal.Root,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Modal.Root>;

const Template: ComponentStory<typeof Modal.Root> = (args) => {
  const [open, setOpen] = React.useState(args.open ?? false);

  React.useEffect(() => {
    setOpen(args.open ?? false);
  }, [args.open]);

  return (
    <Modal.Root open={open} close={() => setOpen(false)}>
      <Modal.Header>Title</Modal.Header>
      <Modal.Content>
        <Body>
          Hey there, I&apos;m a modal. I&apos;m a great way to display some
          content that requires the user&apos;s attention.
        </Body>
      </Modal.Content>
      <Modal.Footer justifyContent="end" w="full" gap="xsmall">
        <button>Close</button>
        <button>Save</button>
      </Modal.Footer>
    </Modal.Root>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
