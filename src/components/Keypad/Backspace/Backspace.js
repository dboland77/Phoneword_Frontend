import React from "react";
import styles from "./Backspace.module.css";

const Backspace = (props) => {
  return (
    <button
      className={styles.backspace}
      disabled={props.disabled}
      value={props.value}
      onClick={props.onclick}
    >&#8592;</button>
  );
};

export default Backspace;
