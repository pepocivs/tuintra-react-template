import React from "react";
import styled from "styled-components";

/** Assets */
import FooterSeparator from './FooterSeparator';

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

function FooterSection({color, children}) {
  return (
    <>
      <FooterSeparator color={color}/>
      <FooterContent color={color}>
        <FooterCenterSection>
          {children}
        </FooterCenterSection>
      </FooterContent>
    </>
  )
}

export default FooterSection;