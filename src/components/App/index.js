import React, { useState, useEffect } from "react";
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
import Cart, { CartContext, TotalContext } from "../Cart";
import { menuData } from "../../data/menuData";

import { GlobalStyle } from "../../styles/global";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const Main = styled.main`
  margin: 15rem 0;
  width: auto;
  box-sizing: border-box;
`;

const App = () => {
  const [menu] = useState(menuData);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);

  console.log("---------------------------------");
  console.log("CART STATE");
  console.log(cart);
  console.log("---------------------------------");

  console.log("---------------------------------");
  console.log("MENU STATE");
  console.log(menu);
  console.log("---------------------------------");

  console.log("---------------------------------");
  console.log("TOTAL STATE");
  console.log(total);
  console.log("---------------------------------");

  useEffect(() => {
    setTotal(() => {
      let totalItems = 0;
      cart.forEach((item) => {
        totalItems += item.amount;
      });
      let categorySum = cart.map((item) => item.price * item.amount);
      let totalSum = categorySum.reduce((a, b) => a + b, 0);
      return { sum: totalSum, amount: totalItems };
    });
  }, [cart]);

  return (
    <>
      <GlobalStyle />
      <CartContext.Provider value={{ cart, setCart }}>
        <TotalContext.Provider value={{ total, setTotal }}>
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
        </TotalContext.Provider>
      </CartContext.Provider>
    </>
  );
};

export default withAuthentication(App);
