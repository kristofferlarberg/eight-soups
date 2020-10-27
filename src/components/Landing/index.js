import React from "react";
import styled from "styled-components";

import OnBoarding from "../OnBoarding"


const Container = styled.div`
  margin: 0;
`;

const Landing = () => (
  <Container>
     <OnBoarding />
  </Container>
);

export default Landing;
