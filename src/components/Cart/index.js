import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import CartContext from "./context";
import CartItem from "./CartItem";
import Button from "../misc/Button";
import MenuItem from "../Menu/MenuItem";

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

  const lessItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id == cart.id)) {
        currentCart.find((item) => item.id == cart.id).amount -= 1;
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });

  const moreItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id == cart.id)) {
        currentCart.find((item) => item.id == cart.id).amount += 1;
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });

  return (
    <>
      {cart.map((item) => (
        <>
          <CartItem key={item.id} {...item} />
          <Button text="-" type="submit" onClick={() => lessItems(item)} />
          <Button text="+" type="submit" onClick={() => moreItems(item)} />
        </>
      ))}

      <div>Total: {cartTotal}</div>

      <Button text="Ta bort alla" type="submit" onClick={() => setCart([])}>
        Ta bort alla
      </Button>
    </>
  );
};

export default Cart;

export { CartContext };
