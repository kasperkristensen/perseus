import * as React from "react"

const ThemeContainer = ({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={className ?? "no_theme"} id="theme_container">
      {children}
    </div>
  )
}

export default ThemeContainer
