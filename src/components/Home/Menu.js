import React, { useContext } from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import { ShoppingCart } from "../Cart";

const Menu = (props) => {
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
        </>
      ))}
      <ShoppingCart menu={props.menu} />
    </>
  );
};

export default Menu;
