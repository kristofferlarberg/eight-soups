import React from "react";
import styled from "styled-components";

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
  return (
    <Figure key={props.id} image={props.image}>
      <FigCaption>
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h1>{props.price}kr</h1>
      </FigCaption>
    </Figure>
  );
};
export default MenuItem;
