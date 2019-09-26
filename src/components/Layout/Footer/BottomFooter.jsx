import React from "react";
import styled from "styled-components";

/** Helpers */
import { isDarkColor } from "helpers/colors";

/** Custom components */
import FooterSection from "./FooterSection";
import SvgIcon from "components/UI/SvgIcon/SvgIcon";

/** Custom styles */
const BottomFooterContainer = styled.div`
  background-color: ${({theme}) => theme.colors.grey};
  svg {
    display: block;
  }
`;

const FlexFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: space-between;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

const FooterContent = styled.div`
  color: ${({bgColor}) => (isDarkColor(bgColor)) ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"};
  svg {
    fill: ${({bgColor}) => (isDarkColor(bgColor)) ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"};
    :hover {
      fill: ${({bgColor, theme}) => (isDarkColor(bgColor)) ? theme.colors.white : theme.colors.dark};
    }
  }
`;

const Quote = styled.div`
  text-transform: uppercase;
  white-space: nowrap;
  -webkit-letter-spacing: -2;
  -moz-letter-spacing: -2;
  -ms-letter-spacing: -2;
  letter-spacing: -2;
  color: ${({bgColor}) => (isDarkColor(bgColor)) ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"};
  font-size: 55px;
  text-align: center;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    font-size: 30px;
  }
`;

const ClubInfoRow = styled.p`
  display: flex;
  svg {
    width: 16px;
    margin-right: 10px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  svg {
    width: 50px;
    margin: 10px;
    cursor: pointer;
  }
`;

function BottomFooter({ clubInfo }) {
  const quote = clubInfo.widgets.find(widget => widget.position === 'cita');
  const bgColor = clubInfo.options.secundary_color_web;
  const socialNetworks = ["instagram", "facebook", "youtube", "twitter", "flickr"];
  return (
    <BottomFooterContainer>
      <FooterSection color={bgColor}>
        <FlexFooter>
          <FooterContent bgColor={bgColor}>
            <h1>Contacta</h1>
            <ClubInfoRow><SvgIcon name="email" />{clubInfo.contact.email}</ClubInfoRow>
            <ClubInfoRow><SvgIcon name="phone"/>{clubInfo.contact.phone}</ClubInfoRow>
            <ClubInfoRow><SvgIcon name="address" />{clubInfo.contact.address}</ClubInfoRow>
            <ClubInfoRow><SvgIcon name="city" />{clubInfo.contact.postalCode} - {clubInfo.contact.city}</ClubInfoRow>
            <ClubInfoRow><SvgIcon name="nif" />{clubInfo.contact.fiscalNumber}</ClubInfoRow>
          </FooterContent>
          <FooterContent bgColor={bgColor}>
            <h1>Síguenos</h1>
            <SocialContainer>
              {socialNetworks.map(network => {
                return (clubInfo.options[network]) 
                  ? <a key={network} href={clubInfo.options[network]} target="_blank" rel="noopener noreferrer"><SvgIcon name={network} /></a>
                  : '';
              })}
            </SocialContainer>
          </FooterContent>
        </FlexFooter>
        {(quote) ? <Quote bgColor={bgColor}>{quote.content.content}</Quote> : ''}
      </FooterSection>
    </BottomFooterContainer>
  )
}

export default BottomFooter;