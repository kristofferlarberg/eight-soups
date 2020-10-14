import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import CartItem from "./CartItem";

const Button = styled.button``;

const Menu = (props) => {
  const [cart, setCart] = useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  console.log("CART");
  console.log(cart);

  const { menu } = props;

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

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
        <>
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
          <Button type="submit" onClick={() => addToCart(item)}>
            Välj
          </Button>
        </>
      ))}
      {props.menu.map((item) => (
        <>
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
        </>
      ))}

      <div>Total: {cartTotal}</div>

      <Button type="submit" onClick={() => setCart([])}>
        Ta bort alla
      </Button>
    </>
  );
};

export default Menu;
