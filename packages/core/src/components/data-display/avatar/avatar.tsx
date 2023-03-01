import * as Primitive from "@radix-ui/react-avatar"
import * as React from "react"
import { Box, Stack } from "../../layout"
import { Label } from "../../typography"
import { avatar, AvatarVariants, inner } from "./styles.css"

export type AvatarProps = Primitive.AvatarProps & {
  src?: string
  alt?: string
  fallback?: React.ReactNode
} & AvatarVariants

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

const AvatarFallback = ({ children }: React.PropsWithChildren) => {
  const Component =
    typeof children === "string" ? (
      <Label size="small" weight="plus" color="secondary" />
    ) : (
      <Stack alignItems="center" justifyContent="center" />
    )

  return React.cloneElement(Component, {}, children)
}

Avatar.displayName = "Avatar"
