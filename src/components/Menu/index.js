import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CustomerDetailsContext } from "../OnBoarding";

import MenuItem from "./MenuItem";


const Menu = ({ menu }) => {
  const { customerDetails } = useContext(CustomerDetailsContext);
/*   const [loaded, setLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState([]) */

/*   useEffect(() => {
    function handleLoad(item) {
      setAllLoaded(item);
      if (allLoaded.length === item.length) {
        setTimeout(function () {
          setLoaded(true);
        }, 1000);
      }
    }
    handleLoad(menu);
  }, []); */



  return (
    <>
      {menu && menu.map((item) => <MenuItem key={item.id} {...item} />)}
    </>
  );
};

export default Menu;
