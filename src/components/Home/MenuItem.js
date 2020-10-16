import React, { useState } from "react";
import styled from "styled-components";

import { Gluten, Lactose } from "./icons";
import MenuItemPop from "./MenuItemPop";
import Button from "../misc/Button";
import clock from "./clock.svg";

const Figure = styled.figure`
  margin: 0;
  padding: var(--leftright);
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  background: url(${(props) => props.image}) no-repeat center/100%;
  display: flex;
  align-items: flex-end;
  /* justify-content: center; */
`;

const FigCaption = styled.figcaption`
  margin: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
`;

const First = styled.div`
  margin: 0;
  width: 50%;
  height: auto;
`;

const Second = styled(First)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Time = styled.div`
  display: flex;
`;

const Clock = styled.img`
  margin: 0 0.5rem 0.4rem 0;
  width: 20px;
  height: auto;
`;

const MenuItem = (props) => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <Figure key={props.id} image={props.image}>
      <FigCaption>
        <First>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <h2>{props.price}kr</h2>
        </First>
        <Second>
          <Time>
            <Clock src={clock} alt="Klocka" />
            <h3>{props.cookingtime} min</h3>
          </Time>
          {props.gluten ? <Gluten /> : null}
          {props.lactose ? <Lactose /> : null}
        </Second>
      </FigCaption>
      <Button onClick={togglePopup} text="Läs mer"/>
      {popup ? (
        <MenuItemPop
          key={props.id}
          name={props.name}
          price={props.price}
          image={props.image}
          id={props.id}
          togglePopup={() => togglePopup()}
        />
      ) : null}
    </Figure>
  );
};
export default MenuItem;
