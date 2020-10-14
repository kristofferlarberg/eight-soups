import React from "react";
import styled from "styled-components";


const CartItem = (props) => {

   const amountOfItems = (id) => props.cart.filter((item) => item.id === id).length;

  return (
    <div key={props.id}>
      {amountOfItems(props.id)} x {props.price}kr) {`${props.name}`}
    </div>
  );
};

export default CartItem;
