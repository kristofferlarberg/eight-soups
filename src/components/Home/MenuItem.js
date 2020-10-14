import React from "react";
import styled from "styled-components";

import img1 from "../../images/roastedtomato.jpg";

const Figure = styled.figure`
  margin: 0;
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  background: no-repeat center/100% url(${img1});
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
    <Figure key={props.id}>
      <FigCaption>
        {props.name}: {props.price}kr
      </FigCaption>
    </Figure>
  );
};
export default MenuItem;
