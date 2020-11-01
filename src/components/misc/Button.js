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

export const Round = styled.button`
  ${ButtonTemplate}
  height: 35px;
  width: 35px;
  border-radius: 30px;
  padding: 0.7rem 1rem 1rem 1rem;
  margin: var(--halfspace);
  font-size: var(--default);
  background-color: var(--forestgreen);
  color: white;
  border: 0;
`;

const RoundNoMargin = styled(Round)`
  margin: 0;
`;

const RoundWide = styled(Green)`
  width: 150px;
  margin: var(--lineheight);
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
  border: 1px solid var(--darkgrey);
  background-color: white;
  font-size: var(--xsmall);
  font-weight: 700;
  color: var(--darkgrey);
`;

const RoundSmallWide = styled(RoundSmall)`
  width: 150px;
  background-color: var(--grey);
  border: 0;
  border-radius: 5px;
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

export const ButtonRoundSmallWide = (props) => {
  return <RoundSmallWide onClick={props.onClick}>{props.text}</RoundSmallWide>;
};

export const ButtonRoundNoMargin = (props) => {
  return <RoundNoMargin onClick={props.onClick}>{props.text}</RoundNoMargin>;
};
