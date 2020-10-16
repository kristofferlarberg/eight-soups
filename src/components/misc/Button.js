import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100%;
  padding: var(--halfspace);
  cursor: pointer;
  background-color: var(--green);
  border: 0;
`;

const ButtonText = styled.h3`
color: white;
margin: 0;
`;

const Button = (props) => {
  return (
    <ButtonStyle onClick={props.onClick}>
      <ButtonText>{props.text}</ButtonText>
    </ButtonStyle>
  );
};

export default Button;
