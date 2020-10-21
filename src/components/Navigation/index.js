import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BurgerMenu from "./BurgerMenu";
import SignOutButton from "../SignOut";
import HamburgerIcon from "./HamburgerIcon";
import SoupIcon from "./SoupIcon";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";
import Hamburger from "./HamburgerIcon";

const Nav = styled.nav`
  position: fixed;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

//Animera till mindre format efter scroll
const NavContent = styled.nav`
  height: 15rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
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
        <NavContent>
          <Hamburger onClick={() => props.toggleBurger()} />
          <LogoContainer>
            <TitleContainer>
              <Title>Eight</Title>
              <Title>Soups</Title>
            </TitleContainer>
            <Link to={ROUTES.CART}>
              <SoupIcon />
            </Link>
          </LogoContainer>
        </NavContent>
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
      <NavContent>
        <Hamburger onClick={() => props.toggleBurger()} />
        <LogoContainer>
          <TitleContainer>
            <Title>Eight</Title>
            <Title>Soups</Title>
          </TitleContainer>
          <SoupIcon />
        </LogoContainer>
      </NavContent>
    </Nav>
  </>
);

export default Navigation;
