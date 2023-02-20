import { MEDIA_PREFERS_COLOR_SCHEME } from "../../constants";

export const resolveSystemPreference = (
  event?: MediaQueryList | MediaQueryListEvent
) => {
  if (!event) {
    event = window.matchMedia(MEDIA_PREFERS_COLOR_SCHEME);
  }

  return event.matches ? "dark" : "light";
};
