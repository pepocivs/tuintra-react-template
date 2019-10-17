import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const sortBy = (array, key, sort = 1) => {
  return array.sort((a, b) => (a[key] > b[key]) ? (1 * sort) : (a[key] < b[key]) ? (-1 * sort) : 0);
}

const sortCompetitions = (competitions) => {
  if (Object.keys(competitions).length === 0) return {};
  const sportSorted = sortBy(competitions, 'sportId');
  const genderSorted = sortBy(sportSorted, 'genderId');
  const categorySorted = sortBy(genderSorted, 'categoryId', -1);
  return categorySorted;
}

const filterCompetitions = (ownCompetitions) => {
  if (Object.keys(ownCompetitions).length === 0) return {};
  return ownCompetitions
    .filter(competition => (
      competition.teams.length > 0 && 
      competition.teams.filter(team => team.isTeamClub).length > 0)
    );
}


const getCompetitions = state => sortCompetitions(get(state, "competitions.data"));
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
