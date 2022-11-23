import React from "react";
import styled from "styled-components";
import Moment from 'react-moment';
import html2canvas from 'html2canvas';
import 'moment/locale/es';

/** Helpers */
import { slugify } from "helpers/slugify";
import clubInfoDomain from "helpers/clubInfo";


/** Global vars */
const IS_TEAM_CLUB = 1;

/** Styles */
const width = 1920;
const height = 1080;
const yAxis = 50;

const imageHeight = calcRatio(283, width, yAxis);
const underShieldWidth = calcRatio(123, width, yAxis);
const teamLayerHeight = calcRatio(142, width);
const shieldSize = calcRatio(75, width);
const statSize = (0.7*width / 393);
const topInfoPosition = calcRatio(10, width);
const teamLayerPosition = calcRatio(195, width, yAxis);
const teamLayerTopPosition = calcRatio(210, width, yAxis);
const teamLayerStatsTopPosition = calcRatio(205, width, yAxis);
const versusTopPosition = calcRatio(195, width, yAxis);
const generalInfoTopPosition = calcRatio(245, width, yAxis);
const gameDayTopPosition = calcRatio(260, width, yAxis);
const dateTopPosition = calcRatio(285, width, yAxis);
const bottomInfoPosition = calcRatio(315, width, yAxis);

const StreamCoverContainer = styled.div`
  @font-face {
    font-family: Acme;
    src: url('/assets/next-game/Acme-Regular.ttf') format('truetype');
  }
  font-family: Acme;
  position: relative;
  background: url('${({image}) => image}') no-repeat;
  background-color: ${({theme}) => theme.colors.black};
  background-size: 750px;
  background-position: center;
  color: ${({theme}) => theme.colors.light};
  margin-bottom: 5px;
  width: ${width}px;
  height: ${height}px;
  max-width: 100%;
  max-height: ${height/width*100}%;
  cursor: pointer;
`;

const Image = styled.div`
  position: absolute;
  /*
  background: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -webkit-gradient(linear, left bottom, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(50%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1))), url(${({src}) => src}) no-repeat;
  background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -o-linear-gradient(bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: -ms-linear-gradient(bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(${({src}) => src}) no-repeat;
  filter: sepia() saturate(100%) hue-rotate(100deg);
  */
  width: ${width}px;
  height: ${imageHeight}px;
  background: url(${({src}) => src}) no-repeat;
  background-size: cover;
  background-position: center;
  filter: saturate(125%);
`;

const Partners = styled.div`
  position: absolute;
  width: ${width}px;
  height: ${imageHeight}px;
  background: url(${({src}) => src}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const TeamLayer = styled.div`
  position: absolute;
  top: ${teamLayerPosition}px;
  width: ${width}px;
  height: ${teamLayerHeight}px;
  background-image: url('/assets/next-game/team-layer.png');
  background-size: cover;
  background-position: center;
`;

const Shield = styled.div`
  position: absolute;
  width: ${shieldSize}px;
  height: ${shieldSize}px;
  background-image: url(${({src}) => src});
  background-size: cover;
  top: ${teamLayerTopPosition}px;
  ${({position}) => `${position}: 50px;`}
`;

const Stats = styled.div`
  position: absolute;
  top: ${teamLayerStatsTopPosition}px;
  ${({position}) => `${position}: 10px;`}
  -moz-transform: scale(${statSize});
`;

const Versus = styled.div`
  position: absolute;
  top: ${versusTopPosition}px;
  -webkit-text-stroke: 1px black;
  font-weight: bold;
  font-size: 65px;
  width: 100%;
  text-align: center;
`;

const GeneralInfo = styled.div`
  position: absolute;
  top: ${generalInfoTopPosition}px;
  font-size: 20px;
  -webkit-text-stroke: 1px black;
  width: 100%;
  text-align: center;
