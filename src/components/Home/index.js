import React, { useState } from "react";
import Menu from "./Menu";
import { withAuthorization } from "../Session";
import { menuData } from "../../data/menuData";

const HomePage = () => {
  const [menu, setMenu] = useState(menuData);

  return <Menu menu={menu}/>;
  
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
