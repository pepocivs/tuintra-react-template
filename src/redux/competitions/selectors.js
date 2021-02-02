import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";
import { sortBy, sortByArray } from "../../helpers/sortBy";

const sortCompetitions = (competitions) => {
  const categoryIdPriority = [8, 10, 9, 7, 6, 5, 4, 3, 2, 1];
  const competitionPriority = ['Honor', 'España', 'Liga', 'Copa', 'Sector'];
  const scopePriority = ['Mundial', 'Internacional', 'Nacional', 'Territorial', 'Regional', 'Provincial', 'Local', 'Escolar'];
  if (Object.keys(competitions).length === 0) return {};
  sortBy(competitions, 'sportId');
  sortBy(competitions, 'genderId');
  sortByArray(competitions, 'competitionName', competitionPriority);
  sortByArray(competitions, 'categoryId', categoryIdPriority);
  sortByArray(competitions, 'scope', scopePriority);
  return competitions;
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
