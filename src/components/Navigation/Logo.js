import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SoupIcon from "./SoupIcon";
import * as ROUTES from "../../constants/routes";
import CartContext from "../Cart/CartContext";
import TotalContext from "../Cart/TotalContext";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
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
`;

const Logo = () => {
  const { cart, setCart } = useContext(CartContext);
  const { total, setTotal } = useContext(TotalContext);

  return (
    <LogoContainer>
      <TitleContainer>
        <Link to={ROUTES.HOME}>
          <Title>Eight</Title>
          <Title>Soups</Title>
        </Link>
      </TitleContainer>
      <Link to={ROUTES.CART}>
        <AmountContainer>
          <Amount>{total.amount}</Amount>
        </AmountContainer>
        <SoupIcon />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
