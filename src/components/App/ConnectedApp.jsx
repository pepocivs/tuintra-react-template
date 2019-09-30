import { connect } from "react-redux";

import App from "./App";

/** ACTIONS */
import actionsClubInfo from "../../redux/clubInfo/actions";
import actionsLinks from "../../redux/links/actions";
import actionsTeams from "../../redux/teams/actions";

/** SELECTORS */
import {
  getClubData,
  getClubDataLoading,
  getClubDataReady,
  getClubDataError,
  getClubDataHasError
} from "../../redux/clubInfo/selectors";
import {
  getLinks,
  getLinksLoading,
  getLinksReady,
  getLinksError,
  getLinksHasError
} from "../../redux/links/selectors";
import {
  getTeams,
  getTeamsLoading,
  getTeamsReady,
  getTeamsError,
  getTeamsHasError
} from "../../redux/teams/selectors";

const mapStateToProps = (state, props) => ({
  clubInfo: {
    data: (getClubData(state)) ? getClubData(state).clubInfo : {},
    loading: getClubDataLoading(state),
    ready: getClubDataReady(state),
    error: getClubDataError(state),
    hasError: getClubDataHasError()
  },
  menu: (getClubData(state)) ? getClubData(state).menu : [],
  widgets: (getClubData(state)) ? getClubData(state).widgets : [],
  links: {
    data: getLinks(state),
    loading: getLinksLoading(state),
    ready: getLinksReady(state),
    error: getLinksError(state),
    hasError: getLinksHasError()
  },
  teams: {
    data: getTeams(state),
    loading: getTeamsLoading(state),
    ready: getTeamsReady(state),
    error: getTeamsError(state),
    hasError: getTeamsHasError()
  },
});

const mapDispatchToProps = dispatch => ({
  fetchClubData: () => dispatch(actionsClubInfo.fetchClubData()),
  fetchLinks: () => dispatch(actionsLinks.fetchLinks()),
  fetchTeams: () => dispatch(actionsTeams.fetchTeams()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);