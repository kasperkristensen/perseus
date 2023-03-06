import {
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircle,
  XCircleSolid,
} from "@medusa-ui/icons"
import * as React from "react"
import { Box } from "../../layout"
import { Label } from "../../typography"
import { icon, notification, NotificationVariants } from "./styles.css"

type Props = {
  title: string
  message: string
  action?: () => void
} & NotificationVariants

const Icon = ({ variant = "info" }: {} & NotificationVariants) => {
  const Component = {
    success: CheckCircleSolid,
    info: InformationCircle,
    error: XCircleSolid,
    warning: ExclamationCircleSolid,
  }[variant]

  return (
    <Box as="span" className={icon({ variant })}>
      <Component role="img" />
    </Box>
  )
}

export const Notification = React.forwardRef<HTMLDivElement, Props>(
  ({ variant = "info", title, message, action }, ref) => {
    const role = {
      info: "dialog",
      success: "dialog",
      warning: action !== undefined ? "alertdialog" : "alert",
      error: action !== undefined ? "alertdialog" : "alert",
    }[variant]

    return (
      <Box as="div" ref={ref} className={notification} role={role}>
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            gap: "base",
          }}
        >
          <Icon variant={variant} />
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "2xsmall",
            }}
          >
            <Label as="p" size="small" weight="plus" color="primary">
              {title}
            </Label>
            <Label as="p" size="small" color="secondary">
              {message}
            </Label>
          </Box>
        </Box>
      </Box>
    )
  },
)

Notification.displayName = "Notification"
