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
    color: ${({theme}) => theme.colors.dark};4
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
  h1, h2, h3, h4 {
    border-bottom: 2px solid ${({theme}) => theme.clubOptions.secundary_color_web};
  }
`;

export default GlobalStyle;
