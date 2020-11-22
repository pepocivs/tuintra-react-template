import types from "./types";

const fetchStreams = () => ({
  type: types.FETCH_STREAMS
});

const fetchStreamsSuccess = data => ({
  type: types.FETCH_STREAMS_SUCCESS,
  payload: { data }
});

const fetchStreamsFailure = error => ({
  type: types.FETCH_STREAMS_FAILURE,
  payload: { error }
});

const actions = {
  fetchStreams,
  fetchStreamsSuccess,
  fetchStreamsFailure
};

export default actions;
