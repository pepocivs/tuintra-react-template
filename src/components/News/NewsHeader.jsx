import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import styled from "styled-components";
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
      -1px -1px 0px #EC6933,
      0px -1px 0px #EC6933,
      1px -1px 0px #EC6933,
      -1px  0px 0px #EC6933,
      1px  0px 0px #EC6933,
      -1px  1px 0px #EC6933,
      0px  1px 0px #EC6933,
      1px  1px 0px #EC6933,
      /* second layer at 2px */
      -2px -2px 0px #EC6933,
      -1px -2px 0px #EC6933,
      0px -2px 0px #EC6933,
      1px -2px 0px #EC6933,
      2px -2px 0px #EC6933,
      2px -1px 0px #EC6933,
      2px  0px 0px #EC6933,
      2px  1px 0px #EC6933,
      2px  2px 0px #EC6933,
      1px  2px 0px #EC6933,
      0px  2px 0px #EC6933,
      -1px  2px 0px #EC6933,
      -2px  2px 0px #EC6933,
      -2px  1px 0px #EC6933,
      -2px  0px 0px #EC6933,
      -2px -1px 0px #EC6933;
  }
`;

function NewsHeader({ news }) {
  return (
    <SliderContainer>
      <AwesomeSliderStyled>
        {news.map((article, key) => (
          <div data-src={article.image} key={key}>
            <p>{article.title}</p>
          </div>
        ))}
      </AwesomeSliderStyled>
    </SliderContainer>
  );
}

export default NewsHeader;