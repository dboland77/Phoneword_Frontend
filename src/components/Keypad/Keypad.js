import styles from "./Keypad.module.css";
import KeyButton from "./KeyButton/KeyButton";
import Backspace from "./Backspace/Backspace";
import { Fragment } from "react";

const Keypad = (props) => {
  return (
    <Fragment>
      <Backspace onclick={props.onbackclick} />
      <div className={styles.keypad}>
        <KeyButton num={1} disabled="disabled" onclick={props.onclick} />
        <KeyButton num={2} text="abc" onclick={props.onclick} />
        <KeyButton num={3} text="def" onclick={props.onclick} />
        <KeyButton num={4} text="ghi" onclick={props.onclick} />
        <KeyButton num={5} text="jkl" onclick={props.onclick} />
        <KeyButton num={6} text="mno" onclick={props.onclick} />
        <KeyButton num={7} text="pqrs" onclick={props.onclick} />
        <KeyButton num={8} text="tuv" onclick={props.onclick} />
        <KeyButton num={9} text="wxyz" onclick={props.onclick} />
        <KeyButton
          num={"star"}
          disabled="disabled"
          text="* #"
          onclick={props.onclick}
        />
        <KeyButton num={0} disabled="disabled" onclick={props.onclick} />
        <KeyButton
          num={"space"}
          disabled="disabled"
          text="space"
          onclick={props.onclick}
        />
      </div>
    </Fragment>
  );
};

export default Keypad;
