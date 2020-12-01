import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ children }) {
  return <nav className={styles.Navbar}>{children}</nav>;
}
