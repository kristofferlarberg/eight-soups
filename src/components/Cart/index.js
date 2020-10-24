import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import TotalContext from "./TotalContext";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import { ButtonRed } from "../misc/Button";

import { withAuthorization } from "../Session";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { total, setTotal } = useContext(TotalContext);

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

      <div>Total: {total.sum}</div>

      <ButtonRed
        text="Ta bort alla"
        type="submit"
        onClick={() => setCart([])}
      />
    </>
  );
};

export default Cart;

export { CartContext, TotalContext };
