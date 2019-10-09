import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  position: relative;
  margin-bottom: 35px;
  font-size: ${({small}) => (small) ? "20px" : "28px"};
  span {
    position: absolute;
    font-size: 55px;
    font-size: ${({small}) => (small) ? "40px" : "55px"};
    left: 16px;
    top: 0;
    white-space: nowrap;
    letter-spacing: -2;
    color: rgba(0, 0, 0, 0.04);
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
  }
`;

function Title({children, shadow, small}) {
  return (
    <TitleContainer small={small}>
      {children}
      <span>{shadow}</span>
    </TitleContainer>
  )
}

export default Title;
