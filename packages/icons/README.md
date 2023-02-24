# @medusa-ui/icons

Icons used in the Medusa UI design system.

---

## Installation

```sh
yarn add @medusa-ui/icons
```

## Usage

```tsx
import { Adjustment } from "@medusa-ui/icons";

const App = () => (
  <div>
    <Adjustment />
  </div>
);
```

## Development

### Adding a new icon

The icons are generated from our [Figma](https://www.figma.com/file/TW0kRpjhpsi3sR1u4a4wF8/Design-System-v2.1.0?node-id=573%3A816&t=1SkDofJ4QdnsoObE-4) file. To add a new icon, you need to:

1. Add the icon to the Figma file, this should be done by a member of the design team
2. Run the `yarn generate` command to generate the React components

### Updating an existing icon

If you need to update an existing icon, you need to:

1. Update the icon in the Figma file, this should be done by a member of the design team
2. Run the `yarn generate` command to generate the React components

### Setting up your environment

In order to generate icons using the CLI, you need to have a valid Figma API token. You can get one by following the instructions [here](https://www.figma.com/developers/api#access-tokens). Once you have the token, you need to set it as an environment variable in your `.env` file:

```env
# Your secret Figma API token.
# See https://www.figma.com/developers/docs#authentication for more information.
FIGMA_ACCESS_TOKEN=<YOUR_API_TOKEN>
```

## Contributing

All icon components are automatically generated from the Figma file. If you need to add or update an icon, please follow the instructions in the [Development](#development) section. If you are not a member of the Medusa team, and aren't able to make changes in Figma, then please open an issue and we will attend to it. We do not accept pull requests for icon changes, with direct changes to the icon components.
