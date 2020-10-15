import React from "react";
import styled from "styled-components";

const Button = styled.button``;

const AddButton = (props) => {
  return <Button onClick={props.addToCart}>{props.title}</Button>;
};

export default AddButton;
