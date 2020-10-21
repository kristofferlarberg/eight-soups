import React, { useContext } from "react";
import styled from "styled-components";

import CartContext from "./context";
import CartItem from "./CartItem";
import { ButtonRed } from "../misc/Button";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const cartTotal = [];
  let categorySum = cart.map((item) => item.price * item.amount);
  let totalSum = categorySum.reduce((a, b) => a + b, 0);
  cartTotal.push(totalSum);

  //anpassa till amountprop
  /*   const lessItems = (item) => {
    setCart((currentCart) => {
      const indexToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexToRemove),
        ...currentCart.slice(indexToRemove + 1),
      ];
    });
  };
 */

  return (
    <>
      {cart.map((item) => (
          <CartItem {...item} key={item.id} />
      ))}

      <div>Total: {cartTotal}</div>

      <ButtonRed
        text="Ta bort alla"
        type="submit"
        onClick={() => setCart([])}
      />
    </>
  );
};

export default Cart;

export { CartContext };
