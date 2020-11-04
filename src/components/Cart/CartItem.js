import React, { useContext } from "react";
import styled from "styled-components";

import { CartContext } from "./context";
import { RegularH4Template } from "../../styles/templates";

import { ButtonRoundRed } from "../misc/Button";
import MoreLess from "../misc/MoreLess";
import SubCategoryContent, {
  SubCategorySubtitle,
} from "../misc/SubCategoryContent";

const OrderItemContainer = styled.section`
  margin: 0 var(--leftright);
  display: flex;
  flex-direction: column;
  padding: var(--lineheight) 0;
  border-bottom: 1px solid var(--grey);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled(Info)`
  margin-top: var(--lineheight);
`;

const CartItem = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const lessItems = (item) =>
    setCart((items) => {
      if (items.some((item) => item.id === props.id)) {
        if (items.find((item) => item.id === props.id).amount > 0) {
          items.find((item) => item.id === props.id).amount -= 1;
        }
        return [...items];
      } else {
        return [...items, item];
      }
    });

  const moreItems = (item) =>
    setCart((items) => {
      if (items.some((item) => item.id === props.id)) {
        items.find((item) => item.id === props.id).amount += 1;
        return [...items];
      } else {
        return [...items, item];
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
    <OrderItemContainer>
      <Info>
        <SubCategoryContent
          name={props.name}
          subtitle1={props.extra[0]}
          subtitle2={props.extra[1]}
        />
        <SubCategoryContent name={`${props.price}kr`} />
      </Info>
      <Buttons>
        <MoreLess
          onClickLess={() => lessItems()}
          onClickMore={() => moreItems()}
          amount={props.amount}
        />
        <ButtonRoundRed text="x" onClick={() => deleteItems()} cart={cart} />
      </Buttons>
    </OrderItemContainer>
  );
};

export default CartItem;
