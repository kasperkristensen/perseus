import { PropsWithChildren } from "react";
import { styles } from "./TestButton.css";

export const TestButton = ({ children }: PropsWithChildren<{}>) => {
  const onClick = (event: React.MouseEvent) => {
    console.log("HELLO WORLD");
  };

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};
