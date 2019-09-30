import { combineReducers } from "redux";
// Reducers
import clubData from "redux/clubInfo/reducer";
import links from "redux/links/reducer";
import teams from "redux/teams/reducer";

const rootReducer = combineReducers({
  clubData,
  links,
  teams,
});

export default rootReducer;
