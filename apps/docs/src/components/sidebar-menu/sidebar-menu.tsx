import { Avatar, Menu, useTheme } from "@medusa-ui/core"

export const SidebarMenu = () => {
  const { theme, setTheme, themes } = useTheme()

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Avatar fallback="M" />
      </Menu.Trigger>
      <Menu.Content align="start">
        <Menu.Item icon={"User"} label="Account settings" />
        <Menu.Item icon={"QuestionMarkCircle"} label="Help" />
        <Menu.Item icon={"ArrowPath"} label="Changelog" />
        <Menu.ExternalLink
          href="https://docs.medusajs.com"
          icon={"BookOpen"}
          label="Documentation"
        />
        <Menu.Separator />
        <Menu.Sub>
          <Menu.SubTrigger icon={"CircleHalfSolid"} label="Theme" />
          <Menu.SubContent>
            <Menu.OptionGroup onValueChange={setTheme} value={theme}>
              {themes?.map((theme) => (
                <Menu.OptionItem
                  key={theme.identifier}
                  label={theme.displayName}
                  value={theme.identifier}
                />
              ))}
            </Menu.OptionGroup>
          </Menu.SubContent>
        </Menu.Sub>
        <Menu.Separator />
        <Menu.Item
          icon={"ArrowRightOnRectangle"}
          keyboardShortcut={["Alt", "Shift", "Q"]}
          onSelect={() => {
            alert("You logged out!")
          }}
          label="Log out"
        />
      </Menu.Content>
    </Menu.Root>
  )
}
