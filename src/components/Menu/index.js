import React from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import { withAuthorization } from "../Session";

const Menu = ({ menu }) => {

  return (
    <div>
{/*     <>
      {menu.map((item) => (
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
    </> */}
    <>
    {menu && menu.map((item) => (
      <MenuItem
        key={item.id}
        {...item}
      />
    ))}
  </>
  </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Menu);
