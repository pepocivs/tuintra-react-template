import React from "react";
import styled from "styled-components";

const GameRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 36px 3fr 1fr 3fr 36px;
  grid-gap: 0 10px;
`;

const GameDayContainer = styled.div`
  h3 {
    border-bottom: 2px solid ${({theme}) => theme.clubOptions.secundary_color_web};
  }
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
  font-size: 10px;
  font-style: italic;
  text-align: center;
`;

function ScheduleDay({ScheduleDayBundle, gameDay}) {
  return (
    <GameDayContainer>
      <h3>Jornada {gameDay}</h3>
      {ScheduleDayBundle.map(game => 
        <ScheduleRow key={game._id}>
          <ExtraInfo>{game.date} {game.time}</ExtraInfo>
          <GameRow>
            <TeamShield src={game.localShield} alt={game.local}/>
            <TeamName position="left">{game.local}</TeamName>
            <Score>{game.localScore} - {game.awayScore}</Score>
            <TeamName position="right">{game.away}</TeamName>
            <TeamShield src={game.awayShield} alt={game.away}/>
          </GameRow>
          <ExtraInfo>{game.facility}</ExtraInfo>
        </ScheduleRow>
      )}
    </GameDayContainer>
  )
}

export default ScheduleDay;