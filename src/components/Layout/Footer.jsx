import React from 'react';
import FooterSeparator from './FooterSeparator';
import styled from "styled-components";

const FooterStyled = styled.div`
  padding: 10px;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-top: -13px;
  background-color: ${({color}) => `${color}`};
`;

function Footer(props) {
	const { clubInfo } = props;

  return (
    <>
      <FooterSeparator color={clubInfo.options.secundary_color_web} />
      <FooterStyled color={clubInfo.options.secundary_color_web}>Footer stuff</FooterStyled>
    </>
  )
}

export default Footer;