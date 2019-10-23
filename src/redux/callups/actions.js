import types from "./types";

const fetchCallups = teamId => ({
  type: types.FETCH_CALLUPS,
  payload: { teamId }
});

const fetchCallupsSuccess = data => ({
  type: types.FETCH_CALLUPS_SUCCESS,
  payload: { data }
});

const fetchCallupsFailure = error => ({
  type: types.FETCH_CALLUPS_FAILURE,
  payload: { error }
});

const actions = {
  fetchCallups,
  fetchCallupsSuccess,
  fetchCallupsFailure
};

export default actions;
