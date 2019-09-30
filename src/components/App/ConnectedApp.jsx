import { connect } from "react-redux";

import App from "./App";

/** ACTIONS */
import actionsClubInfo from "../../redux/clubInfo/actions";
import actionsLinks from "../../redux/links/actions";

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

const mapStateToProps = (state, props) => ({
  clubInfo: {
    data: (getClubData(state)) ? getClubData(state).clubInfo : {},
    loading: getClubDataLoading(state),
    ready: getClubDataReady(state),
    error: getClubDataError(state),
    hasError: getClubDataHasError(state)
  },
  menu: (getClubData(state)) ? getClubData(state).menu : [],
  widgets: (getClubData(state)) ? getClubData(state).widgets : [],
  links: {
    data: getLinks(state),
    loading: getLinksLoading(state),
    ready: getLinksReady(state),
    error: getLinksError(state),
    hasError: getLinksHasError(state)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchClubData: () => dispatch(actionsClubInfo.fetchClubData()),
  fetchLinks: () => dispatch(actionsLinks.fetchLinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);