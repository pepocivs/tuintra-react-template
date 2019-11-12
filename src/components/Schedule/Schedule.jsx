import React, {useState} from "react";
import styled from "styled-components";

/** Custom Components */
import ScheduleDay from "./ScheduleDay";

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
  border-bottom: 2px solid ${({theme}) => theme.clubOptions.principal_color_web};
  background-color: ${({selected, theme}) => (selected) 
    ? theme.clubOptions.principal_color_web 
    : theme.clubOptions.secundary_color_web};
  color: ${({selected, theme}) => (selected) 
    ? theme.colors.white 
    : theme.colors.dark};
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
            selected={(setGame === gameDay)}
            game-day$={gameDay}
            onClick={setGameDay}>
            {gameDay}
          </GameDayBox>
        ))}
      </GameDayContainer>
      <h3>Jornada {setGame}</h3>
      {calendar[setGame].map(game => <ScheduleDay key={game._id} game={game} />)}
    </>
  )
}

function getGameDay(calendar) {
  let currentGameDay = 1;
  const currentDate = new Date();
  // eslint-disable-next-line array-callback-return
  Object.keys(calendar).map(gameDay => {
    const firstGame = calendar[gameDay][0];
    const gameDate = new Date(firstGame.date);
    if (currentGameDay === 1 && gameDate > currentDate) currentGameDay = gameDay;
  })
  return currentGameDay;
}

export default Schedule;