import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchNews from "./api";

export function* fetchNewsSaga() {
  try {
    const news = yield call(fetchNews);
    yield put(actions.fetchNewsSuccess(news.data));
  } catch (e) {
    yield put(actions.fetchNewsFailure(e.message));
  }
}

export function* watchFetchNews() {
  yield takeEvery(types.FETCH_NEWS, fetchNewsSaga);
}
