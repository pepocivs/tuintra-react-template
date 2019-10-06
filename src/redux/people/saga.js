import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchPeople from "./api";

export function* fetchPeopleSaga() {
  try {
    const directive = yield call(fetchPeople);
    yield put(actions.fetchPeopleSuccess(directive.data));
  } catch (e) {
    yield put(actions.fetchPeopleFailure(e.message));
  }
}

export function* watchFetchPeople() {
  yield takeEvery(types.FETCH_PEOPLE, fetchPeopleSaga);
}
