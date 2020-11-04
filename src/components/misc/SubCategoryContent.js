import React from "react";
import styled from "styled-components";
import { RegularH4Template } from "../../styles/templates";

const SubCategoryHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: var(--halfspace) 0;
`;

const SubCategoryFirst = styled.h4`
  margin: 0;
`;

const SubCategorySecond = styled.h4`
  ${RegularH4Template}
`;

const SubCategorySecondContainer = styled.div`
`;

const SubCategoryContent = (props) => (
  <SubCategoryHeader>
    <SubCategoryFirst>{props.name}</SubCategoryFirst>
    <SubCategorySecond>
      <SubCategorySecondContainer>{props.subtitle1}</SubCategorySecondContainer>
      <SubCategorySecondContainer>{props.subtitle2}</SubCategorySecondContainer>
      <SubCategorySecondContainer>{props.subtitle3}</SubCategorySecondContainer>
    </SubCategorySecond>
  </SubCategoryHeader>
);

export default SubCategoryContent;
