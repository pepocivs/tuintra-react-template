import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getCallups = state => get(state, "callups.data");
const getCallupsLoading = state => get(state, "callups.loading");
const getCallupsReady = state => get(state, "callups.ready");
const getCallupsError = state => get(state, "callups.error");
const getCallupsHasError = createSelector(
  getCallupsError,
  error => !isEmpty(error)
);


export {
  getCallups,
  getCallupsLoading,
  getCallupsReady,
  getCallupsError,
  getCallupsHasError
};
