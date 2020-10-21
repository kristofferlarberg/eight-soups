import React from "react";
import styled from "styled-components";

const HamburgerButton = styled.button`
  height: auto;
  width: auto;
  margin: var(--lineheight);
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const HamburgerStyle = styled.svg`
  fill: var(--forestgreen);
  width: var(--lineheight);
  height: var(--lineheight);
`;

const HamburgerIcon = (props) => (
  <HamburgerButton onClick={props.onClick}>
    <HamburgerStyle viewBox="0 0 130 100">
      <path d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z" />
    </HamburgerStyle>
  </HamburgerButton>
);

export default HamburgerIcon;
