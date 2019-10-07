import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
`;

function GridBox({children}) {
  return (
    <Box>{children}</Box>
  )
}

export default GridBox;
