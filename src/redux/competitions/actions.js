import types from "./types";

const fetchCompetitions = competitionId => ({
  type: types.FETCH_COMPETITIONS,
  payload: { competitionId }
});

const fetchCompetitionsSuccess = data => ({
  type: types.FETCH_COMPETITIONS_SUCCESS,
  payload: { data }
});

const fetchCompetitionsFailure = error => ({
  type: types.FETCH_COMPETITIONS_FAILURE,
  payload: { error }
});

const actions = {
  fetchCompetitions,
  fetchCompetitionsSuccess,
  fetchCompetitionsFailure
};

export default actions;
