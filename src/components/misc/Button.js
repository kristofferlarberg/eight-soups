import React from "react";
import styled from "styled-components";
import { ButtonTemplate } from "../../styles/templates";

const Green = styled.button`
  ${ButtonTemplate}
  width: 100%;
  background-color: var(--green);
  color: white;
  border: 0;
  font-size: var(--default);
`;

const Red = styled(Green)`
  background-color: var(--red);
  font-size: var(--default);
`;

const Round = styled.button`
  ${ButtonTemplate}
  height: 50px;
  width: 50px;
  border: 1px solid var(--darkgrey);
  background-color: white;
  border-radius: 30px;
  color: black;
  padding: 0.9rem 1rem 1rem 1rem;
  margin: var(--halfspace);
  font-size: var(--default);
`;

const RoundWide = styled(Round)`
  width: auto;
  margin: var(--lineheight) 0 0 0;
`;

const RoundSmall = styled(Round)`
  ${ButtonTemplate}
  height: 30px;
  width: 30px;
  padding: 0.9rem 1rem 1rem 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-size: var(--default);
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

export const ButtonRoundWide = (props) => {
  return <RoundWide onClick={props.onClick}>{props.text}</RoundWide>;
};

export const ButtonRoundSmall = (props) => {
  return <RoundSmall onClick={props.onClick}>{props.text}</RoundSmall>;
};
