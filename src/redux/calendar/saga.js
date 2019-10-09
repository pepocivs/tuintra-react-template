import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchCalendar from "./api";

export function* fetchCalendarSaga({ payload: { queryParams } }) {
  try {
    const calendar = yield call(fetchCalendar, queryParams);
    yield put(actions.fetchCalendarSuccess(calendar.data, queryParams));
  } catch (e) {
    yield put(actions.fetchCalendarFailure(e.message));
  }
}

export function* watchFetchCalendar() {
  yield takeEvery(types.FETCH_CALENDAR, fetchCalendarSaga);
}
