import * as Primitive from "@radix-ui/react-tooltip"
import * as React from "react"
import { Box } from "../../layout"
import { Label } from "../../typography"
import { TooltipVariants, variants } from "./styles.css"

export type TooltipProps =
  React.PropsWithChildren<Primitive.TooltipContentProps> & {
    content: React.ReactNode
    providerSettings?: Primitive.TooltipProviderProps
  } & TooltipVariants

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      usage = "standard",
      content,
      children,
      sideOffset = 5,
      side = "top",
      providerSettings = {
        delayDuration: 100,
      },
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <Primitive.Provider {...providerSettings}>
        <Primitive.Root>
          <Primitive.Trigger asChild>{children}</Primitive.Trigger>

          <Primitive.Content
            ref={forwardedRef}
            sideOffset={sideOffset}
            side={side}
            align="center"
            {...rest}
          >
            <Box className={variants({ usage })}>
              <Label as="p" size="xsmall" weight="plus" color="secondary">
                {content}
              </Label>
            </Box>
          </Primitive.Content>
        </Primitive.Root>
      </Primitive.Provider>
    )
  },
)

Tooltip.displayName = "Tooltip"
