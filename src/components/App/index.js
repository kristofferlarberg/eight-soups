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


import { GlobalStyle } from "../../styles/global";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import { CartContext } from "../Cart";

const Main = styled.main`
  margin: 0;
  width: 100vw;
`;

const App = () => {
const [cart, setCart] = useState([]);

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
          </Main>
        </Router>
      </CartContext.Provider>
    </>
  );
};

export default withAuthentication(App);
