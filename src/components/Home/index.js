import React, { useContext } from "react";
import styled from "styled-components";

import Menu from "../Menu";
import OnBoarding from "../OnBoarding";
import { MainTemplate } from "../../styles/templates";
import { AddressContext } from "../OnBoarding";

const Main = styled.main`
  ${MainTemplate}
`;

const Container = styled.div`
  margin: 0;
`;

const Home = ({ menu }) => {
  const { address } = useContext(AddressContext);

  return (
    <Main>
      {address ? (
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
