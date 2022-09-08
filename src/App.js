import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart = () => {
    setCartIsShown(true);
  };
  const closeCart = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={closeCart}></Cart>}
      <Header onShowCart={showCart}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
