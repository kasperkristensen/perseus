import { XMark } from "@medusa-ui/icons"
import * as Primitive from "@radix-ui/react-dialog"
import clsx from "clsx"
import * as React from "react"
import { Box, BoxProps } from "../../layout"
import { Heading } from "../../typography/heading/heading"
import {
  content,
  footer,
  header,
  headerAction,
  modal,
  overlay,
} from "./styles.css"

export interface ModalProps
  extends React.ComponentProps<typeof Primitive.Root> {
  close?: () => void
}

interface ModalContextValue extends ModalProps {
  close: () => void
}

const ModalContent = React.createContext<ModalContextValue | null>(null)

const useModal = () => {
  const context = React.useContext(ModalContent)

  if (context === null) {
    throw new Error("Modal must be used within a Modal.Root")
  }

  return context
}

const Root = (props: ModalProps) => {
  const { open, close, children, ...rest } = props
  const [state, setState] = React.useState(open ?? false)

  React.useEffect(() => {
    setState(open ?? false)
  }, [open])

  const value = React.useMemo(() => {
    const handleClose = () => {
      if (close) {
        close()
        return
      }

      setState(false)
    }

    return {
      ...props,
      open: state,
      close: handleClose,
    }
  }, [close, props, state])

  return (
    <Primitive.Root open={state} {...rest}>
      <ModalContent.Provider value={value}>
        <Primitive.Portal>
          <Primitive.Overlay onClick={close} className={overlay} />
          <Primitive.Content asChild>
            <Box
              css={{
                display: "flex",
                flexDirection: "column",
              }}
              as="div"
              className={modal()}
            >
              {children}
            </Box>
          </Primitive.Content>
        </Primitive.Portal>
      </ModalContent.Provider>
    </Primitive.Root>
  )
}

Root.displayName = "Modal.Root"

type ModalContentProps = Omit<BoxProps, "as">

const Content = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, css, ...rest }, forwardedRef) => {
    const combinedClasses = clsx(content, className)

    return (
      <Box
        as="div"
        ref={forwardedRef}
        css={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          ...css,
        }}
        className={combinedClasses}
        {...rest}
      >
        {children}
      </Box>
    )
  },
)

Content.displayName = "Modal.Content"

const HeaderAction = ({
  children,
  onClick,
}: React.PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <Box as="button" type="button" onClick={onClick} className={headerAction}>
      {children}
    </Box>
  )
}

type ModalHeaderProps = Omit<BoxProps, "as">

const Header = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, css, ...rest }, forwardedRef) => {
    const combinedClasses = clsx(header, className)
    const { close } = useModal()

    return (
      <Box
        as="div"
        css={{
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
          ...css,
        }}
        ref={forwardedRef}
        className={combinedClasses}
        {...rest}
      >
        <Primitive.Title asChild>
          <Heading as="h1">{children}</Heading>
        </Primitive.Title>
        <Box>
          <Primitive.Close asChild>
            <HeaderAction onClick={close}>
              <XMark />
            </HeaderAction>
          </Primitive.Close>
        </Box>
      </Box>
    )
  },
)

Header.displayName = "Modal.Header"

type ModalFooterProps = Omit<BoxProps, "as">

const Footer = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, css, ...rest }, forwardedRef) => {
    const combinedClasses = clsx(footer, className)

    return (
      <Box
        as="div"
        css={css}
        ref={forwardedRef}
        className={combinedClasses}
        {...rest}
      >
        {children}
      </Box>
    )
  },
)

Footer.displayName = "Modal.Footer"

export const Modal = {
  Root,
  Header,
  Content,
  Footer,
}
