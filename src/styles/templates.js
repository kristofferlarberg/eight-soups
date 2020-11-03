import { css } from "styled-components";

export const ButtonTemplate = css`
  padding: var(--halfspace);
  border-radius: 5px;
  cursor: pointer;
`;

export const FormTemplate = css`
  padding: 0 var(--leftright);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const InputTemplate = css`
  background-color: rgb(232, 232, 232, 0.8);
  border-radius: 25px;
  border: 0;
  padding: var(--halfspace);
  margin-bottom: var(--halfspace);
`;

export const RegularH4Template = css`
  margin: 0;
  font-weight: 400;
`;