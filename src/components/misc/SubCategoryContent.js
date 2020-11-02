import React from "react";
import styled from "styled-components";

const SubCategoryHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: var(--lineheight);
`;

const SubCategoryTitle = styled.h4`
  margin: 0;
`;

export const SubCategorySubtitle = styled.h4`
  margin: 0;
  font-weight: 400;
`;

const SubCategoryContent = (props) => (
    <SubCategoryHeader>
      <SubCategoryTitle>{props.name}</SubCategoryTitle>
      <SubCategorySubtitle>
        {props.subtitle1}
        <br />
        {props.subtitle2}
      </SubCategorySubtitle>
    </SubCategoryHeader>
);

export default SubCategoryContent;
