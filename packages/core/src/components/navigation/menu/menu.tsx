/*eslint import/namespace: [2, { allowComputed: true }]*/
import * as Icons from "@medusa-ui/icons"
import { CheckMini } from "@medusa-ui/icons"
import * as Primitive from "@radix-ui/react-dropdown-menu"
import clsx from "clsx"
import * as React from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { Kbd } from "../../data-display"
import { Box } from "../../layout"
import { Label } from "../../typography"
import { iconContainer, item, menu, separator, trigger } from "./styles.css"

const Root = Primitive.Root
Root.displayName = "Menu.Root"

type MenuTriggerProps = React.ComponentPropsWithoutRef<"button">

const Trigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const combinedClasses = clsx(trigger, className)

    return (
      <Primitive.Trigger asChild ref={forwardedRef} {...props}>
        <Box as="button" type="button" className={combinedClasses}>
          {children}
        </Box>
      </Primitive.Trigger>
    )
  },
)
Trigger.displayName = "Menu.Trigger"

const Content = React.forwardRef<
  HTMLDivElement,
  Omit<Primitive.DropdownMenuContentProps, "asChild">
>(
  (
    { children, className, side = "bottom", sideOffset = 8, ...rest },
    forwardedRef,
  ) => {
    const combinedClasses = clsx(
      menu({
        variant: "default",
      }),
      className,
    )

    return (
      <Primitive.Portal>
        <Primitive.Content
          ref={forwardedRef}
          side={side}
          sideOffset={sideOffset}
          asChild
          {...rest}
        >
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
            }}
            className={combinedClasses}
          >
            {children}
          </Box>
        </Primitive.Content>
      </Primitive.Portal>
    )
  },
)

Content.displayName = "Menu.Content"

type IconProps = {
  /**
   * The icon to display in the menu item.
   * It can be a string that matches the name of an icon from the `@medusa-ui/icons` package,
   * or a React element.
   * @default undefined
   */
  icon?: keyof typeof Icons | React.ReactElement
}

const Icon = ({ icon }: IconProps) => {
  if (typeof icon === "string" && Icons[icon as keyof typeof Icons]) {
    const Component = Icons[icon as keyof typeof Icons]
    return (
      <Box className={iconContainer}>
        <Component />
      </Box>
    )
  }

  if (!React.isValidElement(icon)) {
    return null
  }

  return <Box className={iconContainer}>{icon}</Box>
}

type KeyboardShortcutProps = {
  keys: string[]
  onTrigger?: (event: Event) => void
}

const KeyboardShortcut = ({ keys, onTrigger }: KeyboardShortcutProps) => {
  const handleTrigger = React.useCallback(() => {
    if (onTrigger) {
      onTrigger(new Event("click"))
    }
  }, [onTrigger])

  useHotkeys(keys.join("+"), handleTrigger)

  return (
    <Box
      css={{
        display: "flex",
        gap: "2xsmall",
      }}
    >
      {keys.map((key, index) => {
        return (
          <React.Fragment key={index}>
            <Kbd variant="ghost">{key}</Kbd>
          </React.Fragment>
        )
      })}
    </Box>
  )
}

type ItemProps = Omit<Primitive.MenuItemProps, "children"> &
  IconProps & {
    /**
     * The label of the menu item.
     */
    label: string
    /**
     * The keyboard shortcut to trigger the menu item.
     * Accepts an array of strings that will be displayed as a list of keys.
     * @default undefined
     */
    keyboardShortcut?: string[]
  }

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, label, icon, keyboardShortcut, ...props }, forwardedRef) => {
    const combinedClasses = clsx(item, className)

    return (
      <Primitive.Item ref={forwardedRef} {...props} asChild>
        <Box
          as="button"
          css={{
            display: "flex",
            flexDirection: "row",
            gap: "xsmall",
          }}
          className={combinedClasses}
        >
          <Icon icon={icon} />
          <Box
            css={{
              display: "flex",
              alignItems: "center",
              justifyItems: "start",
              flex: 1,
            }}
          >
            <Label as="label" size="small">
              {label}
            </Label>
          </Box>
          {keyboardShortcut && (
            <KeyboardShortcut
              keys={keyboardShortcut}
              onTrigger={props.onSelect}
            />
          )}
        </Box>
      </Primitive.Item>
    )
  },
)

Item.displayName = "Menu.Item"

type ExternalLinkProps = ItemProps & {
  href: string
  target?: string
  rel?: string
}

/**
 * An external link is a menu item that opens a link in a new tab.
 * It should only be used for external links, for internal links use the `Menu.Item` component.
 */
