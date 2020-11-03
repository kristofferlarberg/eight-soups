import React from "react";
import styled from "styled-components";
import { RegularH4Template } from "../../styles/templates";

const SubCategoryHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0 0 var(--lineheight) 0;
`;

const SubCategoryFirst = styled.h4`
  margin: 0;
`;

const SubCategorySecond = styled.h4`
  ${RegularH4Template}
`;

const SubCategoryContent = (props) => (
  <SubCategoryHeader>
    <SubCategoryFirst>{props.name}</SubCategoryFirst>
    <SubCategorySecond>
      {props.subtitle1}
      <br />
      {props.subtitle2}
    </SubCategorySecond>
  </SubCategoryHeader>
);

export default SubCategoryContent;
