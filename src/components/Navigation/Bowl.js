import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";

import SoupIcon from "./SoupIcon";
import * as ROUTES from "../../constants/routes";
import { TotalContext } from "../Cart/context";

const BowlContainer = styled.div`
  display: flex;
  align-items: center;
`;

const bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-30px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-1px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`;

const AmountContainer = styled.div`
  position: fixed;
  top: 40px;
  right: 16px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Amount = styled.h4`
  margin: 0;
  color: var(--forestgreen);
  text-align: center;
  margin-top: 2px;
  animation: ${bounce};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-duration: 2s;
  animation-iteration-count: 1;
  transform-origin: bottom;
`;

const Bowl = () => {
  const { total } = useContext(TotalContext);

  console.log(total)

  return (
    <>
      {total.amount > 0 ? (
        <BowlContainer>
          <Link to={ROUTES.CART}>
            <AmountContainer>
              {total.amount > 0 ? <Amount>{total.amount}</Amount> : null}
            </AmountContainer>
            <SoupIcon />
          </Link>
        </BowlContainer>
      ) : (
        <BowlContainer>
          <AmountContainer>
            {total.amount > 0 ? <Amount>{total.amount}</Amount> : null}
          </AmountContainer>
          <SoupIcon />
        </BowlContainer>
      )}
    </>
  );
};

export default Bowl;
