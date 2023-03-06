import { IconButton, Label, Stack, Tooltip } from "@medusa-ui/core"
import { BarsThree } from "@medusa-ui/icons"
import { SidebarMenu } from "../sidebar-menu"
import { sidebar } from "./styles.css"

export const Sidebar = () => {
  return (
    <Stack direction="column" className={sidebar}>
      <Stack direction="column" gap="base">
        <Stack alignItems="center" justifyContent="between">
          <SidebarMenu />
          <Tooltip side="bottom" content="Close sidebar">
            <IconButton variant="transparent">
              <BarsThree />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction="column">
          <Label size="xsmall" weight="plus" color="secondary">
            Store
          </Label>
          <Label size="small" weight="plus">
            Medusa Merch
          </Label>
        </Stack>
      </Stack>
      <Stack></Stack>
    </Stack>
  )
}
