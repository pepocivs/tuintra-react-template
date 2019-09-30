import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchTeams from "./api";

export function* fetchTeamsSaga({ payload: { teamId } }) {
  try {
    const teams = yield call(fetchTeams, teamId);
    yield put(actions.fetchTeamsSuccess(teams.data));
  } catch (e) {
    yield put(actions.fetchTeamsFailure(e.message));
  }
}

export function* watchFetchTeams() {
  yield takeEvery(types.FETCH_TEAMS, fetchTeamsSaga);
}
