import React from "react";
import styled from "styled-components";
import { ButtonTemplate } from "../../styles/templates";

const Green = styled.button`
  ${ButtonTemplate}
  width: 100%;
  background-color: var(--green);
  color: white;
  border: 0;
`;

const Red = styled(Green)`
  background-color: red;
`;

const Round = styled.button`
  ${ButtonTemplate}
  height: 50px;
  width: 50px;
  border: 1px solid var(--darkgrey);
  background-color: white;
  border-radius: 30px;
  color: black;
  padding: 0;
  margin: var(--halfspace);
`;

const RoundFixed = styled(Round)`
  position: fixed;
`;

const RoundSmall = styled(Round)`
  ${ButtonTemplate}
  height: 30px;
  width: 30px;
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

export const ButtonRound = (props) => {
  return <Round onClick={props.onClick}>{props.text}</Round>;
};

export const ButtonRoundFixed = (props) => {
  return <RoundFixed onClick={props.onClick}>{props.text}</RoundFixed>;
};

export const ButtonRoundSmall = (props) => {
  return <RoundSmall onClick={props.onClick}>{props.text}</RoundSmall>;
};
