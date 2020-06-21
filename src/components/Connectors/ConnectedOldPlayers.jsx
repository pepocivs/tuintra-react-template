import { connect } from "react-redux";

import People from "components/Containers/OldPlayersContainer";

/** ACTIONS */
import actionsPeople from "../../redux/people/actions";

/** SELECTORS */
import {
  getOldPlayers,
  getPeopleLoading,
  getPeopleReady,
  getPeopleError,
  getPeopleHasError
} from "../../redux/people/selectors";


const mapStateToProps = (state, props) => ({
  oldPlayers: {
    data: getOldPlayers(state),
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