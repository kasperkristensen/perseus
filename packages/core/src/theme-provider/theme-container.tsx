import * as React from "react";

const ThemeContainer = (
  props: React.PropsWithChildren<{ className?: string }>
) => {
  return <div {...props} />;
};

export default ThemeContainer;
