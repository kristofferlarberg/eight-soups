import React, { useContext } from "react";
import styled from "styled-components";
import { MainTemplate } from "../../styles/templates";
import { AddressContext } from "../OnBoarding";

import MenuItem from "./MenuItem";

const Main = styled.main`
  ${MainTemplate}
`;

const Menu = ({ menu }) => {
  const { address } = useContext(AddressContext);

  return (
    <Main>
      {menu && menu.map((item) => <MenuItem key={item.id} {...item} />)}
    </Main>
  );
};

export default Menu;
