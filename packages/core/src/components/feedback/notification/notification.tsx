import {
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircle,
  XCircleSolid,
} from "@medusa-ui/icons";
import * as React from "react";
import { Box, Stack } from "../../layout";
import { Label } from "../../typography";
import { icon, notification, NotificationVariants } from "./styles.css";

type Props = {
  title: string;
  description: string;
  action?: () => void;
} & NotificationVariants;

export const Notification = React.forwardRef<HTMLDivElement, Props>(
  ({ variant = "info", title, description, action }, ref) => {
    const role = {
      info: "dialog",
      success: "dialog",
      warning: action !== undefined ? "alertdialog" : "alert",
      error: action !== undefined ? "alertdialog" : "alert",
    }[variant];

    return (
      <Stack
        as="div"
        direction="row"
        ref={ref}
        className={notification}
        role={role}
      >
        <Stack gap="base" direction="row">
          <Icon variant={variant} />
          <Stack direction="column" alignItems="start" gap="2xsmall">
            <Label as="p" size="small" weight="plus" color="primary">
              {title}
            </Label>
            <Label as="p" size="small" color="secondary">
              {description}
            </Label>
          </Stack>
        </Stack>
      </Stack>
    );
  }
);

const Icon = ({ variant = "info" }: {} & NotificationVariants) => {
  const Component = {
    success: CheckCircleSolid,
    info: InformationCircle,
    error: XCircleSolid,
    warning: ExclamationCircleSolid,
  }[variant];

  return (
    <Box as="span" className={icon({ variant })}>
      <Component role="img" />
    </Box>
  );
};

Notification.displayName = "Notification";
