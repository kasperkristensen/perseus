const Root = require("@perseus/icons");
const fs = require("fs").promises;
const os = require("os");
const path = require("path");
const prettier = require("prettier");

const main = async () => {
  const imports = Object.keys(Root).map((key) => key);
  const to = path.resolve(__dirname, "../src/components/overview.tsx");

  const content = `
    import { ${imports.join(", ")} } from "@perseus/icons"

    const Overview = () => {
        return (
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridGap: "1rem",
            }}>
                ${imports
                  .map(
                    (icon) =>
                      `<div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "2rem",
                        height: "2rem",
                    }}>
                            <${icon} />
                    </div>`
                  )
                  .join(os.EOL)}
            </div>
        )
    }

    export default Overview;
    `;

  const formatted = prettier.format(content, {
    parser: "typescript",
    semi: false,
  });

  await fs.writeFile(to, formatted, "utf8");
};

main();
