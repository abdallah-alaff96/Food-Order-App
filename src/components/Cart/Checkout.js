import { useState } from "react";
import useInput from "../hooks/use-input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const isEmpty = (value) => value.trim() !== "";
  const isFiveChars = (value) => value.trim().length === 5;

  const {
    enteredInput: nameInput,
    inputIsValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    blurInputHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput(isEmpty);

  const {
    enteredInput: streetInput,
    inputIsValid: streetIsValid,
    inputChangeHandler: streetChangeHandler,
    blurInputHandler: streetBlurHandler,
    hasError: streetHasError,
    reset: streetReset,
  } = useInput(isEmpty);

  const {
    enteredInput: postalInput,
    inputIsValid: postalIsValid,
    inputChangeHandler: postalChangeHandler,
    blurInputHandler: postalBlurHandler,
    hasError: postalHasError,
    reset: postalReset,
  } = useInput(isFiveChars);
  const {
    enteredInput: cityInput,
    inputIsValid: cityIsValid,
    inputChangeHandler: cityChangeHandler,
    blurInputHandler: cityBlurHandler,
    hasError: cityHasError,
    reset: cityReset,
  } = useInput(isEmpty);

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // Submit the form
    console.log("submitted");

    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
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
      <div
        className={
          streetHasError
            ? `${classes.control} ${classes.invalid}`
            : `${classes.control}`
        }
      >
        <label htmlFor="name">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={streetInput}
        />
        {streetHasError && <p>Street is wrong!</p>}
      </div>
      <div
        className={
          postalHasError
            ? `${classes.control} ${classes.invalid}`
            : `${classes.control}`
        }
      >
        <label htmlFor="name">Postal</label>
        <input
          type="text"
          id="postal"
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          value={postalInput}
        />
        {postalHasError && <p>Postal is wrong!</p>}
      </div>
      <div
        className={
          cityHasError
            ? `${classes.control} ${classes.invalid}`
            : `${classes.control}`
        }
      >
        <label htmlFor="name">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={cityInput}
        />
        {cityHasError && <p>City is wrong!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
