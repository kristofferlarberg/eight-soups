import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  --font-family: "Times New Roman", Times, serif;
  --font-size: 2rem;
  --line-height: 2.4rem;
  --topbottom: calc(var(--line-height) * 2);
  --leftright: calc(var(--line-height) * 1.5);
  --primary: white;
  --secondary: yellow;
}

body {
  margin: 0;
  background-color: var(--primary);
  font-family: var(--font-family);
}

h1 {
  font-size: calc(var(--font-size) * 3);
}

h2 {
  font-size: calc(var(--font-size) * 1,5);
}

p {
  font-size: var(--font-size);
  line-height: var(--line-height);
}

a,
a:hover,
a:active,
a:visited {
  font-size: var(--font-size);
  line-height: var(--line-height);
}

`;

