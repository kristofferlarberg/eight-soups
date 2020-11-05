import React from "react";
import styled from "styled-components/macro";
import gluten from "./gluten.svg";
import lactose from "./lactose.svg";

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: -0.5rem 0 0 0.8rem;
`;

export const Gluten = () => <Icon src={gluten} alt="Glutenfri" />;

export const Lactose = () => <Icon src={lactose} alt="Laktosfri" />;
