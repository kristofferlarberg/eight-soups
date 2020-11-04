import React, { useState, useContext, useEffect } from "react";
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

const SummaryItemHighlight = styled.h1`
  color: var(--green);
`;

const SummaryItemContainer = styled.div`
  margin: var(--lineheight) var(--leftright);
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

const DeliveryButtonDiv = styled.div`
  width: 50%;
  margin: var(--halfspace);
`;

const OrderSteps = (props) => {
  return (
    <Container>
      {props.orderPage === 1 ? (
        <>
          <Order />
        </>
      ) : null}
      {props.orderPage === 2 ? (
        <>
          <Address />
        </>
      ) : null}
      {props.orderPage === 3 ? (
        <>
          <Payment nextPage={() => props.nextPage()} />
        </>
      ) : null}
      {props.orderPage === 4 ? (
        <>
          <Summary />
        </>
      ) : null}
      {props.orderPage === 5 ? (
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

  const deliveryTime = 20;
  const totalOrderTime = [];

  useEffect(() => {
    const calculateTotalTime = () => {
      let categoryTime = cart.map((item) => item.cookingtime * item.amount);
      let totalTime = categoryTime.reduce((a, b) => a + b, 0);
      let result = totalTime + deliveryTime;
      return totalOrderTime.push(result);
    };
    calculateTotalTime();
  }, [cart]);

console.log(totalOrderTime[0]);  

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
      <SummaryItemContainer>
        <SubCategoryContent name={`Leveranstid: ${totalOrderTime[0]}`} />
      </SummaryItemContainer>
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
          <SummaryItemContainerCenter>
            <DeliveryButtonDiv>
              <ButtonGrey text="Välj avhämtning" onClick={choosePickup} />
            </DeliveryButtonDiv>
          </SummaryItemContainerCenter>
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
          <SummaryItemContainerCenter>
            <DeliveryButtonDiv>
              <ButtonGrey text="Välj leverans" onClick={choosePickup} />
            </DeliveryButtonDiv>
          </SummaryItemContainerCenter>
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
  return (
    <>
      <SummaryItemContainerCenter>
        <DeliveryButtonDiv>
          <ButtonGrey text="Kortbetalning" onClick={() => props.nextPage()} />
        </DeliveryButtonDiv>
      </SummaryItemContainerCenter>
    </>
  );
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
            subtitle1={`Antal: ${item.amount}`}
            subtitle2={item.extra[0]}
            subtitle3={item.extra[1]}
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
      <SummaryItemContainerCenter>
        <SummaryItemHighlight>
          {customerDetails.ordernumber}
        </SummaryItemHighlight>
      </SummaryItemContainerCenter>
      <SubCategory text="Leveranstid" />
      <SummaryItemContainerCenter>
        <SummaryItemHighlight>12:00</SummaryItemHighlight>
      </SummaryItemContainerCenter>
    </>
  );
};
