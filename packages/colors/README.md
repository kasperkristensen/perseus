# @perseus/colors

Color tokens used in the Perseus Design System.

---

## Installation

```sh
yarn add @perseus/colors
```

## Usage

```tsx
import { backgrounds } from "@perseus/colors";

const App = () => (
  <div style={{ backgroundColor: backgrounds.bgBase }}>Hello World</div>
);
```

## Development

### Adding a new color

The colors are generated from our [Figma](https://www.figma.com/file/TW0kRpjhpsi3sR1u4a4wF8/Design-System-v2.1.0?node-id=573%3A816&t=1SkDofJ4QdnsoObE-4) file. To add a new color, you need to:

1. Add the color to the Figma file, this should be done by a member of the design team
2. Run the `yarn generate` command to generate the tokens

### Updating an existing color

If you need to update an existing color, you need to:

1. Update the color in the Figma file, this should be done by a member of the design team
2. Run the `yarn generate` command to generate the tokens

### Setting up your environment

In order to generate colors using the CLI, you need to have a valid Figma API token. You can get one by following the instructions [here](https://www.figma.com/developers/api#access-tokens). Once you have the token, you need to set it as an environment variable in your `.env` file:

```env
# Your secret Figma API token.
# See https://www.figma.com/developers/docs#authentication for more information.
FIGMA_ACCESS_TOKEN=<YOUR_API_TOKEN>
```

## Contributing

All color tokens are automatically generated from the Figma file. If you need to add or update a color, please follow the instructions in the [Development](#development) section. If you are not a member of the Medusa team, and aren't able to make changes in Figma, then please open an issue and we will attend to it. We do not accept pull requests for icon changes, with direct changes to the color tokens.
