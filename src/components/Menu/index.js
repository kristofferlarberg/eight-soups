import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <>{menu && menu.map((item) => <MenuItem key={item.id} {...item} />)}</>
  );
};

export default Menu;
