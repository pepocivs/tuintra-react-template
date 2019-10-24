import React, { useEffect } from "react";

/** Custom Components */
import Loading from "components/Containers/Loading";
import Team from "components/Teams/Team";
import TeamList from "components/Teams/TeamList";

function TeamsContainer({ match, fetchTeams, teams = []}) {
  const teamId = match.params.id;
  useEffect(() => {
    fetchTeams(teamId);
  }, [fetchTeams, teamId]);
  if (!teams.ready) return <Loading />;
  return (!!teamId)
    ? <Team selectedTeam={teams.data[0]} />
    : <TeamList teams={teams.data} />;
}

export default TeamsContainer;
