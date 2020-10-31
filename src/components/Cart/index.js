import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CartContext, TotalContext } from "./context";
import OrderSteps from "./OrderSteps";

import * as ROUTES from "../../constants/routes";

const Popup = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgb(232, 232, 232, 0.8);
  overflow-y: scroll;
`;

const PopupContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: var(--lineheight) var(--leftright);
  background-color: white;
  overflow: auto;
`;

const CartNav = styled.nav`
  padding: var(--lineheight) var(--leftright);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartHeader = styled.header`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

const CartHeading = styled.h1`
  margin: 0;
  color: var(--forestgreen);
`;

const Back = styled.h1`
  margin: 0;
  display: flex;
  justify-self: left;
`;

const Cart = (props) => {

  return (
    <Popup key={props.id}>
      <PopupContainer>
        <CartNav>
          <CartHeader>
            <Link to={ROUTES.HOME}>
              <Back>Back</Back>
            </Link>
            <CartHeading>Din varukorg</CartHeading>
          </CartHeader>
        </CartNav>
        <OrderSteps/>
      </PopupContainer>
    </Popup>
  );
};

export default Cart;

export { CartContext, TotalContext };
