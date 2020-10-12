import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

import img1 from "../../images/roastedtomato.jpg";

const Container = styled.div`
  margin: 0;
`;

const Section = styled.section`
  margin: 0;
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  background: no-repeat center/100% url(${img1});
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
