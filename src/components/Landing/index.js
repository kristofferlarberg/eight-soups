import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

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
      {(authUser) => (authUser ? <LandingAuth /> : <LandingNonAuth />)}
    </AuthUserContext.Consumer>
  </Container>
);

const LandingAuth = () => (
  <Section>
    <h1>You are logged in.</h1>
  </Section>
);

const LandingNonAuth = () => (
  <Section>
      <form /* onSubmit={this.onSubmit} */>
        <input
          name="address"
          /* value={address} */
          /*  onChange={this.onChange} */
          type="text"
          placeholder="Enter your address"
        />
        <button /* disabled={isInvalid}  */ type="submit">Ok</button>
      </form>
  </Section>
);
export default Landing;
