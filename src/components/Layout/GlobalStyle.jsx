import { createGlobalStyle } from "styled-components";
import theme from "theme/";

// Global style
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: ${theme.fonts.mainFont};
    line-height: 1;
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.white};
  }
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
  button, button:hover, button:focus {
    border: none;
    color: inherit;
    outline:0;
  }
`;

export default GlobalStyle;
