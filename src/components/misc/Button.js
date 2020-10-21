import React from "react";
import styled from "styled-components";

const Green = styled.button`
  width: 100%;
  padding: var(--halfspace);
  cursor: pointer;
  background-color: var(--green);
  border: 0;
`;

const Red = styled(Green)`
  width: 100%;
  padding: var(--halfspace);
  cursor: pointer;
  background-color: red;
  border: 0;
`;

const Grey = styled.button`
  width: 50px;
  padding: var(--halfspace);
  cursor: pointer;
  background-color: var(--grey);
  border: 0;
`;

const WhiteText = styled.h3`
  color: white;
  margin: 0;
`;

const BlackText = styled(WhiteText)`
  color: black;
  margin: 0;
`;

export const ButtonGreen = (props) => {
  return (
    <Green onClick={props.onClick}>
      <WhiteText>{props.text}</WhiteText>
    </Green>
  );
};

export const ButtonRed = (props) => {
  return (
    <Red onClick={props.onClick}>
      <WhiteText>{props.text}</WhiteText>
    </Red>
  );
};

export const ButtonGrey = (props) => {
  return (
    <Grey onClick={props.onClick}>
      <BlackText>{props.text}</BlackText>
    </Grey>
  );
};
