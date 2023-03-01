import { Stack } from "../../layout/stack"
import { Tooltip, TooltipProps } from "./tooltip"

type Props = TooltipProps & {
  description: string
  keyboardShortcut: string
}

export const ShortcutTooltip = ({
  description,
  keyboardShortcut,
  children,
}: Props) => {
  return (
    <Tooltip
      usage="shortcut"
      content={renderContent({ description, keyboardShortcut })}
    >
      {children}
    </Tooltip>
  )
}

const renderContent = ({
  description,
  keyboardShortcut,
}: Pick<Props, "description" | "keyboardShortcut">) => {
  return <Stack></Stack>
}
