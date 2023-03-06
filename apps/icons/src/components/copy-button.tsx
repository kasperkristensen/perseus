import { PropsWithChildren } from "react"

const CopyButton = ({ children }: PropsWithChildren<{}>) => {
  const onClick = (event: React.MouseEvent) => {
    const svg = event.currentTarget.querySelector("svg")
    const code = svg && svg.parentElement ? svg.parentElement.innerHTML : null

    // Copy code to clipboard via a hidden textarea element
    if (code) {
      // Temporary shim until a proper focus-visible handler is added
      if (document.activeElement instanceof HTMLButtonElement) {
        document.activeElement.blur()
      }

      console.log(code)
    }
  }

  return (
    <button
      className="bg-buttons-secondary rounded-lg text-text-primary w-12 h-12 flex items-center justify-center hover:bg-buttons-secondary-hover active:bg-buttons-secondary-pressed"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CopyButton
