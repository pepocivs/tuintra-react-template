import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getPages = state => get(state, "pages.data[0]");
const getPagesLoading = state => get(state, "pages.loading");
const getPagesReady = state => get(state, "pages.ready");
const getPagesError = state => get(state, "pages.error");
const getPagesHasError = createSelector(
  getPagesError,
  error => !isEmpty(error)
);


export {
  getPages,
  getPagesLoading,
  getPagesReady,
  getPagesError,
  getPagesHasError
};
