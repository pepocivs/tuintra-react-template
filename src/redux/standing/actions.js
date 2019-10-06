import types from "./types";

const fetchStanding = competitionId => ({
  type: types.FETCH_STANDING,
  payload: { competitionId }
});

const fetchStandingSuccess = data => ({
  type: types.FETCH_STANDING_SUCCESS,
  payload: { data }
});

const fetchStandingFailure = error => ({
  type: types.FETCH_STANDING_FAILURE,
  payload: { error }
});

const actions = {
  fetchStanding,
  fetchStandingSuccess,
  fetchStandingFailure
};

export default actions;
