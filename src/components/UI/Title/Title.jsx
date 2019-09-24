import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  position: relative;
  margin-bottom: 35px;
  span {
    position: absolute;
    font-size: 55px;
    left: 16px;
    top: 0;
    white-space: nowrap;
    letter-spacing: -2;
    color: rgba(0, 0, 0, 0.04);
  }
`;

function Title({children, shadow}) {
  return (
    <TitleContainer>
      {children}
      <span>{shadow}</span>
    </TitleContainer>
  )
}

export default Title;
