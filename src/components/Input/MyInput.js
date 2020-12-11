import React from "react";
import styles from "./myInput.module.css";

const MyInput = (props) => {
  return (
    <div>
      <input 
      type="text"
      disabled = "disabled"
      className={styles.myInput}
      placeholder = "Please enter a number"
      onChange={props.onChange}
      value={props.value} />
    </div>
  );
};

export default MyInput;
