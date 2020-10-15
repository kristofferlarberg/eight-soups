import React, { useContext } from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import { AddButton, CartContext, ShoppingCart } from "../Cart";

const Menu = (props) => {
   const { cart, setCart } = useContext(CartContext);
  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  return (
    <>
      {props.menu.map((item) => (
        <>
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            id={item.id}
          />
          <AddButton addToCart={() => addToCart(item)} title="Välj" />
        </>
      ))}
      <ShoppingCart menu={props.menu} />
    </>
  );
};

export default Menu;
