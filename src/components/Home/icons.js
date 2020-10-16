import React from "react";
import styled from "styled-components";
import gluten from "./gluten.svg";
import lactose from "./lactose.svg";

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Gluten = () => <Icon src={gluten} alt="Glutenfri" />;

export const Lactose = () => <Icon src={lactose} alt="Laktosfri" />;
