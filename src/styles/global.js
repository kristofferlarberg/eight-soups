import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  --font-family: "Helvetica", Times, serif;
  --font-size: 1.5rem;
  --line-height: 2.4rem;
  --topbottom: calc(var(--line-height) * 2);
  --leftright: calc(var(--line-height) * 1.5);
  --primary: white;
  --secondary: beige;
  --color: black;
}

body {
  margin: 0;
  background-color: var(--primary);
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
  line-height: var(--line-height);
  font-weight: 400;
}

a,
a:hover,
a:active,
a:visited {
  font-size: var(--font-size);
  line-height: var(--line-height);
  color: var(--color)
}

ul {
  font-size: var(--font-size);
  line-height: calc(var(--line-height) * 2);
  list-style-type:none;
  margin: 0;
}

`;
