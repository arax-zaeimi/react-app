import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
