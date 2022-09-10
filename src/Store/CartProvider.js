import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  console.log(state.items);
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    if (existingItemIndex > -1) {
      state.items[existingItemIndex].amount =
        state.items[existingItemIndex].amount + action.item.amount;
      console.log(existingItemIndex);
      updatedItems = state.items.concat(action.item);
      // updatedItems = [...(state.items[existingItemIndex] = changedItem)];
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (item) => {};
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
