import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getStreams = state => get(state, "streams.data");
const getStreamsLoading = state => get(state, "streams.loading");
const getStreamsReady = state => get(state, "streams.ready");
const getStreamsError = state => get(state, "streams.error");
const getStreamsHasError = createSelector(
  getStreamsError,
  error => !isEmpty(error)
);

export {
  getStreams,
  getStreamsLoading,
  getStreamsReady,
  getStreamsError,
  getStreamsHasError
};
