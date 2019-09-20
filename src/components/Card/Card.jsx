import React from 'react';
import styled from "styled-components";

const CardImage = styled.div`
	background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(${({gradient}) => gradient}%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1))), url(${({src}) => src}) no-repeat;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${({gradient}) => gradient}%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
	background-size: cover;
	width: ${({width}) => width || '250px'};
	height: ${({height}) => height || '178px'};
	padding: 10px;
	border-radius: ${({radius}) => radius || '5px'};
`;

const CardDescription = styled.div`
	position: relative;
	top: calc(${({height}) => height} - 55px);
	h2, p {
		margin: 0;
		color: ${({theme}) => theme.colors.white};
	}
`;

function Card(props) {
  const {bgImage, title, subtitle, width, height, radius} = props;
  const gradient = (width > height) ? 30 : 50;
  return (
    <>
      <CardImage
        src={bgImage}
        width={width}
        height={height}
        radius={radius}
        gradient={gradient}>
        <CardDescription height={height}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </CardDescription>
      </CardImage>
    </>
  )
}

export default Card;