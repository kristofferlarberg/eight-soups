import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BurgerMenu from "./BurgerMenu";
import LogoText from "./LogoText";
import Logo from "./Logo";
import Bowl from "./Bowl";
import Hamburger from "./HamburgerIcon";
import * as ROUTES from "../../constants/routes";
import { AddressContext } from "../OnBoarding";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 10rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(address) => address === true? "var(--grey)" : "transparent"};
`;

const LogoContainer = styled.div`
  height: 10rem;
  padding: 5rem 2rem 2rem 2rem;
`;

const Navigation = () => {
  const [burger, setBurger] = useState(false);
  const {address} = useContext(AddressContext);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <>
      {address ? (
        <NavigationAddress
          burger={burger}
          toggleBurger={() => toggleBurger()}
        />
      ) : (
        <NavigationNoAddress
          burger={burger}
          toggleBurger={() => toggleBurger()}
        />
      )}
    </>
  );
};

const NavigationAddress = (props) => {
  return (
    <>
      {props.burger ? (
        <BurgerMenu
          burger={props.burger}
          toggleBurger={() => props.toggleBurger()}
        />
      ) : null}
      <Nav>
        <Hamburger onClick={() => props.toggleBurger()} />
        <Link to={ROUTES.HOME}>
          <LogoText />
        </Link>
        <Bowl />
      </Nav>
    </>
  );
};

const NavigationNoAddress = (props) => (
  <>
    {props.burger ? (
      <BurgerMenu
        burger={props.burger}
        toggleBurger={() => props.toggleBurger()}
      />
    ) : null}

    <Nav>
      <Hamburger onClick={() => props.toggleBurger()} />
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Nav>
  </>
);

export default Navigation;
