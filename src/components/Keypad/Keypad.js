import styles from "./Keypad.module.css";
import KeyButton from "./KeyButton/KeyButton";

const Keypad = () => {
  return (
    <div className={styles.keypad}>
      <KeyButton num={1} disabled="disabled" />
      <KeyButton num={2} text="abc" />
      <KeyButton num={3} text="def" />
      <KeyButton num={4} text="ghi" />
      <KeyButton num={5} text="jkl" />
      <KeyButton num={6} text="mno" />
      <KeyButton num={7} text="pqrs" />
      <KeyButton num={8} text="tuv" />
      <KeyButton num={9} text="wxyz" />
      <KeyButton num={"star"} text="* #" />
      <KeyButton num={0} disabled="disabled" />
      <KeyButton num={"space"} text="space" />
    </div>
  );
};

export default Keypad;
