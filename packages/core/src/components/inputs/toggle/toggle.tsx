import * as Primitive from "@radix-ui/react-switch"
import * as React from "react"
import { Box } from "../../layout"
import { thumb, track } from "./styles.css"

type Props = Omit<React.ComponentProps<typeof Primitive.Root>, "asChild">

export const Toggle = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    return (
      <Primitive.Root ref={ref} asChild {...props}>
        <Box
          as="button"
          type="button"
          className={track}
          css={{
            borderRadius: "circle",
          }}
        >
          <Primitive.Thumb className={thumb} asChild>
            <Box
              className={thumb}
              css={{
                borderRadius: "circle",
              }}
            />
          </Primitive.Thumb>
        </Box>
      </Primitive.Root>
    )
  },
)

Toggle.displayName = "Toggle"
