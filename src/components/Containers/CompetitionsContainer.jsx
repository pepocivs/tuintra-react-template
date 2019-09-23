import React from "react";

/** Custom Components */
import Competition from "components/Competition/Competition";
import CompetitionList from "components/Competition/CompetitionList";


function CompetitionsContainer({match, competitions, selectedCompetition, selectedCalendar, selectedStanding}) {
  const competitionId = match.params.id;
  return (!!competitionId)
    ? <Competition 
      selectedCompetition={selectedCompetition} 
      selectedCalendar={selectedCalendar}
      selectedStanding={selectedStanding} />
    : <CompetitionList competitions={competitions} />;
}

export default CompetitionsContainer;