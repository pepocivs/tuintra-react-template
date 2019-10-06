import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getDirective = state => get(state, "directive.data");
const getDirectiveLoading = state => get(state, "directive.loading");
const getDirectiveReady = state => get(state, "directive.ready");
const getDirectiveError = state => get(state, "directive.error");
const getDirectiveHasError = createSelector(
  getDirectiveError,
  error => !isEmpty(error)
);


export {
  getDirective,
  getDirectiveLoading,
  getDirectiveReady,
  getDirectiveError,
  getDirectiveHasError
};
