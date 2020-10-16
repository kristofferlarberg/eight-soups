import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../misc/Button";
import CartContext from "../Cart/CartContext";

const Popup = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background-color: white;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  box-sizing: border-box;
`;

const TextContainer = styled.section`
  margin: var(--halfspace);
  display: flex;
  justify-content: space-between;
`;

//hur justera stil?
const Close = styled(Button)`
  background-color: white;
  color: black;
  text-align: right;
`;

const MenuItemPop = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  
  return (
    <Popup key={props.id}>
      <PopupContainer>
        <Close onClick={() => props.togglePopup()} text="X" />
        <ImageContainer>
          <Image src={props.image} alt="Soup Image" />
        </ImageContainer>
        <TextContainer>
          <h2>{props.name}</h2>
          <h2>{props.price}kr</h2>
        </TextContainer>
        <Button onClick={() => addToCart()} text="Lägg till" />
      </PopupContainer>
    </Popup>
  );
};
export default MenuItemPop;
