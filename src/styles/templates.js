import { css } from "styled-components/macro";

export const ButtonTemplate = css`
  padding: var(--halfspace);
  border-radius: 5px;
  cursor: pointer;
`;

export const FormTemplate = css`
  padding: 0;
  margin: var(--topbottom) 0;
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
`;

export const LabelTemplate = css`
  font-size: var(--default);
  line-height: var(--lineheight);
  font-weight: 400;
  margin-bottom: var(--halfspace);
`;

export const RegularH4Template = css`
  margin: 0;
  font-weight: 400;
`;