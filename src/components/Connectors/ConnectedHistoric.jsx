import { connect } from "react-redux";

import Historic from "components/Containers/HistoricContainer";

/** ACTIONS */
import actionsHistoric from "../../redux/historic/actions";

/** SELECTORS */
import {
  getHistoric,
  getHistoricLoading,
  getHistoricReady,
  getHistoricError,
  getHistoricHasError
} from "../../redux/historic/selectors";


const mapStateToProps = (state, props) => ({
  historic: {
    data: getHistoric(state),
    loading: getHistoricLoading(state),
    ready: getHistoricReady(state),
    error: getHistoricError(state),
    hasError: getHistoricHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchHistoric: () => dispatch(actionsHistoric.fetchHistoric()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Historic);