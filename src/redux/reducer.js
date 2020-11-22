import { combineReducers } from "redux";
// Reducers
import clubData from "redux/clubInfo/reducer";
import links from "redux/links/reducer";
import teams from "redux/teams/reducer";
import streams from "redux/streams/reducer";
import news from "redux/news/reducer";
import competitions from "redux/competitions/reducer";
import calendar from "redux/calendar/reducer";
import standing from "redux/standing/reducer";
import people from "redux/people/reducer";
import historic from "redux/historic/reducer";
import pages from "redux/pages/reducer";
import documents from "redux/documents/reducer";
import callups from "redux/callups/reducer";
import stats from "redux/stats/reducer";

const rootReducer = combineReducers({
  clubData,
  links,
  teams,
  streams,
  news,
  competitions,
  calendar,
  standing,
  people,
  historic,
  pages,
  documents,
  callups,
  stats,
});

export default rootReducer;
