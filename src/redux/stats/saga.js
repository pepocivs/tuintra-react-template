import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchStats from "./api";

export function* fetchStatsSaga({ payload: { teamCompetitionId } }) {
  try {
    const stats = yield call(fetchStats, teamCompetitionId);
    yield put(actions.fetchStatsSuccess(stats.data, teamCompetitionId));
  } catch (e) {
    yield put(actions.fetchStatsFailure(e.message));
  }
}

export function* watchFetchStats() {
  yield takeEvery(types.FETCH_STATS, fetchStatsSaga);
}
