import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SoupIcon from "./SoupIcon";
import * as ROUTES from "../../constants/routes";

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

const Logo = () => (
  <LogoContainer>
    <TitleContainer>
      <Link to={ROUTES.HOME}>
        <Title>Eight</Title>
        <Title>Soups</Title>
      </Link> 
    </TitleContainer>
    <Link to={ROUTES.CART}>
      <SoupIcon />
    </Link>
  </LogoContainer>
);

export default Logo;
