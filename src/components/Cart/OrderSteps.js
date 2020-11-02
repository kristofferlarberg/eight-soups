import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CustomerDetailsContext } from "../OnBoarding";
import { StyledInput } from "../OnBoarding";
import { Subheader, SubheadText } from "../Menu/MenuItemPop";
import {
  OrderTitleContainer,
  OrderItemTitle,
  OrderItemExtras,
  OrderItemContainer,
} from "./CartItem";

import SubCategory from "../misc/SubCategory";
import SubCategoryContent, { ItemSubtitle } from "../misc/SubCategoryContent";

import * as ROUTES from "../../constants/routes";

import { CartContext, TotalContext } from "../Cart/context";
import CartItem from "./CartItem";
import { ButtonRoundSmallWide } from "../misc/Button";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
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

const Delivery = styled(AmountContainer)`
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const TotalAmount = styled.h4``;

const Amounts = styled.h4`
  font-weight: 400;
`;

const Orders = styled.div`
  margin-bottom: var(--lineheight);
  width: 100%;
`;

export const StyledForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  box-sizing: border-box;
`;

const DeliveryTime = styled.h1`
color: var(--green);
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
      <SubCategory text="Din beställning" />
      {cart.map((item) => (
        <SubCategoryContent
          {...item}
          key={item.id}
          name={item.name}
          subtitle1={item.extra[0]}
          subtitle2={item.extra[1]}
        />
      ))}
      <SubCategory text="Levereras till" />
      <Delivery>
        <SubCategoryContent
          name={`${customerDetails.firstname} ${customerDetails.lastname}`}
          subtitle1={customerDetails.address}
        />
      </Delivery>
      <SubCategory text="Betalning" />
  
       <SubCategoryContent
          name={`${totalSum} kr`}
        />
    </>
  );
};

const Exit = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  const totalSum = total.sum + 39;

  return (
    <>
      <SubCategory text="Estimerad leveranstid" />
      <DeliveryTime>12</DeliveryTime>
    </>
  );
};
