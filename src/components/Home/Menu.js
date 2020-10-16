import React from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import { ShoppingCart } from "../Cart";

const Menu = (props) => {
  return (
    <>
      {props.menu.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          id={item.id}
          lactose={item.lactose}
          gluten={item.gluten}
          cookingtime={item.cookingtime}
        />
      ))}
      <ShoppingCart menu={props.menu} />
    </>
  );
};

export default Menu;
