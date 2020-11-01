import { css } from "styled-components";

export const ButtonTemplate = css`
  padding: var(--halfspace);
  border-radius: 5px;
  cursor: pointer;
`;

export const MainTemplate = css`
  margin: ${() => "props.customerDetails.address" ? "10rem 0 0 0" : "0"};
  width: auto;
  box-sizing: border-box;
`;


