import { useState } from "react";

const useInput = (validateInputFunction) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInputFunction(enteredInput);
  const hasError = isTouched && !inputIsValid;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
    console.log(event.target.value);
  };

  const blurInputHandler = () => {
    setIsTouched(true);
    console.log("blur");
  };

  const reset = () => {
    setEnteredInput("");
    setIsTouched(false);
    console.log("reset is done");
  };

  return {
    enteredInput,
    inputIsValid,
    inputChangeHandler,
    blurInputHandler,
    hasError,
    reset,
  };
};

export default useInput;
