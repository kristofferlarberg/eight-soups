import React from "react";
import styled from "styled-components";
import { ButtonTemplate } from "../../styles/templates";

const Green = styled.button`
  ${ButtonTemplate}
  width: 100%;

  background-color: var(--green);

  color: white;
`;

const Red = styled(Green)`
  width: 100%;

  background-color: red;

  color: white;
`;

const Grey = styled.button`
  ${ButtonTemplate}
  width: 50px;
  background-color: var(--grey);
  color: black;
`;

const Round = styled.button`
  ${ButtonTemplate}
  position: fixed;
  height: 60px;
  width: 60px;
 
  background-color: var(--grey);
  border-radius: 30px;
  color: black;
  padding: 0;
  margin: var(--halfspace);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
`;

const Round2 = styled(Round)`
  position: static;
  background-color: var(--forestgreen);
  margin: var(--halfspace);
  color: white;
  box-shadow: none;
`;

const RoundSmall = styled(Round)`
  ${ButtonTemplate}
  position: static;
  height: 30px;
  width: 30px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonGreen = (props) => {
  return <Green onClick={props.onClick}>{props.text}</Green>;
};

export const ButtonRed = (props) => {
  return <Red onClick={props.onClick}>{props.text}</Red>;
};

export const ButtonGrey = (props) => {
  return <Grey onClick={props.onClick}>{props.text}</Grey>;
};

export const ButtonRound = (props) => {
  return <Round onClick={props.onClick}>{props.text}</Round>;
};

export const ButtonRound2 = (props) => {
  return <Round2 onClick={props.onClick}>{props.text}</Round2>;
};

export const ButtonRoundSmall = (props) => {
  return <RoundSmall onClick={props.onClick}>{props.text}</RoundSmall>;
};
