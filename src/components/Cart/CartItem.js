import React, { useContext, useEffect } from "react";

const CartItem = (props) => {
  return <>{`(${props.amount} x ${props.price}kr) ${props.name}`}</>;
};

export default CartItem;
