import React from "react";
import styled from "styled-components";

const Subheader = styled.header`
  padding: var(--halfspace) var(--leftright);
  margin: 0;
  background-color: var(--grey);
  color: var(--darkgrey);
  width: 100%;
  box-sizing: border-box;
`;

const SubheadText = styled.h3`
  margin: 0;
  text-align: left;
`;

const SubCategory = (props) => (
  <Subheader>
    <SubheadText>{props.text}</SubheadText>
  </Subheader>
);

export default SubCategory;