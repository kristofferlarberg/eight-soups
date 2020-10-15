import React, { useContext } from "react";
import styled from "styled-components";
import { AddButton, CartContext } from "../Cart";

const Figure = styled.figure`
  margin: 0;
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  background: url(${(props) => props.image}) no-repeat center/100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FigCaption = styled.figcaption`
  margin: 0;
  width: auto;
  height: auto;
`;

const MenuItem = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  return (
    <Figure key={props.id} image={props.image}>
      <FigCaption>
        {props.name}: {props.price}kr
      </FigCaption>
      <AddButton key={props.id} onClick={addToCart} />
    </Figure>
  );
};
export default MenuItem;
