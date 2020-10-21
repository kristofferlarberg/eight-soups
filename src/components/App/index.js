import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import Menu from "../Menu";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Cart, { CartContext } from "../Cart";
import { menuData } from "../../data/menuData";

import { GlobalStyle } from "../../styles/global";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const Main = styled.main`
  margin: 15rem 0;
  width: auto;
  box-sizing: border-box;
`;

const App = (props) => {
  const [menu] = useState(menuData);
  const [cart, setCart] = useState([]);

  console.log("---------------------------------");
  console.log("CART STATE");
  console.log(cart);
  console.log("---------------------------------");

  console.log("---------------------------------");
  console.log("MENU STATE");
  console.log(menu);
  console.log("---------------------------------");

  return (
    <>
      <GlobalStyle />
      <CartContext.Provider value={{ cart, setCart }}>
        <Router>
          <Navigation />
          <Main>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} render={() => <Menu menu={menu} />} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.CART} component={Cart} />
          </Main>
        </Router>
      </CartContext.Provider>
    </>
  );
};

export default withAuthentication(App);
