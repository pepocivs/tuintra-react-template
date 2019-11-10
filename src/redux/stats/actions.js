import types from "./types";

const fetchStats = teamCompetitionId => ({
  type: types.FETCH_STATS,
  payload: { teamCompetitionId }
});

const fetchStatsSuccess = data => ({
  type: types.FETCH_STATS_SUCCESS,
  payload: { data }
});

const fetchStatsFailure = error => ({
  type: types.FETCH_STATS_FAILURE,
  payload: { error }
});

const actions = {
  fetchStats,
  fetchStatsSuccess,
  fetchStatsFailure
};

export default actions;
