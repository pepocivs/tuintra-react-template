import React from "react";
import styled from "styled-components";
import Moment from 'react-moment';
import 'moment/locale/es';

/** Custom components */
import PreviousStats from "./PreviousStats";

/** Styles */
const GameRow = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

const ScheduleBoxContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
  background-color: ${({theme}) => theme.colors.light};
  margin-bottom: 5px;
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

function ScheduleBoxHome({nextGames, stats}) {
  return nextGames.map(game => {
    const lastResults = (game.showLastResults) ?
    (
      <>
        <PreviousStats gameId={game._id} data={(stats.data || {})[`${game.local._id}-${game.competitionId}`] || []} />
        <PreviousStats gameId={game._id} data={(stats.data || {})[`${game.away._id}-${game.competitionId}`] || []} />
      </>
    ) : '';
    return (
      <ScheduleBoxContainer key={game._id}>
        <ExtraInfo big uppercase><Moment format="dddd, DD MMMM" date={game.date}/></ExtraInfo>
        <ExtraInfo big><Moment format="HH:mm" date={game.date}/>h</ExtraInfo>
        <ExtraInfo>{game.facility}</ExtraInfo>
        <GameRow>
          <TeamShield src={game.local.shield[100]} alt={game.local.name}/>
          <TeamShield src={game.away.shield[100]} alt={game.away.name}/>
          <TeamName position="left">{game.local.name}</TeamName>
          <TeamName position="right">{game.away.name}</TeamName>
          {lastResults}
        </GameRow>
        <ExtraInfo>{game.competition.name} {game.competition.category} {game.competition.gender}</ExtraInfo>
        <GameTypeContainer>
          <GameType hasResults={game.showLastResults}>{game.gameType}</GameType>
        </GameTypeContainer>
      </ScheduleBoxContainer>
    )
  });
}

export default ScheduleBoxHome;
