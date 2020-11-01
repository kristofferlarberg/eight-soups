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
  padding: var(--lineheight) 0;
  border-bottom: 1px solid var(--grey);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderTitleContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

export const OrderItemTitle = styled.h4`
  margin: 0;
`;

export const OrderItemExtras = styled.h4`
  margin: 0;
  font-weight: 400;
`;

const AdjustAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--lineheight);
`;

const CartItem = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const lessItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        if (currentCart.find((item) => item.id === props.id).amount > 0) {
          currentCart.find((item) => item.id === props.id).amount -= 1;
        }
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });

  const moreItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        currentCart.find((item) => item.id === props.id).amount += 1;
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });

  const deleteItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        currentCart.splice(item, 1);
        return [...currentCart];
      } else {
        return [...currentCart, item];
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
        <ButtonRoundSmall text="x" onClick={() => deleteItems()} cart={cart} />
      </AdjustAmount>
    </Container>
  );
};

export default CartItem;
