import types from "./types";

const fetchDirective = () => ({
  type: types.FETCH_DIRECTIVE
});

const fetchDirectiveSuccess = data => ({
  type: types.FETCH_DIRECTIVE_SUCCESS,
  payload: { data }
});

const fetchDirectiveFailure = error => ({
  type: types.FETCH_DIRECTIVE_FAILURE,
  payload: { error }
});

const actions = {
  fetchDirective,
  fetchDirectiveSuccess,
  fetchDirectiveFailure
};

export default actions;
