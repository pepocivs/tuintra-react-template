import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchCompetitions from "./api";

export function* fetchCompetitionsSaga({ payload: { competitionId } }) {
  try {
    const teams = yield call(fetchCompetitions, competitionId);
    yield put(actions.fetchCompetitionsSuccess(teams.data));
  } catch (e) {
    yield put(actions.fetchCompetitionsFailure(e.message));
  }
}

export function* watchFetchCompetitions() {
  yield takeEvery(types.FETCH_COMPETITIONS, fetchCompetitionsSaga);
}
