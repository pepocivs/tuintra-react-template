import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import fetchShop from "./api";

export function* fetchShopSaga() {
  try {
    const shop = yield call(fetchShop);
    yield put(actions.fetchShopSuccess(shop.data));
  } catch (e) {
    yield put(actions.fetchShopFailure(e.message));
  }
}

export function* watchFetchShop() {
  yield takeEvery(types.FETCH_SHOP, fetchShopSaga);
}
