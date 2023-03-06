import * as Primitive from "@radix-ui/react-avatar"
import * as React from "react"
import { Box } from "../../layout"
import { Label } from "../../typography"
import { avatar, AvatarVariants, inner } from "./styles.css"

export type AvatarProps = Primitive.AvatarProps & {
  src?: string
  alt?: string
  fallback?: React.ReactNode
} & AvatarVariants

const AvatarFallback = ({ children }: React.PropsWithChildren) => {
  const Component =
    typeof children === "string" ? (
      <Label size="small" weight="plus" color="secondary" />
    ) : (
      <Box
        css={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      />
    )

  return React.cloneElement(Component, {}, children)
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ children, src, alt, fallback, size, ...props }, ref) => {
    return (
      <Primitive.Root asChild {...props}>
        <Box as="div" ref={ref} className={avatar({ size })}>
          <Box className={inner}>
            <Primitive.Image src={src} alt={alt} />
            <Primitive.Fallback asChild>
              <AvatarFallback>{fallback}</AvatarFallback>
            </Primitive.Fallback>
          </Box>
        </Box>
      </Primitive.Root>
    )
  },
)

Avatar.displayName = "Avatar"
