import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandeler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const convertEnteredAmount = +enteredAmount; //typecast the enteredAmount from string to integer

    if (
      enteredAmount.trim().length === 0 ||
      convertEnteredAmount < 1 ||
      convertEnteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(convertEnteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandeler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      ></Input>
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
