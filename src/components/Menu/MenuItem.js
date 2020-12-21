import React, { useState } from "react";
import styled from "styled-components/macro";
import { Gluten, Lactose } from "./icons";
import MenuItemPop from "./MenuItemPop";
import { ButtonGreen } from "../misc/Button";
import clock from "./clock.svg";

const Figure = styled.figure`
	margin: 0 var(--halfspace) var(--lineheight) var(--halfspace);
	height: 50rem;
	box-sizing: border-box;
	background: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`;

const FigCaption = styled.figcaption`
  margin: 0;
  padding: var(--halfspace) var(--halfspace) var(--lineheight) var(--halfspace);
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(255, 255, 255, 0.8);
`;

const FigCaptionTitleContainer = styled.section`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`;

const FigCaptionTitleFlex = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  height: auto;
`;

const Heading = styled.h1`
  margin: var(--lineheight) 0 var(--lineheight) 0;
`;

const Description = styled.p`
  margin: 0;
`;

const ClockText = styled.h4`
  margin: 0.2rem 0 0 0;
  color: black;
`;

const Clock = styled.img`
  margin: 0 0.5rem 0 0;
  width: 15px;
  height: 15px;
`;

const MenuItem = (props) => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <Figure key={props.id} image={props.image}>
      <FigCaption>
        <FigCaptionTitleContainer>
          <FigCaptionTitleFlex>
            <Heading>{props.name}</Heading>
            {props.gluten ? <Gluten /> : null}
            {props.lactose ? <Lactose /> : null}
          </FigCaptionTitleFlex>
          <FigCaptionTitleFlex>
            <Clock src={clock} alt="Klocka" />
            <ClockText>{props.cookingtime} min</ClockText>
          </FigCaptionTitleFlex>
        </FigCaptionTitleContainer>
        <Description>{props.description}</Description>
        <h3>{props.price}kr</h3>
        <ButtonGreen onClick={togglePopup} text="Lägg till" />
      </FigCaption>
      {popup ? (
        <MenuItemPop {...props} togglePopup={() => togglePopup()} />
      ) : null}
    </Figure>
  );
};
export default MenuItem;
