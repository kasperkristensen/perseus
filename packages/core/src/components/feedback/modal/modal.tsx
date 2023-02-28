import { XMark } from "@medusa-ui/icons";
import * as Primitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import * as React from "react";
import { Stack } from "../../layout";
import { StackProps } from "../../layout/stack/stack";
import { Heading } from "../../typography/heading/heading";
import {
  content,
  footer,
  header,
  headerAction,
  modal,
  overlay,
} from "./styles.css";

export interface ModalProps
  extends React.ComponentProps<typeof Primitive.Root> {
  close?: () => void;
}

interface ModalContextValue extends ModalProps {
  close: () => void;
}

const ModalContent = React.createContext<ModalContextValue | null>(null);

const Root = (props: ModalProps) => {
  const { open, close, children, ...rest } = props;

  const [state, setState] = React.useState(open ?? false);

  React.useEffect(() => {
    setState(open ?? false);
  }, [open]);

  const value = React.useMemo(() => {
    const handleClose = () => {
      if (close) {
        close();
        return;
      }

      setState(false);
    };

    return {
      ...props,
      open: state,
      close: handleClose,
    };
  }, [close, props, state]);

  return (
    <Primitive.Root open={state} {...rest}>
      <ModalContent.Provider value={value}>
        <Primitive.Portal>
          <Primitive.Overlay onClick={close} className={overlay} />
          <Primitive.Content asChild>
            <Stack direction="column" as="div" className={modal()}>
              {children}
            </Stack>
          </Primitive.Content>
        </Primitive.Portal>
      </ModalContent.Provider>
    </Primitive.Root>
  );
};

Root.displayName = "Modal.Root";

type ModalContentProps = Omit<StackProps, "as">;

const Content = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const combinedClasses = clsx(content, className);

    return (
      <Stack
        as="div"
        ref={forwardedRef}
        className={combinedClasses}
        flex={1}
        {...rest}
      >
        {children}
      </Stack>
    );
  }
);

Content.displayName = "Modal.Content";

type ModalHeaderProps = React.ComponentPropsWithoutRef<"div">;

const Header = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const combinedClasses = clsx(header, className);
    const { close } = useModal();

    return (
      <Stack
        as="div"
        direction="row"
        justifyContent="between"
        alignItems="center"
        ref={forwardedRef}
        className={combinedClasses}
        {...rest}
      >
        <Primitive.Title asChild>
          <Heading as="h1">{children}</Heading>
        </Primitive.Title>
        <Stack>
          <Primitive.Close asChild>
            <HeaderAction onClick={close}>
              <XMark />
            </HeaderAction>
          </Primitive.Close>
        </Stack>
      </Stack>
    );
  }
);

Header.displayName = "Modal.Header";

const HeaderAction = ({
  children,
  onClick,
}: React.PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <Stack as="button" type="button" onClick={onClick} className={headerAction}>
      {children}
    </Stack>
  );
};

type ModalFooterProps = Omit<StackProps, "as">;

const Footer = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const combinedClasses = clsx(footer, className);

    return (
      <Stack as="div" ref={forwardedRef} className={combinedClasses} {...rest}>
        {children}
      </Stack>
    );
  }
);

Footer.displayName = "Modal.Footer";

const useModal = () => {
  const context = React.useContext(ModalContent);

  if (context === null) {
    throw new Error("Modal must be used within a Modal.Root");
  }

  return context;
};

export const Modal = {
  Root,
  Header,
  Content,
  Footer,
};
