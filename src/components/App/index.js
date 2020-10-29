import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

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
import { withAuthentication } from "../Session";
import { AddressContext } from "../OnBoarding";
import { GlobalStyle } from "../../styles/global";

import * as ROUTES from "../../constants/routes";


const App = () => {
  const [menu] = useState(menuData);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const [address, setAddress] = useState(null);

  console.log("---------------------------------");
  console.log("CART STATE");
  console.log(cart);
  console.log("---------------------------------");

  console.log("---------------------------------");
  console.log("TOTAL STATE");
  console.log(total);
  console.log("---------------------------------");

  console.log("---------------------------------");
  console.log("ADDRESS STATE");
  console.log(address);
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

  useEffect(() => {
    setAddress(() => {
      let address = JSON.parse(localStorage.getItem("customerAddress"));
      return address;
    });
  }, []);

  return (
    <AddressContext.Provider value={{ address }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <TotalContext.Provider value={{ total, setTotal }}>
          <GlobalStyle />
          <Router>
            <Navigation />
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
          </Router>
        </TotalContext.Provider>
      </CartContext.Provider>
    </AddressContext.Provider>
  );
};

export default withAuthentication(App);
