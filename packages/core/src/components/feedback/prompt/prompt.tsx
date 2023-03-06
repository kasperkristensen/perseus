import * as Primitive from "@radix-ui/react-alert-dialog"
import * as React from "react"
import { Box } from "../../layout"
import { Heading, Label } from "../../typography"
import { extraConfirmation, footer, header, prompt } from "./styles.css"

export type PromptProps = {
  /**
   * The title of the prompt
   */
  title: string
  /**
   * The message to display in the prompt
   */
  message: string
  /**
   * An optional text that the user will have to type to confirm the action
   */
  confirmationText?: string
  /**
   * The label of the action button
   * @default "Confirm"
   */
  actionLabel?: string
  /**
   * The action to perform when the user confirms the action
   */
  onConfirm: () => void
  /**
   * The action to perform when the user cancels the action
   */
  onCancel: () => void
}

export const Prompt = React.forwardRef<HTMLDivElement, PromptProps>(
  (
    {
      title,
      message,
      confirmationText,
      actionLabel = "Confirm",
      onCancel,
      onConfirm,
    },
    forwardedRef,
  ) => {
    return (
      <Primitive.Root open={true}>
        <Primitive.Overlay />
        <Primitive.Content aria-label="Prompt" asChild ref={forwardedRef}>
          <Box className={prompt}>
            <Box
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "2xsmall",
              }}
              className={header({ hasConfirmation: !!confirmationText })}
            >
              <Primitive.Title asChild>
                <Heading as="h2">{title}</Heading>
              </Primitive.Title>
              <Primitive.Description asChild>
                <Label color="secondary" size="regular">
                  {message}
                </Label>
              </Primitive.Description>
            </Box>
            {confirmationText && (
              <Box
                css={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2xsmall",
                }}
                className={extraConfirmation}
              >
                <Label color="secondary">
                  Please type{" "}
                  <Label color="primary" size="regular" weight="plus">
                    {confirmationText}
                  </Label>{" "}
                  to confirm.
                </Label>
              </Box>
            )}
            <Box
              css={{
                display: "flex",
                justifyContent: "end",
                gap: "xsmall",
                w: "full",
              }}
              className={footer({ hasConfirmation: !!confirmationText })}
            >
              <Primitive.Cancel type="button" onClick={onCancel}>
                Cancel
              </Primitive.Cancel>
              <Primitive.Action type="button" onClick={onConfirm}>
                {actionLabel}
              </Primitive.Action>
            </Box>
          </Box>
        </Primitive.Content>
      </Primitive.Root>
    )
  },
)

Prompt.displayName = "Prompt"
