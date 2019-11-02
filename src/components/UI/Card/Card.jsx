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
  background-position: center;
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
        ? '220px' 
        : height || '178px'
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
    white-space: nowrap;
  }
`;

const OuterText = styled.p`
  margin: 5px 0px;
  text-align: center;
`;

function Card({bgImage, title, subtitle, outerText, width, height, radius, shadow = true}) {
  const gradient = (shadow) ? (width > height) ? 30 : 60 : 100;
  return (
    <div>
      <CardImage
        src={bgImage}
        width={width}
        height={height}
        radius={radius}
        gradient={gradient}
        shadow={shadow}>
        <CardDescription height={height}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </CardDescription>
      </CardImage>
      <OuterText>{outerText}</OuterText>
    </div>
  )
}

export default Card;