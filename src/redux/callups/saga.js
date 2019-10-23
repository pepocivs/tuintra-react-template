import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchCallups from "./api";

export function* fetchCallupsSaga({ payload: { teamId } }) {
  try {
    const standing = yield call(fetchCallups, teamId);
    yield put(actions.fetchCallupsSuccess(standing.data));
  } catch (e) {
    yield put(actions.fetchCallupsFailure(e.message));
  }
}

export function* watchFetchCallups() {
  yield takeEvery(types.FETCH_CALLUPS, fetchCallupsSaga);
}
