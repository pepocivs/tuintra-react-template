import types from "./types";

const fetchNews = newSlug => ({
  type: types.FETCH_NEWS,
  payload: { newSlug }
});

const fetchNewsSuccess = data => ({
  type: types.FETCH_NEWS_SUCCESS,
  payload: { data }
});

const fetchNewsFailure = error => ({
  type: types.FETCH_NEWS_FAILURE,
  payload: { error }
});

const actions = {
  fetchNews,
  fetchNewsSuccess,
  fetchNewsFailure
};

export default actions;
