import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";
import { sortBy } from "../../helpers/sortBy";

const sortTeams = (teams) => {
  if (Object.keys(teams).length === 0) return {};
  sortBy(teams, 'letra');
  sortBy(teams, 'genderId');
  sortBy(teams, 'categoryId', -1);
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
