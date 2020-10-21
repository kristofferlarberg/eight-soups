import React, { useContext } from "react";
import styled from "styled-components";

import CartContext from "./context";
import { ButtonGrey } from "../misc/Button";

const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: var(--halfspace) 0;
`;

const Buttons = styled.div`
  margin-left: var(--lineheight);
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
      {`(${props.amount} x ${props.price}kr) ${props.name}`}
      <Buttons>
        <ButtonGrey text="-" type="submit" onClick={() => lessItems(props)} />
        <ButtonGrey text="+" type="submit" onClick={() => moreItems(props)} />
      </Buttons>
    </Container>
  );
};

export default CartItem;
