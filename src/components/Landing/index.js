import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import SignIn from "../SignIn"

import Menu from "../Menu";

const Container = styled.div`
  margin: 0;
`;

const Section = styled.section`
  margin: 0;
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Landing = () => (
  <Container>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <Menu /> : <OnBoarding />)}
    </AuthUserContext.Consumer>
  </Container>
);

const OnBoarding = () => (
  <Section>

<SignIn/>


{/*     <form onSubmit={this.onSubmit}>
      <input
        name="address"
        type="text"
        placeholder="Enter your address"
      />
      <button disabled={isInvalid}  type="submit">Ok</button>
    </form> */}
  </Section>
);
export default Landing;
