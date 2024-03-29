import { all } from "redux-saga/effects";

// Common Sagas
import { watchFetchClubInfo } from "./clubInfo/saga";
import { watchFetchLinks } from "./links/saga";
import { watchFetchTeams } from "./teams/saga";
import { watchFetchStreams } from "./streams/saga";
import { watchFetchShop } from "./shop/saga";
import { watchFetchNews } from "./news/saga";
import { watchFetchCompetitions } from "./competitions/saga";
import { watchFetchCalendar } from "./calendar/saga";
import { watchFetchStanding } from "./standing/saga";
import { watchFetchPeople } from "./people/saga";
import { watchFetchHistoric } from "./historic/saga";
import { watchFetchPages } from "./pages/saga";
import { watchFetchDocuments } from "./documents/saga";
import { watchFetchCallups } from "./callups/saga";
import { watchFetchStats } from "./stats/saga";

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchClubInfo(),
    watchFetchLinks(),
    watchFetchTeams(),
    watchFetchStreams(),
    watchFetchShop(),
    watchFetchNews(),
    watchFetchCompetitions(),
    watchFetchCalendar(),
    watchFetchStanding(),
    watchFetchPeople(),
    watchFetchHistoric(),
    watchFetchPages(),
    watchFetchDocuments(),
    watchFetchCallups(),
    watchFetchStats()
  ]);
};

export default rootSaga;
