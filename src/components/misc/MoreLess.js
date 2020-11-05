import React from "react";
import styled from "styled-components/macro";
import { ButtonRoundSmall } from "./Button";

const AmountContainer = styled.div`
  margin: 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Amount = styled.h3`
  margin: 0 var(--halfspace);
  color: var(--darkgrey);
`;

const MoreLess = (props) => (
  <AmountContainer>
    <ButtonRoundSmall text="-" type="submit" onClick={props.onClickLess} />
    <Amount>{props.amount}</Amount>
    <ButtonRoundSmall text="+" type="submit" onClick={props.onClickMore} />
  </AmountContainer>
);

export default MoreLess;
