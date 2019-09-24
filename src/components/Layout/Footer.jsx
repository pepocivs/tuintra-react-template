import React from "react";
import styled from "styled-components";

/** Assets */
import FooterSeparator from './FooterSeparator';

/** Custom components */
import Title from "components/UI/Title/Title";

/** Custom styles */
const TopFooter = styled.div`
  svg {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    fill: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.grey};
    display: block;
    margin-bottom: -1px;
  }
  div {
    color: ${({theme}) => theme.colors.dark};
  }
`;

const BottomFooter = styled.div`
  background-color: ${({theme}) => theme.colors.grey};
  svg {
    display: block;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-areas: "footerLeft footerCenter footerRight";
	grid-template-columns: ${({theme}) => `${theme.spacings.layoutMargin} 1fr ${theme.spacings.layoutMargin}`};
	grid-template-rows: repeat(auto-fit, 1fr);
  padding: 10px;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({color, theme}) => color || theme.colors.grey};
  @media (max-width: ${({theme}) => theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: ${({theme}) => `${theme.spacings.layoutSmallMargin} 1fr ${theme.spacings.layoutSmallMargin}`};
  }
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 0px 1fr 0px;
  }
`;

const FooterCenterSection = styled.div`
  grid-area: footerCenter;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  a {
    margin: 5px;
  }
`;

const FooterImage = styled.img`
  -webkit-filter: grayscale(100%) opacity(0.5) brightness(1) contrast(0.85);
  filter: grayscale(100%) opacity(0.5) brightness(1) contrast(0.85);
  transition: 0.5s;
  :hover {
    -webkit-filter: grayscale(0%) opacity(1) brightness(1) contrast(1);
    filter: grayscale(0%) opacity(1) brightness(1) contrast(1);
  }
`;

const FlexFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FooterSection = styled.div`
  width: 350px;
`;

const FooterLine = styled.hr`
  border: 0px;
  width: 1px;
  margin: 0px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
`;

const FooterHorizontalLine = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  margin: 0px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 33%, rgba(255, 255, 255, 0.3) 66%, rgba(255, 255, 255, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#00ffffff', GradientType=1);
`;

function Footer({ clubInfo, footerLinks }) {
  const colorBottom = clubInfo.options.secundary_color_web;
  return (
    <>
      <TopFooter>
        <FooterSeparator />
        <FooterContent>
          <FooterCenterSection>
          {footerLinks.map(categoryLink => (
            <div key={categoryLink.categoryId}>
              {
                (categoryLink.links.length > 0) 
                  ? (<Title shadow={categoryLink.categoryName}>{categoryLink.categoryName}</Title>) 
                  : ''
              }
              <LinkContainer>
                {categoryLink.links.map(link => (
                  <a key={link.linkName} href={`http://${link.url}`} rel="noopener noreferrer" target="_blank">
                    <FooterImage src={link.image} />
                  </a>
                ))}
              </LinkContainer>
            </div>
          ))}
          </FooterCenterSection>
        </FooterContent>
      </TopFooter>
      <BottomFooter>
        <FooterSeparator color={colorBottom} />
        <FooterContent color={colorBottom}>
          <FooterCenterSection>
            <FlexFooter>
              <FooterSection>
                <Title shadow="con nosotros">Contacta</Title>
                <p><span>Email:</span> {clubInfo.contact.email}</p>
                <p><span>Teléfono:</span> {clubInfo.contact.phone}</p>
                <p><span>Dirección:</span> {clubInfo.contact.address}</p>
                <p><span>Ciudad:</span> {clubInfo.contact.postalCode} - {clubInfo.contact.city}</p>
                <p><span>NIF:</span> {clubInfo.contact.fiscalNumber}</p>
              </FooterSection>
              <FooterLine />
              <FooterSection>
                <Title shadow="sociales">Redes</Title>
              </FooterSection>
              <FooterHorizontalLine />
            </FlexFooter>
          </FooterCenterSection>
        </FooterContent>
      </BottomFooter>
    </>
  )
}

export default Footer;