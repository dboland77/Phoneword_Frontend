import React from "react";
import styles from "./Display.module.css";

const Display = (props) => {
  return <div className={styles.content}>{props.children}</div>;
};

export default Display;