const ExternalLink = React.forwardRef<HTMLDivElement, ExternalLinkProps>(
  (
    {
      className,
      label,
      icon,
      href,
      target = "_blank",
      rel = "norefferrer noopener",
      ...props
    },
    forwardedRef,
  ) => {
    const combinedClasses = clsx(item, className)
    return (
      <Primitive.Item ref={forwardedRef} {...props} asChild>
        <Box
          as="a"
          href={href}
          target={target}
          rel={rel}
          css={{
            display: "flex",
            alignItems: "center",
            gap: "xsmall",
          }}
          className={combinedClasses}
        >
          <Icon icon={icon} />
          <Box
            css={{
              flex: 1,
            }}
          >
            <Label as="label" size="small">
              {label}
            </Label>
          </Box>
          <Icon icon="ArrowUpRightMini" />
        </Box>
      </Primitive.Item>
    )
  },
)

ExternalLink.displayName = "Menu.ExternalLink"

const Separator = React.forwardRef<
  HTMLDivElement,
  Primitive.MenuSeparatorProps
>(({ className, ...props }, forwardedRef) => {
  const combinedClasses = clsx(separator, className)

  return (
    <Primitive.Separator
      ref={forwardedRef}
      {...props}
      className={combinedClasses}
      asChild
    >
      <Box role="separator" />
    </Primitive.Separator>
  )
})

Separator.displayName = "Menu.Separator"

const Sub = Primitive.Sub
Sub.displayName = "Menu.Sub"

type SubTriggerProps = Omit<
  Primitive.DropdownMenuSubTriggerProps,
  "children" | "asChild"
> &
  IconProps & {
    label: string
  }

const SubTrigger = React.forwardRef<HTMLDivElement, SubTriggerProps>(
  ({ className, icon, label, ...props }, forwardedRef) => {
    const combinedClasses = clsx(item, className)

    return (
      <Primitive.SubTrigger
        ref={forwardedRef}
        {...props}
        className={combinedClasses}
        asChild
      >
        <Box
          css={{
            display: "flex",
            gap: "xsmall",
          }}
        >
          <Icon icon={icon} />
          <Box
            css={{
              alignItems: "center",
              justifyItems: "start",
              flex: 1,
            }}
          >
            <Label as="label" size="small">
              {label}
            </Label>
          </Box>
          <Icon icon={"ChevronRightMini"} />
        </Box>
      </Primitive.SubTrigger>
    )
  },
)

SubTrigger.displayName = "Menu.SubTrigger"

const SubContent = React.forwardRef<
  HTMLDivElement,
  Omit<Primitive.DropdownMenuSubContentProps, "asChild">
>(
  (
    {
      children,
      className,
      alignOffset = -8,
      sideOffset = 2,
      hideWhenDetached = true,
      ...rest
    },
    forwardedRef,
  ) => {
    const combinedClasses = clsx(
      menu({
        variant: "sub",
      }),
      className,
    )

    return (
      <Primitive.Portal>
        <Primitive.SubContent
          ref={forwardedRef}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          hideWhenDetached={hideWhenDetached}
          asChild
          {...rest}
        >
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
            }}
            className={combinedClasses}
          >
            {children}
          </Box>
        </Primitive.SubContent>
      </Primitive.Portal>
    )
  },
)

SubContent.displayName = "Menu.SubContent"

type OptionGroupProps = Omit<Primitive.MenuRadioGroupProps, "asChild">

const OptionGroup = React.forwardRef<HTMLDivElement, OptionGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <Primitive.RadioGroup asChild ref={ref} {...props}>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "xsmall",
          }}
        >
          {children}
        </Box>
      </Primitive.RadioGroup>
    )
  },
)

OptionGroup.displayName = "Menu.OptionGroup"

type OptionItemsProps = Omit<Primitive.MenuRadioItemProps, "children"> & {
  label: string
}

const OptionItem = React.forwardRef<HTMLDivElement, OptionItemsProps>(
  ({ label, className, ...rest }, ref) => {
    const combinedClasses = clsx(item, className)

    return (
      <Primitive.RadioItem ref={ref} asChild {...rest}>
        <Box
          css={{
            display: "flex",
            gap: "xsmall",
          }}
          className={combinedClasses}
        >
          <Box className={iconContainer}>
            <Primitive.ItemIndicator>
              <CheckMini />
            </Primitive.ItemIndicator>
          </Box>
          <Label as="label" size="small">
            {label}
          </Label>
        </Box>
      </Primitive.RadioItem>
    )
  },
)

OptionItem.displayName = "Menu.OptionItem"

export const Menu = {
  Root,
  Trigger,
  Content,
  Separator,
  Item,
  ExternalLink,
  Sub,
  SubTrigger,
  SubContent,
  OptionGroup,
  OptionItem,
}
