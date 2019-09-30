import types from "./types";

const fetchLinks = () => ({
  type: types.FETCH_LINKS
});

const fetchLinksSuccess = data => ({
  type: types.FETCH_LINKS_SUCCESS,
  payload: { data }
});

const fetchLinksFailure = error => ({
  type: types.FETCH_LINKS_FAILURE,
  payload: { error }
});

const actions = {
  fetchLinks,
  fetchLinksSuccess,
  fetchLinksFailure
};

export default actions;
