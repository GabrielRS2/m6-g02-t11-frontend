import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Lato";
  }
  html{
    scroll-behavior: smooth;
  }
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
  }
`;