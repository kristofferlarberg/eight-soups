import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CustomerDetailsContext } from "../OnBoarding";
import { StyledForm, StyledInput } from "../OnBoarding";
import { Subheader, SubheadText } from "../Menu/MenuItemPop";
import {
  OrderTitleContainer,
  OrderItemTitle,
  OrderItemExtras,
} from "./CartItem";

import * as ROUTES from "../../constants/routes";

import { CartContext, TotalContext } from "../Cart/context";
import CartItem from "./CartItem";
import { ButtonRoundSmallWide } from "../misc/Button";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--topbottom);
  width: 100%;
`;

const PriceContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: var(--topbottom);
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalAmount = styled.h4``;

const Amounts = styled.h4`
  font-weight: 400;
`;

const Orders = styled.div`
  margin-bottom: var(--lineheight);
  width: 100%;
`;

const OrderSteps = ({ orderPage }) => {
  return (
    <Container>
      {orderPage === 1 ? (
        <>
          <Order />
        </>
      ) : null}
      {orderPage === 2 ? (
        <>
          <Address />
        </>
      ) : null}
      {orderPage === 3 ? (
        <>
          <Payment />
        </>
      ) : null}
      {orderPage === 4 ? (
        <>
          <Summary />
        </>
      ) : null}
      {orderPage === 5 ? (
        <>
          <Exit />
        </>
      ) : null}
    </Container>
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
      <Link to={ROUTES.HOME}>
        <ButtonRoundSmallWide text="Lägg till fler" />
      </Link>
      <PriceContainer>
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
      </PriceContainer>
    </>
  );
};

const Address = (props) => {
  const { customerDetails, setCustomerDetails } = useContext(
    CustomerDetailsContext
  );

  const { firstname, lastname, address } = customerDetails;

  const handleInputChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  console.log(customerDetails);

  return (
    <>
      <StyledForm customerDetails={customerDetails}>
        <h4>Förnamn</h4>
        <StyledInput
          name="firstname"
          value={firstname}
          onChange={handleInputChange}
          placeholder={customerDetails.firstname}
        />
        <h4>Efternamn</h4>
        <StyledInput
          name="lastname"
          value={lastname}
          onChange={handleInputChange}
          placeholder={customerDetails.lastname}
        />
        <h4>Adress</h4>
        <StyledInput
          name="address"
          value={address}
          onChange={handleInputChange}
          placeholder={customerDetails.address}
        />
      </StyledForm>
    </>
  );
};

const Payment = (props) => {
  return <>Val av betalmetod, fyll i kortuppgifter</>;
};

const Summary = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);
  const { customerDetails, setCustomerDetails } = useContext(
    CustomerDetailsContext
  );
  const totalSum = total.sum + 39;

  return (
    <>
      <Subheader>
        <SubheadText>Din beställning</SubheadText>
      </Subheader>
      {cart.map((item) => (
        <OrderTitleContainer {...item} key={item.id}>
          <OrderItemTitle>{item.name}</OrderItemTitle>
          <OrderItemExtras>
            {item.extra[0]}, {item.extra[1]}
          </OrderItemExtras>
        </OrderTitleContainer>
      ))}
      <Subheader>
        <SubheadText>Levereras till</SubheadText>
      </Subheader>
      <h4>
        {customerDetails.firstname} {customerDetails.lastname}
      </h4>
      <Amounts>{customerDetails.address}</Amounts>
      <Subheader>
        <SubheadText>Betalning</SubheadText>
      </Subheader>
      <Amounts>Kortnummer</Amounts><h4>{totalSum}kr</h4>
    </>
  );
};

const Exit = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  const totalSum = total.sum + 39;

  return <></>;
};
