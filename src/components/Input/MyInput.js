import React from "react";
import styles from "./myInput.module.css";

const MyInput = (props) => {
  return (
    <div>
      <input 
      className={styles.myInput}
      placeholder = "Please enter a number"
      onChange={props.onChange} />
    </div>
  );
};

export default MyInput;
