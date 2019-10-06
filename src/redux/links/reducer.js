import types from "./types";
import formatter from "./formatter";

const initialState = {
  data: {},
  loading: false,
  ready: false,
  error: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_LINKS: {
      return {
        ...initialState,
        loading: true
      };
    }
    case types.FETCH_LINKS_SUCCESS: {
      return {
        loading: false,
        ready: true,
        data: formatter(payload.data)
      };
    }
    case types.FETCH_LINKS_FAILURE: {
      return {
        loading: false,
        error: payload.error
      };
    }
    default:
      return state;
  }
};

export default reducer;
