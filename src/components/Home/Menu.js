import React, { useState, useEffect } from "react";
import styled from "styled-components";

const items = [
  {
    name: "Roasted Tomato and Quinoa",
    image: "../../images/roastedtomato.jpg",
    description:
      "Tomatsoppa med quinoa, vitlök och lök toppad med färsk basilika och krispiga krutonger.",
    price: 69,
    gluten: true,
    lactose: false,
    "cooking-time": 15,
    id: "1",
    uid: "roastedtomato",
  },
  {
    name: "Roasted Tomato and Quinoa",
    image: "../../images/roastedtomato.jpg",
    description:
      "Tomatsoppa med quinoa, vitlök och lök toppad med färsk basilika och krispiga krutonger.",
    price: 69,
    gluten: true,
    lactose: false,
    "cooking-time": 15,
    id: 1,
    uid: "roastedtomato",
  },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItems = () =>
    items.map((item) => (
      <div key={item.id}>
        {`${item.name}: $${item.price}`}
        <button type="submit" onClick={() => addToCart(item)}>
          Add
        </button>
      </div>
    ));

  const cartItems = () =>
    items.map((item) => (
      <div key={item.id}>
        ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
        <button type="submit" onClick={() => removeFromCart(item)}>
          Remove
        </button>
      </div>
    ));

  return (
    <>
      <div>{listItems()}</div>

      <div>{cartItems()}</div>
      <div>Total: ${cartTotal}</div>
      <div>
        <button onClick={() => setCart([])}>Clear</button>
      </div>
    </>
  );
};

/* //mappa Menuitem
<MenuItem/> */

export default Menu;
