import React from "react";

/** Custom Components */
import TeamsExpositor from "components/TeamsExpositor/TeamsExpositor";
import Schedule from "components/Schedule/Schedule";
import Standings from "components/Standings/Standings";

function CompetitionContainer({selectedCompetition, selectedCalendar, selectedStanding}) {
  return (
    <>
      <h2>{selectedCompetition.competitionName}</h2>
      <TeamsExpositor teams={selectedCompetition.teams}></TeamsExpositor>
      <Schedule calendar={selectedCalendar}></Schedule>
      <br />
      <Standings standing={selectedStanding}></Standings>
    </>
  )
}

export default CompetitionContainer;