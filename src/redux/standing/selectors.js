import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getStanding = state => get(state, "standing.data");
const getStandingLoading = state => get(state, "standing.loading");
const getStandingReady = state => get(state, "standing.ready");
const getStandingError = state => get(state, "standing.error");
const getStandingHasError = createSelector(
  getStandingError,
  error => !isEmpty(error)
);


export {
  getStanding,
  getStandingLoading,
  getStandingReady,
  getStandingError,
  getStandingHasError
};
