import * as React from "react"
import { Box } from "../../layout"
import { Label } from "../../typography"
import { Tooltip, TooltipProps } from "./tooltip"

type ShortcutTooltipProps = TooltipProps & {
  description: string
  keyboardShortcut: string
}

const renderContent = ({
  description,
}: Pick<ShortcutTooltipProps, "description" | "keyboardShortcut">) => {
  return (
    <Box>
      <Label>{description}</Label>
    </Box>
  )
}

export const ShortcutTooltip = React.forwardRef<
  HTMLDivElement,
  ShortcutTooltipProps
>(({ description, keyboardShortcut, children }, forwardedRef) => {
  return (
    <Tooltip
      ref={forwardedRef}
      usage="shortcut"
      content={renderContent({ description, keyboardShortcut })}
    >
      {children}
    </Tooltip>
  )
})

ShortcutTooltip.displayName = "ShortcutTooltip"
