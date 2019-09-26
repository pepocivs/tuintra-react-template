import { all } from "redux-saga/effects";

// Common Sagas
import { watchFetchClubInfo } from "./clubInfo/saga";

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchClubInfo()
  ]);
};

export default rootSaga;
