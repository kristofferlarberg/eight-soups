import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  --font-family: "Helvetica", Times, serif;
  --default: 1.5rem;
  --large: calc(var(--default) * 2);
  --medium:calc(var(--default) * 1.3);
  --small:calc(var(--default) * 1.1);
  --xsmall:calc(var(--default) * 0.8);
  --lineheight: 2.4rem;
  --halfspace: calc(var(--lineheight) * 0.5);
  --topbottom: calc(var(--lineheight) * 2);
  --leftright: calc(var(--lineheight) * 1.5);
  --grey: #e8e8e8;
  --darkgrey: #808080;
  --green: #46b03c;
  --forestgreen: #23591e;
  --red: #d92e3a;

}

body {
  margin: 0;
  background-color: var(--grey);
  font-family: var(--font-family);
}

h1 {
  font-size: var(--large);
  font-weight: 400;
}

h2 {
  font-size: var(--medium);
  font-weight: 400;
}

h3 {
  font-size: var(--small);
  font-weight: 700;
}

h4 {
  font-size: var(--xsmall);
  font-weight: 700;
  color: var(--darkgrey);
}

p {
  font-size: var(--default);
  line-height: var(--lineheight);
  font-weight: 400;
}

a,
a:hover,
a:active,
a:visited {
  font-size: var(--font-size);
  line-height: var(--lineheight);
  color: grey;
  text-decoration: none;
}

ul {
  font-size: var(--default);
  line-height: calc(var(--lineheight) * 2);
  list-style-type:none;
  margin: 0;
  padding: 0;
}

label {
  font-size: var(--default);
  line-height: var(--lineheight);
  font-weight: 400;
  margin-bottom: var(--halfspace);
}

`;
