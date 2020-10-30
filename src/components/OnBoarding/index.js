import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MainTemplate } from "../../styles/templates";
import { useLocalStorage } from "../functions/useLocalStorage";

import * as ROUTES from "../../constants/routes";

import { AddressContext } from "./context";
import { ButtonGreen } from "../misc/Button";

const Main = styled.main`
  ${MainTemplate}
`;

const Section = styled.section`
  margin: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("eight-soups/images/green.jpg") no-repeat center/100%;
`;

const StyledForm = styled.form`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  background-color: rgb(232, 232, 232, 0.8);
  border-radius: 25px;
  border: 0;
  padding: var(--halfspace);
  margin-bottom: var(--halfspace);
  width: 100%;
`;

const OnBoarding = () => {
  const [addressInput, setAddressInput] = useState(null);
  const { address, setAddress } = useContext(AddressContext);

  /* const history = useHistory(); */

  const handleInputChange = (e) => {
    setAddressInput(e.target.value);
  };

  console.log(addressInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addressInput) {
      setAddress(() => {
        return addressInput;
      });
    }
    /* history.push(ROUTES.HOME); */
  };

  return (
    <Main address={address}>
      <Section>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name={address}
            placeholder="Skriv in din adress"
            onChange={handleInputChange}
          />
          <ButtonGreen text="Fortsätt" type="submit" />
        </StyledForm>
      </Section>
    </Main>
  );
};

export default OnBoarding;

export { AddressContext };
