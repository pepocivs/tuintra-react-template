import React from 'react'

/** Custom Components */
import ScheduleDay from "./ScheduleDay";

function Schedule({calendar}) {
  return (
    <>
      {Object.keys(calendar).map(gameDay => 
        <ScheduleDay key={gameDay} gameDay={gameDay} ScheduleDayBundle={calendar[gameDay]} />
      )}
    </>
  )
}

export default Schedule;