import React from "react";
import styled from "styled-components";

const CardImage = styled.div`
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(${({gradient}) => gradient}%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1))), url(${({src}) => src}) no-repeat;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background-size: cover;
  background-position: ${({bgPosition}) => bgPosition || 'center'};;
	width: ${({width}) => width || '250px'};
	height: ${({height}) => height || '178px'};
	padding: 10px;
	border-radius: ${({radius}) => radius || '5px'};
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: ${({width}) => 
      (width && parseInt(width.substr(0, width.length - 2)) > 150) 
        ? '100%' 
        : width || '250px'
    };
	  height: ${({width, height}) => 
      (height && width && parseInt(width.substr(0, width.length - 2)) > 150) 
        ? height
        : (height && height.includes('vh')) ? height.replace('vh', 'vw') : height || '178px'
    };
  }
`;

const CardDescription = styled.div`
	position: relative;
	top: calc(${({height}) => height} - 55px);
	h2, p {
		margin: 0;
    color: ${({theme}) => theme.colors.white};
    min-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap; 
    word-wrap: break-word;
    line-height: 1;
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 13px;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    top: calc(${({height}) => (height && height.includes('vh')) ? height.replace('vh', 'vw') : height} - 55px);
  }
`;

const OuterText = styled.p`
  margin: 5px 0px;
  text-align: center;
  line-height: 1;
`;

const PriceSeparator = styled.div`
  width: 50%;
  flex: auto;
  text-align: ${({right}) => (right) ? 'right' : 'left'};
`;

const SeparatedPriceContainer = styled.p`
  display: flex;
`;

function Card({bgImage, title, subtitle, outerText, width, height, radius, shadow = true, bgPosition}) {
  const gradient = (shadow) ? (width > height) ? 30 : 60 : 100;
  const subTitleText = (subtitle.includes('**'))
    ? (
      <SeparatedPriceContainer>
        <PriceSeparator>Online:<br />{subtitle.split('**')[0]}</PriceSeparator>
        <PriceSeparator right>Tienda:<br />{subtitle.split('**')[1]}</PriceSeparator>
      </SeparatedPriceContainer>
      )
    : (<p>{subtitle}</p>);
  console.log(subTitleText);
  return (
    <div>
      <CardImage
        src={bgImage}
        width={width}
        height={height}
        radius={radius}
        gradient={gradient}
        shadow={shadow}
        bgPosition={bgPosition}>
        <CardDescription height={height}>
          <h2>{title}</h2>
          {subTitleText}
        </CardDescription>
      </CardImage>
      <OuterText>{outerText}</OuterText>
    </div>
  )
}

export default Card;