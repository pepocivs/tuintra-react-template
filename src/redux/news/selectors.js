import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getNews = state => get(state, "news.data");
const getNewsLoading = state => get(state, "news.loading");
const getNewsReady = state => get(state, "news.ready");
const getNewsError = state => get(state, "news.error");
const getNewsHasError = createSelector(
  getNewsError,
  error => !isEmpty(error)
);


export {
  getNews,
  getNewsLoading,
  getNewsReady,
  getNewsError,
  getNewsHasError
};
