import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getLinks = state => get(state, "links.data");
const getLinksLoading = state => get(state, "links.loading");
const getLinksReady = state => get(state, "links.ready");
const getLinksError = state => get(state, "links.error");
const getLinksHasError = createSelector(
  getLinksError,
  error => !isEmpty(error)
);


export {
  getLinks,
  getLinksLoading,
  getLinksReady,
  getLinksError,
  getLinksHasError
};
