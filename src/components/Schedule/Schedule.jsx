import React from "react";

/** Custom Components */
import ScheduleDay from "./ScheduleDay";

function Schedule({calendar}) {
  const currentGameDay = getGameDay(calendar);
  return (
    <>
      {Object.keys(calendar).map(gameDay => 
        <ScheduleDay 
          key={`day${gameDay}`}
          collapsed={(currentGameDay !== gameDay)}
          gameDay={gameDay}
          scheduleDayBundle={calendar[gameDay]}
        />
      )}
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