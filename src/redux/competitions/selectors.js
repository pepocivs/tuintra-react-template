import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const filterCompetitions = (ownCompetitions) => {
  if (Object.keys(ownCompetitions).length === 0) return {};
  return ownCompetitions
    .filter(competition => (
      competition.teams.length > 0 && 
      competition.teams.filter(team => team.isTeamClub).length > 0)
    );
}


const getCompetitions = state => get(state, "competitions.data");
const getCompetitionsLoading = state => get(state, "competitions.loading");
const getCompetitionsReady = state => get(state, "competitions.ready");
const getCompetitionsError = state => get(state, "competitions.error");
const getCompetitionsHasError = createSelector(
  getCompetitionsError,
  error => !isEmpty(error)
);
const getOwnCompetitions = createSelector(
  getCompetitions,
  ownCompetitions => filterCompetitions(ownCompetitions)
);


export {
  getCompetitions,
  getOwnCompetitions,
  getCompetitionsLoading,
  getCompetitionsReady,
  getCompetitionsError,
  getCompetitionsHasError
};
