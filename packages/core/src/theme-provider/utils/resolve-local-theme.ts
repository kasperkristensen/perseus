import { IS_SERVER } from "../../constants";

export const resolveLocalTheme = (storageKey: string, fallback?: string) => {
  if (IS_SERVER) {
    return undefined;
  }

  let theme: string | undefined;
  try {
    theme = localStorage.getItem(storageKey) || undefined;
  } catch (_error) {
    // ignore
  }

  return theme || fallback;
};
