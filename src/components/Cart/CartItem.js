import React, { useContext } from "react";
import styled from "styled-components";

import { CartContext } from "./context";

import { ButtonRoundSmall } from "../misc/Button";
import MoreLess from "../misc/MoreLess";

const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: var(--halfspace) 0;
  padding: var(--lineheight) var(--leftright);
`;

const Info = styled.div`
  display: flex;
`;

const OrderTitleContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

const OrderItemTitle = styled.h4`
  margin: 0;
`;

const OrderItemExtras = styled.h4`
  margin: 0;
  color: var(--darkgrey);
  font-weight: 400;
`;

const AdjustAmount = styled.div`
  margin-top: font-variant(--lineheight);
  display: flex;
  justify-content: space-between;
`;

const CartItem = (props) => {
  const { setCart } = useContext(CartContext);

  //add changes to localstorage
  const lessItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        currentCart.find((item) => item.id === props.id).amount -= 1;
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });

  /* //få in detta ovanför
  if (soupAmount >= 1) {
    setSoupAmount(soupAmount - 1);
  } else setSoupAmount(soupAmount); */

  //add changes to localstorage
  const moreItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        currentCart.find((item) => item.id === props.id).amount += 1;
        return [...currentCart];
      } else {
        return [item];
      }
    });

  return (
    <Container>
      <Info>
        <OrderTitleContainer>
          <OrderItemTitle>{props.name}</OrderItemTitle>
          <OrderItemExtras>
            {props.extra[0]}, {props.extra[1]}
          </OrderItemExtras>
        </OrderTitleContainer>
        <OrderItemExtras>{props.price}kr</OrderItemExtras>
      </Info>
      <AdjustAmount>
        <MoreLess
          onClickLess={() => lessItems()}
          onClickMore={() => moreItems()}
          amount={props.amount}
        />
        <ButtonRoundSmall text="x" type="submit" onClick={() => setCart([])} />
      </AdjustAmount>
    </Container>
  );
};

export default CartItem;
