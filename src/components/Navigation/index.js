import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BurgerMenu from "./BurgerMenu";
import SignOutButton from "../SignOut";
import HamburgerIcon from "./HamburgerIcon";
import SoupIcon from "./SoupIcon";
import Logo from "./Logo"
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";
import Hamburger from "./HamburgerIcon";

//Animera till mindre format efter scroll
const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 15rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey);
`;

const Navigation = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <NavigationAuth
              burger={burger}
              toggleBurger={() => toggleBurger()}
            />
          ) : (
            <NavigationNonAuth
              burger={burger}
              toggleBurger={() => toggleBurger()}
            />
          )
        }
      </AuthUserContext.Consumer>
    </div>
  );
};

const NavigationAuth = (props) => {
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
       <Logo/>
      </Nav>
    </>
  );
};

const NavigationNonAuth = (props) => (
  <>
    {props.burger ? (
      <BurgerMenu
        burger={props.burger}
        toggleBurger={() => props.toggleBurger()}
      />
    ) : null}
    <Nav>
      <Hamburger onClick={() => props.toggleBurger()} />
      <Logo />
    </Nav>
  </>
);

export default Navigation;
