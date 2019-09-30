import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getTeams = state => get(state, "teams.data");
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
