import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchStanding from "./api";

export function* fetchStandingSaga({ payload: { competitionId } }) {
  try {
    const standing = yield call(fetchStanding, competitionId);
    yield put(actions.fetchStandingSuccess(standing.data));
  } catch (e) {
    yield put(actions.fetchStandingFailure(e.message));
  }
}

export function* watchFetchStanding() {
  yield takeEvery(types.FETCH_STANDING, fetchStandingSaga);
}
