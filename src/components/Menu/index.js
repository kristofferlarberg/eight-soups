import React from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";
import { withAuthorization } from "../Session";

const Menu = ({ menu }) => {
  return (
    <>{menu && menu.map((item) => <MenuItem key={item.id} {...item} />)}</>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Menu);
