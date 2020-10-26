import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ButtonGreen,
  ButtonRoundFixed,
  ButtonRoundSmall,
} from "../misc/Button";
import CartContext from "../Cart/CartContext";
import TotalContext from "../Cart/TotalContext";

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
  const { total, setTotal } = useContext(TotalContext);
  const [soupAmount, setSoupAmount] = useState(1);

  const thisSoup = {
    id: props.id,
    name: props.name,
    price: props.price,
    cookingtime: props.cookingtime,
    amount: soupAmount,
  };

  const lessItems = () => {
    if (soupAmount >= 1) {
      setSoupAmount(soupAmount - 1);
    } else setSoupAmount(soupAmount);
  };

  const moreItems = () => {
    setSoupAmount(soupAmount + 1);
  };

  const addToCart = (item) =>
    setCart((items) => {
      if (items.some((item) => item.id === props.id)) {
        items.find((item) => item.id === props.id).amount += soupAmount;
        return [...items];
      } else {
        return [...items, item];
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
            onClick={() => lessItems()}
          />
          <h2>{soupAmount}</h2>
          <ButtonRoundSmall
            text="+"
            type="submit"
            onClick={() => moreItems()}
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
