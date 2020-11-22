import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchStreams from "./api";

export function* fetchStreamsSaga() {
  try {
    const streams = yield call(fetchStreams);
    yield put(actions.fetchStreamsSuccess(streams.data));
  } catch (e) {
    yield put(actions.fetchStreamsFailure(e.message));
  }
}

export function* watchFetchStreams() {
  yield takeEvery(types.FETCH_STREAMS, fetchStreamsSaga);
}
