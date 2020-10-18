import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "./context";

import Button from "../misc/Button";

const CartItem = () => {
  const { cart, setCart } = useContext(CartContext);

  const lessItems = (item) => {
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

  /*   const moreItems = (item) => {
    setCart((currentCart) => {
      const indexToAdd = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      return cart.push(item);
    });
  }; */

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          {`(${amountOfItems(item.id)} x ${item.price}kr) ${item.name}`}
          <Button text="-" type="submit" onClick={() => lessItems(item)}>
            -
          </Button>
          {/*           <Button type="submit" onClick={() => moreItems(item)}>
            +
          </Button> */}
        </div>
      ))}
    </>
  );
};

export default CartItem;
