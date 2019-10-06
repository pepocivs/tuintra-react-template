import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchHistoric from "./api";

export function* fetchHistoricSaga() {
  try {
    const historic = yield call(fetchHistoric);
    yield put(actions.fetchHistoricSuccess(historic.data));
  } catch (e) {
    yield put(actions.fetchHistoricFailure(e.message));
  }
}

export function* watchFetchHistoric() {
  yield takeEvery(types.FETCH_HISTORIC, fetchHistoricSaga);
}
