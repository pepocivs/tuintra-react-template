import { all } from "redux-saga/effects";

// Common Sagas
import { watchFetchClubInfo } from "./clubInfo/saga";
import { watchFetchLinks } from "./links/saga";
import { watchFetchTeams } from "./teams/saga";

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchClubInfo(),
    watchFetchLinks(),
    watchFetchTeams()
  ]);
};

export default rootSaga;
