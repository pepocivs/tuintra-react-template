import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchDirective from "./api";

export function* fetchDirectiveSaga() {
  try {
    const directive = yield call(fetchDirective);
    yield put(actions.fetchDirectiveSuccess(directive.data));
  } catch (e) {
    yield put(actions.fetchDirectiveFailure(e.message));
  }
}

export function* watchFetchDirective() {
  yield takeEvery(types.FETCH_DIRECTIVE, fetchDirectiveSaga);
}
