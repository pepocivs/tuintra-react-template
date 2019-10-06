import types from "./types";

const fetchPages = pageId => ({
  type: types.FETCH_PAGES,
  payload: { pageId }
});

const fetchPagesSuccess = data => ({
  type: types.FETCH_PAGES_SUCCESS,
  payload: { data }
});

const fetchPagesFailure = error => ({
  type: types.FETCH_PAGES_FAILURE,
  payload: { error }
});

const actions = {
  fetchPages,
  fetchPagesSuccess,
  fetchPagesFailure
};

export default actions;
