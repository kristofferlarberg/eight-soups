import React, { useContext, useState } from "react";
import styled from "styled-components";

import { FormTemplate, InputTemplate } from "../../styles/templates";

import { CartContext } from "../Cart/context";
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
  background: url("eight-soups/images/green.jpg") no-repeat center/100%;
`;

const AddressForm = styled.form`
  ${FormTemplate}
`;

export const AddressInput = styled.input`
  ${InputTemplate}
`;

const OnBoarding = () => {
  const [addressInput, setAddressInput] = useState(null);
  const { customerDetails, setCustomerDetails } = useContext(
    CustomerDetailsContext
  );
  const { cart, setCart } = useContext(CartContext);

  const orderNumber = Math.floor(Math.random() * Math.floor(1000));

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
