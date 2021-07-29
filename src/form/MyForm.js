import React, { useState } from "react";
import MyResult from './MyResult';
/*
This component is for the form with the label and the input.
*/
const MyForm = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const valueChangehandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return (
    <div>
      <MyResult insertedName={enteredValue}/>
      <label htmlFor="insertText"> Name: </label>
      <input
        type="text"
        name="insertText"
        onChange={valueChangehandler}
        value={enteredValue}
      />
    </div>
  );
};

export default MyForm;
