import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchTeams from "./api";

export function* fetchTeamsSaga() {
  try {
    const links = yield call(fetchTeams);
    yield put(actions.fetchTeamsSuccess(links.data));
  } catch (e) {
    yield put(actions.fetchTeamsFailure(e.message));
  }
}

export function* watchFetchTeams() {
  yield takeEvery(types.FETCH_TEAMS, fetchTeamsSaga);
}
