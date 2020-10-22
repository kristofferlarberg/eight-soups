import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  --font-family: "Helvetica", Times, serif;
  --font-size: 1.5rem;
  --lineheight: 2.4rem;
  --halfspace: calc(var(--lineheight) * 0.5);
  --topbottom: calc(var(--lineheight) * 2);
  --leftright: calc(var(--lineheight) * 1.5);
  --grey: #e8e8e8;
  --darkgrey: #ccc;
  --green: #9ab54a;
  --forestgreen: #23591e;
}

body {
  margin: 0;
  background-color: white;
  font-family: var(--font-family);
}

h1 {
  font-size: calc(var(--font-size) * 2);
  font-weight: 700;
}

h2 {
  font-size: calc(var(--font-size) * 1.3);
  font-weight: 700;
}

h3 {
  font-size: calc(var(--font-size) * 1.2);
  font-weight: 400;
}

p {
  font-size: var(--font-size);
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
  font-size: var(--font-size);
  line-height: calc(var(--lineheight) * 2);
  list-style-type:none;
  margin: 0;
  padding: 0;
}

`;
