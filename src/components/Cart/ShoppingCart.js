import React, { useContext } from "react";
import styled from "styled-components";

import CartItem from "./CartItem";
import CartContext from "./CartContext";

const Button = styled.button``;

const ShoppingCart = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

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

  return (
    <>
      {props.menu.map((item) => (
        <div key={item.id}>
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            id={item.id}
            cart={cart}
          />
          <Button type="submit" onClick={() => lessItems(item)}>
            -
          </Button>
          {/*           <Button type="submit" onClick={() => moreItems(item)}>
            +
          </Button> */}
        </div>
      ))}
      <div>Total: {cartTotal}</div>

      <Button type="submit" onClick={() => setCart([])}>
        Ta bort alla
      </Button>
    </>
  );
};

export default ShoppingCart;
