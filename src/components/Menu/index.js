import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CustomerDetailsContext } from "../OnBoarding";

import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  const { customerDetails } = useContext(CustomerDetailsContext);

  return (
    <>{menu && menu.map((item) => <MenuItem key={item.id} {...item} />)}</>
  );
};

export default Menu;
