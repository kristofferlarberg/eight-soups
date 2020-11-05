import React from "react";
import styled from "styled-components/macro";
import { RegularH4Template } from "../../styles/templates";

const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--lineheight) 0;
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
  <SubCategory>
    <SubCategoryFirst>{props.name}</SubCategoryFirst>
    <SubCategorySecond>
      <SubCategorySecondContainer>{props.subtitle1}</SubCategorySecondContainer>
      <SubCategorySecondContainer>{props.subtitle2}</SubCategorySecondContainer>
      <SubCategorySecondContainer>{props.subtitle3}</SubCategorySecondContainer>
    </SubCategorySecond>
  </SubCategory>
);

export default SubCategoryContent;
