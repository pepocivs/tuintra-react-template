import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getCompetitions = state => get(state, "competitions.data");
const getCompetitionsLoading = state => get(state, "competitions.loading");
const getCompetitionsReady = state => get(state, "competitions.ready");
const getCompetitionsError = state => get(state, "competitions.error");
const getCompetitionsHasError = createSelector(
  getCompetitionsError,
  error => !isEmpty(error)
);


export {
  getCompetitions,
  getCompetitionsLoading,
  getCompetitionsReady,
  getCompetitionsError,
  getCompetitionsHasError
};
