import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useTheme } from "../../theme";

import { Menu } from "./menu";

export default {
  title: "Navigation/Menu",
  component: Menu.Root,
} as ComponentMeta<typeof Menu.Root>;

const Template: ComponentStory<typeof Menu.Root> = (args) => {
  const { theme, themes, setTheme } = useTheme();

  return (
    <Menu.Root>
      <Menu.Trigger>Click me</Menu.Trigger>
      <Menu.Content>
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
            alert("You logged out!");
          }}
          label="Log out"
        />
      </Menu.Content>
    </Menu.Root>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
