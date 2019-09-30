import { all } from "redux-saga/effects";

// Common Sagas
import { watchFetchClubInfo } from "./clubInfo/saga";
import { watchFetchLinks } from "./links/saga";
import { watchFetchTeams } from "./teams/saga";
import { watchFetchNews } from "./news/saga";

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchClubInfo(),
    watchFetchLinks(),
    watchFetchTeams(),
    watchFetchNews()
  ]);
};

export default rootSaga;
