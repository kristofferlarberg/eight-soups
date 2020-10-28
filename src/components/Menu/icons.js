import React from "react";
import styled from "styled-components";
import gluten from "./gluten.svg";
import lactose from "./lactose.svg";

const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin: -0.5rem 0 0 1.5rem;
`;

export const Gluten = () => <Icon src={gluten} alt="Glutenfri" />;

export const Lactose = () => <Icon src={lactose} alt="Laktosfri" />;
