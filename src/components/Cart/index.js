import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {CartContext, TotalContext} from "./context";
import CartItem from "./CartItem";
import { ButtonRoundSmall } from "../misc/Button";

import * as ROUTES from "../../constants/routes";

const Popup = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgb(232, 232, 232, 0.8);
`;

const PopupContainer = styled.div`
  margin: var(--topbottom) var(--leftright);
  padding-bottom: var(--lineheight);
  background-color: white;
  overflow: auto;
`;

/* const Header = styled.header`
  padding: var(--lineheight) var(--leftright);
  display: flex;
  justify-content: space-between;
  align-items: center;
`; */

/* const HeadText = styled.h2`
  margin: 0;
`;

const Price = styled.h3`
  margin: 0 var(--halfspace);
  color: var(--darkgrey);
`;

const Subheader = styled(Header)`
  padding: var(--halfspace) var(--leftright);
  background-color: var(--grey);
  color: var(--darkgrey);
`;

const SubheadText = styled.h3`
  margin: 0;
`;

const Selection = styled.section`
  padding: var(--lineheight) var(--leftright);
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

const AddContainer = styled.section`
  margin: var(--halfspace) var(--leftright);
  height: auto;
  display: flex;
  justify-content: space-between;
`;
 */


const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  return (
    <Popup key={props.id}>
      <PopupContainer>
        <Link to={ROUTES.HOME}>
          <p>Back</p>
        </Link>
        {cart.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}

        <div>Total: {total.sum}</div>

        <ButtonRoundSmall text="x" type="submit" onClick={() => setCart([])} />
      </PopupContainer>
    </Popup>
  );
};


export default Cart;

export { CartContext, TotalContext };





