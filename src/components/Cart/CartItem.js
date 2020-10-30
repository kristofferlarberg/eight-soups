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

const OrderTitleContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

const OrderItemTitle = styled.h4`
  margin: 0;
`;

const OrderItemExtras = styled.h4`
  margin: 0;
  font-weight: 400;
`;

const AdjustAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--lineheight);
`;

const CartItem = (props) => {
  const { setCart } = useContext(CartContext);

  const lessItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        currentCart.find((item) => item.id === props.id).amount -= 1;
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });

  //få in detta ovanför
  //if (cart.soupAmount >= 1) {

  const moreItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        currentCart.find((item) => item.id === props.id).amount += 1;
        return [...currentCart];
      } else {
        return [item];
      }
    });

    //get working
      const deleteItems = (item) =>
        setCart((currentCart) => {
          if (currentCart.some((item) => item.id === props.id)) {
            currentCart.splice(1, props.id);
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
        <ButtonRoundSmall text="x" type="submit" onClick={() => deleteItems()} />
      </AdjustAmount>
    </Container>
  );
};

export default CartItem;
