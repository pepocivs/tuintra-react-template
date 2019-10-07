import { connect } from "react-redux";

import Contact from "components/Containers/ContactContainer";

/** SELECTORS */
import {
  getClubData,
  getClubDataLoading,
  getClubDataReady,
  getClubDataError,
  getClubDataHasError
} from "../../redux/clubInfo/selectors";


const mapStateToProps = (state, props) => ({
  clubInfo: {
    data: getClubData(state),
    loading: getClubDataLoading(state),
    ready: getClubDataReady(state),
    error: getClubDataError(state),
    hasError: getClubDataHasError(state)
  },
});

export default connect(
  mapStateToProps
)(Contact);