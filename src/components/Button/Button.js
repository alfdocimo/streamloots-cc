import React from "react";
import styles from "./Button.module.css";

export default function Input(props) {
  const { children, ...restProps } = props;
  return (
    <button className={styles.Button} {...restProps}>
      {children}
    </button>
  );
}
