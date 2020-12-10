import React, { Fragment } from "react";
import styles from "./Keypad.module.css";

const Keypad = () => {
  return (
    <Fragment>
      <div className={styles.keypad}>
        <button
          className={`${styles.key} ${styles.key1}`}
          disabled="disabled"
          value="1"
        >
          1
        </button>
        <button className={`${styles.key} ${styles.key2}`} value="2">
          2 <small>abc</small>
        </button>
        <button className={`${styles.key} ${styles.key3}`} value="3">
          3 <small>def</small>
        </button>
        <button className={`${styles.key} ${styles.key4}`} value="4">
          4 <small>ghi</small>
        </button>
        <button className={`${styles.key} ${styles.key5}`} value="5">
          5 <small>jkl</small>
        </button>
        <button className={`${styles.key} ${styles.key6}`} value="6">
          6 <small>mno</small>
        </button>
        <button className={`${styles.key} ${styles.key7}`} value="7">
          7 <small>pqrs</small>
        </button>
        <button className={`${styles.key} ${styles.key8}`} value="8">
          8 <small>tuv</small>
        </button>
        <button className={`${styles.key} ${styles.key9}`} value="9">
          9 <small>wxyz</small>
        </button>
        <button
          className={`${styles.key} ${styles.keystar}`}
          disabled="disabled"
          value="symbol"
        >
          * #
        </button>
        <button
          className={`${styles.key} ${styles.key0}`}
          disabled="disabled"
          value="0"
        >
          0
        </button>
        <button className={`${styles.key} ${styles.keyspace}`} value="space">
          <small>space</small>
        </button>
      </div>
    </Fragment>
  );
};

export default Keypad;
