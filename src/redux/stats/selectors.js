import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getStats = state => get(state, "stats.data");
const getStatsLoading = state => get(state, "stats.loading");
const getStatsReady = state => get(state, "stats.ready");
const getStatsError = state => get(state, "stats.error");
const getStatsHasError = createSelector(
  getStatsError,
  error => !isEmpty(error)
);

export {
  getStats,
  getStatsLoading,
  getStatsReady,
  getStatsError,
  getStatsHasError
};
