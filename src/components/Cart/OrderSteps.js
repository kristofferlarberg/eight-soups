import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/macro";
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
  margin: 0;
`;

const PriceSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 var(--leftright);
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
  margin: var(--halfspace) var(--leftright);
`;

const SummaryItemContainerPayment = styled(SummaryItemContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryItemContainerCenter = styled(SummaryItemContainer)`
  display: flex;
  justify-content: center;
`;

const SummaryItemContainerCenterTop = styled(SummaryItemContainerCenter)`
  margin: 0 var(--leftright) var(--lineheight) var(--leftright);
`;

const Card = styled.div`
  display: flex;
  align-items: center;
`;

const CardImg = styled.img`
  height: 25px;
  width: auto;
  margin-right: 1rem;
`;

const NarrowButtonDiv = styled.div`
  width: 50%;
`;

const OrderSteps = (props) => {
  const { cart } = useContext(CartContext);
  const [totalOrderTime, setTotalOrderTime] = useState(0);
  const deliveryTime = 20;

  useEffect(() => {
    setTotalOrderTime(() => {
      let cookingTimes = [];
      cart.map((item) => cookingTimes.push(item.cookingtime));
      let totalCookingTime = cookingTimes.reduce((a, b) => a + b, 0);
      let result = totalCookingTime + deliveryTime;
      return result;
    });
  }, [cart]);

  return (
    <Container>
      {props.orderPage === 1 ? (
        <>
          <Order totalOrderTime={totalOrderTime} />
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
          <Exit totalOrderTime={totalOrderTime} />
        </>
      ) : null}
    </Container>
  );
};

export default OrderSteps;

const Order = ({ totalOrderTime }) => {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  const totalSum = total.sum + 39;

  return (
    <>
      {cart.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
      <SummaryItemContainerCenter>
        <Link to={ROUTES.HOME}>
          <ButtonGrey text="Lägg till fler" />
        </Link>
      </SummaryItemContainerCenter>
      <SummaryItemContainer>
        <SubCategoryContent name={`Leveranstid: ${totalOrderTime}`} />
      </SummaryItemContainer>
      <PriceContainer>
        <PriceSummaryContainer>
          <SubCategoryContent subtitle1="Delsumma" />
          <SubCategoryContent name={`${total.sum}kr`} />
        </PriceSummaryContainer>
        <PriceSummaryContainer>
          <SubCategoryContent subtitle1="Leveransavgift" />
          <SubCategoryContent name="39kr" />
        </PriceSummaryContainer>
        <PriceSummaryContainer>
          <SubCategoryContent subtitle1="Totalbelopp" />
          <SubCategoryContent name={`${totalSum}kr`} />
        </PriceSummaryContainer>
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

  return (
    <>
      {delivery ? (
        <>
          <SummaryItemContainerCenterTop>
            <NarrowButtonDiv>
              <ButtonGrey text="Välj avhämtning" onClick={choosePickup} />
            </NarrowButtonDiv>
          </SummaryItemContainerCenterTop>
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
          <SummaryItemContainerCenterTop>
            <NarrowButtonDiv>
              <ButtonGrey text="Välj leverans" onClick={choosePickup} />
            </NarrowButtonDiv>
          </SummaryItemContainerCenterTop>
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
        <NarrowButtonDiv>
          <ButtonGrey text="Kortbetalning" onClick={() => props.nextPage()} />
        </NarrowButtonDiv>
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
        <Card>
          <CardImg src={card}></CardImg>
          <SubCategoryContent name="*** *** 123" />
        </Card>
        <SubCategoryContent name={`${totalSum} kr`} />
      </SummaryItemContainerPayment>
    </>
  );
};

const Exit = ({ totalOrderTime }) => {
  const { customerDetails, setCustomerDetails } = useContext(
    CustomerDetailsContext
  );
  const [arrivalTime, setArrivalTime] = useState([]);

  useEffect(() => {
    setArrivalTime(() => {
      var today = new Date();
      const currentHours = today.getHours();
      const currentMinutes = today.getMinutes();
      let arrivalMinutes = currentMinutes + totalOrderTime;
      let arrivalHours = currentHours;
      if (arrivalMinutes >= 60) {
        arrivalMinutes = arrivalMinutes % 60;
        arrivalHours += Math.floor(arrivalMinutes / 60);
        return [arrivalHours, arrivalMinutes];
      }
      return [arrivalHours, arrivalMinutes];
    });
  }, [totalOrderTime]);

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
        <SummaryItemHighlight>
          {arrivalTime[0]}:{arrivalTime[1]}
        </SummaryItemHighlight>
      </SummaryItemContainerCenter>
    </>
  );
};
