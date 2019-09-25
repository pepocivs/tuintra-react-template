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

function TopFooter({ footerLinks }) {
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
            <LinkContainer>
              {categoryLink.links.map(link => (
                <a key={link.linkName} href={`http://${link.url}`} rel="noopener noreferrer" target="_blank">
                  <FooterImage src={link.image} />
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