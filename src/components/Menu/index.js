import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MainTemplate } from "../../styles/templates";
import { AddressContext } from "../OnBoarding";

import MenuItem from "./MenuItem";

const Main = styled.main`
  ${MainTemplate}
  opacity: ${(loaded) => (loaded ? "1" : "0")};
`;

const Menu = ({ menu }) => {
  const { address } = useContext(AddressContext);
  const [loaded, setLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState([])

  useEffect(() => {
    function handleLoad(item) {
      setAllLoaded(item);
      if (allLoaded.length === item.length) {
        setTimeout(function () {
          setLoaded(true);
        }, 1000);
      }
    }
    handleLoad(menu);
  }, []);



  return (
    <Main>
      {menu && menu.map((item) => <MenuItem key={item.id} {...item} />)}
    </Main>
  );
};

export default Menu;
