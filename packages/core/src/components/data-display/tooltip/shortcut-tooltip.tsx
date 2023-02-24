import { Stack } from "../../layout/stack";
import { Base, BaseProps } from "./base";

type Props = BaseProps & {
  description: string;
  keyboardShortcut: string;
};

export const ShortcutTooltip = ({
  description,
  keyboardShortcut,
  children,
}: Props) => {
  return (
    <Base
      usage="shortcut"
      content={renderContent({ description, keyboardShortcut })}
    >
      {children}
    </Base>
  );
};

const renderContent = ({
  description,
  keyboardShortcut,
}: Pick<Props, "description" | "keyboardShortcut">) => {
  return <Stack></Stack>;
};
