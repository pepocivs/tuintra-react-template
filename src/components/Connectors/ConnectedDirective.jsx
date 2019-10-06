import { connect } from "react-redux";

import Directive from "components/Containers/DirectiveContainer";

/** ACTIONS */
import actionsDirective from "../../redux/directive/actions";

/** SELECTORS */
import {
  getDirective,
  getDirectiveLoading,
  getDirectiveReady,
  getDirectiveError,
  getDirectiveHasError
} from "../../redux/directive/selectors";


const mapStateToProps = (state, props) => ({
  directive: {
    data: getDirective(state),
    loading: getDirectiveLoading(state),
    ready: getDirectiveReady(state),
    error: getDirectiveError(state),
    hasError: getDirectiveHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchDirective: () => dispatch(actionsDirective.fetchDirective()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directive);