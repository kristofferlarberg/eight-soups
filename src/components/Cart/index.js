import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CartContext, TotalContext } from "./context";
import OrderSteps from "./OrderSteps";

import * as ROUTES from "../../constants/routes";
import { ButtonGreen, ButtonRoundNoMargin } from "../misc/Button";

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

const PopupContainer = styled.main`
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: white;
  overflow: auto;
  overflow-y: scroll;
`;

const CartNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin: var(--lineheight) var(--leftright);
`;

const CartHeader = styled.header`
  margin: 0;
  display: flex;
  align-items: center;

  width: 100%;
  box-sizing: border-box;
`;

const CartHeading = styled.h1`
  margin: 0 35px 0 0;
  color: var(--forestgreen);
  width: calc(100% - 35px);
  text-align: center;
`;

const BigButtonsContainer = styled.div`
  margin: var(--topbottom) var(--leftright);
  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  width: 100%;
  margin: var(--halfspace);
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
          <Link to={ROUTES.HOME}>
            <ButtonRoundNoMargin text="x" />
          </Link>
          <CartHeader>
            {orderPage === 1 ? <CartHeading>Din varukorg</CartHeading> : null}
            {orderPage === 2 ? <CartHeading>Dina uppgifter</CartHeading> : null}
            {orderPage === 3 ? <CartHeading>Dina uppgifter</CartHeading> : null}
            {orderPage === 4 ? <CartHeading>Sammanfattning</CartHeading> : null}
            {orderPage === 5 ? <CartHeading>Bekräftelse</CartHeading> : null}
          </CartHeader>
        </CartNav>
        <OrderSteps orderPage={orderPage} />
        <DirectionButtons
          orderPage={orderPage}
          previousPage={() => previousPage()}
          nextPage={() => nextPage()}
        />
      </PopupContainer>
    </Popup>
  );
};

const DirectionButtons = ({ orderPage, previousPage, nextPage }) => (
  <BigButtonsContainer>
    {orderPage > 1 ? (
      <ButtonDiv>
        <ButtonGreen
          text="Föregående"
          orderPage={() => orderPage()}
          onClick={() => previousPage()}
        />
      </ButtonDiv>
    ) : null}

    {orderPage < 5 ? (
      <ButtonDiv>
        <ButtonGreen
          text="Nästa"
          orderPage={orderPage}
          onClick={() => nextPage()}
        />
      </ButtonDiv>
    ) : (
      <ButtonDiv>
        <Link to={ROUTES.HOME}>
          <ButtonGreen text="Avsluta" />
        </Link>
      </ButtonDiv>
    )}
  </BigButtonsContainer>
);

export default Cart;

export { CartContext, TotalContext };
