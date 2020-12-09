import React from "react";

const MyInput = (props) => {
  return (
    <div>
    <label>Input: {props.value} </label>
      <input 
      placeholder = "Please type"
      onChange={props.onChange} />
    </div>
  );
};

export default MyInput;
