import { all } from "redux-saga/effects";

// Common Sagas
import { watchFetchClubInfo } from "./clubInfo/saga";
import { watchFetchLinks } from "./links/saga";
import { watchFetchTeams } from "./teams/saga";
import { watchFetchNews } from "./news/saga";
import { watchFetchCompetitions } from "./competitions/saga";
import { watchFetchCalendar } from "./calendar/saga";
import { watchFetchStanding } from "./standing/saga";

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchClubInfo(),
    watchFetchLinks(),
    watchFetchTeams(),
    watchFetchNews(),
    watchFetchCompetitions(),
    watchFetchCalendar(),
    watchFetchStanding()
  ]);
};

export default rootSaga;
