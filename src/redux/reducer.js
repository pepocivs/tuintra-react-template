import { combineReducers } from "redux";
// Reducers
import clubData from "redux/clubInfo/reducer";
import links from "redux/links/reducer";
import teams from "redux/teams/reducer";
import news from "redux/news/reducer";
import competitions from "redux/competitions/reducer";
import calendar from "redux/calendar/reducer";
import standing from "redux/standing/reducer";

const rootReducer = combineReducers({
  clubData,
  links,
  teams,
  news,
  competitions,
  calendar,
  standing,
});

export default rootReducer;
