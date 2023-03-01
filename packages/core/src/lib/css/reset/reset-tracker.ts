import dedent from "dedent"

let resetImported = false

export const markResetImported = () => {
  resetImported = true
}

export const isResetImported = () => {
  if (!resetImported) {
    throw new Error(dedent`
      Medusa UI components imported before reset.
      
      Make sure to import the Medusa UI reset module before importing any components.
      This ensures the CSS reset does not override the component styles.
      
      e.g.
      
      import '@medusa-ui/core/reset'; // <-- Must be first
      import { ThemeProvider, Box } from '@medusa-ui/core';
    `)
  }
}
