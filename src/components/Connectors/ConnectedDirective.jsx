import { connect } from "react-redux";

import People from "components/Containers/DirectiveContainer";

/** ACTIONS */
import actionsPeople from "../../redux/people/actions";

/** SELECTORS */
import {
  getDirective,
  getPeopleLoading,
  getPeopleReady,
  getPeopleError,
  getPeopleHasError
} from "../../redux/people/selectors";


const mapStateToProps = (state, props) => ({
  directive: {
    data: getDirective(state),
    loading: getPeopleLoading(state),
    ready: getPeopleReady(state),
    error: getPeopleError(state),
    hasError: getPeopleHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(actionsPeople.fetchPeople()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);