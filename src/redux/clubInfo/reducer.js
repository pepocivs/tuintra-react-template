import types from "./types";
import formatter from "./formatter";

const initialState = {
  data: {},
  loading: false,
  error: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CLUBDATA: {
      return {
        ...initialState,
        loading: true
      };
    }
    case types.FETCH_CLUBDATA_SUCCESS: {
      return {
        loading: false,
        data: formatter(payload.data)
      };
    }
    case types.FETCH_CLUBDATA_FAILURE: {
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
