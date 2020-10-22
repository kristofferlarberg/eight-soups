import React, { useContext } from "react";
import styled from "styled-components";
import {
  ButtonGreen,
  ButtonRoundFixed,
  ButtonRoundSmall,
} from "../misc/Button";
import CartContext from "../Cart/context";

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
`;

const PopupContainer = styled.div`
  margin: var(--topbottom) var(--leftright);
  background-color: white;
  overflow: auto;
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

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

const AddContainer = styled.section`
  margin: var(--halfspace) var(--leftright);
  height: auto;
  display: flex;
  justify-content: center;
`;

// todo: om tid finnes, destructura
const MenuItemPop = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const thisSoup = {
    id: props.id,
    name: props.name,
    price: props.price,
    cookingtime: props.cookingtime,
    amount: 1,
  };

  

  const lessItems = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        currentCart.find((item) => item.id === props.id).amount -= 1;
        console.log(props.amount);
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

  const addToCart = (item) =>
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === props.id)) {
        /* currentCart.find((item) => item.id === props.id).amount += 1; */
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });

  return (
    <Popup key={props.id}>
      <PopupContainer>
        <ButtonContainer>
          <ButtonRoundFixed
            text="X"
            type="submit"
            onClick={() => props.togglePopup()}
          />
        </ButtonContainer>
        <ImageContainer>
          <Image src={props.image} alt="Soup Image" />
        </ImageContainer>
        <TextContainer>
          <h2>{props.name}</h2>
          <h2>{props.price}kr</h2>
        </TextContainer>
        <AddContainer>
          <ButtonRoundSmall
            text="-"
            type="submit"
            onClick={() => lessItems(thisSoup)}
          />
          <h2>{thisSoup.amount}</h2>
          <ButtonRoundSmall
            text="+"
            type="submit"
            onClick={() => moreItems(thisSoup)}
          />
          <ButtonGreen
            onClick={() => {
              addToCart(thisSoup);
              props.togglePopup();
            }}
            text="Lägg till"
          />
        </AddContainer>
      </PopupContainer>
    </Popup>
  );
};
export default MenuItemPop;
