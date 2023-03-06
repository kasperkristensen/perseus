import { Box, IconButton, Label, Stack, Tooltip } from "@medusa-ui/core"
import { BarsThree } from "@medusa-ui/icons"
import { SidebarMenu } from "../sidebar-menu"
import { sidebar } from "./styles.css"

export const Sidebar = () => {
  return (
    <Stack direction="column" className={sidebar}>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "base",
        }}
      >
        <Box
          css={{
            alignItems: "center",
            justifyContent: "between",
            display: "flex",
          }}
        >
          <SidebarMenu />
          <Tooltip side="bottom" content="Close sidebar">
            <IconButton variant="transparent">
              <BarsThree />
            </IconButton>
          </Tooltip>
        </Box>
        <Stack direction="column">
          <Label size="xsmall" weight="plus" color="secondary">
            Store
          </Label>
          <Label size="small" weight="plus">
            Medusa Merch
          </Label>
        </Stack>
      </Box>
      <Stack></Stack>
    </Stack>
  )
}
