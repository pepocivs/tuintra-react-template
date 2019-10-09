import types from "./types";

const fetchCalendar = queryParams => ({
  type: types.FETCH_CALENDAR,
  payload: { queryParams }
});

const fetchCalendarSuccess = data => ({
  type: types.FETCH_CALENDAR_SUCCESS,
  payload: { data }
});

const fetchCalendarFailure = error => ({
  type: types.FETCH_CALENDAR_FAILURE,
  payload: { error }
});

const actions = {
  fetchCalendar,
  fetchCalendarSuccess,
  fetchCalendarFailure
};

export default actions;
