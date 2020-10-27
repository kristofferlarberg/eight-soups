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
  const [bread, setBread] = useState("Inget bröd");
  const [beverage, setBeverage] = useState("Ingen dryck");
  const [breadAmount, setBreadAmount] = useState(0);
  const [beverageAmount, setBeverageAmount] = useState(0);

  console.log(bread);
  console.log(beverage);

  const limit = 1;

  const thisSoup = {
    id: props.id,
    name: props.name,
    price: props.price,
    cookingtime: props.cookingtime,
    amount: soupAmount,
    extra: [bread, beverage],
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

  const breadSelection = (e) => {
    if (e.target.checked) {
      if (breadAmount < limit) {
        setBreadAmount(1);
        setBread(e.target.name);
      } else {
        e.preventDefault();
        e.currentTarget.checked = false;
      }
    } else {
      setBreadAmount(0);
      setBread("Inget bröd");
    }
  };

  const beverageSelection = (e) => {
    if (e.target.checked) {
      if (beverageAmount < limit) {
        setBeverageAmount(1);
        setBeverage(e.target.name);
      } else {
        e.preventDefault();
        e.currentTarget.checked = false;
      }
    } else {
      setBeverageAmount(0);
      setBeverage("Ingen dryck");
    }
  };

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
        <label>
          <input type="checkbox" onChange={breadSelection} name="Surdegsbröd" />
          Surdegsbröd
        </label>
        <label>
          <input
            type="checkbox"
            onChange={breadSelection}
            name="Fullkornsbröd"
          />
          Fullkornsbröd
        </label>
        <label>
          <input type="checkbox" onChange={breadSelection} name="Focaccia" />
          Focaccia
        </label>
        <label>
          <input
            type="checkbox"
            onChange={beverageSelection}
            name="San Pellegrino"
          />
          San Pellegrino
        </label>
        <label>
          <input
            type="checkbox"
            onChange={beverageSelection}
            name="Ubuntu Cola"
          />
          Ubuntu Cola
        </label>
        <label>
          <input type="checkbox" onChange={beverageSelection} name="Te" />
          Te
        </label>
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
