import React, { useContext } from "react";
import styled from "styled-components";

import CartContext from "./CartContext";
import { ButtonGrey, ButtonRoundSmall } from "../misc/Button";

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

/* //få in detta ovanför
  if (soupAmount >= 1) {
    setSoupAmount(soupAmount - 1);
  } else setSoupAmount(soupAmount); */

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
        <ButtonRoundSmall
          text="-"
          type="submit"
          onClick={() => lessItems(props)}
        />
        <ButtonRoundSmall
          text="+"
          type="submit"
          onClick={() => moreItems(props)}
        />
      </Buttons>
      <div>
        {props.extra[0]}, {props.extra[1]}
      </div>
    </Container>
  );
};

export default CartItem;
