import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "./CartContext";

const CartItem = (props) => {
  const { cart } = useContext(CartContext);

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  return (
    <div key={props.id}>
      {amountOfItems(props.id)} x {props.price}kr) {`${props.name}`}
    </div>
  );
};

export default CartItem;