`;

const GameDayInfo = styled.div`
  position: absolute;
  top: ${gameDayTopPosition}px;
  font-size: 20px;
  -webkit-text-stroke: 1px black;
  width: 100%;
  text-align: center;
`;

const Date = styled.div`
  position: absolute;
  top: ${dateTopPosition}px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.black};
  width: 100%;
  text-align: center;
  text-transform: capitalize;
`;

const Hour = styled.div`
  position: absolute;
  top: ${dateTopPosition+18}px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.black};
  width: 100%;
  text-align: center;
`;

const BottomInfo = styled.div`
  position: absolute;
  top: ${bottomInfoPosition}px;
  color: ${({theme}) => theme.colors.black};
  font-size: 25px;
  width: 100%;
  text-align: center;
`;

const TopInfo = styled.div`
  position: absolute;
  top: ${topInfoPosition}px;
  font-size: 25px;
  width: 100%;
  text-align: center;
`;

const UnderShieldInfo = styled.div`
  position: absolute;
  top: ${dateTopPosition + 7}px;
  ${({position}) => `${position}: 12px;`}
  line-height: 15px;
  color: ${({theme}) => theme.colors.black};
  font-size: 18px;
  width: ${underShieldWidth}px;
  text-align: center;
`;

const TopTag = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0px;
  padding: 3px 15px;
  color: ${({theme}) => theme.colors.black};
  font-weight: bold;
  font-size: 18px;
  opacity: 0.85;
`;

const GameInfoContainer = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
  color: black;
  position: absolute;
  top: 0px;
`;
const PartnersContainer = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
  color: black;
  position: absolute;
  bottom: 0px;
`;

function StreamCover({game}) {
    const image = getImage(game.competition, game.local, game.away);
    debugger;
    return (
        <StreamCoverContainer
          key={game._id}
          onClick={getPNG}
          width="1920"
          height="1080"
          name={slugify(`portada`)}
          image={image}>
          
          <GameInfoContainer>GameInfo</GameInfoContainer>
          <PartnersContainer>Partners</PartnersContainer>
        </StreamCoverContainer>
    )
}


function getDefaultImage(competition) {
    const number = Math.floor(Math.random() * (4 - 1) + 1);
    return `/assets/next-game/${clubInfoDomain.subdomain}/${slugify(`${competition.category}-${competition.gender}`)}0${number}.jpg`;
}

function getShield(imageUrl) {
  return `/assets/next-game/shields/${imageUrl.split('/').pop()}`;
}

function getImage(competition, local, away) {
  if (clubInfoDomain.subdomain === 'ginerdelosrios') return getDefaultImage(competition); // Only for Giner just default
  const localPic = getTeamImage(local);
  const awayPic = getTeamImage(away);
  return (localPic || awayPic)
    ? localPic || awayPic
    : getDefaultImage(competition);
}

function getTeamImage(teamInfo) {
  return (teamInfo.type === IS_TEAM_CLUB && teamInfo.picture)
    ? `/assets/next-game/${clubInfoDomain.subdomain}/teams/${teamInfo.picture.split('/').pop()}`
    : false;
}

function calcRatio(width, pixels, variance = 0) {
  return Math.ceil((pixels+variance)*width / 393);
}

function saveCanvas(canvas, fileName) {
  let downloadLink = document.createElement('a');
  downloadLink.setAttribute('download', `${fileName}.png`);
  let dataURL = canvas.toDataURL('image/png');
  let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
  downloadLink.setAttribute('href', url);
  downloadLink.click();
}

async function getPNG(e) {
  debugger;
  const fileName = e.currentTarget.getAttribute('name');
  const options = {
    imageTimeout: 3000,
    width: parseInt(e.currentTarget.getAttribute('width')),
    height: parseInt(e.currentTarget.getAttribute('height'))
  }
  const canvas = await html2canvas(e.currentTarget, options);
  saveCanvas(canvas, fileName);
}

export default StreamCover;
