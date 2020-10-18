import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Cart, { CartContext } from "../Cart";
import { menuData } from "../../data/menuData";

import { GlobalStyle } from "../../styles/global";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const Main = styled.main`
  margin: 0;
  width: 100vw;
`;

const thisSoup = {
  id: 1,
  name: "Soppa",
  price: 100,
  cookingtime: 20,
};

const App = () => {
  const [menu, setMenu] = useState(menuData);
  const [cart, setCart] = useState([thisSoup, thisSoup, thisSoup]);

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
            <Main>
              <Navigation />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route path={ROUTES.HOME} component={HomePage} />
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
