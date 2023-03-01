import * as ReactDOM from "react-dom/client"
import { Prompt, PromptProps } from "../components"

export const usePrompt = () => {
  const prompt = ({
    onConfirm,
    onCancel,
    ...rest
  }: PromptProps): Promise<boolean> => {
    const slot = ReactDOM.createRoot(document.createElement("div"))

    const render = (props: PromptProps) => {
      slot.render(<Prompt {...props} />)
    }

    const unmount = () => {
      slot.unmount()
    }

    return new Promise((resolve) => {
      const handleConfirm = () => {
        resolve(true)
        unmount()
      }

      const handleCancel = () => {
        resolve(false)
        unmount()
      }

      render({
        ...rest,
        onConfirm: handleConfirm,
        onCancel: handleCancel,
      })
    })
  }

  return {
    prompt,
  }
}
