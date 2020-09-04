import React from "react";

/** Custom Components */
import NotFound from "components/Containers/NotFound";
import CompetitionDetail from "./CompetitionDetail";

const geyStandingKey = (standing, group) => {
  if (!standing || Object.keys(standing).length === 0) return 'no-standing';
  if (group === 'unique') return Object.keys(standing)[0];
  return Object.keys(standing).filter(key => key.includes('-group-'+group.toLowerCase())).pop();
}

const getLastGameDay = (selectedStanding, standingKey) => {
  return (selectedStanding[standingKey])
    ? Math.max.apply(null, Object.keys(selectedStanding[standingKey].standings))
    : 0;
}

const getGroupTeams = (allTeams, calendar) => {
  const teamIds = [...new Set(Object.values(calendar).flat().map(team => [ team.local._id, team.away._id]).flat())];
  return allTeams.filter(team => ~teamIds.indexOf(parseInt(team._id)));
}

function Competition({selectedCompetition, selectedCalendar, selectedStanding}) {
  if (!selectedCompetition) return <NotFound />;
  return Object.keys(selectedCalendar).map(group => {
    const groupName = (group === 'unique') ? '' : ` - Grupo ${group}`;
    const standingKey = geyStandingKey(selectedStanding, group);
    if (!standingKey) return null;
    const currentGameDay = getLastGameDay(selectedStanding, standingKey);
    const teams = (group === 'unique') 
      ? selectedCompetition.teams
      : getGroupTeams(selectedCompetition.teams, selectedCalendar[group]);
    const standings = (selectedStanding[standingKey] && selectedStanding[standingKey].standings)
      ? selectedStanding[standingKey].standings[currentGameDay]
      : [];
    return (
      <CompetitionDetail
        key={standingKey}
        title={`${selectedCompetition.competitionName}${groupName}`}
        shadow={`${selectedCompetition.category} ${selectedCompetition.gender}`}
        teams={teams}
        calendar={selectedCalendar[group]}
        standing={standings}
      />
    )
  })
}

export default Competition;