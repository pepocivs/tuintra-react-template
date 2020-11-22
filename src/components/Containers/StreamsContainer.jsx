import React, { useEffect } from "react";
import styled from "styled-components";
import Moment from 'react-moment';

/** Custom components */
import Loading from "components/Containers/Loading";
import Alert from "components/UI/Alert/Alert";
import Title from "components/UI/Title/Title";

/** Styles */
const StreamContainer = styled.div`
  padding-bottom: 10px;
  border-bottom: 3px solid ${({theme}) => theme.clubOptions.secundary_color_web};
`;
const YoutubeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 56.25%;
`;

const YoutubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const GameBanner = styled.div`
  margin-bottom: 20px;
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 1fr 5fr 2fr;
  align-items: center;
  text-align: center;
`;

const GameInfoContainer = styled.div`
  text-align: center;
`;

const ShieldContainer = styled.div`
  background-color: ${({theme}) => theme.colors.dark};
  padding: 10px;
  border: 2px solid ${({theme}) => theme.colors.darkGrey};
`;

const NameContainer = styled.div`
  padding: 20px 0px;
  font-size: 23px;
  background-color: ${({theme}) => theme.colors.dark};
  color: white;
  border-top: 2px solid ${({theme}) => theme.colors.darkGrey};
  border-bottom: 2px solid ${({theme}) => theme.colors.darkGrey};
`;

const VersusContainer = styled.div`
  padding: 20px 0px;
  font-weight: bold;
  font-size: 30px;
  background-color: ${({theme}) => theme.colors.darkGrey};
  color: white;
`;

const GameRow = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

const ScheduleBox = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
  background-color: ${({theme}) => theme.colors.light};
  margin-bottom: 5px;
  @media (min-width: ${({theme}) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

const TeamName = styled.div`
  text-align: ${({position}) => position};
  font-size: 15px;
  text-align: center;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    font-size: 15px;
  }
`;

const TeamShield = styled.img`
  width: 65px;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    width: 50px;
  }
`;

const ExtraInfo = styled.div`
  font-size: ${({big}) => (big) ? "15px" : "10px"};
  text-transform: ${({uppercase}) => (uppercase) ? "uppercase" : "initial"};
  font-style: italic;
  text-align: center;
`;

const GameTypeContainer = styled.div`
  position: relative;
  float: left;
  width: 0px;
`;
const GameType = styled.div`
  width: ${({hasResults}) => (hasResults) ? '265px' : '200px'};
  display: inline-block;
  transform-origin: 0px 0px;
  transform: rotate(-90deg);
  text-align: center;
  font-size: 22px;
  color: ${({theme}) => theme.colors.darkGrey};
`;

function StreamsContainer({fetchStreams, streams = []}) {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);
  if (!streams.ready) return <Loading />;
  if (streams.data.length === 0) return <><Title shadow="Streaming">Partidos en directo</Title><Alert icon="info" iconColor="#aec6cf" msg="No se han encontrado próximos streamings" /></>
  console.log(streams.data[0]);
  return (
    <>
      <Title shadow="Streaming">Partidos en directo</Title>
      {
        streams.data.map((stream, index) => (
          <StreamContainer key={index}>
            <GameBanner>
              <GameInfoContainer>{stream.competition.name} {stream.competition.category} {stream.competition.gender}</GameInfoContainer>
              <GameInfoContainer>
                <ExtraInfo big uppercase><Moment format="dddd, DD MMMM" date={stream.date}/></ExtraInfo>
                <ExtraInfo big><Moment format="HH:mm" date={stream.date}/>h</ExtraInfo>
              </GameInfoContainer>
              <GameContainer>
                <ShieldContainer><img src={stream.local.shield[100]} alt={stream.local.name} /></ShieldContainer>
                <NameContainer>{stream.local.name}</NameContainer>
                <VersusContainer>vs</VersusContainer>
                <NameContainer>{stream.away.name}</NameContainer>
                <ShieldContainer><img src={stream.away.shield[100]} alt={stream.away.name} /></ShieldContainer>
              </GameContainer>
              <GameInfoContainer>
                <ExtraInfo big>{stream.facility}</ExtraInfo>
              </GameInfoContainer>
            </GameBanner>
            <ScheduleBox key={stream._id}>
              <ExtraInfo big uppercase><Moment format="dddd, DD MMMM" date={stream.date}/></ExtraInfo>
              <ExtraInfo big><Moment format="HH:mm" date={stream.date}/>h</ExtraInfo>
              <ExtraInfo>{stream.facility}</ExtraInfo>
              <GameRow>
                <TeamShield src={stream.local.shield[100]} alt={stream.local.name}/>
                <TeamShield src={stream.away.shield[100]} alt={stream.away.name}/>
                <TeamName position="left">{stream.local.name}</TeamName>
                <TeamName position="right">{stream.away.name}</TeamName>
              </GameRow>
              <ExtraInfo>{stream.competition.name} {stream.competition.category} {stream.competition.gender}</ExtraInfo>
              <GameTypeContainer>
                <GameType hasResults={stream.showLastResults}>{stream.gameType}</GameType>
              </GameTypeContainer>
            </ScheduleBox>
            <a href={`https://youtu.be/${stream.youtubeId}`} target="_blank" rel="noopener noreferrer">Ver en Youtube: https://youtu.be/{stream.youtubeId}</a>
            <YoutubeContainer>
              <YoutubeIframe
                src={`https://www.youtube.com/embed/${stream.youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </YoutubeIframe>
            </YoutubeContainer>
          </StreamContainer>
        ))
      }
    </>
  );
}

export default StreamsContainer;