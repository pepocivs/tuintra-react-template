import React, { useEffect } from "react";

/** Custom Components */
import Loading from "components/Containers/Loading";
import Competition from "components/Competition/Competition";
import CompetitionList from "components/Competition/CompetitionList";

/** Helpers */
import checkProperty from "helpers/checkProperty";

function CompetitionsContainer(props) {
  const {
    match,
    fetchCompetitions,
    fetchCalendar,
    fetchStanding,
    competitions,
    calendar,
    standing
  } = props;
  const competitionId = match.params.id;
  useEffect(() => {
    fetchCompetitions();
    if (competitionId) {
      fetchCalendar({competitionId});
      fetchStanding(competitionId);
    }
  }, [fetchCompetitions, fetchCalendar, fetchStanding, competitionId]);

  if (!competitions.ready) return <Loading />;

  if (!!competitionId && checkProperty('ready', props, ['calendar', 'standing'])) {
    return ( 
      <Competition 
        selectedCompetition={competitions.data[0]} 
        selectedCalendar={calendar.data}
        selectedStanding={standing.data}
      />
    )
  } else if (!competitionId) {
    return <CompetitionList competitions={competitions.data} />;
  } else {
    return null;
  }
}

export default CompetitionsContainer;