import React, { useEffect } from "react";

/** Custom Components */
import Team from "components/Teams/Team";
import TeamList from "components/Teams/TeamList";

function TeamsContainer(props) {
  const { match, teams, selectedTeam, fetchTeams } = props;
  const teamId = match.params.id;
  useEffect(() => {
    debugger;
    fetchTeams(teamId);
  }, [fetchTeams, teamId]);

  if (!teams.ready) return null;
  return (!!teamId)
    ? <Team selectedTeam={selectedTeam} />
    : <TeamList teams={teams} />;
}

export default TeamsContainer;
