import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import { ButtonGreen, ButtonRound, ButtonRoundSmall } from "../misc/Button";
import SubCategory from "../misc/SubCategory"
import { CartContext } from "../Cart/context";
import { InputTemplate, LabelTemplate } from "../../styles/templates";

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
  overflow-y: scroll;
`;

const PopupContainer = styled.div`
  margin: var(--topbottom) var(--leftright);
  padding-bottom: var(--lineheight);
  background-color: white;
  overflow: auto;
`;

const Figure = styled.figure`
  width: 100%;
  height: 20rem;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const Header = styled.header`
  padding: var(--lineheight) var(--leftright);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadText = styled.h2`
  margin: 0;
`;

const Price = styled.h3`
  margin: 0 var(--halfspace);
`;

const Selection = styled.section`
  padding: var(--lineheight) var(--leftright);
  display: flex;
  flex-direction: column;
`;

const AddContainer = styled.section`
  margin: var(--halfspace) var(--leftright);
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  margin: 0 var(--leftright) 0 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const StyledInput = styled.input`
${InputTemplate}
`;

const StyledLabel = styled.label`
  ${LabelTemplate}
`;

const MenuItemPop = (props) => {
  const {setCart} = useContext(CartContext);
  const [soupAmount, setSoupAmount] = useState(1);
  const [bread, setBread] = useState("Inget bröd");
  const [beverage, setBeverage] = useState("Ingen dryck");
  const [breadAmount, setBreadAmount] = useState(0);
  const [beverageAmount, setBeverageAmount] = useState(0);

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
        <Figure image={props.image} alt="Soup">
          <ButtonRound
            text="x"
            type="submit"
            onClick={() => props.togglePopup()}
          />
        </Figure>
        <Header>
          <HeadText>{props.name}</HeadText>
          <Price>{props.price}kr</Price>
        </Header>
        <SubCategory text="Välj bröd" />
        <Selection>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              onChange={breadSelection}
              name="Surdegsbröd"
            />
            Surdegsbröd
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              onChange={breadSelection}
              name="Fullkornsbröd"
            />
            Fullkornsbröd
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              onChange={breadSelection}
              name="Focaccia"
            />
            Focaccia
          </StyledLabel>
        </Selection>
        <SubCategory text="Välj dryck" />
        <Selection>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              onChange={beverageSelection}
              name="San Pellegrino"
            />
            San Pellegrino
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              onChange={beverageSelection}
              name="Ubuntu Cola"
            />
            Ubuntu Cola
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              onChange={beverageSelection}
              name="Te"
            />
            Te
          </StyledLabel>
        </Selection>
        <AddContainer>
          <AmountContainer>
            <ButtonRoundSmall
              text="-"
              type="submit"
              onClick={() => lessItems()}
            />
            <Price>{soupAmount}</Price>
            <ButtonRoundSmall
              text="+"
              type="submit"
              onClick={() => moreItems()}
            />
          </AmountContainer>
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
