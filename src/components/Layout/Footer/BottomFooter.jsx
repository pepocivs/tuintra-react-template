import React from "react";
import styled from "styled-components";

/** Custom components */
import FooterSection from "./FooterSection";
import Title from "components/UI/Title/Title";

/** Custom styles */
const BottomFooterContainer = styled.div`
  background-color: ${({theme}) => theme.colors.grey};
  svg {
    display: block;
  }
`;

const FlexFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FooterLine = styled.hr`
  border: 0px;
  width: 1px;
  margin: 0px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
`;

const FooterContent = styled.div`
`;

const FooterHorizontalLine = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  margin: 0px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 33%, rgba(255, 255, 255, 0.3) 66%, rgba(255, 255, 255, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#00ffffff', GradientType=1);
`;

function BottomFooter({ clubInfo }) {
  return (
    <BottomFooterContainer>
      <FooterSection color={clubInfo.options.secundary_color_web}>
        <FlexFooter>
          <FooterContent>
            <Title shadow="con nosotros">Contacta</Title>
            <p><span>Email:</span> {clubInfo.contact.email}</p>
            <p><span>Teléfono:</span> {clubInfo.contact.phone}</p>
            <p><span>Dirección:</span> {clubInfo.contact.address}</p>
            <p><span>Ciudad:</span> {clubInfo.contact.postalCode} - {clubInfo.contact.city}</p>
            <p><span>NIF:</span> {clubInfo.contact.fiscalNumber}</p>
          </FooterContent>
          <FooterLine />
          <FooterContent>
            <Title shadow="sociales">Redes</Title>
          </FooterContent>
          <FooterHorizontalLine />
        </FlexFooter>
      </FooterSection>
    </BottomFooterContainer>
  )
}

export default BottomFooter;