import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";

import { ButtonGreen } from "../misc/Button";

const Section = styled.section`
  margin: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("images/green.jpg") no-repeat center/100%;
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
  const [customerAddress, setCustomerAddress] = useLocalStorage(
    "customerAddress",
    ""
  );

  const history = useHistory();

  const handleInputChange = (e) => {
    setCustomerAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerAddress) {
      history.push(ROUTES.HOME);
    }
  };

  return (
    <Section>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={customerAddress}
          placeholder="Skriv in din adress"
          onChange={handleInputChange}
        />
        <ButtonGreen text="Fortsätt" type="submit" />
      </StyledForm>
    </Section>
  );
};

// Hook

function useLocalStorage(key, initialValue) {
  // State to store our value

  // Pass initial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key

      const item = window.localStorage.getItem(key);

      // Parse stored json or if none return initialValue

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue

      console.log(error);

      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...

  // ... persists the new value to localStorage.

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState

      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state

      setStoredValue(valueToStore);

      // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case

      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default OnBoarding;
