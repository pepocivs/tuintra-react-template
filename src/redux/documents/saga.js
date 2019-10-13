import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchDocuments from "./api";

export function* fetchDocumentsSaga() {
  try {
    const documents = yield call(fetchDocuments);
    yield put(actions.fetchDocumentsSuccess(documents.data));
  } catch (e) {
    yield put(actions.fetchDocumentsFailure(e.message));
  }
}

export function* watchFetchDocuments() {
  yield takeEvery(types.FETCH_DOCUMENTS, fetchDocumentsSaga);
}
