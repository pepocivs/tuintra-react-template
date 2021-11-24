import React from "react";
import styled from "styled-components";
import Moment from 'react-moment';
import html2canvas from 'html2canvas';
import 'moment/locale/es';

/** Helpers */
import { slugify } from "helpers/slugify";
import clubInfoDomain from "helpers/clubInfo";

/** Custom components */
import PreviousStats from "./PreviousStats";

/** Styles */
const width = 524;
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
const generalInfoTopPosition = calcRatio(255, width, yAxis);
const dateTopPosition = calcRatio(285, width, yAxis);
const bottomInfoPosition = calcRatio(315, width, yAxis);

const ScheduleBoxContainer = styled.div`
  @font-face {
    font-family: Acme;
    src: url('/assets/next-game/Acme-Regular.ttf') format('truetype');
  }
  font-family: Acme;
  position: relative;
  background-color: ${({theme}) => theme.colors.black};
  background: url('/assets/next-game/cardBg.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  color: ${({theme}) => theme.colors.light};
  margin-bottom: 5px;
  width: ${width}px;
  height: ${width}px;
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
  top: ${teamLayerStatsTopPosition}px;
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


function ScheduleBoxSocial({nextGames, stats}) {
  return nextGames.map(game => {
    const image = getImage(game.competition);
    return (
      <ScheduleBoxContainer key={game._id} onClick={getPNG} name={slugify(`${game.date}-${game.competition.name}-${game.competition.category}-${game.competition.gender}`)}>
        <Image src={image} />
        {(isDH(game.competition) ? (<Partners src={`/assets/next-game/${clubInfoDomain.subdomain}/partners/partner.png`} />) : '')}
        <TeamLayer />
        <Shield src={getShield(game.local.shield[100])} position="left" />
        <Stats position="left"><PreviousStats vertical={true} gameId={game._id} data={(stats.data || {})[`${game.local._id}-${game.competitionId}`] || []} /></Stats>
        <Versus>VS</Versus>
        <Shield src={getShield(game.away.shield[100])} position="right" />
        <Stats position="right"><PreviousStats vertical={true} gameId={game._id} data={(stats.data || {})[`${game.away._id}-${game.competitionId}`] || []} /></Stats>
        <Date><Moment format="DD MMM" date={game.date}/></Date>
        <Hour><Moment format="HH:mm" date={game.date}/>h</Hour>
        <UnderShieldInfo position="left">{game.local.name}</UnderShieldInfo>
        <UnderShieldInfo position="right">{game.away.name}</UnderShieldInfo>
        <BottomInfo>{game.competition.name} - {game.competition.category} {game.competition.gender}</BottomInfo>
        <TopTag>{game.facility}</TopTag>
        <GeneralInfo>{game.gameType}</GeneralInfo>
      </ScheduleBoxContainer>
    )
  });
}

function isDH(competition) {
  return !!(competition.name.includes('Honor'));
}

function getImage(competition) {
  const number = Math.floor(Math.random() * (4 - 1) + 1);
  if (isDH(competition)) {
    return `/assets/next-game/${clubInfoDomain.subdomain}/division-honor0${number}.jpg`;
  } else {
    return `/assets/next-game/${clubInfoDomain.subdomain}/${slugify(`${competition.category}-${competition.gender}`)}0${number}.jpg`;
  }
}

function getShield(imageUrl) {
  return `/assets/next-game/shields/${imageUrl.split('/').pop()}`;
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
  const fileName = e.currentTarget.getAttribute('name');
  const options = {
    imageTimeout: 3000
  }
  const canvas = await html2canvas(e.currentTarget, options);
  saveCanvas(canvas, fileName);
}

export default ScheduleBoxSocial;
