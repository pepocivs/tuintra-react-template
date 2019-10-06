import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getHistoric = state => get(state, "historic.data");
const getHistoricLoading = state => get(state, "historic.loading");
const getHistoricReady = state => get(state, "historic.ready");
const getHistoricError = state => get(state, "historic.error");
const getHistoricHasError = createSelector(
  getHistoricError,
  error => !isEmpty(error)
);


export {
  getHistoric,
  getHistoricLoading,
  getHistoricReady,
  getHistoricError,
  getHistoricHasError
};
