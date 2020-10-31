import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AddressContext } from "../OnBoarding/context";
import { StyledForm, StyledInput } from "../OnBoarding";
import { ButtonGreen } from "../misc/Button";

import { CartContext, TotalContext } from "../Cart/context";
import CartItem from "./CartItem";

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalAmount = styled.h4``;

const Amounts = styled.h4`
  font-weight: 400;
`;

const Orders = styled.section`
  margin-bottom: var(--lineheight);
`;

const OrderSteps = () => {
  const [orderPage, setOrderPage] = useState(1);

  console.log(orderPage);

  const nextPage = () => {
    setOrderPage(orderPage + 1);
  };

  const previousPage = () => {
    if (orderPage > 1) {
      setOrderPage(orderPage - 1);
    }
  };

  return (
    <>
      {orderPage === 1 ? (
        <>
          <Order nextPage={() => nextPage()} />
          <Order previousPage={() => previousPage()} />
        </>
      ) : null}
      {orderPage === 2 ? (
        <>
          <Address
            nextPage={() => nextPage()}
            previousPage={() => previousPage()}
          />
        </>
      ) : null}
      {orderPage === 3 ? (
        <>
          <Payment
            nextPage={() => nextPage()}
            previousPage={() => previousPage()}
          />
        </>
      ) : null}
      {orderPage === 4 ? (
        <>
          <Summary
            nextPage={() => nextPage()}
            previousPage={() => previousPage()}
          />
        </>
      ) : null}
      {orderPage === 5 ? (
        <>
          <Exit
            nextPage={() => nextPage()}
            previousPage={() => previousPage()}
          />
        </>
      ) : null}
    </>
  );
};

export default OrderSteps;

const Order = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  const totalSum = total.sum + 39;

  return (
    <>
      <Orders>
        {cart.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </Orders>
      <AmountContainer>
        <Amounts>Delsumma</Amounts>
        <Amounts>{total.sum}kr</Amounts>
      </AmountContainer>
      <AmountContainer>
        <Amounts>Leveransavgift</Amounts>
        <Amounts>39kr</Amounts>
      </AmountContainer>
      <AmountContainer>
        <TotalAmount>Totalbelopp</TotalAmount>
        <TotalAmount>{totalSum}kr</TotalAmount>
      </AmountContainer>
      <ButtonGreen text="Nästa" onClick={() => props.nextPage()} />
      <ButtonGreen text="Tillbaka" onClick={() => props.previousPage()} />
    </>
  );
};

const Address = (props) => {
  const { address, setAddress } = useContext(AddressContext);

  const INITIAL_STATE = {
    firstname: "",
    lastname: "",
    updatedaddress: "",
  };

  const [customerDetails, setCustomerDetails] = useState(INITIAL_STATE);

  const { firstname, lastname, updatedaddress } = customerDetails;

  const handleInputChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  console.log(customerDetails);

  return (
    <>
      <StyledForm address={address}>
        <h4>Förnamn</h4>
        <StyledInput
          name="firstname"
          value={firstname}
          onChange={handleInputChange}
        />
        <h4>Efternamn</h4>
        <StyledInput
          name="lastname"
          value={lastname}
          onChange={handleInputChange}
        />
        <h4>Adress</h4>
        <StyledInput
          name="updatedaddress"
          value={updatedaddress}
          onChange={handleInputChange}
          placeholder={address}
        />
        <ButtonGreen text="Nästa" onClick={() => props.nextPage()} />
        <ButtonGreen text="Tillbaka" onClick={() => props.previousPage()} />
      </StyledForm>
    </>
  );
};

const Payment = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  const totalSum = total.sum + 39;

  return (
    <>
      <ButtonGreen text="Nästa" onClick={() => props.nextPage()} />
      <ButtonGreen text="Tillbaka" onClick={() => props.previousPage()} />
    </>
  );
};

const Summary = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  const totalSum = total.sum + 39;

  return (
    <>
      <ButtonGreen text="Nästa" onClick={() => props.nextPage()} />
      <ButtonGreen text="Tillbaka" onClick={() => props.previousPage()} />
    </>
  );
};

const Exit = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  const totalSum = total.sum + 39;

  return (
    <>
      <ButtonGreen
        text="Avsluta"
        /* onClick LINK HOME */
      />
    </>
  );
};
