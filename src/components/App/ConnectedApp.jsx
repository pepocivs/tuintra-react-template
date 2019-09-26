import { connect } from "react-redux";

import App from "./App";

import actionsClubInfo from "../../redux/clubInfo/actions";
import {
  getClubData,
  getClubDataLoading,
  getClubDataError,
  getClubDataHasError
} from "../../redux/clubInfo/selectors";

const mapStateToProps = (state, props) => ({
  clubInfo: {
    data: getClubData(state),
    loading: getClubDataLoading(state),
    error: getClubDataError(state),
    hasError: getClubDataHasError(state),
  }
});

const mapDispatchToProps = dispatch => ({
  fetchClubData: () => dispatch(actionsClubInfo.fetchClubData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);