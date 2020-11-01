import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CartContext, TotalContext } from "./context";
import OrderSteps from "./OrderSteps";

import * as ROUTES from "../../constants/routes";
import { ButtonRoundWide, ButtonRoundNoMargin } from "../misc/Button";

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
  overflow-y: hidden;
`;

const PopupContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: var(--lineheight) var(--leftright);
  background-color: white;
  overflow: auto;
  overflow-y: scroll;
`;

const CartNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

const CartHeader = styled.header`
  margin: 0;
  display: flex;
  align-items: center;

  width: 100%;
  box-sizing: border-box;
`;

const CartHeading = styled.h1`
  margin: 0 0 0 35px;
  color: var(--forestgreen);
  width: calc(100% - 35px);
  text-align: center;
`;

const BigButtonsContainer = styled.div`
  margin: 0 0 var(--topbottom) 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Cart = (props) => {
  const [orderPage, setOrderPage] = useState(1);

  const nextPage = () => {
    setOrderPage(orderPage + 1);
  };

  const previousPage = () => {
    if (orderPage > 1) {
      setOrderPage(orderPage - 1);
    }
  };

  return (
    <Popup key={props.id}>
      <PopupContainer>
        <CartNav>
          <CartHeader>
            {orderPage === 1 ? <CartHeading>Din varukorg</CartHeading> : null}
            {orderPage === 2 ? <CartHeading>Dina uppgifter</CartHeading> : null}
            {orderPage === 3 ? <CartHeading>Dina uppgifter</CartHeading> : null}
            {orderPage === 4 ? <CartHeading>Sammanfattning</CartHeading> : null}
            {orderPage === 5 ? <CartHeading>Bekräftelse</CartHeading> : null}
            <Link to={ROUTES.HOME}>
              <ButtonRoundNoMargin text="x" />
            </Link>
          </CartHeader>
        </CartNav>
        <OrderSteps orderPage={orderPage} />
        <BigButtonsContainer>
          {orderPage > 1 ? (
            <ButtonRoundWide text="Föregående" onClick={() => previousPage()} />
          ) : null}
          {orderPage < 5 ? (
            <ButtonRoundWide text="Nästa" onClick={() => nextPage()} />
          ) : (
            <Link to={ROUTES.HOME}>
              <ButtonRoundWide text="Avsluta" />
            </Link>
          )}
        </BigButtonsContainer>
      </PopupContainer>
    </Popup>
  );
};

export default Cart;

export { CartContext, TotalContext };
