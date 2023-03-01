import { createCli } from "./index"

createCli()
  .then((cli) => cli.parseAsync(process.argv))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
