import React, { useContext } from "react";
import styled from "styled-components/macro";
import Menu from "../Menu";
import OnBoarding from "../OnBoarding";
import { CustomerDetailsContext } from "../OnBoarding";

const Container = styled.div`
  margin: 0;
`;

const Home = ({ menu }) => {
  const { customerDetails } = useContext(CustomerDetailsContext);

  const { address } = customerDetails;

  return (
    <>
      {address ? (
        <Menu menu={menu} />
      ) : (
        <Container>
          <OnBoarding />
        </Container>
      )}
    </>
  );
};

export default Home;
