import React, { useContext } from "react";
import styled from "styled-components";

import Menu from "../Menu";
import OnBoarding from "../OnBoarding";
import { MainTemplate } from "../../styles/templates";
import { CustomerDetailsContext } from "../OnBoarding";

const Main = styled.main`
  ${MainTemplate}
`;

const Container = styled.div`
  margin: 0;
`;

const Home = ({ menu }) => {
  const { customerDetails } = useContext(CustomerDetailsContext);

  return (
    <Main>
      {customerDetails.address ? (
        <Menu menu={menu} />
      ) : (
        <Container>
          <OnBoarding />
        </Container>
      )}
    </Main>
  );
};

export default Home;
