import React from "react";
import styled from "styled-components";

/** Custom components */
import FooterSection from "components/Layout/Footer/FooterSection";
import Title from "components/UI/Title/Title";

/** Custom styles */
const TopFooterContiner = styled.div`
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

const LinkContainer = styled.div`
  display: flex;
  justify-content: ${({big, middle}) => (big || middle) ? 'center' : 'space-between'};
  flex-flow: wrap;
  a {
    margin: 5px;
  }
`;

const FooterImage = styled.img`
  -webkit-filter: grayscale(100%) opacity(0.5) brightness(1) contrast(0.85);
  filter: grayscale(100%) opacity(0.5) brightness(1) contrast(0.85);
  transition: 0.5s;
  max-width: ${({big, middle}) => big ? '500px' : (middle) ? '250px' : '100px'};
  @media (max-width: ${({theme}) => theme.breakpoints.tabletLandscape}px) {
    max-width: ${({big, middle}) => (big || middle) ? '100%' : '100px'};
  }
  :hover {
    -webkit-filter: grayscale(0%) opacity(1) brightness(1) contrast(1);
    filter: grayscale(0%) opacity(1) brightness(1) contrast(1);
  }
`;

function TopFooter({ footerLinks }) {
  const bigCategories = [9, 11];
  const middleCategories = [12];
  return (
    <TopFooterContiner>
      <FooterSection>
        {footerLinks.map(categoryLink => (
          <div key={categoryLink.categoryId}>
            {
              (categoryLink.links.length > 0) 
                ? (<Title shadow={categoryLink.categoryName}>{categoryLink.categoryName}</Title>) 
                : ''
            }
            <LinkContainer big={bigCategories.includes(categoryLink.categoryId)} middle={middleCategories.includes(categoryLink.categoryId)}>
              {categoryLink.links.map(link => (
                <a key={link.linkName} href={link.url} rel="noopener noreferrer" target="_blank">
                  <FooterImage big={bigCategories.includes(categoryLink.categoryId)} middle={middleCategories.includes(categoryLink.categoryId)} src={link.image} />
                </a>
              ))}
            </LinkContainer>
          </div>
        ))}
      </FooterSection>
    </TopFooterContiner>
  )
}

export default TopFooter;