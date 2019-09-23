import React from "react";

/** Custom Components */
import Team from "components/Teams/Team";
import TeamList from "components/Teams/TeamList";

function TeamsContainer({ match, teams, selectedTeam }) {
	const teamId = match.params.id;
  return (!!teamId)
    ? <Team selectedTeam={selectedTeam} />
    : <TeamList teams={teams} />;
}

export default TeamsContainer;
