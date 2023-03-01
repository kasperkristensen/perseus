import { markResetImported } from "./reset-tracker"

// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV === "development") {
  markResetImported()
}

// Ensure reset and atoms are the lowest specificity
// import '../atoms/atoms';
