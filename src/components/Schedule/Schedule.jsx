import React, {useState} from "react";
import styled from "styled-components";

/** Custom Components */
import ScheduleDay from "./ScheduleDay";

/** Helpers */
import { sortBy } from "../../helpers/sortBy";

const GameDayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 30px);
  grid-gap: 10px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 10px;
`;

const GameDayBox = styled.div`
  width: 30px;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border-bottom: 2px solid ${({theme}) => theme.clubOptions.secundary_color_web};
  background-color: ${({selected, theme}) => (selected) 
    ? theme.clubOptions.secundary_color_web 
    : theme.clubOptions.principal_color_web};
  color: ${({selected, theme}) => (selected) 
    ? theme.colors.dark 
    : theme.colors.white};
`;

function Schedule({calendar}) {
  const [setGame, setGameState] = useState(getGameDay(calendar));

  function setGameDay(e) {
    setGameState(e.target.innerText);
  }

  return (
    <>
      <GameDayContainer>
        {Object.keys(calendar).map(gameDay => (
          <GameDayBox
            key={`day${gameDay}`}
            selected={(setGame.toString() === gameDay)}
            game-day$={gameDay}
            onClick={setGameDay}>
            {gameDay}
          </GameDayBox>
        ))}
      </GameDayContainer>
      <h3>Jornada {setGame}</h3>
      {(calendar[setGame] || []).map(game => <ScheduleDay key={game._id} game={game} />)}
    </>
  )
}

function getGameDay(calendar) {
  const currentDate = new Date();
  const finishedLeague = !!(Object.keys(calendar).map(gameDay => calendar[gameDay].map(game => new Date(game.date) > currentDate)).flat().indexOf(true) === -1);
  const futureDays = Object.keys(calendar).map(gameDay => {
    return calendar[gameDay].map(game => {
      const gameDate = new Date(game.date);
      return (finishedLeague)
        ? gameDay
        : (gameDate > currentDate) ? {gameDay, date: game.date} : null;
    });
  }).flat();
  return (finishedLeague) ? Math.max.apply(null, futureDays) : sortBy(futureDays.filter(Boolean), 'date')[0]?.gameDay;
}

export default Schedule;