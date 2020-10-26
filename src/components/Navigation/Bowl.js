import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import SoupIcon from "./SoupIcon";
import * as ROUTES from "../../constants/routes";
import CartContext from "../Cart/CartContext";
import TotalContext from "../Cart/TotalContext";

const BowlContainer = styled.div`
  display: flex;
  align-items: center;
`;

const bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-100px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`;

const AmountContainer = styled.div`
  position: fixed;
  top: 6.7rem;
  right: 4rem;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Amount = styled.h2`
  margin: 0;
  color: var(--red);
  text-align: center;
  margin-top: 3px;
  animation: ${bounce};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-duration: 2s;
  animation-iteration-count: 1;
  transform-origin: bottom;
`;

const Bowl = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const { total, setTotal } = useContext(TotalContext);
  const [bounceAmount, setBounceAmount] = useState(false);

  return (
    <BowlContainer>
      <Link to={ROUTES.CART}>
        <AmountContainer>
          {total.amount > 0 ? <Amount>{total.amount}</Amount> : null}
        </AmountContainer>
        <SoupIcon />
      </Link>
    </BowlContainer>
  );
};

export default Bowl;
