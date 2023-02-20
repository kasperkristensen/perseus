import { PropsWithChildren } from "react";
import * as styles from "./test.css";

export const TestButton = ({ children }: PropsWithChildren<{}>) => {
  const onClick = (event: React.MouseEvent) => {
    console.log("HELLO WORLD");
  };

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
