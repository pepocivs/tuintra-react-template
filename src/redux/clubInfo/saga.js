import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchClubInfo from "./api";

export function* fetchClubDataSaga() {
  try {
    const clubInfo = yield call(fetchClubInfo);
    yield put(actions.fetchClubDataSuccess(clubInfo.data));
  } catch (e) {
    yield put(actions.fetchClubDataFailure(e.message));
  }
}

export function* watchFetchClubInfo() {
  yield takeEvery(types.FETCH_CLUBDATA, fetchClubDataSaga);
}
