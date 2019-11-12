import React, { useState } from "react";
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
  display: ${({collapsed}) => !!(collapsed) ? 'none' : 'initial'};
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
  font-size: 10px;
  font-style: italic;
  text-align: center;
`;

const Icon = styled.div`
  float: right;
  width: 15px;
  height: 15px;
  background-image: url('/assets/general/chevron.svg');
  background-repeat: no-repeat;
  background-size: cover;
  transform: ${({collapsed}) => !!(collapsed) ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

const GameDayHeader = styled.h3`
  cursor: pointer;
  margin-top: 30px;
  padding-bottom: 5px;
`;

function ScheduleDay({scheduleDayBundle, gameDay, collapsed}) {
  const [setCollapsed, setCollapsedState] = useState(collapsed);

  function toggleAccordion() {
    setCollapsedState(!setCollapsed);
  }
  
  return (
    <div>
      <GameDayHeader
        onClick={toggleAccordion}>
          Jornada {gameDay} <Icon collapsed={setCollapsed} />
      </GameDayHeader>
      {scheduleDayBundle.map(game => 
        <ScheduleRow key={game._id} collapsed={setCollapsed}>
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
      )}
    </div>
  )
}

export default ScheduleDay;