import types from "./types";

const fetchTeams = () => ({
  type: types.FETCH_TEAMS
});

const fetchTeamsSuccess = data => ({
  type: types.FETCH_TEAMS_SUCCESS,
  payload: { data }
});

const fetchTeamsFailure = error => ({
  type: types.FETCH_TEAMS_FAILURE,
  payload: { error }
});

const actions = {
  fetchTeams,
  fetchTeamsSuccess,
  fetchTeamsFailure
};

export default actions;
