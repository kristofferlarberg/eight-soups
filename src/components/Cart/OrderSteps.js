import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CustomerDetailsContext } from "../OnBoarding";
import { FormTemplate, InputTemplate } from "../../styles/templates";

import card from "./master-card.svg";

import SubCategory from "../misc/SubCategory";
import SubCategoryContent from "../misc/SubCategoryContent";

import * as ROUTES from "../../constants/routes";

import { CartContext, TotalContext } from "../Cart/context";
import CartItem from "./CartItem";
import { ButtonGrey } from "../misc/Button";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: var(--topbottom);
`;

const PriceContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin: var(--topbottom) 0 0 0;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 var(--leftright);
`;

const TotalAmount = styled.h4``;

const Amounts = styled.h4`
  font-weight: 400;
`;

const Orders = styled.div`
  margin-bottom: var(--lineheight);
  width: 100%;
`;

const ContactForm = styled.form`
  ${FormTemplate}
`;

const ContactInput = styled.input`
  ${InputTemplate}
`;

const DeliveryTime = styled.h1`
  color: var(--green);
`;

const SummaryItemContainer = styled.div`
  margin: var(--lineheight) var(--leftright) 0 var(--leftright);
`;

const SummaryItemContainerPayment = styled(SummaryItemContainer)`
  display: flex;
  justify-content: space-between;
`;

const SummaryItemContainerCenter = styled(SummaryItemContainer)`
  display: flex;
  justify-content: center;
`;

const CardImg = styled.img`
  height: 25px;
  width: auto;
`;

const DeliveryButtonsContainer = styled.div`
  margin: 0 var(--leftright) var(--lineheight) var(--leftright);
  display: flex;
  justify-content: space-between;
`;

const DeliveryButtonDiv = styled.div`
  width: 100%;
  margin: var(--halfspace);
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

const Order = () => {
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
      <SummaryItemContainerCenter>
        <Link to={ROUTES.HOME}>
          <ButtonGrey text="Lägg till fler" />
        </Link>
      </SummaryItemContainerCenter>
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
  const [delivery, setDelivery] = useState(true);

  const { firstname, lastname, address } = customerDetails;

  const handleInputChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const choosePickup = () => {
    setDelivery(!delivery);
    if (delivery === false) {
      setCustomerDetails({ ...customerDetails, ordermethod: "delivery" });
    }
    if (delivery === true) {
      setCustomerDetails({
        ...customerDetails,
        address: "pickup",
        ordermethod: "pickup",
      });
    }
  };

  console.log(customerDetails);

  return (
    <>
      {delivery ? (
        <>
          <DeliveryButtonsContainer>
            <DeliveryButtonDiv>
              <ButtonGrey text="Välj avhämtning" onClick={choosePickup} />
            </DeliveryButtonDiv>
          </DeliveryButtonsContainer>
          <ContactForm customerDetails={customerDetails}>
            <h4>Förnamn</h4>
            <ContactInput
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
              placeholder={customerDetails.firstname}
            />
            <h4>Efternamn</h4>
            <ContactInput
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              placeholder={customerDetails.lastname}
            />
            <h4>Adress</h4>
            <ContactInput
              name="address"
              value={address}
              onChange={handleInputChange}
              placeholder={customerDetails.address}
            />
          </ContactForm>
        </>
      ) : (
        <>
          <DeliveryButtonsContainer>
            <DeliveryButtonDiv>
              <ButtonGrey text="Välj leverans" onClick={choosePickup} />
            </DeliveryButtonDiv>
          </DeliveryButtonsContainer>
          <SubCategory text="Avhämtning" />
          <SummaryItemContainer>
            <SubCategoryContent
              name="Åtta Soppor"
              subtitle1="Gatanvägen 92"
              subtitle2="123 45"
            />
          </SummaryItemContainer>
        </>
      )}
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
      <SummaryItemContainer>
        {cart.map((item) => (
          <SubCategoryContent
            {...item}
            key={item.id}
            name={item.name}
            subtitle1={item.extra[0]}
            subtitle2={item.extra[1]}
          />
        ))}
      </SummaryItemContainer>
      <SubCategory text="Levereras till" />
      <SummaryItemContainer>
        <SubCategoryContent
          name={`${customerDetails.firstname} ${customerDetails.lastname}`}
          subtitle1={customerDetails.address}
        />
      </SummaryItemContainer>
      <SubCategory text="Betalning" />
      <SummaryItemContainerPayment>
        <CardImg src={card}></CardImg>
        <SubCategoryContent name={`${totalSum} kr`} />
      </SummaryItemContainerPayment>
    </>
  );
};

const Exit = (props) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);
  const { customerDetails, setCustomerDetails } = useContext(
    CustomerDetailsContext
  );

  return (
    <>
      <SubCategory text="Ordernummer" />
      <SummaryItemContainer>
        <SubCategoryContent name={customerDetails.ordernumber} />
      </SummaryItemContainer>
      <SubCategory text="Leveranstid" />
      <SummaryItemContainerCenter>
        <DeliveryTime>12:00</DeliveryTime>
      </SummaryItemContainerCenter>
    </>
  );
};
