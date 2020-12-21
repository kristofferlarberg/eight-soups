import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
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
  background-color: rgb(0, 0, 0, 0.1);
  overflow-y: scroll;
`;

const PopupContainer = styled.main`
  height: auto;
  margin: var(--topbottom) var(--leftright);
  padding: 0;
  background-color: white;
  overflow-y: scroll;
`;

const CartNav = styled.nav`
  margin: var(--halfspace) var(--halfspace) var(--topbottom) var(--halfspace);
`;

const CartHeader = styled.header`
  margin-top: var(--halfspace);
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const CartHeading = styled.h1`
  margin: 0;
  color: var(--forestgreen);
  width: 100%;
  text-align: center;
`;

const CloseButtonDiv = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
          <CloseButtonDiv>
            {orderPage < 5 ? (
              <Link to={ROUTES.HOME}>
                <ButtonRoundNoMargin text="x" />
              </Link>
            ) : null}
          </CloseButtonDiv>
          <CartHeader>
            {orderPage === 1 ? <CartHeading>Din varukorg</CartHeading> : null}
            {orderPage === 2 ? <CartHeading>Dina uppgifter</CartHeading> : null}
            {orderPage === 3 ? <CartHeading>Dina uppgifter</CartHeading> : null}
            {orderPage === 4 ? <CartHeading>Sammanfattning</CartHeading> : null}
            {orderPage === 5 ? <CartHeading>Bekräftelse</CartHeading> : null}
          </CartHeader>
        </CartNav>
        <OrderSteps orderPage={orderPage} nextPage={() => nextPage()} />
        <DirectionButtons
          orderPage={orderPage}
          previousPage={() => previousPage()}
          nextPage={() => nextPage()}
        />
      </PopupContainer>
    </Popup>
  );
};

const DirectionButtons = ({ orderPage, previousPage, nextPage }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <BigButtonsContainer>
      {orderPage > 1 && orderPage < 5 ? (
        <ButtonDiv>
          <ButtonGreen
            text="Föregående"
            orderPage={() => orderPage()}
            onClick={() => previousPage()}
          />
        </ButtonDiv>
      ) : null}

      {(cart.length > 0 && orderPage < 3) || (orderPage > 3 && orderPage < 4) ? (
        <ButtonDiv>
          <ButtonGreen
            text="Nästa"
            orderPage={orderPage}
            onClick={() => nextPage()}
          />
        </ButtonDiv>
      ) : null}

      {orderPage === 4 ? (
        <ButtonDiv>
          <ButtonGreen
            text="Beställ"
            orderPage={orderPage}
            onClick={() => nextPage()}
          />
        </ButtonDiv>
      ) : null}

      {orderPage === 5 ? (
        <ButtonDiv>
          <Link to={ROUTES.HOME}>
            <ButtonGreen text="Avsluta" onClick={() => setCart([])} />
          </Link>
        </ButtonDiv>
      ) : null}
    </BigButtonsContainer>
  );
};

export default Cart;

export { CartContext, TotalContext };
