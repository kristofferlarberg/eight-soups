import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import { FormTemplate, InputTemplate } from "../../styles/templates";
import { CustomerDetailsContext } from "./context";
import { ButtonGreen } from "../misc/Button";

const Section = styled.section`
	margin: 0;
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('images/green.jpg');
	background-size: cover;
`;

const AddressForm = styled.form`
  ${FormTemplate}
`;

const AddressInput = styled.input`
	${InputTemplate}
	margin-bottom: var(--lineheight);
	margin-right: 0;
`;

const OnBoarding = () => {
  const [addressInput, setAddressInput] = useState(null);
  const { customerDetails, setCustomerDetails } = useContext(
    CustomerDetailsContext
  );

  const orderNumber = Math.floor(Math.random() * Math.floor(1000));

  const handleInputChange = (e) => {
    setAddressInput({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addressInput) {
      setCustomerDetails(() => {
   return {...addressInput, ordernumber: orderNumber};
      });
    }
  };

  return (
    <>
      <Section>
        <AddressForm customerDetails={customerDetails} onSubmit={handleSubmit}>
          <AddressInput
            name="address"
            onChange={handleInputChange}
            placeholder="Skriv in din adress"
          />
          <ButtonGreen text="Fortsätt" type="submit"/>
        </AddressForm>
      </Section>
    </>
  );
};

export default OnBoarding;

export { CustomerDetailsContext };
