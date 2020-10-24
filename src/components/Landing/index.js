import React from "react";
import styled from "styled-components";

import { AuthUserContext } from "../Session";
import OnBoarding from "../OnBoarding"

import Menu from "../Menu";

const Container = styled.div`
  margin: 0;
`;

const Landing = () => (
  <Container>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <Menu /> : <OnBoarding />)}
    </AuthUserContext.Consumer>
  </Container>
);

export default Landing;
