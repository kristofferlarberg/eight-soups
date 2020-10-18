import CartContext from "./context";
import CartItem from "./CartItem";

import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../misc/Button";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  return (
    <>
      <CartItem />
      <div>Total: {cartTotal}</div>

      <Button text="Ta bort alla" type="submit" onClick={() => setCart([])}>
        Ta bort alla
      </Button>
    </>
  );
};

export default Cart;

export { CartContext };
