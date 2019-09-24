import React from "react";
import styled from "styled-components";

/** Assets */
import FooterSeparator from './FooterSeparator';

const FooterStyled = styled.div`
  padding: 10px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
  margin-top: -13px;
  background-color: ${({color, theme}) => color || theme.colors.grey};
`;

const TopFooter = styled.div`
  svg {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    fill: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.grey};
  }
  div {
    color: ${({theme}) => theme.colors.dark};
  }
`;

const BottomFooter = styled.div`
  background-color: ${({theme}) => theme.colors.grey};
`;

function Footer({ clubInfo }) {
  const colorBottom = clubInfo.options.secundary_color_web;
  return (
    <>
      <TopFooter>
        <FooterSeparator />
        <FooterStyled>First footer stuff</FooterStyled>
      </TopFooter>
      <BottomFooter>
        <FooterSeparator color={colorBottom} />
        <FooterStyled color={colorBottom}>Second footer stuff</FooterStyled>
      </BottomFooter>
    </>
  )
}

export default Footer;