import React from "react";
import styled from "styled-components";

import img1 from "../../images/roastedtomato.jpg";

const Figure = styled.figure`
  margin: 0;
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat; 
  background-position: center/100%;
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
console.log(props.image);
  return (
    <Figure key={props.id} image={props.image} >
      <FigCaption>
        {props.name}: {props.price}kr
      </FigCaption>
    </Figure>
  );
};
export default MenuItem;
