import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "./CartContext";

const Button = styled.button``;



const AddButton = (props) => {
  console.log(props);
  return (
    <Button onClick={() => {props.onClick()}}>
      Välj
    </Button>
  );
};

export default AddButton;
