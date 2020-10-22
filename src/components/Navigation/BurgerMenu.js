import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ButtonRound } from "../misc/Button";
import Logo from "./Logo";

import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

const BurgerMenuContainer = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
`;

const BurgerMenuContent = styled.nav`
  background-color: white;
  margin: 0;
  padding: var(--topbottom) var(--leftright);
  width: 50vw;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const BurgerMenu = (props) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <BurgerMenuAuth
            burger={props.burger}
            toggleBurger={() => props.toggleBurger()}
          />
        ) : null
      }
    </AuthUserContext.Consumer>
  </div>
);

const BurgerMenuAuth = (props) => (
  <BurgerMenuContainer>
    <BurgerMenuContent>
      <ButtonContainer>
        <ButtonRound text="X" onClick={() => props.toggleBurger()} />
      </ButtonContainer>
      <Logo />
      <ul>
        <li>
          <Link to={ROUTES.ACCOUNT} onClick={() => props.toggleBurger()}>
            Account
          </Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN} onClick={() => props.toggleBurger()}>
            Admin
          </Link>
        </li>
      </ul>
    </BurgerMenuContent>
  </BurgerMenuContainer>
);

export default BurgerMenu;
