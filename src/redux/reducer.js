import { combineReducers } from "redux";
// Reducers
import clubData from "redux/clubInfo/reducer";
import links from "redux/links/reducer";
import teams from "redux/teams/reducer";
import news from "redux/news/reducer";

const rootReducer = combineReducers({
  clubData,
  links,
  teams,
  news,
});

export default rootReducer;
