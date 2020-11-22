import { connect } from "react-redux";

import Streams from "components/Containers/StreamsContainer";

/** ACTIONS */
import actionsStreams from "../../redux/streams/actions";

/** SELECTORS */
import {
  getStreams,
  getStreamsLoading,
  getStreamsReady,
  getStreamsError,
  getStreamsHasError
} from "../../redux/streams/selectors";


const mapStateToProps = (state, props) => ({
  streams: {
    data: getStreams(state),
    loading: getStreamsLoading(state),
    ready: getStreamsReady(state),
    error: getStreamsError(state),
    hasError: getStreamsHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchStreams: () => dispatch(actionsStreams.fetchStreams()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Streams);