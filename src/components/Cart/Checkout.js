import useInput from "../hooks/use-input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    enteredInput: nameInput,
    isTouched,
    inputChangeHandler: nameChangeHandler,
    blurInputHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form is submitted");
    nameReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={
          nameHasError
            ? `${classes.control} ${classes.invalid}`
            : `${classes.control}`
        }
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {nameHasError && <p>Name is wrong!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="name">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="name">Postal</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="name">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
