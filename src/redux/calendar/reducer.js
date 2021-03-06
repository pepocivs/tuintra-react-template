import types from "./types";

const initialState = {
  data: {},
  loading: false,
  ready: false,
  error: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CALENDAR: {
      return {
        ...initialState,
        loading: true
      };
    }
    case types.FETCH_CALENDAR_SUCCESS: {
      return {
        loading: false,
        ready: true,
        data: payload.data
      };
    }
    case types.FETCH_CALENDAR_FAILURE: {
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
