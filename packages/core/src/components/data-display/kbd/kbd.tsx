import * as React from "react";
import { Box } from "../../layout/box";
import { kbd, KbdVariants } from "./styles.css";

// Children should accept valid key names
type KbdProps = {
  children: React.KeyboardEvent["key"];
} & KbdVariants;

export const Kbd = ({ children, variant }: KbdProps) => {
  let key = children;

  // check if user is on a Mac
  const os = React.useMemo(() => {
    if (window === undefined) {
      return "win";
    }

    const userAgent = window.navigator.userAgent.toLowerCase();
    return /mac/i.test(userAgent) ? "mac" : "win";
  }, []);

  // If the key has a symbol we should render it instead of the key name and consider the OS of the user
  switch (children) {
    case "Enter":
      key = os === "mac" ? "⏎" : "Enter";
      break;
    case "Tab":
      key = os === "mac" ? "⇥" : "⇆";
      break;
    case "Shift":
      key = os === "mac" ? "⇧" : "Shift";
      break;
    case "Control":
      key = os === "mac" ? "⌃" : "Ctrl";
      break;
    case "Alt":
      key = os === "mac" ? "⌥" : "⎇";
      break;
    case "Meta":
      key = os === "mac" ? "⌘" : "⊞";
      break;
    case "ArrowUp":
      key = "↑";
      break;
    case "ArrowDown":
      key = "↓";
      break;
    case "ArrowLeft":
      key = "←";
      break;
    case "ArrowRight":
      key = "→";
      break;
    case "Backspace":
      key = os === "mac" ? "⌫" : "Backspace";
      break;
    case "Delete":
      key = os === "mac" ? "⌦" : "Del";
      break;
    case "Escape":
      key = os === "mac" ? "esc" : "Esc";
      break;
    default:
      break;
  }

  return (
    <Box as="span" className={kbd({ variant })}>
      {key}
    </Box>
  );
};
