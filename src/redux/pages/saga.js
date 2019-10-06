import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchPages from "./api";

export function* fetchPagesSaga({ payload: { pageId } }) {
  try {
    const pages = yield call(fetchPages, pageId);
    yield put(actions.fetchPagesSuccess(pages.data));
  } catch (e) {
    yield put(actions.fetchPagesFailure(e.message));
  }
}

export function* watchFetchPages() {
  yield takeEvery(types.FETCH_PAGES, fetchPagesSaga);
}
