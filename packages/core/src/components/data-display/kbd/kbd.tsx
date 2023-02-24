import * as React from "react";
import { Box } from "../../layout/box";
import * as styles from "./styles.css";

type Props = React.PropsWithChildren<{}>;

export const Kbd = ({ children }: Props) => {
  return (
    <Box as="span" className={styles.kbd}>
      {children}
    </Box>
  );
};
