import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
`;

const AddButton = (props) => {
  return <Button onClick={props.onClick}>{props.text}</Button>;
};

export default AddButton;
