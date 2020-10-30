import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import Home from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Cart, { CartContext, TotalContext } from "../Cart";
import { menuData } from "../../data/menuData";
import { withAuthentication } from "../Session";
import { AddressContext } from "../OnBoarding";
import { GlobalStyle } from "../../styles/global";
import {useLocalStorage} from "../functions/useLocalStorage"

import * as ROUTES from "../../constants/routes";

const App = () => {
  const [menu] = useState(menuData);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [total, setTotal] = useState([]);
  const [address, setAddress] = useLocalStorage("address", null);

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

/*   useEffect(() => {
    setAddress(() => {
      let address = localStorage.getItem("customerAddress");
      if (address) {
        JSON.parse(address);
        return address;
      } else {
        return "";
      }
    });
  }, []); */

/*   useEffect(() => {
    let order = localStorage.getItem("order");
    if (order) {
      setCart(() => {
        let parse = JSON.parse(localStorage.getItem("order"));
        return parse
      });
    }
    return;
  }, []); */

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
    <AddressContext.Provider value={{ address, setAddress }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <TotalContext.Provider value={{ total, setTotal }}>
          <GlobalStyle />
          <Router>
            <Navigation />
            <Switch>
              <Route
                exact
                path={ROUTES.HOME}
                render={() => <Home menu={menu} />}
              />
              <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                exact
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route exact path={ROUTES.ADMIN} component={AdminPage} />
              <Route exact path={ROUTES.CART} component={Cart} />
            </Switch>
          </Router>
        </TotalContext.Provider>
      </CartContext.Provider>
    </AddressContext.Provider>
  );
};

export default withAuthentication(App);
