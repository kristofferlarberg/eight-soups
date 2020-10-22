import React from "react";
import styled from "styled-components";

import SignIn from "../SignIn";

const Section = styled.section`
  margin: 0;
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OnBoarding = () => (
  <Section>
    <SignIn />
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

export default OnBoarding;