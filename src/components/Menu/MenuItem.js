import React, { useState } from "react";
import styled from "styled-components";

import { Gluten, Lactose } from "./icons";
import MenuItemPop from "./MenuItemPop";
import { ButtonGreen } from "../misc/Button";
import clock from "./clock.svg";

const Figure = styled.figure`
  margin: 0 0 var(--lineheight) 0;
  width: 100%;
  height: 50rem;
  box-sizing: border-box;
  background: url(${(props) => props.image}) no-repeat center/100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const FigCaption = styled.figcaption`
  margin: 0;
  padding: var(--halfspace);
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(255, 255, 255, 0.5);
`;

const Text = styled.div`
  margin: 0;
  height: auto;
`;

const Time = styled(Text)`
  display: flex;
  justify-content: right;
  align-items: center;
  justify-self: flex-start;
  height: auto;
`;

const TimeText = styled.h3`
  margin: 0;
`;

const Clock = styled.img`
  margin: 0 0.5rem 0 0;
  width: 20px;
  height: 20px;
`;

const Title = styled(Text)`
  display: flex;
  justify-content: left;
`;

const MenuItem = (props) => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <Figure key={props.id} image={props.image}>
      <Time>
        <Clock src={clock} alt="Klocka" />
        <TimeText>{props.cookingtime} min</TimeText>
      </Time>
      <FigCaption>
        <Title>
          <h1>{props.name}</h1>
          {props.gluten ? <Gluten /> : null}
          {props.lactose ? <Lactose /> : null}
        </Title>
        <Text>
          <p>{props.description}</p>
          <h2>{props.price}kr</h2>
        </Text>
        <ButtonGreen onClick={togglePopup} text="Välj" />
      </FigCaption>

      {popup ? (
        <MenuItemPop {...props} togglePopup={() => togglePopup()} />
      ) : null}
    </Figure>
  );
};
export default MenuItem;
