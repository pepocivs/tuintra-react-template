import React from "react";

/** Custom Components */
import Title from "components/UI/Title/Title";
import TeamsExpositor from "components/TeamsExpositor/TeamsExpositor";
import Schedule from "components/Schedule/Schedule";
import Standings from "components/Standings/Standings";

function Competition({selectedCompetition, selectedCalendar, selectedStanding}) {
  const standingInfo = Object.keys(selectedStanding)
    .filter(key => selectedStanding[key]._id === selectedCompetition._id)
    .map(key => selectedStanding[key])[0];
  return (
    <>
      <Title shadow={`${selectedCompetition.category} ${selectedCompetition.gender}`}>{selectedCompetition.competitionName}</Title>
      <TeamsExpositor teams={selectedCompetition.teams}></TeamsExpositor>
      <Schedule calendar={selectedCalendar}></Schedule>
      <br />
      <Standings standing={standingInfo}></Standings>
    </>
  )
}

export default Competition;