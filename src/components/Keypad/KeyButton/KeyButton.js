import React from "react";
import styles from "./KeyButton.module.css";

const KeyButton = (props) => {
  // Assign classname dynamically by button number
  const nKey = "key" + props.num;
  let temp = `${styles.key} ${styles[nKey]}`;

  //Only display the numeric values
  let bShow = !isNaN(parseInt(props.num));

  return (
    <button className={temp} disabled={props.disabled} value={props.value}>
      {bShow ? <span>{props.num}</span> : ""}
      <br></br>
      <small>{props.text}</small>
    </button>
  );
};

export default KeyButton;
