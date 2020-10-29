import React from "react";
import styled from "styled-components";

import OnBoarding from "../OnBoarding"
import { MainTemplate } from "../../styles/templates";

const Main = styled.main`
  ${MainTemplate}
`;

const Container = styled.div`
  margin: 0;
`;

const Landing = () => (
  <Main>
    <Container>
      <OnBoarding />
    </Container>
  </Main>
);

export default Landing;
