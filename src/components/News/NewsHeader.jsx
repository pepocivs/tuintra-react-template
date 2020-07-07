import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import styled from "styled-components";
import { Link } from "react-router-dom";

import 'react-awesome-slider/dist/styles.css';

/** Styles */
const SliderContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: ${({theme}) => theme.spacings.headerHeight};
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    position: initial;
  }
`;

const AwesomeSliderStyled = styled(AwesomeSlider)`
  height: calc(80vh - 160px);
  max-height: 500px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: opacity 2.4s ease-in;
  box-sizing: inherit;
  .aws-sld__content div {
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase;
    z-index: 10;
    color: #FFFFFF;
    text-shadow: 
      /* first layer at 1px */
      -1px -1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      0px -1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      1px -1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -1px  0px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      1px  0px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -1px  1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      0px  1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      1px  1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      /* second layer at 2px */
      -2px -2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -1px -2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      0px -2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      1px -2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      2px -2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      2px -1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      2px  0px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      2px  1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      2px  2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      1px  2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      0px  2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -1px  2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -2px  2px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -2px  1px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -2px  0px 0px ${({theme}) => theme.clubOptions.principal_color_web},
      -2px -1px 0px ${({theme}) => theme.clubOptions.principal_color_web};
  };
  .aws-sld__content>img {
    -o-object-fit: contain;
    object-fit: contain;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.desktop}px) {
    .aws-sld__content>img {
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;

  const ButtonLink = styled.div`
    color: ${({theme}) => theme.colors.black} !important;
    text-align: center;
    font-size: 0.8em !important;
    text-shadow: none !important;
    :hover {
      color: ${({theme}) => theme.colors.dark} !important;
    }
  `
  const StyledLink = styled(Link)`
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 10px;
    width: 100%;
    background: rgba(255,255,255,0.6);
    cursor: pointer;
  `;
  
function NewsHeader({ news }) {
  return (
    <SliderContainer>
      <AwesomeSliderStyled>
        {news.map((article, key) => (
          <div data-src={article.image} key={key}>
            <p>{article.title}</p>
            <ButtonLink>
              <StyledLink to={`/noticias${article.slug}`}>Ver Notícia</StyledLink>
            </ButtonLink>
          </div>
        ))}
      </AwesomeSliderStyled>
    </SliderContainer>
  );
}

export default NewsHeader;