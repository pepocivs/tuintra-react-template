import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";
import { sortBy, sortByArray } from "../../helpers/sortBy";

const sortTeams = (teams) => {
  if (Object.keys(teams).length === 0) return {};
  const categoryIdPriority = [9, 11, 10, 8, 7, 6, 5, 4, 3, 2, 1];
  sortBy(teams, 'teamName');
  sortBy(teams, 'letra');
  sortBy(teams, 'genderId');
  sortByArray(teams, 'categoryId', categoryIdPriority);
  return teams;
}

const getTeams = state => sortTeams(get(state, "teams.data"));
const getTeamsLoading = state => get(state, "teams.loading");
const getTeamsReady = state => get(state, "teams.ready");
const getTeamsError = state => get(state, "teams.error");
const getTeamsHasError = createSelector(
  getTeamsError,
  error => !isEmpty(error)
);


export {
  getTeams,
  getTeamsLoading,
  getTeamsReady,
  getTeamsError,
  getTeamsHasError
};
