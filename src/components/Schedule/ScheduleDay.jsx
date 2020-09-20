import React from "react";
import styled from "styled-components";
import Moment from 'react-moment';

const GameRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 36px 3fr 1fr 3fr 36px;
  grid-gap: 0 10px;
`;

const ScheduleRow = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
`;

const Score = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  background-color: ${({theme}) => theme.colors.grey};
  border-radius: 5px;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    font-size: 15px;
  }
`;

const TeamName = styled.div`
  text-align: ${({position}) => position};
  font-size: 20px;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    font-size: 15px;
  }
`;

const TeamShield = styled.img`
  width: 36px;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    width: 30px;
  }
`;

const ExtraInfo = styled.div`
  font-size: 12px;
  font-style: italic;
  text-align: center;
`;

function ScheduleDay({game}) {
  return (
    <ScheduleRow>
      <ExtraInfo>{game.gameType}</ExtraInfo>
      <ExtraInfo><Moment format="DD/MM/YYYY - HH:mm" date={game.date}/></ExtraInfo>
      <GameRow>
        <TeamShield src={game.local.shield[100]} alt={game.local.name}/>
        <TeamName position="left">{game.local.name}</TeamName>
        <Score>{game.localScore} - {game.awayScore}</Score>
        <TeamName position="right">{game.away.name}</TeamName>
        <TeamShield src={game.away.shield[100]} alt={game.away.name}/>
      </GameRow>
      <ExtraInfo>{game.facility}</ExtraInfo>
    </ScheduleRow>
  )
}

export default ScheduleDay;