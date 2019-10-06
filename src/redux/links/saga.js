import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchLinks from "./api";

export function* fetchLinksSaga() {
  try {
    const links = yield call(fetchLinks);
    yield put(actions.fetchLinksSuccess(links.data));
  } catch (e) {
    yield put(actions.fetchLinksFailure(e.message));
  }
}

export function* watchFetchLinks() {
  yield takeEvery(types.FETCH_LINKS, fetchLinksSaga);
}
