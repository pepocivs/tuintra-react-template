import React from "react";
import styled from "styled-components";

import Brush from "./brush";

const HighlightedElement = styled.div`
  position: relative;
  text-align: center;
  font-size: 16px;
  text-shadow: rgb(255, 255, 255) 0px 0px 10px;
  color: ${({theme, selected}) => (selected) ? theme.colors.black : theme.colors.lightBlack};
  :hover {
    color: ${({theme}) => theme.colors.black};
    svg {
      fill: ${({theme}) => theme.clubOptions.secundary_color_web};
    }
  }
  svg {
    position: absolute;
    fill: ${({theme, selected}) => (selected) ? theme.clubOptions.secundary_color_web : theme.clubOptions.principal_color_web};
    width: 45px;
    top: 5px;
    z-index: -1;
  }
`;

function Highlighted({children, selected}) {
  return (
    <HighlightedElement selected={selected}>
      <Brush />
      {children}
    </HighlightedElement>
  )
}

export default Highlighted;
