import { connect } from "react-redux";

import Teams from "components/Containers/TeamsContainer";

/** ACTIONS */
import actionsTeams from "../../redux/teams/actions";

/** SELECTORS */
import {
  getTeams,
  getTeamsLoading,
  getTeamsReady,
  getTeamsError,
  getTeamsHasError
} from "../../redux/teams/selectors";


const mapStateToProps = (state, props) => ({
  teams: {
    data: getTeams(state),
    loading: getTeamsLoading(state),
    ready: getTeamsReady(state),
    error: getTeamsError(state),
    hasError: getTeamsHasError()
  },
});

const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(actionsTeams.fetchTeams()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);