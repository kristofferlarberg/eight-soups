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

const Button = styled.button``;

const MenuItem = () => (
  <Figure>
    <FigCaption>
      <h1>Roasted Tomato and Quinoa</h1>
      <p>
        Tomatsoppa med quinoa, vitlök och lök toppad med färsk basilika och
        krispiga krutonger.
      </p>
      <h2>69kr</h2>
      <Button>Välj</Button>
    </FigCaption>
  </Figure>
);
export default MenuItem;
