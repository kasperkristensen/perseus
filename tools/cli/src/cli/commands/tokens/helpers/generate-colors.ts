import { RectangleNode, Style } from "@medusa-ui/figma-api"
import * as fse from "fs-extra"
import * as os from "os"
import { resolve } from "path"
import { FIGMA_FILE_ID } from "../../../../constants"
import { camelCase, figma } from "../../../util"
import { convertColorToRGBA } from "../../../util/convert-color-to-rgba"
import { reporter } from "../../../util/reporter"

const VALID_COLOR_THEMES = ["light", "dark"]

export const generateColors = async (fills: Style[], basePath: string) => {
  const path = resolve(basePath, "colors")

  const nodes = await figma
    .getFileNodes(FIGMA_FILE_ID, {
      ids: fills.map((fill) => fill.node_id),
    })
    .then(({ data }) => {
      return data.nodes
    })
    .catch((err) => {
      reporter.prettyError(err)
      process.exit(1)
    })

  const colors: Record<string, Record<string, Record<string, string>>> = {}

  Object.values(nodes).forEach((value) => {
    const node = value.document as RectangleNode

    const [theme, domain, identifier] = node.name.toLowerCase().split("/")
    const { color, opacity } = node.fills[0]!

    if (!color) {
      reporter.warn(`No color found for ${node.name}`)
      return
    }

    if (theme && domain && identifier && VALID_COLOR_THEMES.includes(theme)) {
      if (!colors[theme]) {
        colors[theme] = {}
      }

      if (!colors[theme]![domain]) {
        colors[theme]![domain] = {}
      }

      const rgba = convertColorToRGBA(color, opacity)
      const cleanIdentifier = identifier.replace(/\$/g, "")

      colors[theme]![domain]![cleanIdentifier] = rgba
    } else {
      reporter.warn(
        `The color style "${node.name}" is not in the correct format. It should be in the format of "theme/domain/identifier". The passed value was "${node.name}". Skipping`,
      )
    }
  })

  const promises = Object.entries(colors).map(async ([theme, domains]) => {
    const themePath = resolve(path, theme)
    const suffix =
      theme === "light" ? "" : `${theme[0]?.toUpperCase()}${theme.slice(1)}`

    let dirExists = false

    try {
      await fse.ensureDir(themePath)
      dirExists = true
    } catch (_) {
      dirExists = false
    }

    if (!dirExists) {
      await fse.mkdir(themePath)
    }

    const subpromises = Object.entries(domains).map(
      async ([domain, identifiers]) => {
        const fileName = `${domain}.ts`
        const objectName = `${camelCase(domain)}${suffix}`

        let fileContent =
          `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}export const ${objectName} = {` +
          os.EOL

        Object.entries(identifiers).forEach(([identifier, value]) => {
          fileContent += `  ${camelCase(identifier)}: "${value}",` + os.EOL
        })

        fileContent += `};` + os.EOL

        fse.outputFileSync(resolve(themePath, fileName), fileContent)
      },
    )

    await Promise.all(subpromises)

    const files = await fse.readdir(themePath)

    const themeIndexContent = `/**${
      os.EOL
    } * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}${files
      .map((file) => `export * from "./${file.replace(".ts", "")}";`)
      .join(os.EOL)}`

    await fse.outputFile(resolve(themePath, "index.ts"), themeIndexContent)
  })

  await Promise.all(promises)

  const indexContent = `/**${os.EOL} * This file is auto-generated. Do not edit.${os.EOL} */${os.EOL}export * from "./light";${os.EOL}export * from "./dark";${os.EOL}`

  await fse.outputFile(resolve(path, "index.ts"), indexContent)
}
