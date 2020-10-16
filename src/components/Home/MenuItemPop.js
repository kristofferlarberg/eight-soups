import React, { useContext } from "react";
import styled from "styled-components"; 
import Button from "../misc/Button";

const Popup = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;

const MenuItemPop = (props, item) => {
  /* const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]); */
console.log(props);
  return (
    <Popup key={props.id}>
      <PopupContainer>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <h2>{props.price}kr</h2>
        <Button onClick={() => props.togglePopup()} text="X"/>
      </PopupContainer>

      {/* <AddButton onClick={(i) => addToCart(menu[i])} title="Lägg till" /> */}
    </Popup>
  );
};
export default MenuItemPop;
