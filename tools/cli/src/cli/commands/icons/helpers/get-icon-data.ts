export function getComponentName(name: string) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(
      /\s+(.)(\w*)/g,
      (_$1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(/\w/, (s) => s.toUpperCase())
}

function getFileName(name: string) {
  return `${name.replace("$", "").replace("/", "-")}.tsx`
}

export function getIconData(name: string) {
  const componentName = getComponentName(name)
  const fileName = getFileName(name)
  const fixedColor = fileName.includes("-color")

  return {
    componentName,
    fileName,
    fixedColor,
  }
}
