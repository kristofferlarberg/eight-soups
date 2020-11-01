import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MainTemplate } from "../../styles/templates";

import { CustomerDetailsContext } from "./context";
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

export const StyledForm = styled.form`
  box-sizing: border-box;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  background-color: rgb(232, 232, 232, 0.8);
  border-radius: 25px;
  border: 0;
  padding: var(--halfspace);
  margin-bottom: var(--halfspace);
  width: 100%;
`;

const OnBoarding = () => {
  const [addressInput, setAddressInput] = useState(null);
  const { customerDetails, setCustomerDetails } = useContext(
    CustomerDetailsContext
  );

  const { firstname, lastname, address } = customerDetails;

  const handleInputChange = (e) => {
    setAddressInput({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  console.log(addressInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addressInput) {
      setCustomerDetails(() => {
        return addressInput;
      });
    }
  };

  return (
    <Main>
      <Section>
        <StyledForm customerDetails={customerDetails} onSubmit={handleSubmit}>
          <StyledInput
            name="address"
            /* value={address} */
            onChange={handleInputChange}
            placeholder="Skriv in din adress"
          />
          <ButtonGreen text="Fortsätt" type="submit" />
        </StyledForm>
      </Section>
    </Main>
  );
};

export default OnBoarding;

export { CustomerDetailsContext };
